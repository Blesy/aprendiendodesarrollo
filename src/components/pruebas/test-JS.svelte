<script>
  import { onMount } from 'svelte';
  import CodeMirror from 'svelte-codemirror-editor';
  import { oneDark } from '@codemirror/theme-one-dark';
  export let description = '';
  // Ahora initialCode es un objeto: { javascript: "...", python: "..." }
  export let initialCode = {};
  export let tests = [];
  export let functionName = 'miFuncion';
  // El lenguaje inicial será el primero disponible en initialCode
  export let language = Object.keys(initialCode)[0] || '';

  let code = initialCode[language] || '';
  let output = '';
  let success = false;
  let error = '';
  let extensions = [oneDark];

  // Lenguajes soportados según initialCode
  $: languages = Object.keys(initialCode).map(lang => ({
    label: lang.charAt(0).toUpperCase() + lang.slice(1),
    value: lang
  }));

  // Cambia el resaltado y el código según el lenguaje seleccionado
  async function setLanguage(lang) {
    if (lang === 'javascript') {
      const { javascript } = await import('@codemirror/lang-javascript');
      extensions = [javascript(), oneDark];
    } else if (lang === 'python') {
      const { python } = await import('@codemirror/lang-python');
      extensions = [python(), oneDark];
    }
    // Agrega más lenguajes aquí si lo necesitas
    code = initialCode[lang] || '';
  }

  // Inicializa el lenguaje al montar
  onMount(() => setLanguage(language));

  // Cambia el lenguaje y el resaltado al seleccionar otro
  async function handleLanguageChange(event) {
    language = event.target.value;
    await setLanguage(language);
  }

  async function runCode() {
    error = '';
    output = '';
    success = false;

    if (language === 'javascript') {
      try {
        let allPassed = true;
        let results = [];
        for (const { input, expected } of tests) {
          let result;
          let logs = [];
          const userFunction = new Function('input', 'console', `
            ${code}
            return ${functionName}(input);
          `);
          try {
            result = userFunction(input, {
              log: (...args) => logs.push(args.map(a => JSON.stringify(a)).join(' '))
            });
          } catch (e) {
            result = `Error: ${e.message}`;
            allPassed = false;
          }
          const passed = JSON.stringify(result) === JSON.stringify(expected);
          if (!passed) allPassed = false;
          results.push(
            `Input: ${JSON.stringify(input)}\n` +
            `Tu salida: ${JSON.stringify(result)}\n` +
            `Esperada: ${JSON.stringify(expected)}\n` +
            (logs.length ? `console.log:\n${logs.join('\n')}\n` : '') +
            (passed ? '✅ Correcto\n' : '❌ Incorrecto\n')
          );
        }
        output = results.join('\n');
        success = allPassed;
      } catch (e) {
        error = e.message;
      }
    } else if (language === 'python') {
      try {
        let allPassed = true;
        let outputText = '';
        for (const { input, expected } of tests) {
          const response = await fetch('http://localhost:8000/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              code,
              functionName,
              test: JSON.stringify(input)
            })
          });
          if (!response.ok) {
            throw new Error('Error en el servidor');
          }
          const data = await response.json();
          const result = data.result;
          const passed = JSON.stringify(result) === JSON.stringify(expected);
          if (!passed) allPassed = false;
          outputText += `Input: ${JSON.stringify(input)}\n` +
                        `Tu salida: ${JSON.stringify(result)}\n` +
                        `Esperada: ${JSON.stringify(expected)}\n` +
                        (passed ? '✅ Correcto\n\n' : '❌ Incorrecto\n\n');
          if (data.error) error = data.error;
        }
        output = outputText;
        success = allPassed;
      } catch (e) {
        error = e.message;
      }
    }
  }

  onMount(runCode);
</script>

<style>
  .salida {
    border: #d44c00 solid 3px;
    border-radius: 1%;
    margin-top: 1rem;
    padding: 0.5rem;
    background: #222;
    color: #eee;
  }
  button {
    margin: 10px 0;
    background-color: #f25900;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
    font-size: 1rem;
  }
  button:active {
    background-color: #d44c00;
  }
  .select-lang {
    margin-bottom: 1rem;
    background: #222;
    color: #eee;
    border: 1px solid #555;
    border-radius: 4px;
    padding: 0.3rem 0.8rem;
    font-size: 1rem;
  }
</style>

<h2>Reto</h2>
<p>{description}</p>

<label for="language-select"><strong>Lenguaje:</strong></label>
<select id="language-select" class="select-lang" bind:value={language} on:change={handleLanguageChange}>
  {#each languages as lang}
    <option value={lang.value}>{lang.label}</option>
  {/each}
</select>

<CodeMirror
  bind:value={code}
  {extensions}
  style="height:220px"
/>

<button on:click={runCode}>Ejecutar</button>

<div class="theme-dark dark salida">
  {#if error}
    <p style="color: red;">❌ Error: {error}</p>
  {:else}
    <pre><strong>Tu salida:</strong><br/>{output}</pre>
    <p>{success ? '✅ ¡Correcto!' : `❌ Intenta de nuevo.`}</p>
  {/if}
</div>

<script>
  import { onMount } from 'svelte';
  import CodeMirror from 'svelte-codemirror-editor';
  import { oneDark } from '@codemirror/theme-one-dark';
  export let description = '';
  export let initialCode = {};
  export let tests = [];
  export let functionName = 'miFuncion';
  // Importa la URL del entorno público
  let { PUBLIC_JSRUNTIME_URL } = import.meta.env;
  // El lenguaje inicial será el primero disponible en initialCode
  export let language = Object.keys(initialCode)[0] || '';

  let code = initialCode[language] || '';
  let output = '';
  let success = false;
  let error = '';
  let extensions = [oneDark];
  let executed = false;
  let url = '';

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
      url = PUBLIC_JSRUNTIME_URL
    } else if (lang === 'python') {
      const { python } = await import('@codemirror/lang-python');
      extensions = [python(), oneDark];
      url = 'http://localhost:8000/execute';
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
    executed = true;

    try {
      let allPassed = true;
      let outputText = '';
      for (const { input, expected } of tests) {
        const response = await fetch(url, {
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
        const logs = data?.logs || [];
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        if (!passed) allPassed = false;
        outputText += `Input: ${JSON.stringify(input)}\n` +
                      `Tu salida: ${JSON.stringify(result)}\n` +
                      `Logs: ${logs.join(', ')}\n` +
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

</script>

<style lang="scss">
  @import './test-JS.scss';
</style>

<details>
  <summary class={success ? "test-completed" : ""}>{description}</summary>
  
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
  
  <div class={["theme-dark dark salida", success ? "success" : ""]}>
    {#if !executed}
      <pre>Aqui se mostraran tus resultados</pre>
    {:else if error}
      <p style="color: red;">❌ Error: {error}</p>
    {:else}
      <pre><strong>Tu salida:</strong><br/>{output}</pre>
      <p>{success ? '✅ ¡Correcto!' : `❌ Intenta de nuevo.`}</p>
    {/if}
  </div>
</details>

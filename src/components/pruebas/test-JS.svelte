<script>
  import { onMount } from 'svelte';
  import CodeMirror from 'svelte-codemirror-editor';
  import { javascript } from '@codemirror/lang-javascript';
  import { oneDark } from '@codemirror/theme-one-dark';
  const extensions = [javascript(), oneDark];

  let code = `// Escribe tu función aquí
function filtrarPares(arr) {
  // tu código aquí
  return arr;
}
`;

  let output = '';
  let success = false;
  let error = '';

  // Array de tests: cada uno tiene input y expected
  const tests = [
    { input: [1, 2, 3, 4, 5, 6], expected: [2, 4, 6] },
    { input: [7, 9, 11], expected: [] },
    { input: [0, 2, 4], expected: [0, 2, 4] },
    { input: [10,11,15,18], expected: [10, 18] }
  ];

  function runCode() {
    error = '';
    output = '';
    success = false;

    try {
      // Ejecutar todos los tests
      let allPassed = true;
      let results = [];
      for (const { input, expected } of tests) {
        let result;
        let logs = [];
        // Redefinir console.log para capturar los logs
        const userFunction = new Function('input', 'console', `
          ${code}
          return filtrarPares(input);
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
  }

  onMount(runCode);
</script>

<style>
  .salida {
    border: #d44c00 solid 3px;
    border-radius: 1%;
  }
  button {
    margin: 10px 0;
    background-color: #f25900;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:active {
    background-color: #d44c00;
  }
</style>

<h2>Reto: Filtrar números pares</h2>
<p>Escribe una función filtrarPares que reciba un array de números y retorne solo los pares.</p>

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

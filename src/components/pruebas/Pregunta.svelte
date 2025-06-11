<script>
  export let question;
  export let options = [];
  export let correctAnswer;

  let feedback = '';
  let isAnswered = false;
  let color = '';

  // Función para mezclar un array (Fisher-Yates)
  function shuffle(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Mezclar las opciones solo una vez al montar el componente
  let shuffledOptions = [];
  $: shuffledOptions = shuffle(options);

  function handleChange(option) {
    if (!isAnswered) {
      color = option === correctAnswer ? 'Green' : 'Red';
      feedback = option === correctAnswer
        ? '¡Correcto!'
        : 'Incorrecto, la respuesta correcta es ' + correctAnswer;
      isAnswered = true;
    }
  }
</script>

<div class="question-container">
  <h3>{question}</h3>
  {#each shuffledOptions as option}
    <label class="option">
      <input
        type="radio"
        name="answer"
        value={option}
        on:change={() => handleChange(option)}
        disabled={isAnswered}
      />
      {option}
    </label>
  {/each}
  {#if feedback}
    <div class={`feedback ${color}`}>{feedback}</div>
  {/if}
</div>

<style>
  @import './Pregunta.css';
</style>

<script>
  export let question;
  export let options = [];
  export let correctAnswer;

  let feedback = '';
  let isAnswered = false;
  let color = '';

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
  {#each options as option}
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

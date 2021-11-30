<script lang="ts">
  let displayText = false;

  function handleButtonClick(){
    displayText = true;
  }
</script>

<main>
  <article id="display">
    {#if displayText}
      <p class="display-text">Welcome to wonderland!</p>
    {/if}
  </article>
  <button id="display-action-button" on:click={handleButtonClick}>Click me!</button>
</main>

<style>
  .display-text {
    display: block;
    text-align: center;
    font-size: 23px;
  }
</style>

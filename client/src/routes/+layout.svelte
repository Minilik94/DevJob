<script>
  import Header from "$lib/Header.svelte";
  import { darkMode } from "../store";
  let showOwner = true;

  $: if (!showOwner) {
    alert(` 👀 `);
  }
</script>


<div class="container">
  <Header />
  <div class="content">
    <slot />
  </div>
  <footer>
    {#if showOwner}
      <p style="text-align: center; color: #9da3dc;">
        &copy; Minilik Zeru 2023
      </p>
      <i
        on:click={() => {
          showOwner = false;
        }}>🤐📨🚚🏇😁</i
      >
    {:else}
      <p style="text-align: center; color: #9da3dc;">
        big updates coming real soonⓂ️
      </p>
    {/if}
  </footer>
</div>

<style>
  .dark-mode {
    background-color: #121721; /* Dark background color */
  }
  .container {
    max-width: 1400px;
    margin: auto;
  }
  i {
    cursor: pointer;
    position: absolute;
    left: 45%;
  }

  .content {
    max-width: 1200px;
    margin: auto;
  }
  @media (max-width: 500px) {
    .container {
      max-width: 800px;
    }
    .content {
      max-width: 350px;
    }
  }
</style>

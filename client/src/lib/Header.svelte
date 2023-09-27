<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { darkMode } from "../store";

  function toggleDarkMode() {
    // Toggle the dark mode state
    $darkMode = !$darkMode;
    // Set the body background color based on dark mode state
    document.body.style.backgroundColor = $darkMode ? "#121721" : "#f4f6f8"; // Set to empty string for default background color
  }

  
</script>

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
</svelte:head>

<header class="header">
  <div>
    <a class="logo" href="/">devjobs</a>
  </div>

  <div class="right">
    <i class="fa-solid fa-sun" />
    {#if $darkMode}
      <i class="fa fa-toggle-off" on:click={toggleDarkMode} />
    {:else}
      <i class="fas fa-toggle-on" on:click={toggleDarkMode} />
    {/if}
    <i class="fas fa-moon" />
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url("../assets/desktop/bg-pattern-header.svg");
    background-position: center;
    background-size: cover;
    height: 8rem;
    /* width: 100%; */
    border-radius: 10px;
    margin: auto;
    max-width: full;
    font-family: "Kumbh Sans", sans-serif;
  }

  .logo {
    font-weight: bold;
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
    padding: 1rem 3rem;
  }

  .fa-toggle-off {
    font-size: 20px;
    cursor: pointer;
  }
  .fa-toggle-on {
    font-size: 20px;
    cursor: pointer;
  }

  .right {
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    color: #fff;
    gap: 20px;
    font-size: 1.3rem;
  }
</style>

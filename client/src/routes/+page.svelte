<script>
  import { darkMode } from '../store.js';

  export let data;
  $: jobFetch = data.jobs.data.jobs;

  // $: console.log('darkMode:', $darkMode);


  // Function to calculate the time difference
  function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;

    const currentTimestamp = current.getTime();
    const previousTimestamp = Date.parse(previous);

    const elapsed = currentTimestamp - previousTimestamp;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerWeek) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else {
      // Calculate weeks
      const weeks = Math.floor(elapsed / msPerWeek);
      return weeks + (weeks === 1 ? " week ago" : " weeks ago");
    }
  }

  // function calculateDateandTime(currentDate, dbDate) {
  //
  // }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<!-- jobs/page.svelte -->

<div class="container">
  {#if jobFetch === "undefined" || jobFetch.length === 0}
    <p>Loading...</p>
  {:else}
    {#each jobFetch as job}
      <!-- Use conditional class to set the card background color -->
      <div class="card" class:dark-mode={$darkMode}>
        <div class="img-container">
          <img
            src="../../src/assets/logos/{job.photo}"
            class="img"
            alt={job.photo}
            style="background-color: {job.logobg};"
          />
        </div>
        <div class="card__item--paragraphs">
          <p class="card--time">{timeDifference(new Date(), job.createdAt)}</p>
          <p class="cir">.</p>
          <p class="card--position">{job.position}</p>
        </div>
        <a href="/jobs/{job._id}" class="card-h1" class:dark-job={$darkMode}>
          {job.title}
        </a>
        <p class="jobTitle">{job.companyName}</p>
        <h4 class="card-h4">
          {job.location}
        </h4>
      </div>
    {/each}
  {/if}
</div>


<style>
  .container {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    grid-template-columns: repeat(3, minmax(28%, 1fr));
    grid-gap: 2.2rem;
    padding: 2rem;
  }
  .card-h1 {
    font-size: 20px;
    color: #19202d;
    text-decoration: none;
    font-weight: 900;
  }

  .card {
    padding: 30px;
    position: relative;
    box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
  }
  .card-h4 {
    color: #5964e0;
    font-size: 14px;
    margin-bottom: -10px;
  }
  img {
    position: absolute;
    top: -10%;
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    height: 2.5rem;
    border-radius: 10px;
    padding: 3px;
    font-size: 10px;
    justify-content: center;
    aspect-ratio: 3 / 3;
    object-fit: contain;
  }

  .jobTitle {
    color: #9da3dc;
    font-size: 16px;
    text-decoration: none;
    margin-top: 10px;
  }

  .card__item--paragraphs {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: -10px;
    color: #6e8098;
    width: fit-content;
  }
  .card__item--paragraphs .cir {
    color: #6e8098;
    font-size: 20px;
  }
  .card--time {
    color: #6e8098;
    font-size: 16px;
  }
  .card--position {
    color: #6e8098;
    font-size: 16px;
  }
  .dark-mode{
    background-color: #19202d;
  }
  .dark-job {
    color: #fff;
  }
  /* Mobile responsive */
  @media (max-width: 820px) {
    .container {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media (max-width: 600px) {
      .container {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
      }
    }
  }
</style>

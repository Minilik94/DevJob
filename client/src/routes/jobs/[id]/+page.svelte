<script>
  import JobDetailHeader from "$lib/JobDetailHeader.svelte";
  import { darkMode } from "../../../store.js";
  export let data;
  $: job = data.jobs.job;
  // $: console.log(job);

  function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;

    const currentTimestamp = current.getTime();
    const previousTimestamp = Date.parse(previous);

    const elapsed = currentTimestamp - previousTimestamp;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + "s ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "m ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "h ago";
    } else if (elapsed < msPerWeek) {
      return Math.round(elapsed / msPerDay) + "d ago";
    } else {
      // Calculate weeks
      const weeks = Math.floor(elapsed / msPerWeek);
      return weeks + (weeks === 1 ? " week ago" : " weeks ago");
    }
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="container">
  <JobDetailHeader {job} />
  <div class="card__second--container" class:dark-mode={$darkMode}>
    <div class="card__items--container">
      <div class="card__header--container">
        <div class="card__item--paragraphs">
          <p class="card--time">{timeDifference(new Date(), job.createdAt)}</p>
          <p class="cir">.</p>
          <p class="card--position">{job.position}</p>
        </div>
        <h1 class="card-h1" class:dark-job={$darkMode}>
          {job.title}
        </h1>
        <h4 class="card-h4">
          {job.location}
        </h4>
      </div>
      <div class="card__link--a">
        <a href="/">Apply Now</a>
      </div>
    </div>
    <div class="card__details--container">
      <p class="job-description">
        {job.description}{job.description}{job.description}{job.description}{job.description}
      </p>
      <h3 class:dark-job={$darkMode}>Requirements</h3>
      <p class="job-reqs">
        {job.requirements.content}
      </p>

      <ul>
        {#each job.requirements.items as jobReq}
          <li class="job__req--details">
            <p class="">{jobReq}</p>
          </li>
        {/each}
      </ul>

      <h3 class="job-todo" class:dark-job={$darkMode}>What will you do</h3>
      <p class="job__todo--general">
        {job.jobResponsibilities.content}
      </p>
      <ol>
        {#each job.jobResponsibilities.items as jobRes}
          <li class="job__res--details">
            <p class="job-res">{jobRes}</p>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</div>
<div class="card__footer" class:dark-mode={$darkMode}>
  <div class="card__footer-h3">
    <h3 class="company--name" class:dark-job={$darkMode}>{job.title}</h3>
    <p class="card-h1 last">
      {job.companyName}
    </p>
  </div>
  <div class="card__link--a bottom " class:dark-mode={$darkMode}>
    <a href="/">Apply Now</a>
  </div>
</div>

<style>
  .card__footer {
    display: flex;
    justify-content: space-around;
    margin: auto;
  }
  .container {
    width: 100%;
    max-width: 80%;
    margin: auto;
    font-family: "Kumbh Sans", sans-serif;
    padding: 3rem;
  }
  .card__footer {
    width: auto;
    max-width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    margin-top: 3rem;
  }
  .card__second--container {
    /* border: red dashed; */
    max-width: 100%;
    /* width: 700px; */
    margin: auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 40px;

    margin-top: 4em;
    box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.8);
  }
  .card__items--container {
    /* border: solid blue; */
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .card__item--paragraphs {
    display: flex;
    align-items: center;
    gap: 10px;
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
  .card-h1 {
    font-size: 28px;
    color: #19202d;
    margin-top: -10px;
  }
  .card-h4 {
    color: #5964e0;
    font-size: 14px;
    margin-top: -8px;
  }
  .card__link--a {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .card__link--a a {
    background-color: #5964e0;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 30px;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    margin-right: -16px;
  }
  .bottom a {
    padding: 0.8rem 6rem;
  }
  .card__link--a a:hover {
    background-color: #9daec2;
  }

  .job-description {
    font-size: 16px;
    color: #6e8098;
    text-align: left;
  }
  .job-reqs {
    font-size: 16px;
    color: #6e8098;
  }
  .job-res {
    font-size: 16px;
    color: #6e8098;
  }
  .last {
    font-size: 16px;
    color: #9daec2;
  }
  li {
    color: #6e8098;
  }
  ol {
    color: #6e8098;
  }
  ul {
    margin-top: 40px;
    list-style-type: none;
    padding: 10px 0 40px 80px; /* Add some left padding to create space for the bullets */
  }

  li::before {
    content: "\2022";
    color: blue;
    display: inline-block;
    display: inline;
    font-size: 30px;
    width: 1em;
    margin-left: -1em;
    font-weight: bold;
    margin-right: 20px;
  }
  li > p {
    display: inline;
  }

  ol {
    list-style-type: none; /* Remove default numbers */
    counter-reset: item; /* Reset the counter for ol elements */
  }

  ol li::before {
    content: counter(item); /* Use the counter value as the content */
    color: blue;
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    display: inline-block;
    margin-left: -45px;
    width: 1em;
    text-align: right; /* Align the number to the right */
  }

  ol li {
    counter-increment: item; /* Increment the counter for each li element */
    margin-bottom: 10px;
  }

  ol li p {
    margin-left: 0;
    padding-left: 0;
  }

  .job-todo {
    text-transform: capitalize;
    color: #19202d;
  }
  .job__todo--general {
    font-size: 16px;
    color: #6e8098;
    text-align: left;
  }

  .dark-mode{
    background-color: #19202d;
  }

  .dark-job {
    color: #fff;
  }

  @media (max-width: 808px) {
    .card__second--container {
      max-width: 60%;
      border: none;
      width: 100%;
      margin: auto;
      padding: 3rem;
      margin-top: 4rem;
    }

    .card__footer {
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .card__footer > div > a {
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .card__footer-h3 {
      display: none;
    }
    .card__items--container {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      margin-left: auto;
    }
    .card__link--a {
      width: 100%;
      justify-content: center;
      margin: auto;
    }
    .card__link--a a {
      font-size: 14px;
      text-align: center;
      white-space: nowrap;
      width: 100%;
      width: 80%;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    .bottom {
      width: 100%;
    }
  
    .bottom a {
      width: 100%;
      margin: auto;
    }
    .card-h1 {
      font-size: 20px;
    }
  }
</style>

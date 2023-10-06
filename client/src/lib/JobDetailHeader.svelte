<script>
  import { darkMode } from "../store";

  /**
   * @type {{ photo: any; companyName: string; }}
   */
  export let job;
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
</script>

<div class="card-container" class:dark-mode={$darkMode}>
  <div class="card__container--img">
    <!-- Add image here -->
    <img
      src="../assets/logos/{job.photo}"
      class="img"
      alt={job.photo}
      style="background-color: {job.logobg};"
    />
  </div>
  <div class="card__container--companyDetails">
    <h2 class="company--name" class:dark-job={$darkMode}>{job.companyName}</h2>
    <p class="company--web">
      {job.companyName.split(" ").join("").toLowerCase()}.com
    </p>
  </div>
  <div class="card__container--companySite">
    <a href="https://{job.companyName.toLowerCase()}.com" target="_blank
    ">Company Site</a>
  </div>
</div>

<style>
  .container {
    max-width: 100%;
    /* width: 80%; */
    margin: auto;
    font-family: inherit;
    padding: 3rem;
  }
  .card-container {
    box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 140px 1fr 1fr;
    height: 140px;
    margin: auto;
    margin-top: -4em;
    padding: 0;
    /* width: 700px; */
  }
  .card__container--img {
    border-radius: 5px;
  }
  .card__container--img img {
    /* height: 140px;*/
    height: 8rem; 
    aspect-ratio: 1 / 1;
    object-fit: contain;
    padding: 6px;
  }
  .card__container--companyDetails {
    text-align: left;
    margin-left: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: inherit;
  }
  .card__container--companyDetails .company--name {
    margin-bottom: 0px;
    color: #19202d;
    font-family: inherit;
    font-size: 24px;
  }
  .card__container--companyDetails .company--web {
    margin-top: 0.5em;
    color: #6e8098;
    font-family: inherit;
    font-size: 16px;
  }
  .card__container--companySite {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .card__container--companySite a {
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 900;
    border-radius: 5px;
    color: #5964e0;
    padding: 1rem 1.5rem;
    color: #5964e0;
    background-color: #5964e01a;

    margin-right: 10px;
  }

  .card__container--companySite a:hover {
    background-color: #dde3eb;
    border: 2px solid #9da3dc;
  }

  .dark-mode {
    background-color: #19202d; /* Dark background color */
  }

  .dark-job {
    color: #ffffff !important;
  }

  @media (max-width: 808px) {
    .card-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      max-width: 60%;
      width: 100%;
      margin: auto;
      margin-top: -5rem;
      padding: 3rem;
    }
    .card__container--img {
      margin-top: -4.2rem;
      height: 50px;
    }
    .card__container--img img {
      border-radius: inherit;
      height: 50px;
      width: 50px;
    }
    .card__container--companyDetails {
      align-items: center;
      margin: auto;
    }
    .card__container--companySite {
      margin: auto;
      margin-bottom: -20px;
      margin-top: 0.8em;
    }
  }
</style>

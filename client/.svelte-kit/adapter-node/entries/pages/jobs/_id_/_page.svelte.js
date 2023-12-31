import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component, b as each } from "../../../../chunks/ssr.js";
import { d as darkMode } from "../../../../chunks/store.js";
const JobDetailHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-container.svelte-ef4jr1.svelte-ef4jr1{box-shadow:1px 0px 4px rgba(0, 0, 0, 0.3);background-color:#fff;border-radius:5px;display:grid;grid-template-columns:140px 1fr 1fr;height:140px;margin:auto;margin-top:-4em;padding:0}.card__container--img.svelte-ef4jr1.svelte-ef4jr1{border-radius:5px}.card__container--img.svelte-ef4jr1 img.svelte-ef4jr1{height:8rem;aspect-ratio:1 / 1;object-fit:contain;padding:6px}.card__container--companyDetails.svelte-ef4jr1.svelte-ef4jr1{text-align:left;margin-left:3em;display:flex;flex-direction:column;justify-content:center;font-family:inherit}.card__container--companyDetails.svelte-ef4jr1 .company--name.svelte-ef4jr1{margin-bottom:0px;color:#19202d;font-family:inherit;font-size:24px}.card__container--companyDetails.svelte-ef4jr1 .company--web.svelte-ef4jr1{margin-top:0.5em;color:#6e8098;font-family:inherit;font-size:16px}.card__container--companySite.svelte-ef4jr1.svelte-ef4jr1{display:flex;align-items:center;justify-content:end}.card__container--companySite.svelte-ef4jr1 a.svelte-ef4jr1{text-decoration:none;font-family:inherit;font-size:16px;font-weight:900;border-radius:5px;color:#5964e0;padding:1rem 1.5rem;color:#5964e0;background-color:#5964e01a;margin-right:10px}.card__container--companySite.svelte-ef4jr1 a.svelte-ef4jr1:hover{background-color:#dde3eb;border:2px solid #9da3dc}.dark-mode.svelte-ef4jr1.svelte-ef4jr1{background-color:#19202d}.dark-job.svelte-ef4jr1.svelte-ef4jr1{color:#ffffff !important}@media(max-width: 808px){.card-container.svelte-ef4jr1.svelte-ef4jr1{display:flex;flex-direction:column;align-items:center;height:auto;max-width:60%;width:100%;margin:auto;margin-top:-5rem;padding:3rem}.card__container--img.svelte-ef4jr1.svelte-ef4jr1{margin-top:-4.2rem;height:50px}.card__container--img.svelte-ef4jr1 img.svelte-ef4jr1{border-radius:inherit;height:50px;width:50px}.card__container--companyDetails.svelte-ef4jr1.svelte-ef4jr1{align-items:center;margin:auto}.card__container--companySite.svelte-ef4jr1.svelte-ef4jr1{margin:auto;margin-bottom:-20px;margin-top:0.8em}}",
  map: null
};
const JobDetailHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0)
    $$bindings.job(job);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  return `<div class="${["card-container svelte-ef4jr1", $darkMode ? "dark-mode" : ""].join(" ").trim()}"><div class="card__container--img svelte-ef4jr1"> <img src="${"../assets/logos/" + escape(job.photo, true)}" class="img svelte-ef4jr1"${add_attribute("alt", job.photo, 0)} style="${"background-color: " + escape(job.logobg, true) + ";"}"></div> <div class="card__container--companyDetails svelte-ef4jr1"><h2 class="${["company--name svelte-ef4jr1", $darkMode ? "dark-job" : ""].join(" ").trim()}">${escape(job.companyName)}</h2> <p class="company--web svelte-ef4jr1">${escape(job.companyName.split(" ").join("").toLowerCase())}.com</p></div> <div class="card__container--companySite svelte-ef4jr1"><a href="${"https://" + escape(job.companyName.toLowerCase(), true) + ".com"}" target="_blank
    " class="svelte-ef4jr1">Company Site</a></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.card__footer.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{display:flex;justify-content:space-around;margin:auto}.container.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{width:100%;max-width:80%;margin:auto;font-family:"Kumbh Sans", sans-serif;padding:3rem}.card__footer.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{width:auto;max-width:100%;background-color:#fff;border-radius:5px;padding:5px;margin-top:3rem}.card__second--container.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{max-width:100%;margin:auto;background-color:#fff;border-radius:5px;padding:40px;margin-top:4em;box-shadow:1px 0px 4px rgba(0, 0, 0, 0.8)}.card__items--container.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{margin:auto;display:grid;grid-template-columns:auto 1fr}.card__item--paragraphs.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{display:flex;align-items:center;gap:10px;color:#6e8098;width:fit-content}.card__item--paragraphs.svelte-1nkbp9o .cir.svelte-1nkbp9o.svelte-1nkbp9o{color:#6e8098;font-size:20px}.card--time.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#6e8098;font-size:16px}.card--position.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#6e8098;font-size:16px}.card-h1.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:28px;color:#19202d;margin-top:-10px}.card-h4.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#5964e0;font-size:14px;margin-top:-8px}.card__link--a.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{display:flex;align-items:center;justify-content:end}.card__link--a.svelte-1nkbp9o a.svelte-1nkbp9o.svelte-1nkbp9o{background-color:#5964e0;color:#fff;display:flex;align-items:center;text-decoration:none;height:30px;padding:0.8rem 2rem;border-radius:5px;margin-right:-16px}.bottom.svelte-1nkbp9o a.svelte-1nkbp9o.svelte-1nkbp9o{padding:0.8rem 6rem}.card__link--a.svelte-1nkbp9o a.svelte-1nkbp9o.svelte-1nkbp9o:hover{background-color:#9daec2}.job-description.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:16px;color:#6e8098;text-align:left}.job-reqs.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:16px;color:#6e8098}.job-res.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:16px;color:#6e8098}.last.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:16px;color:#9daec2}li.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#6e8098}ol.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#6e8098}ul.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{margin-top:40px;list-style-type:none;padding:10px 0 40px 80px}li.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o::before{content:"\\2022";color:blue;display:inline-block;display:inline;font-size:30px;width:1em;margin-left:-1em;font-weight:bold;margin-right:20px}li.svelte-1nkbp9o>p.svelte-1nkbp9o.svelte-1nkbp9o{display:inline}ol.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{list-style-type:none;counter-reset:item}ol.svelte-1nkbp9o li.svelte-1nkbp9o.svelte-1nkbp9o::before{content:counter(item);color:blue;font-size:16px;font-weight:bold;margin-right:20px;display:inline-block;margin-left:-45px;width:1em;text-align:right}ol.svelte-1nkbp9o li.svelte-1nkbp9o.svelte-1nkbp9o{counter-increment:item;margin-bottom:10px}ol.svelte-1nkbp9o li.svelte-1nkbp9o p.svelte-1nkbp9o{margin-left:0;padding-left:0}.job-todo.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{text-transform:capitalize;color:#19202d}.job__todo--general.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:16px;color:#6e8098;text-align:left}.dark-mode.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{background-color:#19202d}.dark-job.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{color:#fff}@media(max-width: 808px){.card__second--container.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{max-width:60%;border:none;width:100%;margin:auto;padding:3rem;margin-top:4rem}.card__footer.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{width:80%;text-align:center;align-items:center;justify-content:center}.card__footer.svelte-1nkbp9o>div.svelte-1nkbp9o>a.svelte-1nkbp9o{width:80%;text-align:center;align-items:center;justify-content:center}.card__footer-h3.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{display:none}.card__items--container.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{display:flex;flex-direction:column;align-items:start;justify-content:center;margin-left:auto}.card__link--a.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{width:100%;justify-content:center;margin:auto}.card__link--a.svelte-1nkbp9o a.svelte-1nkbp9o.svelte-1nkbp9o{font-size:14px;text-align:center;white-space:nowrap;width:100%;width:80%;text-align:center;align-items:center;justify-content:center}.bottom.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{width:100%}.bottom.svelte-1nkbp9o a.svelte-1nkbp9o.svelte-1nkbp9o{width:100%;margin:auto}.card-h1.svelte-1nkbp9o.svelte-1nkbp9o.svelte-1nkbp9o{font-size:20px}}',
  map: null
};
function timeDifference(current, previous) {
  const msPerMinute = 60 * 1e3;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerWeek = msPerDay * 7;
  const currentTimestamp = current.getTime();
  const previousTimestamp = Date.parse(previous);
  const elapsed = currentTimestamp - previousTimestamp;
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1e3) + "s ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "m ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "h ago";
  } else if (elapsed < msPerWeek) {
    return Math.round(elapsed / msPerDay) + "d ago";
  } else {
    const weeks = Math.floor(elapsed / msPerWeek);
    return weeks + (weeks === 1 ? " week ago" : " weeks ago");
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let job;
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  job = data.jobs.job;
  $$unsubscribe_darkMode();
  return `${$$result.head += `<!-- HEAD_svelte-oy2d2t_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;800;900&display=swap" rel="stylesheet"><!-- HEAD_svelte-oy2d2t_END -->`, ""} <div class="container svelte-1nkbp9o">${validate_component(JobDetailHeader, "JobDetailHeader").$$render($$result, { job }, {}, {})} <div class="${["card__second--container svelte-1nkbp9o", $darkMode ? "dark-mode" : ""].join(" ").trim()}"><div class="card__items--container svelte-1nkbp9o"><div class="card__header--container"><div class="card__item--paragraphs svelte-1nkbp9o"><p class="card--time svelte-1nkbp9o">${escape(timeDifference(/* @__PURE__ */ new Date(), job.createdAt))}</p> <p class="cir svelte-1nkbp9o" data-svelte-h="svelte-1g0tlyt">.</p> <p class="card--position svelte-1nkbp9o">${escape(job.position)}</p></div> <h1 class="${["card-h1 svelte-1nkbp9o", $darkMode ? "dark-job" : ""].join(" ").trim()}">${escape(job.title)}</h1> <h4 class="card-h4 svelte-1nkbp9o">${escape(job.location)}</h4></div> <div class="card__link--a svelte-1nkbp9o" data-svelte-h="svelte-3t6rtq"><a href="/" class="svelte-1nkbp9o">Apply Now</a></div></div> <div class="card__details--container"><p class="job-description svelte-1nkbp9o">${escape(job.description)}${escape(job.description)}${escape(job.description)}${escape(job.description)}${escape(job.description)}</p> <h3 class="${["svelte-1nkbp9o", $darkMode ? "dark-job" : ""].join(" ").trim()}" data-svelte-h="svelte-1m9yj34">Requirements</h3> <p class="job-reqs svelte-1nkbp9o">${escape(job.requirements.content)}</p> <ul class="svelte-1nkbp9o">${each(job.requirements.items, (jobReq) => {
    return `<li class="job__req--details svelte-1nkbp9o"><p class=" svelte-1nkbp9o">${escape(jobReq)}</p> </li>`;
  })}</ul> <h3 class="${["job-todo svelte-1nkbp9o", $darkMode ? "dark-job" : ""].join(" ").trim()}" data-svelte-h="svelte-1s7iyex">What will you do</h3> <p class="job__todo--general svelte-1nkbp9o">${escape(job.jobResponsibilities.content)}</p> <ol class="svelte-1nkbp9o">${each(job.jobResponsibilities.items, (jobRes) => {
    return `<li class="job__res--details svelte-1nkbp9o"><p class="job-res svelte-1nkbp9o">${escape(jobRes)}</p> </li>`;
  })}</ol></div></div></div> <div class="${["card__footer svelte-1nkbp9o", $darkMode ? "dark-mode" : ""].join(" ").trim()}"><div class="card__footer-h3 svelte-1nkbp9o"><h3 class="${["company--name svelte-1nkbp9o", $darkMode ? "dark-job" : ""].join(" ").trim()}">${escape(job.title)}</h3> <p class="card-h1 last svelte-1nkbp9o">${escape(job.companyName)}</p></div> <div class="${["card__link--a bottom  svelte-1nkbp9o", $darkMode ? "dark-mode" : ""].join(" ").trim()}" data-svelte-h="svelte-8gpkix"><a href="/" class="svelte-1nkbp9o">Apply Now</a></div> </div>`;
});
export {
  Page as default
};

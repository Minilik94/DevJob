import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute } from "../../chunks/ssr.js";
import { d as darkMode } from "../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-2v5dwg.svelte-2v5dwg{display:grid;grid-template-columns:repeat(3, minmax(28%, 1fr));grid-gap:2.2rem;padding:2rem}.card-h1.svelte-2v5dwg.svelte-2v5dwg{font-size:20px;color:#19202d;text-decoration:none;font-weight:900}.card.svelte-2v5dwg.svelte-2v5dwg{padding:30px;position:relative;box-shadow:1px 0px 4px rgba(0, 0, 0, 0.3);background-color:#fff;border-radius:5px;margin-top:10px}.card-h4.svelte-2v5dwg.svelte-2v5dwg{color:#5964e0;font-size:14px;margin-bottom:-10px}img.svelte-2v5dwg.svelte-2v5dwg{position:absolute;top:-10%;display:flex;align-items:center;background-position:center;background-size:cover;height:2.5rem;border-radius:10px;padding:3px;font-size:10px;justify-content:center;aspect-ratio:3 / 3;object-fit:contain}.jobTitle.svelte-2v5dwg.svelte-2v5dwg{color:#9da3dc;font-size:16px;text-decoration:none;margin-top:10px}.card__item--paragraphs.svelte-2v5dwg.svelte-2v5dwg{display:flex;align-items:center;gap:10px;margin-bottom:-10px;color:#6e8098;width:fit-content}.card__item--paragraphs.svelte-2v5dwg .cir.svelte-2v5dwg{color:#6e8098;font-size:20px}.card--time.svelte-2v5dwg.svelte-2v5dwg{color:#6e8098;font-size:16px}.card--position.svelte-2v5dwg.svelte-2v5dwg{color:#6e8098;font-size:16px}.dark-mode.svelte-2v5dwg.svelte-2v5dwg{background-color:#19202d}.dark-job.svelte-2v5dwg.svelte-2v5dwg{color:#fff}@media(max-width: 820px){.container.svelte-2v5dwg.svelte-2v5dwg{grid-template-columns:repeat(2, minmax(auto, 1fr))}@media(max-width: 600px){.container.svelte-2v5dwg.svelte-2v5dwg{grid-template-columns:repeat(1, minmax(auto, 1fr))}}}",
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
    return Math.round(elapsed / 1e3) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerWeek) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else {
    const weeks = Math.floor(elapsed / msPerWeek);
    return weeks + (weeks === 1 ? " week ago" : " weeks ago");
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let jobFetch;
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  jobFetch = data.jobs.data.jobs;
  $$unsubscribe_darkMode();
  return `${$$result.head += `<!-- HEAD_svelte-oy2d2t_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600;800;900&display=swap" rel="stylesheet"><!-- HEAD_svelte-oy2d2t_END -->`, ""}  <div class="container svelte-2v5dwg">${jobFetch === "undefined" || jobFetch.length === 0 ? `<p data-svelte-h="svelte-qdsr2u">Loading...</p>` : `${each(jobFetch, (job) => {
    return ` <div class="${["card svelte-2v5dwg", $darkMode ? "dark-mode" : ""].join(" ").trim()}"><div class="img-container"><img src="${"../assets/logos/" + escape(job.photo, true)}" class="img svelte-2v5dwg"${add_attribute("alt", job.photo, 0)} style="${"background-color: " + escape(job.logobg, true) + ";"}"></div> <div class="card__item--paragraphs svelte-2v5dwg"><p class="card--time svelte-2v5dwg">${escape(timeDifference(/* @__PURE__ */ new Date(), job.createdAt))}</p> <p class="cir svelte-2v5dwg" data-svelte-h="svelte-1g0tlyt">.</p> <p class="card--position svelte-2v5dwg">${escape(job.position)}</p></div> <a href="${"/jobs/" + escape(job._id, true)}" class="${["card-h1 svelte-2v5dwg", $darkMode ? "dark-job" : ""].join(" ").trim()}">${escape(job.title)}</a> <p class="jobTitle svelte-2v5dwg">${escape(job.companyName)}</p> <h4 class="card-h4 svelte-2v5dwg">${escape(job.location)}</h4> </div>`;
  })}`} </div>`;
});
export {
  Page as default
};

import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#page.svelte-q4frw7{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:min(80vw, 900px);margin:0 auto;padding-top:5rem}.about-image.svelte-q4frw7{width:min(100%, 600px);height:100%;align-self:center;object-fit:cover;border-radius:8px;border:1px solid rgba(255, 255, 255, 0.303)}h4.svelte-q4frw7{font-size:min(1rem, 3.5vw);font-family:'JetBrains Mono', monospace;font-weight:400;padding:1rem;border-radius:8px;line-height:1.8;margin-bottom:2rem;color:#eaeaeab9}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-qhjy02_START -->${$$result.title = `<title>Andrew Neeley | About</title>`, ""}<meta name="${"description"}" content="${"Andrew Neeley | Developer: About me"}"><link rel="${"stylesheet"}" href="${"%sveltekit.assets%/global.css"}"><!-- HEAD_svelte-qhjy02_END -->`, ""}
<div id="${"page"}" class="${"svelte-q4frw7"}"><img src="${"/andrew.png"}" alt="${"Andrew Neeley"}" class="${"about-image svelte-q4frw7"}">
	<h4 class="${"svelte-q4frw7"}">Hi there! I&#39;m Andrew and I am a full stack software developer. I grew up in Phoenix, Arizona and
		i&#39;ve been located here ever since. I&#39;ve been very passionate about various fields of technology
		from a very young age.
		<br><br>
		From software development to electrical engineering to mechanical engineering, my experience is diverse.
		<br><br>
		Outside of technology I enjoy athletics and music. I&#39;m always looking for challenges and puzzles
		to push myself and reach new boundaries. I hope to continue to use my skills to create products i&#39;m
		passionate about and find new ways to solve unique problems.
	</h4>
</div>`;
});
export {
  Page as default
};

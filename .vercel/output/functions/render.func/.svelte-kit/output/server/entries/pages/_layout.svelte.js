import { c as create_ssr_component, b as subscribe } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#topbar.svelte-3lozj3{position:fixed;display:flex;justify-content:flex-end;padding:0 20px;box-sizing:border-box;align-items:center;top:0;left:0;width:100vw;height:4.3rem;background-color:#111111;border-bottom:#eaeaea1e solid 1px;z-index:100}.page-button.svelte-3lozj3{display:flex;justify-content:center;font-family:'JetBrains Mono', monospace;align-items:center;height:calc(100% - 34px);padding:0 25px;font-size:0.9rem;border-radius:5px;margin:0 6px;font-weight:400;color:#eaeaeae6;transition:all 0.2s ease}.page-button.svelte-3lozj3:hover{cursor:pointer;background-color:rgba(255, 255, 255, 0.1)}.page-button.active.svelte-3lozj3{font-weight:600;color:#eaeaea;background-color:rgba(255, 255, 255, 0.1)}a.svelte-3lozj3{text-emphasis:none;text-decoration:none;height:100%;display:flex;align-items:center;position:relative}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div id="${"topbar"}" class="${"svelte-3lozj3"}"><a href="${"/"}" class="${"svelte-3lozj3"}"><div class="${["page-button svelte-3lozj3", $page.url.pathname == "/" ? "active" : ""].join(" ").trim()}">Home</div></a>
	
	<a href="${"/about"}" class="${"svelte-3lozj3"}"><div class="${["page-button svelte-3lozj3", $page.url.pathname == "/about" ? "active" : ""].join(" ").trim()}">About Me</div></a></div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

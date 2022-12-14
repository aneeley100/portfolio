<script>
	import { page } from '$app/stores';
	// Get page url
</script>

<div id="topbar">
	<a href="/"><div class="page-button" class:active={$page.url.pathname == '/'}>Home</div></a>
	<!-- <a href="/projects"
		><div class="page-button" class:active={$page.url.pathname == '/projects'}>Projects</div></a
	> -->
	<a href="/about"
		><div class="page-button" class:active={$page.url.pathname == '/about'}>About Me</div></a
	>
</div>
<slot />

<style>
	#topbar {
		position: fixed;
		display: flex;
		justify-content: flex-end;
		padding: 0 20px;
		box-sizing: border-box;
		align-items: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 4.3rem;
		background-color: #111111;
		border-bottom: #eaeaea1e solid 1px;
		z-index: 100;
	}
	.page-button {
		display: flex;
		justify-content: center;
		font-family: 'JetBrains Mono', monospace;
		align-items: center;
		height: calc(100% - 34px);
		padding: 0 25px;
		font-size: 0.9rem;
		border-radius: 5px;
		margin: 0 6px;
		font-weight: 400;
		color: #eaeaeae6;
		transition: all 0.2s ease;
	}
	.page-button:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.1);
	}
	.page-button.active {
		font-weight: 600;
		color: #eaeaea;
		background-color: rgba(255, 255, 255, 0.1);
	}
	a {
		text-emphasis: none;
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}
</style>

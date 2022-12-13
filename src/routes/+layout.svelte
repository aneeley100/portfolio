<script>
    import {page} from "$app/stores";
    // Get page url
  </script>

<div id="topbar">
    <div class="page-button" class:active={$page.url.pathname == "/"}>Home</div>
    <div class="page-button" class:active={$page.url.pathname == "/projects"}>Projects</div>
    <div class="page-button" class:active={$page.url.pathname == "/about"}>About</div>
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
        height: 4rem;
        background-color: #111111;
        border-bottom: #eaeaea1e solid 1px;
        z-index: 100;
    }
    .page-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 30px);
        padding: 0 15px;
        font-size: 0.9rem;
        border-radius: 5px;
        margin: 0 10px;
        font-family: "JetBrains Mono";
        color: #eaeaea;
        transition: all 0.2s ease;
    }
    .page-button.active {
        font-weight: 500;
        background-color: rgba(255, 255, 255, 0.158);

    }
</style>
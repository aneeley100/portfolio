<svelte:head>
    <title>Andrew Neeley | Developer</title>
    <meta name="description" content="Andrew Neeley | Developer">
    		<link rel="stylesheet" href="%sveltekit.assets%/global.css" />
</svelte:head>
<div id="homepage">
    <h1>Turning ideas into experiences through software.</h1>
    <h4>
        > <span style="color: var(--code-1);">let</span> <span style="color: var(--code-2);">developer</span> = <span style="color: var(--code-1);">new</span> <span style="color: var(--code-2);">Developer</span>(<span style="color: var(--code-3);">"Andrew Neeley"</span>); <br>
        > <br>
        > <span style="color: var(--code-2);">developer</span>.<span style="color: var(--code-4);">set</span>(<span style="color: var(--code-3);">"experience"</span>, <span style="color: var(--code-3);">"7 years"</span>);<br>
        > <span style="color: var(--code-2);">developer</span>.<span style="color: var(--code-4);">set</span>(<span style="color: var(--code-3);">"languages"</span>, [<span style="color: var(--code-3);">"Javascript"</span>, <span style="color: var(--code-3);">"Typescript"</span>, <span style="color: var(--code-3);">"Python"</span>, <span style="color: var(--code-3);">"Rust"</span>]); <br>
        > <span style="color: var(--code-2);">developer</span>.<span style="color: var(--code-4);">set</span>(<span style="color: var(--code-3);">"description"</span>, <span style="color: var(--code-3);">"Full stack developer based in Phoenix, Arizona"</span>);<br>
        > <br>
        > <span style="color: var(--code-2);">console</span>.<span style="color: var(--code-4);">log</span>(<span style="color: var(--code-2);">developer</span>.<span style="color: var(--code-4);">getGoals</span>());<br>
         <span style="color: #eaeaea">I'm currently looking to join a team of engineers passionate about building great products.</span><br>
        <br>
        > <span style="color: var(--code-2);">console</span>.<span style="color: var(--code-4);">log</span>(<span style="color: var(--code-2);">developer</span>.<span style="color: var(--code-4);">getSocials</span>());<br>
        <b>If you're interested in working together, feel free to reach out! You can find me on <a href="https://github.com/aneeley05">Github</a>, <a href="https://www.linkedin.com/in/aneeley/">LinkedIn</a>, or <a href="mailto:aneeley05@gmail.com">Email</a> me directly.</b>
    </h4>
</div>

<style>
    b {
        color: #eaeaeaec;
        font-style: normal;
        font-weight: 600;
    }
    a {
        font-family: "JetBrains Mono", monospace;
        color: #eaeaea;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: #eaeaeaaf;
        font-style: normal;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    a:hover {
        color: #eaeaeaaf;
        text-decoration-color: #eaeaea1e;
        cursor: pointer;
    }
    #homepage {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        
        width: min(80vw, 900px);
        margin: 0 auto;
        padding-top: 5rem;
    }
    h1 {
        font-size: min(3.5rem, 7vw);
        font-family: "JetBrains Mono", monospace;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 3rem;
        color: #eaeaea;
        letter-spacing: 1.5px;
    }

    h4 {
        font-size: min(1rem,3.5vw);
        font-family: "JetBrains Mono", monospace;
        font-weight: 400;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: 8px;
        line-height: 1.8;
        margin-bottom: 5rem;
        color: #eaeaeaaf;
    }
    :root {
        --code-1: salmon;
        --code-2: rgba(107, 205, 241, 0.952);
        --code-3: rgba(31, 244, 138, 0.913);
        --code-4: rgba(25, 113, 255, 0.913);
    }
</style>
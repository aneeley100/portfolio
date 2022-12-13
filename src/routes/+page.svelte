<svelte:head>
    <title>Andrew Neeley | Developer</title>
    <meta name="description" content="Andrew Neeley | Developer">
    		<link rel="stylesheet" href="%sveltekit.assets%/global.css" />
</svelte:head>
<div id="homepage">
    <h1>Turning ideas into experiences through software.</h1>
    <h4>
        I'm <b style="font-weight: 800;">Andrew Neeley</b>, a full stack developer based in <b>Phoenix, Arizona</b> with over 7 years of experience.
        I specialize in building <b>simple, intuitive, and beautiful</b> applications.
        <br><br>
        I'm currently looking to join a team of engineers passionate about building great products.
        <br><br>
        If you're interested in working together, feel free to reach out! You can find me on <a href="https://github.com/aneeley05">Github</a>, <a href="https://www.linkedin.com/in/aneeley/">LinkedIn</a>, or <a>Email</a> me directly.
    </h4>
</div>

<style>
    b {
        color: #eaeaeaec;
        font-style: normal;
        font-weight: 600;
    }
    a {
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
        height: 100vh;
        width: min(80vw, 900px);
        margin: 0 auto;
        padding-top: 5rem;
    }
    h1 {
        font-size: min(3.5rem, 7vw);
        font-family: "JetBrains Mono", monospace;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: #eaeaea;
    }

    h4 {
        font-size: min(1.1rem,3.5vw);
        font-family: "JetBrains Mono";
        font-weight: 400;
        line-height: 1.8;
        margin-bottom: 1rem;
        color: #eaeaeaaf;
    }
</style>
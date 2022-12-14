<svelte:head>
	<title>Andrew Neeley | Developer</title>
	<meta name="description" content="Andrew Neeley | Developer" />
	<link rel="stylesheet" href="%sveltekit.assets%/global.css" />
</svelte:head>
<div id="homepage">
	<h1>Making good ideas a reality through elegant software.</h1>
	<h4>
		I'm <b style="font-weight: 800;">Andrew Neeley</b>, a full stack developer based in
		<b>Phoenix, Arizona</b>
		with over 7 years of experience. I specialize in building
		<b>simple, intuitive, and beautiful</b>
		applications.
		<br /><br />
		I'm currently looking to join a team of engineers passionate about building great products.
		<br /><br />
		If you're interested in working together, feel free to reach out! You can find me on
		<a href="https://github.com/aneeley05">Github</a>,
		<a href="https://www.linkedin.com/in/aneeley/">LinkedIn</a>, or
		<a href="mailto:aneeley05@gmail.com">Email</a> me directly.
	</h4>
    <hr>
	<h2>Featured Projects</h2>
	<div class="featured-projects">
		<div class="project">
			<h3>Portfolio</h3>
			<p>This website you're on right now! I built this site using SvelteKit and Vite.</p>
		</div>
        <hr>
        <div class="project">
			<h3>BIM</h3>
			<p>A VIM/Nano type clone written in Rust. </p>
		</div>
	</div>
</div>

<style>
    hr {
        width: 100%;
        border: 1px solid #eaeaea;
    }
    .featured-projects hr {
        width: 100%;
        border: 1px solid #eaeaea27;
    }
	.featured-projects {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
        margin-bottom: 3rem;
	}
    .project {

    }
    .project h3 {
        font-size: min(1.2rem, 3.5vw);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }
    .project p {
        color: #eaeaeaaf;
    }
    h2 {
        font-size: min(1.8rem, 4.5vw);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 400;
    }
	b {
		color: #eaeaeaec;
		font-style: normal;
		font-weight: 600;
	}
	a {
		font-family: 'JetBrains Mono', monospace;
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
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 3rem;
		color: #eaeaea;
		letter-spacing: 1.5px;
	}

	h4 {
		font-size: min(1rem, 3.5vw);
		font-family: 'JetBrains Mono', monospace;
		font-weight: 400;
		line-height: 1.8;
		margin-bottom: 6rem;
		color: #eaeaeaaf;
	}
	:root {
		--code-1: salmon;
		--code-2: rgba(107, 205, 241, 0.952);
		--code-3: rgba(31, 244, 138, 0.913);
		--code-4: rgba(25, 113, 255, 0.913);
	}
</style>

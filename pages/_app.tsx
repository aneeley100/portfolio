import "../styles/globals.css";
import { useState, useEffect } from "react";
import {} from "../components";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>Andrew Neeley | Portfolio</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

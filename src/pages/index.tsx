import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import CardFront from '../../public/BusCard_1.png'
import CardBack from '../../public/BusCard_2.png'

export default function Home() {
	const [showFront, setShowFront] = useState(true)

	function flip() {
		setShowFront(!showFront)
	}

	const frontAngle = showFront ? '0' : '180'
	const backAngle = showFront ? '180' : '0'

	return (
		<>
			<Head>
				<title>Business Card - Edit Design Co</title>
				<meta
					name="description"
					content="Edit Design Co Business Card"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/edit-logo.png" />
			</Head>
			<style>{`
				* {
					user-select: none;
				}
				img {
					object-fit: contain;
					transition-duration: 300ms;
					transition-timing-function: ease-out;
					backface-visibility: hidden;
				}
			`}</style>
			<main onClick={flip}>
				<Image
					src={CardFront}
					alt="Edit design co business card front"
					fill
					style={{
						transform: `rotateY(${frontAngle}deg)`,
					}}
				/>
				<Image
					src={CardBack}
					alt="Edit design co business card back"
					fill
					style={{
						transform: `rotateY(${backAngle}deg)`,
					}}
				/>
			</main>
		</>
	)
}

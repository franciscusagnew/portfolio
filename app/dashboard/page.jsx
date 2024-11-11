'use client'
import Image from "next/image";
import styles from '@/app/ui/dashboard.module.css';
import { Poppins, Bebas_Neue } from 'next/font/google'
import { useState, useEffect } from "react";

const poppins = Poppins({
    weight: ['800'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export default function Page() {
    return (
			<div className={styles.body}>
				<div className={styles.container}>
					<div className={styles.left_col}>
						<nav className={styles.sidebar} id="sidebar">
							<Image
								className={styles.back_btn}
								id="back_btn"
								aria-hidden
								src="/arrow.svg"
								alt="Back icon"
								width={16}
								height={16}
								onClick={() => {
									sidebar.style.transform = "translateX(-100%)";
								}}
							/>
							<ul>
								<li>
									<a className={styles.active} href="#">
										HOME
									</a>
								</li>
								<li>
									<a href="#">STATS</a>
								</li>
								<li>
									<a href="#">MEMBERS</a>
								</li>
								<li>
									<a href="#">SETIINGS</a>
								</li>
								<li>
									<a href="#">HELP</a>
								</li>
							</ul>
						</nav>
					</div>
					<section className={styles.section} id="section">
						<header className={styles.header}>
							<Image
								className={styles.menu_btn}
								aria-hidden
								id="menu_btn"
								src="/menu.svg"
								alt="Menu icon"
								width={16}
								height={16}
								onClick={() => {
									sidebar.style.transform = "translateX(0)";
								}}
							/>
							<p
								className={`${poppins.variable} ${styles.logo} font-poppins antialiased`}
							>
								LOGO
							</p>
						</header>
						<div className={styles.main}>
							<div className={styles.content}>
								<h1 className={styles.title}>DATA ANALYTICS</h1>
								<p className={styles.description}>
									Making sense of your traffic.
								</p>
								<a className={styles.cta} href="#" target="_blank">
									GO TO MY STATS
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
}

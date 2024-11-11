import Image from "next/image";
import styles from '@/app/ui/card.module.css';

// import { Poppins as Sans, Bebas_Neue as Serif } from '@next/font/google';

// const poppins = Sans({
//     weight: ['500'],
//     subsets: ['latin'],
//     variable: "--font-popper",
// });

// const Bebas_Neue = Serif({
//     weight: ['400'],
//     subsets: ['latin'],
//     variable: "--font-bebas",
// });

export default function Page() {
    return (
        <div className={styles.container}>
            <a className={styles.anchor} href="#">
                {/* <img className={styles.photo} src="/mountain.jpg" alt="Mountains" /> */}
                <Image
                    className={styles.photo}
                    src="/mountain.jpg"
                    alt="Mountains"
                    width={100}
                    height={100}
                    priority
                />
                <div className={styles.content}>
                    <p className={styles.title}>An Above Average Experience</p>
                    <p className={styles.description}>
                        Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty.
                    </p>
                    {/* <img className={styles.link} src="/link.svg" alt="link" /> */}
                    <Image
                        className={styles.link}
                        src="/link.svg"
                        alt="Mountains"
                        width={12}
                        height={100}
                        priority
                    />
                </div>
            </a>
        </div>
    );
}

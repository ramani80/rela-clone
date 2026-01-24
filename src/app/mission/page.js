'use client';
// pages/index.js (or app/page.js for Next.js 13+ with App Router)
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Mission.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Join Our Mission</title>
        <meta name="description" content="Join a team revolutionizing the automotive industry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className={styles.heroSection}>
          <div className={styles.content}>
            <h1>
              Be a part of
              <span className={styles.highlight}>our mission</span>
            </h1>
            <p>
              Join a team that's revolutionizing the automotive industry with AI-powered solutions.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/team-collaboration.jpg"
              alt="Team collaboration"
              width={800}
              height={600}
              priority
              className={styles.image}
            />
          </div>
        </section>
      </main>
    </>
  );
}

// styles/Mission.module.css
/*
.heroSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    gap: 60px;
}

.content {
    flex: 1;
    max-width: 500px;
}

.content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #1a1a1a;
}

.highlight {
    color: #4F76F6;
    display: block;
}

.content p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
}

.imageContainer {
    flex: 1;
    max-width: 500px;
    position: relative;
}

.image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

@media (max-width: 968px) {
    .heroSection {
        flex-direction: column;
        padding: 60px 30px;
        gap: 40px;
    }

    .content h1 {
        font-size: 2.5rem;
    }

    .content {
        text-align: center;
    }
}

@media (max-width: 640px) {
    .heroSection {
        padding: 40px 20px;
    }

    .content h1 {
        font-size: 2rem;
    }

    .content p {
        font-size: 1rem;
    }
}
*/

// styles/globals.css
/*
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: #333;
}
*/
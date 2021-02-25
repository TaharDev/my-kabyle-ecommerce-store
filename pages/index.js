import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <img src="/images/kabylie.jpeg" alt="kabylie" /> */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <p className={styles.description}>
          Beautiful old kabyle Kabyle Jewelry Bni Yanni. Highsilver, enamel and mediteranean corals
        </p>
      </div>
      <main className={styles.main}>
        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="#" >
              <img src="/images/bracelet-one.jpg" alt="first brcelet" />
              <h3>Wonderful kabyl silver bracelet with real mediteranean corals and enamel</h3>
              <p>this bracelet is unusual in patterns and decoration. <br />
              very rear, almost all the silver jewelry from the kabyls are made with silver and enameling since over 800 years.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="#">
              <img src="/images/bracelet-two.jpg" alt="second brcelet" />
              <h3>Old Kabyle bracelet, from Algeria, Grande Kabylie &rarr;</h3>
              <p>Old Kabyle bracelet Very pretty bracelet with a pin clasp, covered with wonderful silver granulations and cabochons set with red coral.<br />
              A very pretty decoration of cloisonné enamels fired with charcoal enhances the backgrounds.<br />
              Work of Béni-Yéni. Solid silver and enamels Algeria, Grande Kabylie.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#" >
              <img src="/images/bracelet-three.jpg" alt="third brcelet" />
              <h3>Nice colors ,unusual , very old kabyle bracelet.high silver with good mediteranean corals</h3>
              <p>The enameling and smith work are very nicely done. <br />
              unusual work and patterns. havent seen many of bracelets in this kind of work<br />
              kabyle use the yelloworange,green and blue colors in enamel.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#"  >
              <img src="/images/bracelet-four.jpg" alt="fourth brcelet" />
              <h3>Massif silver with nice colors ,unusual , very old kabyle bracelet</h3>
              <p>
                The half bead in half round form is a symbol of chameleon eye.<br />
              The chameleon is well seen in the ethnic world. it represents the smartnes,wiseness and surviving charactor.<br />
              its also symbol for ancestors connection with the present world.
            </p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" >
          By: Tahar BM, Used Next Js, Stripe(payment) and Vercel(hosting)
        </a>
      </footer>
    </div>
  )
}

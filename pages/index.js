import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductList from '../widgets/ProductList/index';
import products from '../products.json'
import { initiateCheckout } from '../lib/payments';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ul>
          <li>home</li>
          <li>products</li>
          <li>contact</li>
        </ul>
      </div>
      <div className={styles.bannerText} >
        <p className={styles.description}>
          Beautiful old kabyle Kabyle Jewelry from Kabylie, Bni Yanni.
          </p>
      </div>
        <main className={styles.main}>
          <ProductList products={products} />
        </main>

        <footer className={styles.footer}>
          <a href="#" target="_blank" >
            By: Tahar BM, Used Next Js, Stripe(payment) and Vercel(hosting)
        </a>
        </footer>
      </div>
  )
}

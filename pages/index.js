import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'

export default function Home() {
  console.log('product', products)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ul>
          <li>home</li>
          <li>products</li>
          <li>contact</li>
        </ul>
        <p className={styles.description}>
          Beautiful old kabyle Kabyle Jewelry Bni Yanni. Highsilver, enamel and mediteranean corals
        </p>
      </div>
      <main className={styles.main}>
        <ul className={styles.grid}>
          {
            products.map(product => {
              return (
                <li className={styles.card}>
                  <a href="#" >
                    <img src={product.image} alt="product image" />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                  </a>
                </li>
              )
            })
          }
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

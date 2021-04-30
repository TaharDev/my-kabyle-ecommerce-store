import React from 'react';
import styles from '../../styles/Home.module.css';
import PropTypes from 'prop-types';

const index = props => {
  const { products } = props;

  function handleClick() {
    // console.log('---------id', id)
    console.log('-------------process.env.NEXT_PUBLIC_STRIKE_API_KEY111111111', process.env.NEXT_PUBLIC_STRIKE_API_KEY)
    initiateCheckout({

    });
  };

  return (
    <ul className={styles.grid}>
      {
        products.map(product => {
          const { id, title, description, price, image } = product;
          return (
            <li className={styles.card} key={id}>
              <a href="#" >
                <div className={styles.productTitle}>
                  <img src={image} alt="product image" />
                  <h3>{title}</h3>
                </div>
                <p className={styles.productDescription}>{description}</p>
                <div className={styles.addProductBtn}>
                  <button onClick={(id) => handleClick()}>Buy Now</button>
                  <p className={styles.productPrice}>{`${price} $`}</p>
                </div>
              </a>
            </li>
          )
        })}
    </ul>
  );
};

index.propTypes = {
  products: PropTypes.array.isRequired,
};

export default index;
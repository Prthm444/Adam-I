import React from 'react';
import styles from './SectionTwo.module.css';
import Cards from '../../../components/Cards/Cards';
import investData from '../../../data/whyInvest';

function SectionTwo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.text} ${styles.title}`}>Why Invest in Africa?</h2>
      <div className={styles.container}>
        {investData.map(data => (
          <Cards
            key={data.id}
            title={data.title}
            image={data.image}
            alt={data.alt}
            color="yellow"
            body={data.body}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;

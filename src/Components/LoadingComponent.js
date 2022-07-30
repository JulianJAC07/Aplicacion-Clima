import React from 'react';
import styles from './loadingComponent.module.css';

export default function LoadingComponent() {
  return (
    <div className={styles.LoadingContainer}>
        <div className={styles.loader}>
            <div></div>
        </div>
    </div>
  )
}

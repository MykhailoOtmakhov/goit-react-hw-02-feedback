import React from 'react';
import styles from './Statistics.module.css'
    const Statistics = ({good, neutral, bad, total, positivePercentage})=>(
    <div className={styles.stats}>
        <span className={styles.stat}>Good{good}</span>
        <span className={styles.stat}>Neutral{neutral}</span>
        <span className={styles.stat}>bad{bad}</span> 
        <span className={styles.stat}>Total{total()}</span>
        <span className={styles.stat}>persentage{positivePercentage()}%</span>
    </div>   
)
export default Statistics

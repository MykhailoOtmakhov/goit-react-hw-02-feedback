import React from 'react';
import styles from './FeedbackOptions.module.css'
function FeedbackButtons ({options, onLeaveFeedback}){
    const buttonTypes = Object.keys(options);
    return(
        <>
            {buttonTypes.map(buttonType=>(
                <button key={buttonType} 
                        className={styles.button}
                        type="button" 
                        onClick={()=>onLeaveFeedback(buttonType)}>
                    {buttonType}
                </button>
            ))}
        </> 
    )
}
export default FeedbackButtons;

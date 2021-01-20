import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types'

function FeedbackOptions ({options, onLeaveFeedback}){
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
FeedbackOptions.propType={
    options:PropTypes.arrayOf(
        PropTypes.shape({
            good:PropTypes.number,
            bad:PropTypes.number,
            neutral:PropTypes.number,
        })
    )
}
FeedbackOptions.defaultProps = {
    options:{
        good:0,
        bad:0,
        neutral:0,
    }
}
export default FeedbackOptions;

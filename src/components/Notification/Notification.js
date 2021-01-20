import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types'

const Notification =({message})=>(
    <span className={styles.message}>
        {message}
    </span>
)

Notification.propTypes = {
    message: PropTypes.string,
}
Notification.defaultProps = {
    message: '',
}

export default Notification

import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types'
const Section = ({title,children})=> (
    <>
        <h2 className={styles.title}>{title}</h2>
        {children}
    </>
)
Section.propTypes={
    title: PropTypes.string,
}
Section.defaultProps = {
    title: '',
}
export default Section
import React from 'react'
import styles from '../svg.module.scss';

const svgCodepen = (props) => {
    
    let styleArray = [styles.Standard]
    
    if(props.header) {
        styleArray.push(styles.SizingHeader)
    } else {
        styleArray.push(styles.SizingFooter)
    }

    return (

        <a className={[...styleArray].join(' ')}  style={{"padding": "0"}} href="https://codepen.io/rickycooper" target="_blank" rel="noopener noreferrer" style={{"overflow": "hidden"}}>
            <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"/></svg>
        </a>
    );
}

export default svgCodepen 
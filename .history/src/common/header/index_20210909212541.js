import React, { PureComponent } from 'react';
import styles from './header.module.css'
import '../../style.css'

class Header extends PureComponent {
    render() {
        return (
            <div className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Info</li>
                        <li className={styles.li}>Projects</li>
                        <li className={styles.li}>Contact</li>
                        <li className='positionRelative'>
                            <div className={`${styles.eyes} ${styles.eyesLeft}`}>
                                <span className={styles.circle}></span>
                            </div>
                            <span className={styles.lash}></span>
                        </li>
                        <li className='positionRelative'>
                            <div className={`${styles.eyes} ${styles.eyesRight}`}>
                                <span className={styles.circle}></span>
                            </div>
                            <span className={styles.lash}></span>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
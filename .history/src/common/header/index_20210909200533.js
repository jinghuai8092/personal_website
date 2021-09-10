import React,{PureComponent} from 'react';
import styles from './header.module.css'

class Header extends PureComponent{
    render(){
        return(
            <div className={styles.header}>
                <nav>
                    <ul>
                        <li>Info</li>
                        <li>Education</li>
                        <li>Work</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
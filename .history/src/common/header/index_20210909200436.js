import React,{PureComponent} from 'react';
import styles from './header.module.css'

class Header extends PureComponent{
    render(){
        return(
            <div className={styles.header}>
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
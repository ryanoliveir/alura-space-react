import Item from '../Item';
import styles from './Sidebar.module.scss';


const Sidebar = ({ menuItems }) => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lists}>
                {menuItems.map((item,index) => {
                    return (
                        <li className={styles.menu__item} key={index}>
                            <Item 
                                label={item.label} 
                                imagePath={item.imagePath}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar;
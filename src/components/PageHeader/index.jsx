import styles from './PageHeader.module.scss'


const Header = () =>{
    return (
        <header className={styles.header_container}>
            <img src="/assets/logo.png" alt="Alura Space logo"/>
            <div className={styles.header_container__container}>
                <input className={styles.header_container__input}type="text" placeholder="O que você procura?" />
                <img src="/assets/search.png" alt="Search icon" />
            </div>
        </header>
    )
}

export default Header;
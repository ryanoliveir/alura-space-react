import styles from './Footer.module.scss'


const Footer = () => {
    return (
        <section className={styles.footer_container}>
            <div className={styles.footer_container__social__images}>
                <a href="https://www.instagram.com/aluraonline/"><img src= { process.env.PUBLIC_URL + "/assets/facebook.svg"} alt="" /></a>
                <a href="https://www.instagram.com/aluraonline/"><img src= { process.env.PUBLIC_URL + "/assets/twitter.svg"} alt="" /></a>
                <a href="https://www.instagram.com/aluraonline/"><img src= { process.env.PUBLIC_URL + "/assets/instagram.svg"} alt="" /></a>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Logo" />
            </div>
            <div className={styles.footer_container__dev_by}>
                <p>Desenvolvido por Alura.</p>
            </div>
        </section>
    )

}


export default Footer;
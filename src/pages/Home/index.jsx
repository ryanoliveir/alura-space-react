import Header from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
import Banner from '../../components/Banner';

import styles from './Home.module.scss'

const Items = [
    {
        label: 'Inicio',
        imagePath: '/assets/icons/home-ativo.png'
    },
    {
        label: 'Mais vistas',
        imagePath: '/assets/icons/mais-curtidas-inativo.png'
    },
    {
        label: 'Mais curtidas',
        imagePath: '/assets/icons/mais-vistas-inativo.png'
    },
    {
        label: 'Novas',
        imagePath: '/assets/icons/novas-inativo.png'
    },
    {
        label: 'Surpreenda-me',
        imagePath: '/assets/icons/surpreenda-me-inativo.png'
    }
]

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main_container}>
                    <Sidebar menuItems={Items}/>
                    <div className={styles.main_container__banner}>
                        <Banner
                          text="A galeria mais completa do espaço" 
                          imagePath="/assets/banner.png" 
                        />
                    </div>
                </section>

            </main>
        </>
    )

}

export default Home;
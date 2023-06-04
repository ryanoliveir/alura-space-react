import Header from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';

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
            <Sidebar menuItems={Items}/>
        </>
    )

}

export default Home;
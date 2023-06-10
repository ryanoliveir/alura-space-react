import styles from './Tags.module.scss'

const Tags = () => {
    return (
        <div className={styles.tags}>
            <p> Busque por Tags</p>
            <ul className={styles.tags__list}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
                <li>Todas</li>
            </ul>
        </div>
    )
}


export default Tags
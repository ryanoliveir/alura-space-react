import styles from './Item.module.scss'

const Item = ({ label, imagePath}) => {
    return (
        <div className={styles.item_container}>
            <img src={imagePath} alt={`${imagePath}`} />
            <a href="/">{label}</a>
        </div>
    )
}


export default Item;
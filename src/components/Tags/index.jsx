import styles from './Tags.module.scss'

const Tags = ({ tags, onTagClick, completeGallery }) => {


    const selectTag = (tag) => {
        onTagClick(tag);
    };

    

    return (
        <div className={styles.tags}>
            <p> Busque por Tags</p>
            <ul className={styles.tags__list}>
               {tags.map((tag,index) => {
                return (
                    <li key={index} 
                        onClick={() => selectTag(tag)}>
                        {tag}
                    </li>
                )
               })}
               <li onClick={completeGallery}>Todas</li>
            </ul>
        </div>
    )
}


export default Tags
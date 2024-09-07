import styles from "./inneritem.module.css"

export default function ItemInner({eatItems}){
    return(
        <div>
            <div className={styles.itemcontainer} >
                <div className={styles.imageContainer}>
                    <img 
                        src={
                            `https://spoonacular.com/cdn/ingredients_100x100/`+eatItems.image                        } 
                        alt=""
                    />
                </div>
                <div className={styles.itemname}>
                    <div className={styles.name}>{eatItems.name}</div>
                    <div className={styles.amount}>
                        {eatItems.amount}{eatItems.unit}
                    </div>
                </div>
            </div>
        </div>
    )
}
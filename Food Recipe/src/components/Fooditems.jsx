import styles from "./Fooditems.module.css"

export default function ItemsFood({food, setfoodId}){
    return(
        <div className={styles.itemCard}>
            <img className={styles.itemImage} src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonBox}>
                <button onClick={()=>{
                    console.log(food.id)
                    setfoodId(food.id)
                }} className={styles.button}>View Recipe</button>
            </div>
        </div>
        
    )
}
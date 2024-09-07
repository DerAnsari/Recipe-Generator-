import { useEffect, useState } from "react"
import styles from "./foodDetail.module.css"
import Itemlist from "./itemList"

export default function FoodDetail({foodId}){
    const [food,setFood]= useState({})
    const [isloading,setisLoading]= useState(true)
    const URl = `https://api.spoonacular.com/recipes/${foodId}/information`
    const Keys = "cd1d434dbd9a4ff78ee2a14752da9993"
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URl}?apiKey=${Keys}`);
            const data= await res.json()
            console.log(data)
            setFood(data)
            setisLoading(false)
        }
        fetchFood()
    },[foodId])
    return(
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImg} src={food.image} alt="" />
                <div className={styles.Details}>
                    <span>
                        <strong>
                            {food.readyInMinutes} Minutes
                        </strong>
                    </span>
                    <span>
                        <strong>
                            Servings {food.servings}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian ? "Vegan": "Not Vegan"}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            {food.vagan? "vagan": ""}
                        </strong>
                    </span>
                </div>
                <div>
                    <span>
                        <strong>
                            $ {food.pricePerServing/100} Per serving
                        </strong>
                    </span>
                </div>
                <h2>Ingredients</h2>
                <Itemlist food={food} isloading={isloading}/>
                <h2>Instructions</h2>
                <div className={styles.Steps}>
                    <ol>
                    {isloading? (
                        <p>Loading...</p>
                    ) : (
                        food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))
                    )}
                    </ol>
                </div>
            </div>
        </div>
    )
}
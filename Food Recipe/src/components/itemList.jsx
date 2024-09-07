import ItemInner from "./inneritem";
export default function Itemlist({food, isloading}){
    return(
        <div>
            {isloading?(
                <p>Loading</p>
            ):(
                food.extendedIngredients.map((eatItems)=>(
                <ItemInner item eatItems={eatItems}/>
                ))
            )}
        </div>
    )
}
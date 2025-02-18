import ItemsFood from "./Fooditems";

export default function Foodlist({foodData, setfoodId}){
    return(
        <div>
            {foodData.map((food)=>(
            <ItemsFood setfoodId={setfoodId} key={food.id} food={food}/>
            ))}
        </div>
    )

}
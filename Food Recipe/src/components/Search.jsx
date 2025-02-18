import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch?"
const Key = "cd1d434dbd9a4ff78ee2a14752da9993"

export default function Search({foodData, setfoodData}){
    const[query, setQuery] =useState("")

    useEffect(()=>{
        async function FetchApi(){
            const rezz=await fetch(`${URL}query=${query}&apiKey=${Key}`)
            const data =await rezz.json();
            console.log(data.results)
            setfoodData(data.results)
        }
        FetchApi()
    },[query]);

    return(
        <div className={styles.searchbox}>
            <input 
                placeholder="Enter Desired Recipe"
                className={styles.inputBox}
                value={query}
                onChange={(e)=>setQuery(e.target.value)} 
                type="text" 
            />
        </div>
    )
}
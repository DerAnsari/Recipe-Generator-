import { useState } from "react"
import Search from "./components/search"
import Foodlist from "./components/Foodlist"
import Navbar from "./components/navBar"
import Container from "./components/Container"
import FoodDetail from "./components/foodDetail"
import InnerContainer from "./components/innerContain"
import "./App.css"

function App() {
  const [foodData,setfoodData]=useState([])
  const [foodId,setfoodId]= useState("715415")
  return (
    <div className="App">
      <Navbar/>
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App

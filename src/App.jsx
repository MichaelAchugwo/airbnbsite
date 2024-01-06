import React from "react";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Card from "./components/Card";
import cardData from "./components/cardData"

const cards = cardData.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
    )
})
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Experiences />
            <section className="card-group">{cards}</section>
        </div>
    )
}
export default App;
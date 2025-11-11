import React from "react";
import Home from "./components/Home.jsx";
import AddEditMeal from "./components/AddEditMeal.jsx";
import Progress from "./components/progress.jsx";
import Settings from "./components/settings.jsx";
function App() {
        const mealOptions = ["BreakFast", "Lunch", "Snacks", "Dinner"];

    return (
        <div>
            <h1>Food-Calorie Tracker</h1>
             <Home/>
             <AddEditMeal mealTypes={mealOptions}/>
             <Progress/>
             <Settings/>
        </div>
    );
}

export default App;

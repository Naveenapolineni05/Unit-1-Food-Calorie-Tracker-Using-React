import React, { useEffect, useState } from "react";
import Home from "./components/home.jsx";
import AddEditMeal from "./components/addEditMeal.jsx";
import Progress from "./components/progress.jsx";
import Settings from "./components/settings.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
    const mealOptions = ["BreakFast", "Lunch", "Snacks", "Dinner"];
    const [calorieGoal, setCalorieGoal] = useState(2000);
    const [meal, setMeal] = useState({});
    const [dataSet, setDataSet] = useState([]);
    useEffect(() => {
        const index=dataSet?.findIndex(d =>d.day === meal.day);
        
        if (index === -1)
        {
            setDataSet([...dataSet,meal]);
        }
        else{
           const updatedDataSet = [...dataSet];
           updatedDataSet[index] = meal;
           setDataSet(updatedDataSet);
           console.log("updatedData", updatedDataSet)
        }
    }, [meal]);

    const resetData = () => {
        setCalorieGoal(2000);
        setMeal({});
        setDataSet([]);
    }

    return (
        <div>
            <h1>Food-Calorie Tracker</h1>
            <Routes>
                <Route path="/" element={<Home goal={calorieGoal} meal={meal} />} />
                <Route path="/edit" element={<AddEditMeal mealTypes={mealOptions} setMeal={setMeal} meal={meal} />} />
                <Route path="/progress" element={<Progress dataSet={dataSet} goal={calorieGoal} meal={meal}/>} />
                <Route path="/settings" element={<Settings updateCalorieGoal={setCalorieGoal} calorieGoal={calorieGoal} resetData={resetData}/>} />
            </Routes>
        </div>
    );
}

export default App;

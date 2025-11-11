import React from "react";
import NavBar from "./NavBar";
import CustomizedProgressBar from "./CustomizedProgressBar";
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";

function Home() {

    const mealOptions = ["BreakFast", "Lunch", "Snacks", "Dinner"];

    return (
        <div>
            <NavBar />
            <h2> Daily Summary </h2>
            <CustomizedProgressBar />
            <br />
            <Stack spacing={2}>
                {mealOptions.map(meal =>
                    <div key={meal}>
                        <TextField
                            id={meal}
                            label={meal}
                            defaultValue="0 Calories"
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}
                        />
                    </div>
                )}
            </Stack>
        </div>
    )

}

export default Home;
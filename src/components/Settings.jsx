import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function Settings(props) {

    const {updateCalorieGoal,calorieGoal} = props;

    const [goal, setGoal] = useState(calorieGoal);

    const handleCalorieChange = (event) => {
        setGoal(event.target.value);
    };

    const handleCalorieUpdate = () => {
        updateCalorieGoal(goal);
    }


    return (
        <Stack spacing={2} alignItems="strech">
            <TextField
                id="Calorie Goal"
                label="Calorie Goal"
                helperText="Please enter the Calorie Goal"
                fullWidth
                value={goal}
                onChange={handleCalorieChange}

            />

            <Stack spacing={2} direction="row">
                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    color="success"
                    onClick={handleCalorieUpdate}>
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="error">
                    Reset Data
                </Button>
                <Button
                    component={Link}
                    to="/"
                    variant="contained">
                    Back
                </Button>
            </Stack>
        </Stack>

    )

}
export default Settings;
import TextField from "@mui/material/TextField";
import React from "react";
import Stack from "@mui/material/Stack";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


function AddEditMeal(props) {
    const mealTypes = props.mealTypes;
    const editOptions = ["Meal Type", "Item Name", "Calories"];

    return (
        <div>
            <Stack spacing={2}>
                <TextField
                    id="Meal Type"
                    select
                    label="Meal Type"
                    helperText="Please select your Meal Type"
                >
                    {mealTypes?.map((mealType) => (
                        <MenuItem key={mealType} value={mealType}>
                            {mealType}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="Item Name"
                    label="Item Name"
                    helperText="Please enter the Item Name"
                />

                <TextField
                    id="Calories"
                    label="Calories"
                    helperText="Please enter the Calories"
                />

                <Stack spacing={2} direction="row">
                    <Button
                        variant="contained"
                        color="success">
                        Save
                    </Button>
                    <Button 
                    variant="contained"
                    color="error">
                        Cancel
                        </Button>
                </Stack>
            </Stack>
        </div>

    )

}
export default AddEditMeal;
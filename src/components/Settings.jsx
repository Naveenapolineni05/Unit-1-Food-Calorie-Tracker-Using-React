import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

function Settings() {
    return (
        <div>
            <stack spacing={2}>
                <TextField
                    id="Calorie Goal"
                    label="Calorie Goal"
                    helperText="Please enter the Calorie Goal"
                />
            </stack>

            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    color="success">
                    Logout
                </Button>
                <Button
                    variant="contained"
                    color="error">
                    Reset Data
                </Button>
            </Stack>
        </div>

    )

}
export default Settings;
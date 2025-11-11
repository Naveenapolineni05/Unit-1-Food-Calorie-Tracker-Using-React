import React from "react";
import CustomizedProgressBar from "./CustomizedProgressBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import WeeklySummary from "./WeeklySummary";

function Progress() {

    return (
        <div>
            <h2>Daily Summary</h2>
            <Card sx={{ minWidth: 200 }} raised>
                <CardContent>
                    <CustomizedProgressBar />
                    <h3>Goal 2000</h3>
                </CardContent>

            </Card>
            <WeeklySummary/>
            <Button
                variant="contained"
            >
                Export/Share Results
            </Button>
        </div>
    )
}
export default Progress;

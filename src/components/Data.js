import React from "react";
import Card from '@mui/material/Card';

const Data = () => {
    return (
        <div className="data">
            <Card component='div' className="sectionOne" sx={(theme) => ({
                [theme.breakpoints.down('xl')]: { 
                    width: '90%', 
                    height: 600, 
                    backgroundColor: 'white', 
                    left: "8%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.up('xl')]: { 
                    width: '90%', 
                    height: 600, 
                    backgroundColor: 'white', 
                    left: "8%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
            })}>

            </Card>
        </div>
    )
}

export default Data
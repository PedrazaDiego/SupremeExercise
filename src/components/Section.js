import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Section = () => {
    return (
        <div className="section">
            <Card component='div' className="sectionOne" sx={{ 
                width: '30%', 
                height: 600, 
                backgroundColor: 'gray', 
                left: "8%",
                display: 'inline-block',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                    component='img'
                    image="https://images.unsplash.com/photo-1524633712235-22da046738b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                    height='100%'
                />
            </Card>
            <Card component='div' sx={{ 
                width: '60%', 
                height: 600, 
                backgroundColor: 'white', 
                left: "38%",
                display: 'inline-block',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }} >
                    <div className="sectionTwo">
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>
                        <button> This is a Button </button>
                    </div>
                    
            </Card>
        </div>
    )
}

export default Section

//couldn't fit image
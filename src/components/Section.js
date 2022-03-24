import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Section = (props) => {
    return (
        <div className="section">
            <Card component='div' className="sectionOne" sx={(theme) => ({
                [theme.breakpoints.up('xl')]: { 
                    width: '30%', 
                    height: 600, 
                    backgroundColor: 'gray', 
                    left: "8%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.down('xl')]: { 
                    width: '30%', 
                    height: 600, 
                    backgroundColor: 'gray', 
                    left: "8%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.down('md')]: {
                    width: '90%', 
                    height: 600, 
                    backgroundColor: 'gray', 
                    left: "8%",
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.down('sm')]: {
                    width: '100%', 
                    height: 440, 
                    backgroundColor: 'gray', 
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
            })}>
                <CardMedia
                    component='img'
                    image={`${props.sharedData.imageTwo}`}
                    height='100%'
                />
            </Card>
            <Card component='div' sx={(theme) => ({ 
                [theme.breakpoints.up('xl')]: {
                    width: '60%', 
                    height: 600, 
                    backgroundColor: 'white', 
                    left: "38%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.down('xl')]: {
                    width: '60%', 
                    height: 600, 
                    backgroundColor: 'white', 
                    left: "38%",
                    display: 'inline-block',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' },
                [theme.breakpoints.down('md')]: {
                    width: '90%', 
                    height: 387, 
                    backgroundColor: 'white',
                    left: "8%",
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    alignContent: 'center' },
                [theme.breakpoints.down('sm')]: {
                    height: '0%'
                }           
            })} >
                    <div className="sectionTwo">
                        <h1 className="title">{props.sharedData.title}</h1>
                        <p className="paragraph"> {props.sharedData.paragraph} </p>
                        <button> This is a Button </button>
                    </div>
                    
            </Card>
        </div>
    )
}

export default Section
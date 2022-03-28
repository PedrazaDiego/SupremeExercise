import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Section from './components/Section';
import Data from './components/Data';
import { sharedData } from './shared_data';


const App = () => {

  const [justiceData, setJusticeData] = useState([])
  const [fullData, setFullData] = useState([])
  const [isLoading, setLoading] = useState(true)    

  const searchLength = 118
  const newDate = new Date()
  const currentDate = `${newDate.getFullYear()}${String(newDate.getMonth()+1).padStart(2,0)}${newDate.getDate()-1}`

  useEffect(() => {
    getJustices()
  }, [])

  const getJustices = async() => {
    //API Justices Call
    const response = await axios.get(`${sharedData.justiceEndPoint}`)  
    setFullData(response.data.slice(-searchLength)) 

    //Length of data being grabbed from the call
    let justicesArr =  [] 
    if(searchLength <= 9){
      justicesArr =  response.data.slice(-searchLength)
    }else if(searchLength > 9){
      justicesArr =  response.data.slice(-searchLength)
    }

    //Get a unique set of parties
    const parties = new Set(justicesArr.map(e => e.nominating_party))

    //Fix dates to API call cases based on the justices' search
    const dates = justicesArr.map(e => e.start_date.substring(0, 10).replaceAll('-', ''))
    const casesResponse = await axios.get(`${sharedData.caseEndPoint}?filter=landmark&before=${currentDate}&after=${dates[0]}`)

    //Numerate cases data to iterate through and get the number os cases since the justices' start_date
    //Currently it is not taking account of cases with a argument_date of null
    let column = []
    const casesArr = Object.values(casesResponse.data)

    //Conditionally selects between current and past justices
    //If searchLength is less or equal to 9 are the current justices
    if(searchLength <= 9){
      for(let i = 0; i < justicesArr.length; i++){
        let res = casesArr.filter((element, index) => element.argument_date > justicesArr[i].start_date)
        column.push([justicesArr[i].name, justicesArr[i].start_date.substring(0, 4).replaceAll('-', ''), i + 1, res.length, justicesArr[i].nominating_party])
        setLoading(false)
      }
    //If searchLength is over 9 it returns info from past and current justices
    } else if(searchLength > 9){
      for(let i = 0; i < justicesArr.length - 9; i++){
        let res = casesArr.filter((element, index) => element.argument_date > justicesArr[i].start_date && element.argument_date < justicesArr[i].finish_date)
        column.push([justicesArr[i].name, justicesArr[i].start_date.substring(0, 4).replaceAll('-', ''), i + 1, res.length, justicesArr[i].nominating_party ])
        setLoading(false)
      }
      //Since the justices are being filtered by start_date and finish_date, the current justices whom don't have finish_date are pushed after the first assignment
      //This block pushes the current justices to the past justices array
      let currentJustices = response.data.slice(-9)
      for(let i = 0; i < 9; i++){
        let res = casesArr.filter((element, index) => element.argument_date > currentJustices[i].start_date)
        column.push([currentJustices[i].name, currentJustices[i].start_date.substring(0, 4).replaceAll('-', ''), (justicesArr.length - 9) + i, res.length, currentJustices[i].nominating_party])
      }
      
    }
    //Sets state to pass as props
    setJusticeData(column)

  }

  if(!justiceData){
    return 'Loading...'
  }
  if(justiceData){
    return (
      <div className='content'>
        <Header sharedData={sharedData}></Header>
        <Section sharedData={sharedData}></Section>
        <div className='inter-section'>
          <h2 className='sub-title'></h2> 
        </div>
        {isLoading ? <></> : <Data justiceData={justiceData} searchLength={searchLength} fullData={fullData}></Data>}
        <Footer></Footer>
      </div>
    );
  }

}

export default App;

import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Section from './components/Section';
import Data from './components/Data';
import { sharedData } from './shared_data';


function App () {

  const [justiceData, setJusticeData] = useState([])

  const searchLength = 50
  const newDate = new Date()
  const currentDate = `${newDate.getFullYear()}${String(newDate.getMonth()+1).padStart(2,0)}${newDate.getDate()-1}`
  let matrix = []

  useEffect(() => {
    getJustices()
  }, [])

  const getJustices = async() => {
    //API Justices Call
    const response = await axios.get(`${sharedData.justiceEndPoint}`)

    //Length of data being grabbed from the call
    const justicesArr = response.data.slice(-searchLength)

    //Fix dates to API call cases based on the justices' search
    const dates = justicesArr.map(e => e.start_date.substring(0, 10).replaceAll('-', ''))
    const casesResponse = await axios.get(`${sharedData.caseEndPoint}?filter=landmark&before=${currentDate}&after=${dates[0]}`)

    //Numerate cases data to iterate through and get the number os cases since the justices' start_date
    //Currently it is not taking account of cases with a argument_date of null
    let column = []
    const casesArr = Object.values(casesResponse.data)
    for(let i = 0; i < justicesArr.length; i++){
      let res = casesArr.filter((element, index) => element.argument_date > justicesArr[i].start_date)
      column.push([justicesArr[i].name, justicesArr[i].start_date.substring(0, 10), i + 1, res.length])
      setJusticeData(column)
      // matrix.push(column)
      // setJusticeData(matrix)
    }
  }

  if(!justiceData){
    return 'Loading...'
  }
  if(justiceData){
    return (
      <div className='content'>
        <Header sharedData={sharedData}></Header>
        <Section sharedData={sharedData}></Section>
        <h2 className='sub-title'>Data</h2>
        <Data justiceData={justiceData} searchLength={searchLength}></Data>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;

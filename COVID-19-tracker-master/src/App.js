import React, {useEffect, useState} from 'react'
import {CountryPicker, Cards, Char} from './components'
import styles from './App.module.css'
import {fetchdata} from './api'

function App () {
  const [data, setdata] = useState({})
  const [country, setCountry] = useState()
  useEffect(() => {
    const fetchingData = async() => {
    const  fetchedData = await fetchdata()
    setdata(fetchedData)
   return data
  }
  fetchingData()
}, [])

const handleChange = async(value) => {
const fetchedData = await fetchdata(value)
setdata(fetchedData)
setCountry(value)
}
  return (
    <div className={styles.container}>
    <h1>Covid-19 Tracker</h1>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Char data={data} country = {country} />
    </div>
  );
}

export default App;

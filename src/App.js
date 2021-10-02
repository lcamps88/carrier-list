import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhonesList from './components/PhonesList'
import carrierList from './data/NoATT-end'

const App = () => {
  const [listPhone, setListPhone] = useState([])
  const getApiData = () => {
    carrierList.reduce(async (prev, phone) => {
      await prev
      const { data } = await axios.get(
        `https://api.blacklistalliance.com/standard/api/v3/Lookup/key/b128a57d1da0fdaea16f8ab95883a5f2/response/json/phone/${phone.number}`
      )
      if (data) {
        setListPhone((listPhone) => [
          ...listPhone,
          {
            number: data.carrier.did,
            name: data.carrier.name,
            fullname: phone.fullname,
            wireless: data.carrier.wireless,
            status: data.status,
          },
        ])
      }

      return Promise.resolve()
    }, Promise.resolve())
  }

  useEffect(() => {
     getApiData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("resultState", listPhone);

  return (
    <div className="full-wrapper">
        <div className="container">
          <h1>List Carrier</h1>
          <PhonesList list={listPhone} />
        </div>
     
    </div>
  )
}
export default App

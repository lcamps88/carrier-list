import React from 'react'
import '../App.css'
import CsvDownloader from 'react-csv-downloader'

const PhonesList = ({ list }) => {

  let att = list?.filter(
    (phoneWr) =>
      phoneWr.wireless === 'Y' &&
      phoneWr.status === 'success' &&
      phoneWr.name !== 'NEW CINGULAR WIRELESS PCS, LLC'
  )

  // const FilterData = () => {
  //   let att = []

  //   att = list?.filter(
  //     (phoneWr) =>
  //       phoneWr.wireless === 'Y' &&
  //       phoneWr.status === 'success' &&
  //       phoneWr.name !== 'NEW CINGULAR WIRELESS PCS, LLC'
  //   )
  // }

  console.log('Data No Filter', list)
  console.log('data Filter', att)

  return (
    <div>
      {/* 
             {attList
              .map((phone, i) => (
                <p key={i}>
                  {phone.number}-{phone.name}-{phone.status}
                </p>
              ))} */}

      <div>
        <CsvDownloader
          datas={att}
          filename={'NoATT929'}
          extension=".csv"
          separator=";"
        >
          <button className="PrimaryBTN">Export Filter LookUp</button>
        </CsvDownloader>

        <br />
        <CsvDownloader
          datas={list}
          filename={'Data No Filter'}
          extension=".csv"
          separator=";"
        >
          <button className="PrimaryBTN">Export All Data</button>
        </CsvDownloader>
      </div>
    </div>
  )
}

export default PhonesList

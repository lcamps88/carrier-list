import React from 'react'
import CsvDownloader from 'react-csv-downloader'

const PhonesList = ({ list }) => {
  console.log('listPhone', list)

  const title = 'LookUp'
  let att = list?.filter(
    (phoneWr) =>
      phoneWr.wireless === 'Y' &&
      phoneWr.status === 'success' &&
      phoneWr.name !== 'NEW CINGULAR WIRELESS PCS, LLC'
  )

console.log(att);

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
          filename={title}
          extension=".csv"
          separator=";"
        >
          <button>Export</button>
        </CsvDownloader>
      </div>
    </div>
  )
}

export default PhonesList

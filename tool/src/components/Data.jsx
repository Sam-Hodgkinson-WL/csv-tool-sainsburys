import React, {useState} from 'react'
import CsvDownloader from 'react-csv-downloader'
import '../style/data.css'

import {createADM, createCPA, createAGC} from '../functions'

function Data() {

    const [rawData, setRawData] = useState(undefined)

  return (
    <div>
        <textarea placeholder='Enter the data from the raw data tab' onChange={(e) => setRawData(e.target.value)}></textarea>
        <div className='buttons'>
          <CsvDownloader 
            text="Download ADM" 
            datas={() => createADM(rawData)} 
            filename="ADM"
            extension='.csv'
            separator=';'
          />
          <CsvDownloader 
            text="Download CPA" 
            datas={() => createCPA(rawData)} 
            filename="CPA"
            extension='.csv'
            separator=';'
          />
          <CsvDownloader 
            text="Download AGC" 
            datas={() => createAGC(rawData)} 
            filename="AGC"
            extension='.csv'
            separator=';'
          />
        </div>
    </div>
  )
}

export default Data
import React, {useState} from 'react'
import CsvDownloader from 'react-csv-downloader'
import '../style/data.css'

import {createADMObject} from '../functions'

function Data() {

    const [rawData, setRawData] = useState(undefined)

  return (
    <div>
        <textarea placeholder='Enter the data from the raw data tab' onChange={(e) => setRawData(e.target.value)}></textarea>
        <div className='buttons'>
          <CsvDownloader 
            text="Download ADM" 
            datas={() => createADMObject(rawData)} 
            filename="ADM"
            extension='.csv'
            separator=';'
          />
          
        </div>
    </div>
  )
}

export default Data
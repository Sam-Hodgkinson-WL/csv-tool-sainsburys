import React, {useState} from 'react'
import '../style/data.css'

import {createADM, createCPA, createAGC, createGAX} from '../functions'

function Data() {

    const [rawData, setRawData] = useState(undefined)
    const [ADMValue, setADMValue] = useState(undefined)
    const [CPAValue, setCPAValue] = useState(undefined)
    const [AGCValue, setAGCValue] = useState(undefined)
    const [GAXValue, setGAXValue] = useState(undefined)

    const handleCreateADM = () => {
        const result = createADM(rawData)
        setADMValue(result)
    }
    const handleCreateCPA = () => {
      const result = createCPA(rawData)
      setCPAValue(result)
    }
    const handleCreateAGC = () => {
      const result = createAGC(rawData)
      setAGCValue(result)
    }
    const handleCreateGAX = () => {
      const result = createGAX(rawData)
      setGAXValue(result)
    }

  return (
    <div>
        <textarea placeholder='Enter the data from the raw data tab' onChange={(e) => setRawData(e.target.value)}></textarea>
        <button className='adm' onClick={() => handleCreateADM()}>Make ADM</button>
        <button className='cpa' onClick={() => handleCreateCPA}>Make CPA</button>
        <button className='agc' onClick={() => handleCreateAGC}>Make AGC</button>
        <button className='gax' onClick={() => handleCreateGAX}>Make GAX</button>
        <button onClick={console.log(rawData)}>Console</button>
        <textarea value={ADMValue} className="adm"/>
        <textarea value={CPAValue} className="cpa"/>
        <textarea value={AGCValue} className="agc"/>
        <textarea value={GAXValue} className="gax"/>
    </div>
  )
}

export default Data
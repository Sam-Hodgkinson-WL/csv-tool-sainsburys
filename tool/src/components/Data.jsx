import React, { useState } from "react";
import CsvDownloader from "react-csv-downloader";
import "../style/data.css";

import { createADM, createCPA, createAGC, createGAX } from "../functions";

function Data() {
  const [rawData, setRawData] = useState(undefined);
  const [ADMData, setADMData] = useState(undefined);
  const [CPAData, setCPAData] = useState(undefined);
  const [AGCData, setAGCData] = useState(undefined);
  const [GAXData, setGAXData] = useState(undefined);

  return (
    <div>
      <button onClick={() => console.log(ADMData)}>Console</button>
      <textarea
        placeholder="Enter the data from the raw data tab"
        onChange={(e) => setRawData(e.target.value)}
      ></textarea>
      <div className="generate-buttons">
        <button onClick={() => setADMData(() => createADM(rawData))}>
          Generate ADM
        </button>
        <button onClick={() => setCPAData(() => createCPA(rawData))}>
          Generate CPA
        </button>
        <button onClick={() => setAGCData(() => createAGC(rawData))}>
          Generate AGC
        </button>
        <button onClick={() => setGAXData(() => createGAX(rawData))}>
          Generate GAX
        </button>
      </div>
      <div className="buttons">
        <CsvDownloader
          text="Download ADM"
          datas={() => createADM(rawData)}
          filename="ADM"
          extension=".csv"
          separator=";"
        />
        <CsvDownloader
          text="Download CPA"
          datas={() => createCPA(rawData)}
          filename="CPA"
          extension=".csv"
          separator=";"
        />
        <CsvDownloader
          text="Download AGC"
          datas={() => createAGC(rawData)}
          filename="AGC"
          extension=".csv"
          separator=";"
        />
        <CsvDownloader
          text="Download GAX"
          datas={() => createGAX(rawData)}
          filename="GAX"
          extension=".csv"
          separator=";"
        />
      </div>
    </div>
  );
}

export default Data;

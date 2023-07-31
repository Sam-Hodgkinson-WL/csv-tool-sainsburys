import React, { useState, useEffect } from "react";
import CsvDownloader from "react-csv-downloader";
import "../style/data.css";

import {
  createADM,
  createCPA,
  createAGC,
  createGAX,
  createOutputData,
  massmoveArray,
} from "../functions";

function Data() {
  const [rawData, setRawData] = useState(undefined);
  const [singleStore, setSingleStore] = useState("andOthers");
  const [storeNumber, setStoreNumber] = useState("");
  const [ADMData, setADMData] = useState(undefined);
  const [CPAData, setCPAData] = useState(undefined);
  const [AGCData, setAGCData] = useState(undefined);
  const [GAXData, setGAXData] = useState(undefined);
  const [outputData, setOutputData] = useState(undefined);
  const [massmoveData, setMassmoveData] = useState(undefined);

  function handleCopyButtonClick() {
    navigator.clipboard.writeText(outputData);
  }

  useEffect(() => {
    if (rawData !== undefined && rawData[0] !== undefined) {
      setADMData(createADM(rawData));
      setCPAData(createCPA(rawData));
      setAGCData(createAGC(rawData));
      setGAXData(createGAX(rawData));
      setOutputData(createOutputData(rawData));
      setMassmoveData(massmoveArray);
    }
  }, [rawData]);

  const CPAColumns = [
    {
      id: "1",
      displayName: "E-Portal Zone",
    },
    {
      id: "2",
      displayName: "NUM_NumComm",
    },
    {
      id: "3",
      displayName: "NUM_MerchantID_Worldpay",
    },
    {
      id: "4",
      displayName: "NUM_MerchantID_Amex",
    },
    {
      id: "5",
      displayName: "NUM_MerchantID_Barclaycard",
    },
    {
      id: "6",
      displayName: "NUM_MerchantID_Tsys",
    },
    {
      id: "7",
      displayName: "POS_TerminalID",
    },
    {
      id: "8",
      displayName: "POS_POSNumber",
    },
    {
      id: "9",
      displayName: "NUM_Environment",
    },
    {
      id: "10",
      displayName: "NUM_CompanyID_Worldpay",
    },
    {
      id: "11",
      displayName: "NUM_Beach",
    },
    {
      id: "12",
      displayName: "NUM_AFD",
    },
    {
      id: "13",
      displayName: "POS_Environment",
    },
  ];
  const ADMColumns = [
    {
      id: "1",
      displayName: "E-Portal Zone",
    },
    {
      id: "2",
      displayName: "POS_POSNumber",
    },
    {
      id: "3",
      displayName: "POS_PCI4",
    },
  ];
  const AGCColumns = [
    {
      id: "1",
      displayName: "E-Portal Zone",
    },
    {
      id: "2",
      displayName: "NUM_NumComm",
    },
    {
      id: "3",
      displayName: "NUM_MerchantID_IKANO",
    },
    {
      id: "4",
      displayName: "NUM_MerchantID_PPSUK",
    },
    {
      id: "5",
      displayName: "NUM_MerchantID_EPAYUK",
    },
    {
      id: "6",
      displayName: "POS_TerminalID",
    },
    {
      id: "7",
      displayName: "POS_POSNumber",
    },
  ];
  const GAXColumns = [
    {
      id: "1",
      displayName: "E-Portal Zone",
    },
    {
      id: "2",
      displayName: "NUM_NumComm",
    },
    {
      id: "3",
      displayName: "NUM_MerchantID_SAVEBACK",
    },
    {
      id: "4",
      displayName: "POS_POSNumber",
    },
  ];
  const massmoveColumns = [
    {
      id: "1",
      displayName: "E-PORTAL: ZONE",
    },
    {
      id: "2",
      displayName: "CURRENCY",
    },
    {
      id: "3",
      displayName: "CUSTOMERFINANCE_EXTERNALID",
    },
    {
      id: "4",
      displayName: "CITY.2",
    },
    {
      id: "5",
      displayName: "ZIP CODE.2",
    },
    {
      id: "6",
      displayName: "ADDRESS 1.2",
    },
    {
      id: "7",
      displayName: "ADDRESS 2.2",
    },
  ];

  return (
    <div>
      <div className="user-container">
        <textarea
          placeholder="Enter the data from the raw data tab"
          onChange={(e) => setRawData(e.target.value)}
        ></textarea>
        <div className="file-name-form">
          <label>Store Number: </label>
          <input type="text" onChange={(e) => setStoreNumber(e.target.value)} />
          <select onChange={(e) => setSingleStore(e.target.value)}>
            <option value="andOthers">Multiple stores</option>
            <option value="">Single store</option>
          </select>
        </div>
        <div className="buttons">
          <CsvDownloader
            text="Download ADM"
            columns={ADMColumns}
            datas={ADMData}
            filename={`Store-${storeNumber}${singleStore}-ADM`} // prettier-ignore
            extension=".csv"
            separator=";"
            disabled={!rawData || !ADMData}
          />
          <CsvDownloader
            text="Download CPA"
            columns={CPAColumns}
            datas={CPAData}
            filename={`Store-${storeNumber}${singleStore}-CPA`} // prettier-ignore
            extension=".csv"
            separator=";"
            disabled={!rawData || !CPAData}
          />
          <CsvDownloader
            text="Download AGC"
            columns={AGCColumns}
            datas={AGCData}
            filename={`Store-${storeNumber}${singleStore}-AGC`} // prettier-ignore
            extension=".csv"
            separator=";"
            disabled={!rawData || !AGCData}
          />
          <CsvDownloader
            text="Download GAX"
            columns={GAXColumns}
            datas={GAXData}
            filename={`Store-${storeNumber}${singleStore}-GAX`} // prettier-ignore
            extension=".csv"
            separator=";"
            disabled={!rawData || !GAXData}
          />
          <CsvDownloader
            text="Download Massmove (TO BE COMPLETED)"
            columns={massmoveColumns}
            datas={massmoveArray}
            filename={`Store-${storeNumber}${singleStore}-Massmove`}
            extension=".csv"
            separator=";"
          />

          <button
            className="copy-button"
            onClick={() => handleCopyButtonClick()}
            disabled={!rawData || !outputData}
          >
            Copy Output Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default Data;

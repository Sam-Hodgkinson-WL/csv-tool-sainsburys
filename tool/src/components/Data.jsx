import React, { useState } from "react";
import CsvDownloader from "react-csv-downloader";
import { BiCopyAlt } from "react-icons/bi";
import "../style/data.css";

import {
  createADM,
  createCPA,
  createAGC,
  createGAX,
  createOutputData,
  cleanOutputData,
} from "../functions";

function Data() {
  const [rawData, setRawData] = useState(undefined);
  const [outputData, setOutputData] = useState(undefined);
  const [singleStore, setSingleStore] = useState("andOthers");
  const [storeNumber, setStoreNumber] = useState("");

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

  const handleCopyButtonClick = async () => {
    // let dirtyOutputData = createOutputData(rawData);
    // setOutputData(cleanOutputData(dirtyOutputData)); // Required function to remove the empty cell in excel
    setOutputData(createOutputData(rawData));
    outputData
      ? navigator.clipboard.writeText(outputData)
      : window.Error(
          "Something went wrong with the generation of the output data"
        );
  };

  return (
    <div>
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
        <button onClick={() => console.log(singleStore)}>
          Console singleStore
        </button>
      </div>
      <div className="buttons">
        <CsvDownloader
          text="Download ADM"
          columns={ADMColumns}
          datas={() => createADM(rawData)}
          filename={`Store-${storeNumber}${singleStore}-ADM`} // prettier-ignore
          extension=".csv"
          separator=";"
          disabled={!rawData}
        />
        <CsvDownloader
          text="Download CPA"
          columns={CPAColumns}
          datas={() => createCPA(rawData)}
          filename={`Store-${storeNumber}${singleStore}-CPA`} // prettier-ignore
          extension=".csv"
          separator=";"
          disabled={!rawData}
        />
        <CsvDownloader
          text="Download AGC"
          columns={AGCColumns}
          datas={() => createAGC(rawData)}
          filename={`Store-${storeNumber}${singleStore}-AGC`} // prettier-ignore
          extension=".csv"
          separator=";"
          disabled={!rawData}
        />
        <CsvDownloader
          text="Download GAX"
          columns={GAXColumns}
          datas={() => createGAX(rawData)}
          filename={`Store-${storeNumber}${singleStore}-GAX`} // prettier-ignore
          extension=".csv"
          separator=";"
          disabled={!rawData}
        />
        <button
          className="copy-button"
          onClick={() => handleCopyButtonClick()}
          disabled={!rawData}
        >
          Copy Output Data
        </button>
        {/* <BiCopyAlt
          className="copy-button"
          size={55}
          onClick={() => handleCopyButtonClick()}
          disabled={!rawData}
        /> */}
      </div>
    </div>
  );
}

export default Data;

////////////////////////////////////////////////////////////////////
// Raw Data
let blankVariableForm = {
  //****************************** ADM CSV ******************************
  E_PORTAL_ZONE: undefined,
  POS_POS_NUMBER: undefined,
  POS_PCI4: undefined,
  //****************************** CPA CSV ******************************
  //E_PORTAL_ZONE DEFINED ABOVE
  NUM_NUMCOMM: undefined,
  NUM_MERCHANT_ID_WORLDPAY: undefined,
  NUM_MERCHANT_ID_AMEX: undefined,
  NUM_MERCHANT_ID_BARCLAYCARD: undefined,
  NUM_MERCHANT_ID_TSYS: undefined,
  POS_TERMINAL_ID: undefined,
  // POS_POS_NUMBER: undefined, DEFINED ABOVE
  NUM_ENVIRONMENT: undefined,
  NUM_COMPANY_ID_WORLDPAY: undefined,
  NUM_BEACH: undefined,
  NUM_AFD: undefined,
  POS_ENVIRONMENT: undefined,
  //****************************** AGC CSV ******************************
  //E_PORTAL_ZONE DEFINED ABOVE
  // NUM_NUMCOMM DEFINED ABOVE
  NUM_MERCHANT_ID_IKANO: undefined,
  NUM_MERCHANT_ID_PPSUK: undefined,
  NUM_MERCHANT_ID_EPAYUK: undefined,
  //POS_TERMINAL_ID DEFINED ABOVE
  //POS_POS_NUMBER DEFINED ABOVE
  //****************************** GAX CSV ******************************
  // E_PORTAL_ZONE DEFINED ABOVE
  // NUM_NUMCOMM DEFINED ABOVE
  NUM_MERCHANT_ID_SAVEBACK: undefined,
  //POS_POS_NUMBER DEFINED ABOVE#
  //****************************** MASSMOVE CSV ******************************
  // E_PORTAL_ZONE DEFINED ABOVE
  CURRENCY: undefined,
  CUSTOMER_FINANCE_EXTERNAL_ID: undefined,
  CITY_2: undefined,
  ZIP_CODE_2: undefined,
  ADDRESS_1_2: undefined,
  ADDRESS_2_2: undefined,
};

let blankOutputForm = {
  AA: undefined,
  AB: undefined,
  AC: undefined,
  AD: undefined,
  AE: undefined,
  AF: undefined,
  AG: undefined,
  AH: undefined,
  AI: undefined,
};

const storeLookup = {
  Main: { numcommAppend: "00", worldpayID: "025549" },
  PFS: { numcommAppend: "01", worldpayID: "027492" },
  Local: { numcommAppend: "05", worldpayID: "109779" },
  OPT: { numcommAppend: "06", worldpayID: "114288" },
  SCO: { numcommAppend: "07", worldpayID: "112326" },
  Pharmacy: { numcommAppend: "09", worldpayID: "372835" },
};

////////////////////////////////////////////////////////////////////
// ADM
function createADM(data) {
  const ADM_DATA = [];
  const lines = data.split("\n");
  lines.forEach((line) => {
    const values = line.split("\t");
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.POS_POS_NUMBER = values[25];
    blankVariableForm.POS_PCI4 = values[25] % 2 === 0 ? 0 : 1;
    ADM_DATA.push({
      1: blankVariableForm.E_PORTAL_ZONE,
      2: blankVariableForm.POS_POS_NUMBER,
      3: blankVariableForm.POS_PCI4,
    });
  });
  return ADM_DATA;
}

////////////////////////////////////////////////////////////////////
// CPA
async function createCPA(data) {
  const CPA_DATA = [];
  const lines = data.split("\n");
  await lines.forEach((line) => {
    const values = line.split("\t");
    const LEVEL_3_SPLIT = values[2].split("_");
    const storeNum = values[3];
    const storeType = LEVEL_3_SPLIT[1];
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = `3${storeNum}${storeLookup[storeType].numcommAppend}`; // Double check this function with MIKE S!!!
    blankVariableForm.NUM_MERCHANT_ID_WORLDPAY = values[13];
    blankVariableForm.NUM_MERCHANT_ID_AMEX = values[14];
    blankVariableForm.NUM_MERCHANT_ID_BARCLAYCARD = values[16];
    blankVariableForm.NUM_MERCHANT_ID_TSYS = values[22] === "NULL" ? "4000" + blankVariableForm.NUM_NUMCOMM.split("").slice(2, 5) : values[22]; // prettier-ignore
    blankVariableForm.POS_TERMINAL_ID = values[24];
    blankVariableForm.POS_POS_NUMBER = values[25];
    blankVariableForm.NUM_ENVIRONMENT = LEVEL_3_SPLIT[1];
    blankVariableForm.NUM_COMPANY_ID_WORLDPAY = storeLookup[LEVEL_3_SPLIT[1]].worldpayID ; // prettier-ignore
    blankVariableForm.NUM_BEACH = values[10];
    blankVariableForm.NUM_AFD = LEVEL_3_SPLIT[1] === "OPT" ? "Y" : "N";
    blankVariableForm.POS_ENVIRONMENT = LEVEL_3_SPLIT[1];

    CPA_DATA.push({
      1: blankVariableForm.E_PORTAL_ZONE,
      2: blankVariableForm.NUM_NUMCOMM,
      3: blankVariableForm.NUM_MERCHANT_ID_WORLDPAY,
      4: blankVariableForm.NUM_MERCHANT_ID_AMEX,
      5: blankVariableForm.NUM_MERCHANT_ID_BARCLAYCARD,
      6: blankVariableForm.NUM_MERCHANT_ID_TSYS,
      7: blankVariableForm.POS_TERMINAL_ID,
      8: blankVariableForm.POS_POS_NUMBER,
      9: blankVariableForm.NUM_ENVIRONMENT,
      10: blankVariableForm.NUM_COMPANY_ID_WORLDPAY,
      11: blankVariableForm.NUM_BEACH,
      12: blankVariableForm.NUM_AFD,
      13: blankVariableForm.POS_ENVIRONMENT,
    });
  });
  return CPA_DATA;
}

////////////////////////////////////////////////////////////////////
// AGC
async function createAGC(data) {
  const AGC_DATA = [];
  const lines = data.split("\n");
  await lines.forEach((line) => {
    const values = line.split("\t");
    const LEVEL_3_SPLIT = values[2].split("_");
    const storeNum = values[3];
    const storeType = LEVEL_3_SPLIT[1];
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = `3${storeNum}${storeLookup[storeType].numcommAppend}`; // Double check this function with MIKE S!!!
    blankVariableForm.NUM_MERCHANT_ID_IKANO = 79569999;
    blankVariableForm.NUM_MERCHANT_ID_PPSUK = values[21];
    blankVariableForm.NUM_MERCHANT_ID_EPAYUK = values[20];
    blankVariableForm.POS_TERMINAL_ID = values[24];
    blankVariableForm.POS_POS_NUMBER = values[25];

    AGC_DATA.push({
      1: blankVariableForm.E_PORTAL_ZONE,
      2: blankVariableForm.NUM_NUMCOMM,
      3: blankVariableForm.NUM_MERCHANT_ID_IKANO,
      4: blankVariableForm.NUM_MERCHANT_ID_PPSUK,
      5: blankVariableForm.NUM_MERCHANT_ID_EPAYUK,
      6: blankVariableForm.POS_TERMINAL_ID,
      7: blankVariableForm.POS_POS_NUMBER,
    });
  });
  return AGC_DATA;
}
////////////////////////////////////////////////////////////////////
// GAX
async function createGAX(data) {
  const GAX_DATA = [];
  const lines = data.split("\n");
  await lines.forEach((line) => {
    const values = line.split("\t");
    const LEVEL_3_SPLIT = values[2].split("_");
    const storeNum = values[3];
    const storeType = LEVEL_3_SPLIT[1];
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = `3${storeNum}${storeLookup[storeType].numcommAppend}`; // Double check this function with MIKE S!!!
    blankVariableForm.NUM_MERCHANT_ID_SAVEBACK = "00000000000";
    blankVariableForm.POS_POS_NUMBER = values[25];

    GAX_DATA.push({
      1: blankVariableForm.E_PORTAL_ZONE,
      2: blankVariableForm.NUM_NUMCOMM,
      3: blankVariableForm.NUM_MERCHANT_ID_SAVEBACK,
      4: blankVariableForm.POS_POS_NUMBER,
    });
  });
  return GAX_DATA;
}

function createOutputData(data) {
  const lines = data.split("\n");
  lines.forEach((line) => {
    const values = line.split("\t");
    const LEVEL_3_SPLIT = values[2].split("_");
    const storeNum = values[3];
    const storeType = LEVEL_3_SPLIT[1];
    blankOutputForm.AA = storeType === "OPT" ? "Y" : "N";
    blankOutputForm.AB = storeType;
    blankOutputForm.AC = `3${storeNum}${storeLookup[storeType].numcommAppend}`;
    // set all variables AA - AI in the blankOutputForm variable defined above
  });
  console.log(data);
}

module.exports = {
  createADM,
  createCPA,
  createAGC,
  createGAX,
  createOutputData,
};

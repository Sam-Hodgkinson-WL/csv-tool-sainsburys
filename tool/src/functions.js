////////////////////////////////////////////////////////////////////
// DO NOT MOVE THIS VARIABLE
const massmoveObject = [];

////////////////////////////////////////////////////////////////////
// Raw Data
let blankVariableForm = {
  E_PORTAL_ZONE: undefined,
  POS_POS_NUMBER: undefined,
  POS_PCI4: undefined,
  NUM_NUMCOMM: undefined,
  NUM_MERCHANT_ID_WORLDPAY: undefined,
  NUM_MERCHANT_ID_AMEX: undefined,
  NUM_MERCHANT_ID_BARCLAYCARD: undefined,
  NUM_MERCHANT_ID_TSYS: undefined,
  POS_TERMINAL_ID: undefined,
  NUM_ENVIRONMENT: undefined,
  NUM_COMPANY_ID_WORLDPAY: undefined,
  NUM_BEACH: undefined,
  NUM_AFD: undefined,
  POS_ENVIRONMENT: undefined,
  NUM_MERCHANT_ID_IKANO: undefined,
  NUM_MERCHANT_ID_PPSUK: undefined,
  NUM_MERCHANT_ID_EPAYUK: undefined,
  NUM_MERCHANT_ID_SAVEBACK: undefined,
  CURRENCY: "GBP",
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
  lines.forEach((line) => {
    const values = line.split("\t");
    if (values[2] === undefined) {
      return;
    }
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
  let AGC_DATA = [];
  const lines = data.split("\n");
  await lines.forEach((line) => {
    const values = line.split("\t");
    if (values[2] === undefined) {
      return;
    }
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
    if (values[2] === undefined) {
      return;
    }
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

function checkNewEnv(tpv, line) {
  const values = line.split("\t");
  const checkAgainst = ["001", "061", "111", "166", "181"];
  const tpvSplit = tpv.split("");
  const env = tpvSplit.slice(-3, tpvSplit.length).join("");
  const E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
  const FINANCE_EXTERNAL_ID = values[11];
  const CITY_2 = values[6];
  const ZIP_CODE_2 = values[7];
  const ADDRESS_1_2 = values[5];
  const ADDRESS_2_2 = `${values[6]} ${values[7]}`;
  const massmoveEntry = {
    1: E_PORTAL_ZONE,
    2: blankVariableForm.CURRENCY,
    3: FINANCE_EXTERNAL_ID,
    4: CITY_2,
    5: ZIP_CODE_2,
    6: ADDRESS_1_2,
    7: ADDRESS_2_2,
  };
  if (checkAgainst.includes(env)) {
    console.log("just ran");
    massmoveObject.push(massmoveEntry);
  }
  return checkAgainst.includes(env) ? "Yes" : "No";
}

function checkDefined(WP, Amx, Brcl) {
  if (WP !== undefined && Amx !== undefined && Brcl !== undefined) {
    return "/-/-/";
  } else {
    return "You will have to do this manually with Mikes Excel sheets!";
  }
}

function createOutputData(data) {
  let returnArr = [];
  const lines = data.split("\n");
  lines.forEach((line) => {
    const values = line.split("\t");
    if (values[2] === undefined) {
      return;
    }
    const LEVEL_3_SPLIT = values[2].split("_");
    const storeNum = values[3];
    const storeType = LEVEL_3_SPLIT[1];
    blankOutputForm.AA = storeType === "OPT" ? "Y" : "N";
    blankOutputForm.AB = storeType;
    blankOutputForm.AC = `3${storeNum}${storeLookup[storeType].numcommAppend}`;
    blankOutputForm.AD = "COME BACK TO THIS! MIGHT NEED TO POPULATE AN ARRAY OF ALL TID's"; // prettier-ignore
    blankOutputForm.AE = values[2] === `${LEVEL_3_SPLIT[0]} ${values[4]}`; // Double check
    blankOutputForm.AF = "Come back to this one at a later date - CARD_ACC OK?";
    blankOutputForm.AG = "Come back to this one at a later date - MAIN/LOCAL CLASH" // prettier-ignore
    blankOutputForm.AH = checkNewEnv(values[25], line);
    blankOutputForm.AI = checkDefined(values[13], values[14], values[16]);

    returnArr.push(
      `${line}\t${blankOutputForm.AA}\t${blankOutputForm.AB}\t${blankOutputForm.AC}\t${blankOutputForm.AD}\t${blankOutputForm.AE}\t${blankOutputForm.AF}\t${blankOutputForm.AG}\t${blankOutputForm.AH}\t${blankOutputForm.AI}`
    );
    returnArr.push("\n");
  });
  return returnArr.join("");
}

module.exports = {
  createADM,
  createCPA,
  createAGC,
  createGAX,
  createOutputData,
  massmoveObject,
};

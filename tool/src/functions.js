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
      cell1: blankVariableForm.E_PORTAL_ZONE,
      cell2: blankVariableForm.POS_POS_NUMBER,
      cell3: blankVariableForm.POS_PCI4,
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
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!"; // ASK MIKE S ABOUT THIS FUNCTION AND THE FUNCTION FOR NUM_MERCHANT_ID_TSYS!!!
    blankVariableForm.NUM_MERCHANT_ID_WORLDPAY = values[13];
    blankVariableForm.NUM_MERCHANT_ID_AMEX = values[14];
    blankVariableForm.NUM_MERCHANT_ID_BARCLAYCARD = values[16];
    blankVariableForm.NUM_MERCHANT_ID_TSYS = values[22] === "NULL" ? "4000" + blankVariableForm.NUM_NUMCOMM.split("").slice(2, 5) : values[22]; // prettier-ignore
    blankVariableForm.POS_TERMINAL_ID = values[24];
    blankVariableForm.POS_POS_NUMBER = values[25];
    blankVariableForm.NUM_ENVIRONMENT = LEVEL_3_SPLIT[1];
    blankVariableForm.NUM_COMPANY_ID_WORLDPAY = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!"; // prettier-ignore
    blankVariableForm.NUM_BEACH = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!";
    blankVariableForm.NUM_AFD = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!";
    blankVariableForm.POS_ENVIRONMENT = LEVEL_3_SPLIT[1];

    CPA_DATA.push({
      cell1: blankVariableForm.E_PORTAL_ZONE,
      cell2: blankVariableForm.NUM_NUMCOMM,
      cell3: blankVariableForm.NUM_MERCHANT_ID_WORLDPAY,
      cell4: blankVariableForm.NUM_MERCHANT_ID_AMEX,
      cell5: blankVariableForm.NUM_MERCHANT_ID_BARCLAYCARD,
      cell6: blankVariableForm.NUM_MERCHANT_ID_TSYS,
      cell7: blankVariableForm.POS_TERMINAL_ID,
      cell8: blankVariableForm.POS_POS_NUMBER,
      cell9: blankVariableForm.NUM_ENVIRONMENT,
      cell10: blankVariableForm.NUM_COMPANY_ID_WORLDPAY,
      cell11: blankVariableForm.NUM_BEACH,
      cell12: blankVariableForm.NUM_AFD,
      cell13: blankVariableForm.POS_ENVIRONMENT,
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
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!"; // ASK MIKE S ABOUT THIS FUNCTION AND THE FUNCTION FOR NUM_MERCHANT_ID_TSYS!!!
    blankVariableForm.NUM_MERCHANT_ID_IKANO = 79569999;
    blankVariableForm.NUM_MERCHANT_ID_PPSUK = values[21];
    blankVariableForm.NUM_MERCHANT_ID_EPAYUK = values[20];
    blankVariableForm.POS_TERMINAL_ID = values[24];
    blankVariableForm.POS_POS_NUMBER = values[25];

    AGC_DATA.push({
      cell1: blankVariableForm.E_PORTAL_ZONE,
      cell2: blankVariableForm.NUM_NUMCOMM,
      cell3: blankVariableForm.NUM_MERCHANT_ID_IKANO,
      cell4: blankVariableForm.NUM_MERCHANT_ID_PPSUK,
      cell5: blankVariableForm.NUM_MERCHANT_ID_EPAYUK,
      cell6: blankVariableForm.POS_TERMINAL_ID,
      cell7: blankVariableForm.POS_POS_NUMBER,
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
    blankVariableForm.E_PORTAL_ZONE = `${values[0]}>>${values[1]}>>${values[2]}`;
    blankVariableForm.NUM_NUMCOMM = "SPEAK TO MIKE S TO FIGURE THIS ONE OUT!!!"; // ASK MIKE S ABOUT THIS FUNCTION AND THE FUNCTION FOR NUM_MERCHANT_ID_TSYS!!!
    blankVariableForm.NUM_MERCHANT_ID_SAVEBACK = "00000000000";
    blankVariableForm.POS_POS_NUMBER = values[25];

    GAX_DATA.push({
      cell1: blankVariableForm.E_PORTAL_ZONE,
      cell2: blankVariableForm.NUM_NUMCOMM,
      cell3: blankVariableForm.NUM_MERCHANT_ID_SAVEBACK,
      cell4: blankVariableForm.POS_POS_NUMBER,
    });
  });
  return GAX_DATA;
}

module.exports = {
  createADM,
  createCPA,
  createAGC,
  createGAX,
};

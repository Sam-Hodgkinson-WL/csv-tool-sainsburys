function createADM(data) {
  let returnArr = [];
  const lines = data.split('\n')
  lines.forEach(line => {
    const values = line.split('\t')
    returnArr.push({
      cell1: `${values[0]}>>${values[1]}>>${values[2]}`, 
      cell2: values[25], 
      cell3: values[25] % 2 === 0 ? 0 : 1
    })
  })
  return returnArr
}

function createCPA(data) {
  let returnArr = [];
  const lines = data.split('\n')
  lines.forEach(line => {
    const values = line.split('\t')
    returnArr.push({
      cell1: `${values[0]}>>${values[1]}>>${values[2]}`,
      cell2: values[28],
      cell3: values[13],
      cell4: values[14],
      cell5: values[16],
      cell6: values[22],
      cell7: values[24],
      cell8: values[25],
      cell9: values[27],
      cell10: "NUM_CompanyID_Worldpay",
      cell11: "NUM_Beach",
      cell12: "NUM_AFD",
      cell13: values[27],
    })
  })
  return returnArr
}

function createAGC(data) {
  let returnArr = [];
  const lines = data.split('\n')
  lines.forEach(line => {
    const values = line.split('\t')
    console.log(values)
    returnArr.push({
      cell1: `${values[0]}>>${values[1]}>>${values[2]}`,
      cell2: values[28], 
      cell3: "NUM_MerchantID_Ikano",
      cell4: values[22],
      cell5: "NUM_MerchantID_PPSUK",
      // cell6: ,
      // cell7: ,
      // cell8: ,
      // cell9: ,
      // cell10: ,
      // cell11: ,
      // cell12: ,
      // cell13:
    })
  })
  return returnArr
}

// function createGAX(data) {
//   let returnArr = [];
//   const lines = data.split('\n')
//   lines.forEach(line => {
//     const values = line.split('\t')
//     returnArr.push({
//       cell1: ,
//       cell2: , 
//       cell3: ,
//       cell4: ,
//       cell5: ,
//       cell6: ,
//       cell7: ,
//       cell8: ,
//       cell9: ,
//       cell10: ,
//       cell11: ,
//       cell12: ,
//       cell13:
//     })
//   })
//   return returnArr
// }

module.exports = {
    createADM,
    createCPA,
    createAGC,
    // createGAX
}
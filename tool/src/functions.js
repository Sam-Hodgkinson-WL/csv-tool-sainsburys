// function createADMObject(rawData) {
//     let returnArr = []
//     const lines = rawData.split('\n')
//     lines.forEach(line => {
//         const split = line.split(',')
//         const length = split.length
//         returnArr.push({cell1:`${split[0]}>>${split[1]}>>${split[2]}`, cell2:split[length-2], cell3:split[length-2]%2===0?0:1})
//     })
//     return returnArr
// }

// function createCPAObject(rawData) {
//     let returnArr = [];
//     const lines = rawData.split('\n')
//     lines.forEach(line => {
//         console.log(line.split('    '))
//     })
// }

function createADM(data) {
    let returnArr = [];
    const lines = data.split('\n')
    lines.forEach(line => {
      const values = line.split('\t')
      returnArr.push({cell1: `${values[0]}>>${values[1]}>>${values[2]}`, cell2: values[25], cell3: values[25] % 2 === 0 ? 0 : 1})
    })
    return returnArr
  }

module.exports = {
    createADM,
}
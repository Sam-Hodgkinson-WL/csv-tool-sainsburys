function createADM(rawData) {
    let returnArr = []
    const lines = rawData.split('\n')
    lines.forEach(line => {
        const split = line.split(',')
        const length = split.length
        returnArr.push(`${split[0]}>>${split[1]}>>${split[2]};${split[length-2]};${split[length-2]%2===0?0:1}`)
    })
    return returnArr.join('\n')
}

function createCPA(rawData) {
    let returnArr = [];
    const lines = rawData.split('\n')
    lines.forEach(line => {
        const split = line.split(',')
        const length = split.length
        returnArr.push(`${split[0]}>>${split[1]}>>${split[2]};${split[length-2]};${split[length-2]%2===0?0:1}`)

    })
}

function createAGC(rawData) {
    let returnArr = [];
    const lines = rawData.split('\n')
    lines.forEach(line => {
        const split = line.split(',')
        const length = split.length
        returnArr.push(`${split[0]}>>${split[1]}>>${split[2]};${split[length-2]};${split[length-2]%2===0?0:1}`)

    })
}

function createGAX(rawData) {
    let returnArr = [];
    const lines = rawData.split('\n')
    lines.forEach(line => {
        const split = line.split(',')
        const length = split.length
        returnArr.push(`${split[0]}>>${split[1]}>>${split[2]};${split[length-2]};${split[length-2]%2===0?0:1}`)

    })
}

module.exports = {
    createADM,
    createCPA,
    createAGC,
    createGAX,
}
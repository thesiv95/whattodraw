const data = require('./data'); // strings array

const returnIndex = () => Math.floor(Math.random() * data.length);

/**
 * Main function
 * @param {number} items How many strings should be returned, 1 by default
 * @returns {string|Array<string>} draw suggestion string(-s)
 */

const generate = (items = 1) => {

    if (typeof items !== 'number'){
        throw new Error('Must be number');
    }

    if (items <= 0){
        throw new Error('Must be positive value');
    }

    if (items === 1){
        const index = returnIndex();
        return data[index];
    }

    // else
    const strings = [];
    for (let i = 0; i < items; i++){
        const index = returnIndex();
        strings.push(data[index]);
    }
    return strings;
}

module.exports = generate;
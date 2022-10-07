function argumentInfo (...params) {
    let result = {};

    for (let element of params) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    let buff = '';

    for (let [key, value] of Object.entries(result)) {
        buff += `${key} = ${value}\n`;
    }

    console.log(buff);
};

argumentInfo ('cat', 42, function () { console.log('Hello world!'); });
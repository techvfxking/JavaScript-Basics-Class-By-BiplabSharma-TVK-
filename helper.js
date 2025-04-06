export const printObjects = (obj = undefined, type = 0) => {
    if (obj === undefined || obj === null) return;

    if (type === 0) return;

    switch (type) {
        case 1:
            let keys = Object.keys(obj);
            for (const [index, key] of keys.entries()) {
                const value = obj[key];
                console.log(`Key: "${key}" & Value: ${typeof value === 'string' ? `"${value}"` : value}`)
            }
            break;
        case 2:
            for (const key in obj) {
                const value = obj[key];
                console.log(`Key: "${key}" & Value: ${typeof value === 'string' ? `"${value}"` : value}`)
            }
            break;
    }
}   
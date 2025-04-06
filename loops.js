export const loops = (arr = [], type = 1) => {
    let result = 0;
    //1st way
    if (type === 1) { //Simple Loop
        for (let i = 0; i < arr.length; i++) {
            let elem = arr[i];
            result += elem;
        }
    }
    //2nd Way 
    else if (type === 2) { //For each loop
        arr.forEach((value, index) => {
            result += value
        });
    }
    //3rd Way 
    else if (type === 3) {//For Of Loop return array object with Index and Array element
        for (const [index, value] of arr.entries()) {
            result += value
        }
    }
    //4th Way
    else if (type === 4) { //For in loop returns only Index
        for (const obj in arr) {
            const value = arr[obj];
            result += value;
        }
    }
    //5th Way
    else if (type === 5) {
        let i = 0;
        while (i < arr.length) {
            const value = arr[i];
            result += value;
            i++;
        }
    }
    //6th Way
    else if (type === 6) {
        let i = 0;
        do {
            const value = arr[i];
            result += value;
            i++;
        } while (i < arr.length);
    }
    //7th Way
    else if (type === 7) {
        arr.map((item, index) => {
            result += item;
        });
    } //8th Way
    else if (type === 8) {
        result = ((arr) => {
            let i = 0;
            let rs = 0;
            do {
                const value = arr[i];
                rs += value;
                i++;
            } while (i < arr.length);
            return rs;
        })(arr)
    }

    console.log(`Type: ${type} and Result: ${result}`);
}
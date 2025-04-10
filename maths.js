export const max_min = () => {
    const arr = [1,3,-9,12,90];
    console.log(`Max: ${Math.max(...arr)}`)
    console.log(`Min: ${Math.min(...arr)}`)
}

export const min_ = () => {
    const arr = [1,3,-9,12,90];

    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min)
            min = arr[i];
    }

    console.log(min);
}

export const max_ = () => {
    const arr = [1,3,-9,12,90];

    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }

    console.log(max);
}


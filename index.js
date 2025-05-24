import { loops } from "./loops.js";
import { obj, filterObject, spreadOperators, spreadOperatorExcercise } from "./arrAndObjects.js";
import { max_min, min_, max_ } from './maths.js'
import { Main, Main2, Main3 } from "./classTest.js";
import { callMovieApi } from "./apiCall.js";

const main = () => {
    //filterObject();
    //spreadOperators();
    //spreadOperatorExcercise()
    //loops([1, 2, 3], 8);
    //min_();
    //max_();

    /* Class 1 */
    // let obj = new Main();
    // obj.name = "Biplab"
    // obj.printName();

    // let obj = new Main2("B",1);
    // obj.print();

    // Main3.print(); //Static Method
    // Main3.check()

    // callMovieApi();

    const mergeSort = (arr = [1]) => {
      return arr.length <= 1 ? arr : merge(
        mergeSort(arr.slice(0, Math.floor(arr.length/2))),
        mergeSort(arr.slice(Math.floor(arr.length/2))),
      );
    }
    const merge = (left = [1], right = [1]) => {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            result = [
                ...result,
                left[i] < right[j] ? left[i++] : right[j++]
            ];
        }

        return [...result, ...left.slice(i), ...right.slice(j)];
    }
    let merge_sort_arr = [13, 67, 6, 9, 3, 90, 7, 9];
    console.log(`Unsorted: `, merge_sort_arr.join(', '));
    console.log(`Merge Sorted: `, mergeSort(merge_sort_arr));


}

main();
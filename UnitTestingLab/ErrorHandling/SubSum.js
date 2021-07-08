let array = [10, 20, 30, 40, 50, 60];

let getRange = (array, startIndex, endIndex) => {
    if (array instanceof Array){
        try {

            if (startIndex < 0){
                startIndex = 0;
            }
            if (endIndex >= array.length){
                endIndex = array.length - 1;
            }

            let firstNumber = Number(array[startIndex]);
            let second = Number(array[endIndex]);

            let sum = 0;
            for (let i = startIndex; i <= endIndex; i++) {
                sum += array[i];
            }
            return sum;
        }catch (Error){
            return NaN;
        }
    }else {
        return NaN;
    }
}

console.log(getRange(array, 3, 300));
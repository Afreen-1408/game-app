// sort the Array without using sort() method in javascript:
 
let arr = [28, 42, 634, 542, 123, 23];

var done = false
while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            done = false
            var temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);
























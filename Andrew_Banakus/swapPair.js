/*Swap Array Pairs
Swap positions of successive pairs of values
of given array. If length is odd, do not change
final element. For [1,2,3,4], return [2,1,4,3].
For [false,true,42], return [true,false,42].*/

function swapPair(arr){
    var temp = [];
    for(var i = 0; i < arr.length-1; i+=2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    console.log(arr);
}

var randArr = [2, 1, 4, 3, 6, 5, 7];
swapPair(randArr);


// function binarySearch(arr, start, end, number) {
//    var middle = Math.floor((end - start) / 2) + start;
// console.log(start, middle, end);
//    if (arr[middle] == number) {
//       return true;
//    }
//    if (end == middle || middle == start) {
//       return false;
//    }
//    else if (arr[middle] > number) {
//       var newend = middle;
//       return binarySearch(arr, start, newend, number);
//    }
//    else {
//       var newstart = middle;
//       return binarySearch(arr, newstart, end, number);
//    }
//    return false;
// }
// var array = [1,2,3,4,5,6,7,8,9,10,11,12];
// console.log(binarySearch(array, 0, 11, 9));
//
// ////////////////////////////
//
// function rotateArray(arr, falseoffset) {
//    var offset = falseoffset % arr.length;
//    for (var i = 0; i < (arr.length/2); i++){
//       var temp = arr[i];
//       arr[i] = arr[arr.length-1-i];
//       arr[arr.length-1-i] = temp;
//    }
//    for (var k = 0; k < offset/2; k++) {
//       var temp = arr[k];
//       arr[k] = arr[offset-1-k];
//       arr[offset-1-k] = temp;
//    }
//    var x = 1
//    for (var q = offset; q < arr.length - x; q++) {
//       var temp = arr[q];
//       arr[q] = arr[arr.length-x];
//       arr[arr.length-x] = temp;
//       x++;
//    }
//    return arr;
// }
// array = [1,2,3,4,5,6,7,8,9,10]
// console.log(rotateArray(array, 81));

///////////////////////////

function minOfSortedRotated(arr, first, mid, last) {
   if (arr[first] < arr[last]) {
      return first;
   }
   if (arr[mid] < arr[mid-1]){
      return mid;
   }
   if (last-mid <=1) {
      if (mid < last) {
         return mid;
      }
      else {
         return last;
      }
   if (mid-first <=1) {
      if (first < last) {
         return first;
      }
      else {
         return mid;
      }
   }
   }
   else if (arr[mid] > arr[last]) {
       var newfirst = mid;
       var newmid = mid + (Math.floor((last-mid)/2));
      return minOfSortedRotated(arr, newfirst, newmid, last);
   }
   else {
      //if mid < last
       var newlast = mid;
       var newmid = mid + Math.floor((newlast-newmid)/2);
      return minOfSortedRotated(arr, first, newmid, newlast);
   }
}
var arr = [11,12,13,14,1,2,3,4,5,6,7,8,9,10];
var first = 0;
var mid = Math.floor(arr.length/2);
var last = arr.length-1;
console.log(minOfSortedRotated(arr, first, mid, last));

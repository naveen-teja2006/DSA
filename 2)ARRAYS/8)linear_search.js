// Linear Search Innode "8)linear_search.js" An Array
let arr = [6,7,8,40,1];
let target = 4;
function linearSearch(arr,target){
for(let i = 0;i < arr.length;i++){
    if(arr[i] == target){
        console.log("Element Found At Index : " + i);                               
    }
}
return "Element Not Found In The Array";
}
linearSearch(arr,target);
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1) 
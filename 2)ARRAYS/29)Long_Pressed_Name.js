// Long Presses Name Using Two Pointer Technique
var isLongPressedName = function(name, typed) {
    let left = 0;
    let right = 0;
    while(right < typed.length){
        if(left < name.length && typed[right] == name[left]){
            left++;
            right++;
        }
        else if(typed[right] == typed[right - 1]){
            right++;
        }
        else{
            return false;
        }
    }
    return left == name.length;
};
console.log(isLongPressedName("alex","aaleex"));
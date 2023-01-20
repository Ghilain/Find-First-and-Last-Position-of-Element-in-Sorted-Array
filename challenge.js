/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function firstOccur(nums, target) {
    let s = 0;
    let e = nums.length-1;
    let ans = -1;
    while (s <= e) {
        let mid = s+ parseInt((e-s)/2);
        if(nums[mid] === target) {
            ans = mid;
            e = mid-1;
        } else if(nums[mid] < target) {
            s = mid+1;
        } else {
            e = mid-1;
        }
    }
    return ans;
}

function lastOccur(nums, target) {
    let s = 0;
    let e = nums.length-1;
    let ans = -1;
    while (s <= e) {
        let mid = s+ parseInt((e-s)/2);
        if(nums[mid] === target) {
            ans = mid;
            s = mid+1;
        } else if(nums[mid] < target) {
            s = mid+1;
        } else {
            e = mid-1;
        }
    }
    return ans;
}

var searchRange = function(nums, target) {
    let fisrt = firstOccur(nums,target);
    let last = lastOccur(nums,target);

    return [fisrt, last];
};
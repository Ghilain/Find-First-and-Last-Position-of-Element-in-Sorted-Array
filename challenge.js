/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function firstOccur(nums, target) {
}

var searchRange = function(nums, target) {
    let fisrt = firstOccur(nums,target);
    let last = lastOccur(nums,target);

    return [fisrt, last];
};
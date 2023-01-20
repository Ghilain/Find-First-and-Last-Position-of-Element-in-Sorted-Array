/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var searchRange = function(nums, target) {
    let fisrt = firstOccur(nums,target);
    let last = lastOccur(nums,target);

    return [fisrt, last];
};
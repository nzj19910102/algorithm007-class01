var search = function(nums, target) {
    if(!nums.length) return -1
    var left = 0, right = nums.length - 1, mid = 0

    while(left < right) {
        mid = Math.floor((left + right) / 2 )
        if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
            left = mid + 1;
        } else if (target > nums[mid] && target < nums[0]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left == right && nums[left] == target ? left : -1;
};
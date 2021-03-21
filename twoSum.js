/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

*/

/**
 * 解法
 * 1. 创建一个map
 * 2. for循环遍历nums数组
 * 3. 用target减nums[i],计算出哪个数能跟当前的数字相加得到target
 * 4. 检查map里有没有这个数，如果有就返回结果，如果没有就把nums[i]当作key，i当作value放入map中
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target = nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[1], i);
    }
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
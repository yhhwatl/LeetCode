// function twoSum(nums: number[], target: number) {
//     let ret = [];
//     for (let i: number = 0; i < nums.length; i++) {
//         for (let j: number = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 ret[0] = i; ret[1] = j;
//                 break;
//             }
//             if (ret.length > 0) break;
//         }
//     }
//     return ret;
// }
// let nums = [2, 7, 11, 15];
// let target = 9;
// let ret = twoSum(nums, target);
// if (ret.length > 0) {
//     console.log("ret[0] = > ", ret[0]);
//     console.log("ret[1] = > ", ret[1]);
// } else {
//     console.log("not found");
// }
// GET 嵌套for


// function addTwoNumbers(nums1, nums2) {
//     let nums = [];
//     let n1 = 0;
//     let bite = 0.1;
//     for (let index = 0; index < nums1.length; index++) {
//         const ele = nums1[index];
//         n1 += ele * (bite *= 10);
//     }
//     bite = 0.1;
//     for (let index = 0; index < nums2.length; index++) {
//         const ele = nums2[index];
//         n1 += ele * (bite *= 10);
//     }
//     while (n1 != 0) {
//         let num = n1 % 10;
//         nums[nums.length] = num;
//         n1 = (n1 - num) / 10;
//     }
//     return nums;
// }
// let ret = addTwoNumbers([2, 1], [5]);
// for (let index = 0; index < ret.length; index++) {
//     const element = ret[index];
//     console.log("ele => ", element);
// }
// GET 整数解析

// function lengthOfLongsSubstring(str) {
//     let tempstr = "";
//     let tmpMaxLen = 0;
//     for (let index = 0; index < str.length; index++) {
//         tempstr = str[index] + "";
//         for (let index2 = index + 1; index2 < str.length; index2++) {
//             const element2 = str[index2];
//             if (tempstr.indexOf(element2) >= 0) {
//                 if (tempstr.length > tmpMaxLen)
//                     tmpMaxLen = tempstr.length;
//                 tempstr = "";
//                 break;
//             } else {
//                 tempstr = tempstr.concat(element2 + "");
//             }
//         }
//     }
//     return tmpMaxLen;
// }
// let strstr = lengthOfLongsSubstring("abcdabcsfb");
// console.log("strstr=> ", strstr);
// GET 整理人眼扫描的逻辑 用机器语言表达

// 4.寻找两个有序数组的中位数
// function findMedianSortArrays(nums1,nums2) {
//     let i=0,j=0;let ret = 0;
//     let m = nums1.length,n = nums2.length;
//     let nums3 = [];
//     for(;i < m && j < n;) {
//         if(nums1[i] < nums2[j]) {
//             nums3.push(nums1[i++]);
//         } else {
//             nums3.push(nums2[j++]);
//         }
//     }
//     let midIdx = (m+n)/2;
//     if(nums3.length < midIdx) {
//         for(;i<m;i++) {
//             nums3.push(nums1[i]);
//         }
//         for(;j<n;j++) {
//             nums3.push(nums2[j]);
//         }
//     }
//     if((m+n)%2==0) {
//         ret = (nums3[midIdx-1] + nums3[midIdx])/2;
//     } else {
//         ret = nums3[Math.floor(midIdx)];
//     }
//     return ret;
// }
// let ret = findMedianSortArrays([1,3],[7]);
// console.log("mid ret => ",ret);
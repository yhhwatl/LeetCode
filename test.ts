// function twoSum(nums: number[],target: number) {
//     let ret = [];
//     for(let i:number=0;i<nums.length;i++) {
//         for(let j:number=i+1;j<nums.length;j++) {
//             if(nums[i] + nums[j] == target) {
//                 ret[0] = i;ret[1] = j;
//                 break;
//             }
//             if(ret.length > 0) break;
//         }
//     }
//     return ret; 
// }
// let nums = [2,7,11,15];
// let target = 9;
// let ret = twoSum(nums,target);
// if(ret.length > 0) {
//     console.log("ret[0] = > ",ret[0]);
//     console.log("ret[1] = > ",ret[1]);
// } else {
//     console.log("not found");
// }

// function addTwoNumbers(nums1,nums2) {
//     let nums = [];
//     let n1 = 0;
//     let bite = 0.1;
//     for (let index = 0; index < nums1.length; index++) {
//         const ele = nums1[index];
//         n1 += ele * (bite*=10);
//     }
//     bite = 0.1;
//     for (let index = 0; index < nums2.length; index++) {
//         const ele = nums2[index];
//         n1 += ele * (bite*=10);
//     }
//     while (n1 != 0) {
//         let num = n1%10;
//         nums[nums.length] = num;
//         n1 = (n1-num)/10;
//     }
//     return nums;
// }
// let ret = addTwoNumbers([2,1],[5]);
// for (let index = 0; index < ret.length; index++) {
//     const element = ret[index];
//     console.log("ele => ",element);
// }
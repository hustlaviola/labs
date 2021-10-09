let it = 0;

const canSum = (targetSum, numbers, memo = {}) => {
    it++;
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[remainder] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(300, [7, 14]))
console.log(it)
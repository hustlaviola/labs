// function repeatedString(s, n) {
//     // Write your code here
//     var str = '';

//     if (str.length >= n) {
//         str = s.substr(0, n);
//     } else {
//         str = s.repeat(Math.floor(n / s.length)) + s.substr(0, n % s.length);
//     }

//     return (str.match(/a/g) || []).length;
// }

// console.log(repeatedString('a', 1000000000000)) // Fails for large numbers (n)

function repeatedString(s, n) {
    // Write your code here
    if (s.length >= n) {
        return (s.substr(0, n).match(/a/g) || []).length;
    }

    return (s.match(/a/g) || []).length * Math.floor(n / s.length) + (s.substr(0, n % s.length).match(/a/g) || []).length
}

console.log(repeatedString('a', 1000000000000));
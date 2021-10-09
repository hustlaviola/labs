function sockMerchant(n, ar) {
    // Write your code here
    var array1 = [];
    var counter = 0;

    for (let a of ar) {
        if (array1.includes(a)) {
            array1.splice(array1.indexOf(a), 1);
            counter += 1;
        } else {
            array1.push(a);
        }
    }

    return counter;
}
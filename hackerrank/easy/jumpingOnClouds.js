function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;

    for (let i = 0; i < c.length - 1;) {
        if (i < c.length - 2 && c[i + 2] === c[i]) {
            jumps += 1;
            i += 2;
        }
        else {
            jumps += 1;
            i += 1;
        }
    }

    return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]));
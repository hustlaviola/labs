function countingValleys(steps, path) {
    // Write your code here

    var seaLevel = 0;
    var stepsLeft = steps;
    var stepsTaken = 0;
    var valleys = 0;

    while (stepsLeft > 0)
    {
        var prevSeaLevel = seaLevel;

        if (path[stepsTaken].toUpperCase() === 'U') {
            seaLevel += 1;
        } else {
            seaLevel -= 1;
        }

        if (seaLevel === 0 && prevSeaLevel < 0) {
            valleys += 1;
        }

        stepsLeft--;
        stepsTaken++;
    }

    return valleys;
}

console.log(countingValleys(12, 'DUDUDUUUDUDD'));

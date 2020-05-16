function countingValleys(n, s) {
    let currentLevel = []
	for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
		if (s[i] === 'U') {
            currentLevel++;
            // console.log(currentLevel);
		} else if (s[i] === 'D') {
            currentLevel--;
            // console.log(currentLevel);
        }
        console.log(currentLevel);
    }
    let stepsAtSeaLevel = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'D' && s[i -1] === 'D'){
            stepsAtSeaLevel--
        } else {
            stepsAtSeaLevel++
        }
    }
    console.log(stepsAtSeaLevel);
}

countingValleys(8, ['U','D','D','D','U','D','U','U']);

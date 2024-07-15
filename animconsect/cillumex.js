function denseRank(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let rank = 1;
    let denseRank = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            rank++;
        }
        denseRank = rank;
    }

    return denseRank;
}

// Example usage
let scores = [90, 95, 80, 95, 85];
let denseRanking = denseRank(scores);
console.log("Dense Rank:", denseRanking); // Output: Dense Rank: 3

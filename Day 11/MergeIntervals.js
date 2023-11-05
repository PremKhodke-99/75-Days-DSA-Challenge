function mergeIntervals(intervals) {
    let n = intervals.length;
    let ans = [];
    let start = intervals[0][0], end = intervals[0][1];

    for(let i = 0; i < n; i++){
        if(intervals[i][0] <= end){
            end = Math.max(end, intervals[i][1]);
        }else{
            ans.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    ans.push([start, end]);
    return ans;
}

function main() {
    const intervals = 
    [[1, 3],
    [2, 6],
    [8, 10],
    [15, 18]]

    let mergedIntervals = mergeIntervals(intervals);
    console.log(mergedIntervals);
}

main();
function meetingRooms(meeting){
    const time = [];
    for(let i = 0; i < meeting.length; i++){
        time.push([meeting[i][0],1])
        time.push([meeting[i][1],-1])
    }

    time.sort((a,b) => a[0]-b[0]);

    let ans = 0 , sum = 0;
    for(let i = 0; i < time.length; i++){
        sum += time[i][1];
        ans = Math.max(ans, sum);
    }
    return ans;
}

function main(){
    let meeting = [[0, 20], [5, 10], [10, 15]]
    let res = meetingRooms(meeting);
    console.log(res);
}

main();
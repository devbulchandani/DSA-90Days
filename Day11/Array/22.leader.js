function findLeader(arr) {
    let n = arr.length;
    let leaderArray = [];
    for (let i = 0; i < n; i++) {
        let leader = true;
        for (let j = i; j < n; j++) {
            if (arr[i] < arr[j]) {
                leader = false;
                break;
            }
        }
        if (leader) {
            leaderArray.push(arr[i])
        }
    }

    return leaderArray;
}


function findingLeader(arr){
    let n = arr.length;
    let max = arr[n-1];
    let leaders = [arr[n-1]];
    for (let i = n-2; i >= 0; i--){
        if (arr[i] > max){
            leaders.push(arr[i]);
            max = arr[i];
        }
    }
    return leaders.reverse();
}




arr = [10, 22, 12, 3, 0, 6]
console.log(findingLeader(arr));
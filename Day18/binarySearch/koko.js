function IstotalTime(piles, k, n, h) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += Math.ceil(piles[i]/k)
    }
    return total <= h;
}

function koko(piles, h) {
    let n = piles.length;
    let low = 1;
    let high = Math.max(...piles);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (IstotalTime(piles, mid, n , h)) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low;
}

let piles = [30,11,23,4,20], h = 5
console.log(koko(piles, h));
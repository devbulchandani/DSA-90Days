function union(arr1, arr2) {
    const set = new Set(arr1, arr2);
    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        set.add(arr2[i])
    }
    union = Array.from(set);
    return union;
}

function Union(arr1, arr2) {
    const freq = new Map();
    for (num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    for (num of arr2) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let result = Array.from(freq.keys());
    return result;
}

function findUnion(arr1, arr2) {
    let i = 0;
    let j = 0;
    let union = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            console.log(union);
            i++;
        } else {
            if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j])
            }
            j++;
            console.log(union);

        }
    }

    while (i < arr1.length) {
        if (union[union.length - 1] !== arr1[i])
            union.push(arr1[i]);
        console.log(union);

        i++;
    }

    while (j < arr2.length) {
        if (union[union.length - 1] !== arr2[j])
            union.push(arr2[j]);
        console.log(union);

        j++;
    }
    return union;
}

const arr1 = [1, 2, 3, 3, 5];
const arr2 = [2, 3, 4, 4,];

console.log(findUnion(arr1, arr2));


class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

function arrToLL(arr) {
    if (arr[0] === undefined) {
        return null
    }
    let head = new Node(arr[0])
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head
}

function print(head) {
    let temp = head;
    let arr = [];
    while (temp !== null) {
        arr.push(temp.data)
        temp = temp.next;
    }
    return arr.join('->');
}

function sortLL(head) {
    let temp = head;
    let arr = [];
    while (temp !== null) {
        arr.push(temp.data);
        temp = temp.next;
    }
    arr.sort((a, b) => a - b);
    temp = head;
    for (let i = 0; i < arr.length; i++) {
        temp.data = arr[i];
        temp = temp.next;
    }
    return head;
}

function findMiddle(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeSort(head) {
    if (head === null || head.next === null) return head;
    let middle = findMiddle(head);
    let right = middle.next;
    middle.next = null;
    let left = head;
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

function merge(left, right) {
    let dummy = new Node(-1);
    let temp = dummy;
    // console.log(left.data, right.data);
    while (left !== null && right !== null) {
        if (left.data <= right.data) {
            temp.next = left
            left = left.next;
        } else{
            temp.next = right
            right = right.next;
        }
        temp = temp.next;
    }
    if (left !== null) {
        temp.next = left
    } else {
        temp.next = right;
    }
    return dummy.next;
}

let arr = [1, 3, 4, 2, 5]
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
result = mergeSort(head);
console.log(print(result));

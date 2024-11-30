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

function reverse(head) {
    let temp = head;
    let stack = [];
    while (temp !== null) {
        stack.push(temp.data);
        temp = temp.next;
    }
    temp = head;
    while (temp !== null) {
        temp.data = stack.pop();
        temp = temp.next
    }
    return head
}

function reverseOptimal(head) {
    let temp = head;
    let prev = null;
    while (temp !== null) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    head = prev;
    return head;
}

function reverseOptimal2(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = reverseOptimal2(head.next);
    let next = head.next;
    next.next = head;
    head.next = null;
    return newHead;
}

let arr = [1, 2, 3, 4, 5];
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
head = reverseOptimal2(head);
console.log("linked list: ", print(head));

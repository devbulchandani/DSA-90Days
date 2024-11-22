class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

function arrToLL(arr) {
    if (arr[0] === undefined){
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

function traverse(head) {
    let temp = head;
    let arr = [];
    while (temp !== null) {
        arr.push(temp.data)
        temp = temp.next;
    }
    return arr;
}

function insertHead(head, val) {
    let temp = new Node(val);
    temp.next = head;
    head = temp;
    return head
}


function insertTail(head, val) {
    if (head === null) {
        return insertHead(head, val);
    }
    let temp = head;
    while (temp.next !== null) temp = temp.next;
    let newNode = new Node(val);
    temp.next = newNode;
    return head;
}

function insertKth(head, val, k) {
    if (head === null) {
        if (k === 1) {
            return insertHead(head, val);
        }
    }
    if (k === 1) {
        return insertHead(head, val);
    }
    cnt = 0;
    temp = head;
    while (temp != null) {
        cnt++;
        if (cnt === k - 1) {
            let newNode = new Node(val);
            newNode.next = temp.next;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }
    return head
}


function insertBefore(head, val, n) {
    if (head === null) {
        return null
    }
    if (n === head.data) {
        return insertHead(head, val);
    }
    temp = head;
    while (temp != null) {
        if (temp.next.data === n) {
            let newNode = new Node(val);
            newNode.next = temp.next;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }
    return head
}

let arr = [1,6,2,4,9];
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", traverse(head).join(' ->'));
head = insertBefore(head, 5, 1);
console.log("linked list: ", traverse(head).join(' ->'));
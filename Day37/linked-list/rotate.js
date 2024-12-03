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

function findKthNode(head, k) {
    let len = 0;
    let temp = head;
    while (temp !== null) {
        len++;
        if (len === k) {
            return temp;
        }
        temp = temp.next
    }
    return null;
}


function rotateK(head, k){
    if( head == null || head.next == null || k == 0)
        return head
    let len = 1, tail = head;
    while (tail.next !== null){
        len++;
        tail = tail.next;
    }
    if (k % len === len) return head;
    k = k % len;
    tail.next = head;
    let last = findKthNode(head, len - k);
    head = last.next;
    last.next = null;
    return head;
}

let arr = [];

let head = arrToLL(arr)

console.log(print(head));
let result = rotateK(head, 0);
console.log(print(result));
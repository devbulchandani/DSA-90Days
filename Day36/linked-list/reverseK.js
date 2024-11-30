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

function reverse(head) {
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


function reverseK(head, k) {
    let temp = head;
    let prevNode = null;
    while (temp !== null) {
        let kNode = findKthNode(temp, k);
        if (kNode === null) {
            if (prevNode) {
                prevNode.next = temp;
            }
            break;
        };
        let nextNode = kNode.next;
        kNode.next = null;
        reverse(temp)
        if (temp === head) {
            head = kNode;
        } else {
            if (prevNode) {
                prevNode.next = kNode;
            }
        }
        prevNode = temp;
        temp = nextNode;
    }
    return head;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let head = arrToLL(arr)

console.log(print(head));

let result = reverseK(head, 3);
console.log(print(result));
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

function arrToLL(arr) {
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

function removeHead(head) {
    if (head === null) return head;
    let temp = head;
    head = head.next;
    temp = null;
    return head
}

function removeTail(head) {
    if (head === null || head.next === null) return null;
    let temp = head;
    while (temp.next.next !== null) temp = temp.next;
    temp.next = null;
    return head;
}

function removeKth(head, k) {
    if (head === null) return null;
    if (k === 1) {
        let temp = head;
        head = head.next;
        temp = null;
        return head;
    }
    let cnt = 0;
    let temp = head;
    let prev = null;
    while (temp !== null) {
        cnt++;
        if (cnt === k) {
            prev.next = prev.next.next;
            temp = null;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}

function removeElement(head, node) {
    if (head === null) return null;
    if (head.data === node) {
        let temp = head;
        head = head.next;
        temp = null;
        return head;
    }
    let temp = head;
    let prev = null;
    while (temp !== null) {
        if (temp.data === node) {
            prev.next = prev.next.next;
            temp = null;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}

let arr = [1, 23, 3, 33, 5];
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", traverse(head).join('->'));
head = removeElement(head, 23);
console.log("linked list: ", traverse(head).join('->'));

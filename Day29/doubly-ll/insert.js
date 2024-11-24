class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function arrToDlL(arr) {
    if (arr[0] === undefined) return null;
    let head = new Node(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        temp = new Node(arr[i]);
        temp.prev = prev;
        prev.next = temp;
        prev = temp;
    }
    return head;
}

function print(head) {
    let temp = head;
    let arr = [];
    while (temp !== null) {
        arr.push(temp.data);
        temp = temp.next;
    }
    arr = arr.join('<->')
    console.log(arr);
}

function insertHead(head, val) {
    let newHead = new Node(val);
    newHead.next = head;
    head.prev = newHead;
    head = newHead;
    return head;
}


function insertBeforeTail(head, val) {
    if (head.next === null) return insertHead(head, val);
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    prev = tail.prev;
    let newTail = new Node(val);
    newTail.next = tail;
    newTail.prev = prev;
    prev.next = newTail;
    tail.prev = newTail;
    return head;
}

function insertAtKth(head, val, k) {
    if (k === 1){
        return insertHead(head, val)
    }
    let temp = head;
    let cnt = 0;
    while (temp !== null){
        cnt++;
        if (cnt === k) break;
        temp = temp.next;
    }
    if (temp === null) return null;
    prev = temp.prev;
    let newNode = new Node(val);
    newNode.next = temp;
    newNode.prev = prev;
    prev.next = newNode;
    temp.back = newNode; 
    return head;
}


function insertBeforeNode(node, val){
    prev = node.prev;
    newNode = new Node(val);
    newNode.next = node;
    newNode.prev = prev;
    prev.next = newNode;
    node.prev = newNode;
}

let arr = [1, 2,7];
console.log("Orignal Array: ", arr);
let head = arrToDlL(arr);
insertBeforeNode(head.next, 0);
print(head)

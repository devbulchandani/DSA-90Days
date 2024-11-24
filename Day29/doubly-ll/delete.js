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
    for (let i = 1; i < arr.length; i++){
        temp = new Node(arr[i]);
        temp.prev = prev;
        prev.next = temp;
        prev = temp;
    }
    return head;
}

function print(head){
    let temp = head;
    let arr = [];
    while (temp !== null){
        arr.push(temp.data);
        temp = temp.next;
    }
    arr = arr.join('<->')
    console.log(arr);
}

function deleteHead(head){
    if (head === null || head.next === null){
        head = null;
        return head;
    }
    prev = head;
    head = head.next;
    head.prev = null;
    prev.next = null;
    prev = null;

    return head
}

function deleteTail(head){
    if (head === null || head.next === null){
        head = null;
        return head;
    } 
    let tail = head;
    while (tail.next !== null){
        tail = tail.next;
    }
    let prev = tail.prev;
    prev.next = null;
    tail.prev = null;
    tail = null;
    return head;
}

function deleteKth(head, k){
    if (head === null) return null;
    let cnt = 0;
    let temp = head;
    while (temp !== null){
        cnt ++;
        if (cnt === k) break;
        temp = temp.next;
    }
    if (temp === null) return null
    let prev = temp.prev;
    let next = temp.next;
    if (prev === null && next === null){
        temp = null;
        return head;
    } 
    else if (prev === null) return deleteHead(head);
    else if (next === null) return deleteTail(head);
    else {
        prev.next = next;
        next.prev = prev;
        temp.next = null;
        temp.prev = null;
        temp = null
    }
    return head
}

function deleteNode(node){
    prev = node.prev;
    next = node.next;
    if (next === null){
        prev.next = null;
        node.prev = null;
        node = null;
    }
    prev.next = next;
    next.prev = prev;
    node.next = null;
    node.prev = null;
    node = null;
}

let arr = [1,2,3,4,5];
console.log("Orignal Array: ", arr);
let head = arrToDlL(arr);
deleteNode(head.next);
print(head)

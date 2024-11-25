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

function middle(head){
    let slow = head;
    let fast = head;
    while (fast && fast.next && slow) {
        fast = fast.next.next; 
        slow = slow.next;
    }
    return slow;
}
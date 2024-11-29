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

function deleteMiddle(head){
    if (head === null || head.next === null) return null
    let slow = head;
    let fast = head.next.next;
    while (fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;
    slow.next = temp.next;
    temp = null;
    return head
}

let arr = [1,2,3,4,5]
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
result = deleteMiddle(head);
console.log(print(result));

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

function findCycle(head){
    let temp = head;
    let nodes = [];
    while (temp !== null){
        if (nodes.includes(temp)){
            return true;
        }
        nodes.push(temp)
        temp = temp.next;
        console.log(nodes);
    }   
    console.log(nodes);
    return false;
}

function findCycle(head){
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;  
        }
    }
    return false
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

let result = findCycle(head);
console.log(result);
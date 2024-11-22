class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
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
    let list = new LinkedList(head)
    return list.head
}

function traverse(head){
    let temp = head;
    let arr = [];
    while(temp !== null){
        arr.push(temp.data)
        temp = temp.next;
    }
    return arr;
}

function findLength(head){
    let temp = head;
    let length = 0;
    while(temp !== null){
        length++;
        temp = temp.next;
    }
    return length;
}

let arr = [1,2,3,4,5]
console.log("Orignal Array :" , arr);
let head = arrToLL(arr);
console.log("Head: ",head);
let result = traverse(head);
let length = findLength(head)
console.log("Final Array:", result, "with length:", length);

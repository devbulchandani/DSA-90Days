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

console.log(arrToLL([1,2,3,4,5]))
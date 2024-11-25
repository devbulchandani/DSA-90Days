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


function reverseDll(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = null; 
    
    let current = head; 

    while (current !== null) {
        prev = current.prev;
        current.prev = current.next;
        current.next = prev;
        current = current.prev; 
    }
    
    return prev.prev;
}

let arr = [1, 2, 3, 4, 5];
console.log("Orignal Array: ", arr);
let head = arrToDlL(arr);
head = reverseDll(head);
print(head)

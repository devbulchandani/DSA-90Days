class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function arrToDlL(arr) {
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
    arr = arr.join('->')
    console.log(arr);
}

let arr = [1,6,2,4,9];
console.log("Orignal Array: ", arr);
let head = arrToDlL(arr);
print(head)

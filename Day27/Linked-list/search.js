class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }

function arrToLL(arr) {
    let head = new Node(arr[0])
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        mover.next = temp; 
        mover = temp;
    }
    return list.head
}

function search(head, target){
    let temp = head;
    while (temp !== null){
        if (temp.data === target){
            return true;
        }
        temp = temp.next;
    }
    return false;
}

let arr = [1,2,3,4,5]
console.log("Orignal Array :" , arr);
let head = arrToLL(arr);
let isPresent = search(head, 8)
console.log(isPresent);
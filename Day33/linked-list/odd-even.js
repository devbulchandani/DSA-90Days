class Node{
    constructor(data){
        this.data = data;
        this.next = null;
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

function oddEvenOptimal(head){
    if (head === null || head.next === null) return head;
    let oddIndex = head;
    let evenIndex = head.next;
    let evenHead = head.next;
    while (evenIndex !== null && evenIndex.next !== null ){
        oddIndex.next = oddIndex.next.next;
        evenIndex.next = evenIndex.next.next
        oddIndex = oddIndex.next;
        evenIndex = evenIndex.next;
    }
    oddIndex.next = evenHead;
    return head;
}


function oddEven(head){
    if (head === null || head.next === null) return head;
    let arr = [];
    let temp = head;

    while (temp !== null && temp.next !== null){
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp){
        arr.push(temp.data)
    }

    temp = head.next;
    while (temp !== null && temp.next !== null){
        arr.push(temp.data);
        temp = temp.next.next;
    }
    if (temp){
        arr.push(temp.data)
    }
    temp = head;
    i = 0;
    while (temp !== null){
        temp.data = arr[i];
        i++
        temp = temp.next;
    }
    return head;
}

let arr = [1,2,3,4,5,6]
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
result = oddEvenOptimal(head);
console.log(print(result));

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

function pallindrome(head){
    let arr = [];
    let temp = head;
    while (temp !== null){
        arr.push(temp.data);
        temp = temp.next;
    }
    let i = 0;
    let j = arr.length - 1;
    while (i < j){
        if (arr[i] !== arr[j]) return false;
        i++;
        j--;
    }
    return true;
}


function reverse(head) {
    let temp = head;
    let prev = null;
    while (temp !== null) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    head = prev;
    return head;
}

function pallindromeOptimal(head){
    if (head === null || head.next === null) {
        return true;
    }
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const newHead = reverse(slow.next);
    let first = head;
    let second = newHead;
    while (second !== null) {
        if (first.data !== second.data){
            reverse(newHead);
            return false;
        }
        first = first.next;
        second = second.next;
    }
    reverse(newHead);
    return true
}


let arr = [1,2]
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
result = pallindromeOptimal(head);
console.log(result)

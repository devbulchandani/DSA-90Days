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


function chechIntersection(head1, head2) {
    while (head2 !== null) {
        let temp = head1;
        while (temp !== null) {
            if (temp === head2) {
                return head2;
            }
            temp = temp.next

        }
        head2 = head2.next
    }
    return null;
}

function chechIntersection(head1, head2) {
    let set = new Set();
    while (head1 !== null){
        set.add(head1);
        head1 = head1.next;
    }
    while (head2 !== null){
        if (set.has(head2)){
            return head2;
        }
        head2 = head2.next
    }
    return null;
}

function intersection(head1, head2){
    
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);
let sixth = new Node(6);
first.next = second;
second.next = third;
fourth.next = fifth;
fifth.next = third;
third.next = sixth;
let head1 = first;
let head2 = fourth;
console.log("linked list: ", print(head1));
console.log("linked list: ", print(head2));
result = chechIntersection(head1, head2);
console.log(result);

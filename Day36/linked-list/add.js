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

function add(head1, head2) {
    let dummy = new Node(-1);
    temp = dummy;
    let carry = 0;
    while ((head1 !== null || head2 !== null) || carry) {
        let sum = 0;
        if (head1 !== null) {
            sum += head1.data;
            head1 = head1.next;
        }
        if (head2 !== null) {
            sum += head2.data;
            head2 = head2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        console.log(sum, carry);
        node = new Node(sum % 10);
        temp.next = node;
        temp = temp.next;

    }
    return dummy.next;
}

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]

let head1 = arrToLL(l1);
let head2 = arrToLL(l2);

console.log(print(head1));
console.log(print(head2));

let result = add(head1, head2);
console.log(print(result));

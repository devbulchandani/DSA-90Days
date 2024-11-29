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


function removerNth(head, n){
    if (head === null) return null
    let temp = head;
    let len = 0;
    while (temp !== null){
        len++;
        temp = temp.next;
    }
    let k = len - n + 1;
    if (k === 1) {
        let temp = head;
        head = head.next;
        temp = null;
        return head;
    }
    let cnt = 0;
    temp = head;
    let prev = null;
    while (temp !== null) {
        cnt++;
        if (cnt === k) {
            prev.next = prev.next.next;
            temp = null;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}

function remove(head, n){
    let fastp = head;
    let slowp = head;
    for (let i = 0; i < n; i++)
        fastp = fastp.next;
    if (fastp === null)
        return head.next;

    while (fastp.next !== null) {
        fastp = fastp.next;
        slowp = slowp.next;
    }
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
}

let arr = [1,2,3,4,5,6]
console.log("Orignal Array: ", arr);
let head = arrToLL(arr);
console.log("linked list: ", print(head));
result = remove(head, 3);
console.log(print(result));

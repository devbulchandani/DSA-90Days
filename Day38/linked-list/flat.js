class Node {
    constructor(data) {
        this.data = data;
        this.next = null
        this.child = null;
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

function merge(list1, list2) {
    let dummy = new Node(-1);
    let temp = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            temp.child = list1
            list1 = list1.child;
        } else{
            temp.child = list2
            list2 = list2.child;
        }
        temp = temp.child;
    }

    if (list1) {
        temp.child = list1;
    } else {
        temp.child = list2;
    }

    if (dummy.child) {
        dummy.child.next = null;
    }

    return dummy.child;
}



function flat(head){
    if (head === null || head.next === null) return head;
    mergeHead = flat(head.next)
    head = merge(head, mergeHead)
    return head;
}

function printLinkedList(head) {
    while (head !== null) {
        console.log(head.data + "->");
        head = head.child
    }
}

// Print the linked list
// in a grid-like structure
function printOriginalLinkedList(head, depth) {
    while (head !== null) {
        process.stdout.write(head.data.toString());

        // If child exists, recursively
        // print it with indentation
        if (head.child) {
            process.stdout.write(" -> ");
            printOriginalLinkedList(head.child, depth + 1);
        }

        // Add vertical bars for
        // each level in the grid
        if (head.next) {
            process.stdout.write('\n');
            for (let i = 0; i < depth; ++i) {
                process.stdout.write("| ");
            }
        }
        head = head.next;
    }
}

// Create a linked list
// with child pointers
let head = new Node(5);
head.child = new Node(7);
head.child.child = new Node(8);
head.child.child.child = new Node(30);
head.child.child.child.child = null
head.next = new Node(10);
head.next.child = null
head.next.next = new Node(19);
head.next.next.child = new Node(22);
head.next.next.child.child = new Node(50);
head.next.next.next = new Node(28);
head.next.next.next.child = null

// Print the original linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head, 0);

// Flatten the linked list
// and print the flattened list
let flattened = flat(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened);
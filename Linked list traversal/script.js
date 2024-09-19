// Linked list traversal: Create a simple linked list and print its elements.


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.printList();
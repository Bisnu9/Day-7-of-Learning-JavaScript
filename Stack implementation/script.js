// Stack implementation: Implement a simple stack using an array.

class Stack{
    constructor(){
        this.array = [];
    }

    push(data){
        this.array.push(data);
    }

    pop(){
        if(this.array.length === 0){
            return 'underflow'
        }
        return this.array.pop();
    }

    peek(){
        return this.array[this.array.length -1];
    }

    isEmpty(){
        return this.array.length == 0;
    }
}
const list = new Stack;
list.push(1);
list.push(2);
list.push(3);

console.log(list.array);

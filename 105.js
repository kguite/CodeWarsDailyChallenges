// 7kyu Implementing a Queue

// https://www.codewars.com/kata/55a9c0994cb7e284d500005e/solutions/javascript
class Queue {
      constructor(){
        this.queue = []
      }
      enqueue(el){
        this.queue.unshift(el)
      }
      dequeue(){
        return this.queue.pop()
      }
      size(){
        return this.queue.length
      }
    }
class Queue<Type> {
  protected data: Array<Type>;

  constructor() {
    this.data = [];
  }

  push(queueItem: Type): void {
    // if (typeof queueItem === "number") {
    this.data.push(queueItem);
    // }
  }
  pop(): Type {
    // excluding removing the last element
    return this.data[this.data.length - 1];
  }
}

const eventQueue = new Queue();
eventQueue.push("String");
eventQueue.push(1);

type withId = { id: number };
function getData<T>(objectToSave: T): T & withId {
  // async operation to save the data.
  return { ...objectToSave, id: 1 };
}

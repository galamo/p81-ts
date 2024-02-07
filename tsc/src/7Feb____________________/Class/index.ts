// extends to profit from inheritance.
// implements will be more for polymorphism.
//  polymorphism is the provision of a single interface to entities of different types.

interface Fighter {
  attack: () => void;
}

class IDF {
  constructor(public rank: string) {
    this.rank = rank;
  }
}

  
class Commander extends IDF implements Fighter {
  public id: string;

  constructor(_id) {
    super("officer");
    this.id = _id;
  }
  attack(): void {
    console.log(`${this.id} shooting and giving orders`);
  }
  doSomething() {
    console.log("what ever");
  }
}

class Sniper extends IDF implements Fighter {
  public id: string;
  attack(): void {
    console.log(`${this.id} shooting for long distance`);
  }
  constructor(_id) {
    super("sergeant");
    this.id = _id;
  }
}

const figthers: Fighter[] = [new Commander("c1"), new Sniper("s1")];
figthers.forEach((item) => item.attack());

// const idf = new IDF(1); constructor issue



// The extends keyword
// In TypeScript, 
// constraints are expressed
//  using the extends keyword. 
//  T extends K means that it’s safe to assume
//   that a value of type T is also of type K, e.g., 
//   0 extends number because var zero: number = 0 is type-safe.






interface Pizza2 {
    name: string;
    toppings: string[];
  }
  
  class PizzaMaker2 {
    static create(event: Pizza) {
      return { name: event.name, toppings: event.toppings };
    }
  }


class Pizza {
    constructor(public name: string, public toppings: string[]) {};
  }
  
  class PizzaMaker {
    static create(event: Pizza) {
      return new Pizza(event.name, event.toppings);
    }
  }
  
  const pizza = PizzaMaker.create({ name: 'Inferno', toppings: ['cheese', 'peppers'] };

  

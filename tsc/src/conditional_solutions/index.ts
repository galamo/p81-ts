function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

// use generics with extends
function f1<T extends string | number>(a: T, b: T) {
  console.log(a);
  if (typeof a === "string") {
    console.log(a);
    return a + ":" + b;
  } else if (typeof a === "number") {
    console.log(a);
    return a + b;
  }
}
f1("a", "aaa");

function f2<
  First extends string | number,
  Second extends First extends string ? string : number
>(a: First, b: First): Second {
  if (typeof a === "string") {
    return (a + ":" + b) as Second;
  } else {
    return ((a as number) + (b as number)) as Second;
  }
}

function f2s<First extends string | number, Second extends First>(
  a: First,
  b: Second
): any {
  if (typeof a === "string") {
    return (a + ":" + b) as Second;
  } else {
    return ((a as number) + (b as number)) as Second;
  }
}
f2s(2, 33);

function f3(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b;
  } else {
    return (a as number) + (b as number);
  }
}
f2("aaa", "abbb");
f2(678, "kkk");
f2("sss", 111);
f2(999, 111);

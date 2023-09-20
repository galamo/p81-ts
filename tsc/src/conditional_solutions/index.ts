function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

// use generics with extends
function f1<T extends string>(a: T, b: T) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return a + b;
  }
}

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






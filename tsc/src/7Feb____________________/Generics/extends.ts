// In TypeScript, constraints are expressed using the extends keyword. T extends K means that it’s safe to assume that a value of type T is also of type K
// , e.g., 0 extends number because var zero: number = 0 is type-safe.

// Thus, we can have a generic that checks whether a constraint is met, and return different types.

// StringFromType returns a literal string based on the primitive type it receives:

type StringFromType<T> = T extends string ? string : number;

type lorem = StringFromType<"lorem ipsum">; // 'string'
type ten = StringFromType<10>; // never

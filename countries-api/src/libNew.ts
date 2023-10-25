export function calcTax(value: number, tax: number = 0.17): number | undefined {
  if (typeof value !== "number") return;
  return value * tax;
}

export async function testMe() {
  return 1;
}

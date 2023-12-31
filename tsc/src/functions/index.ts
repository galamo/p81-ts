export default function functions() {
  function printMyDetails(
    userName: string,
    email: string,
    working: boolean = true
  ): void {
    console.log(`user: ${userName} , email: ${email} , working: ${working}`);
  }

  printMyDetails("galamo", "galamouyal88@gmail.com", true);

  function getEmailFromUserName(userName): string {
    return `${userName}@gmail.com`;
  }

  console.log(getEmailFromUserName("galamo"));

  function makeAnError(): never {
    throw Error("This is input validation error");
  }

  function gameForLoop(): never {
    while (true) {}
  }

  function add(a: number, b: number): number | undefined {
    if (typeof a !== "number") return;
    return a + b;
  }

  type Add = (a: number, b: number) => number;
  const addFunction: Add = function (number1: number, b: number) {
    return number1 + b;
  };

  function printProduct(product: { pName: string; pCost: number }) {
    console.log(`pName ${product.pName} pCost: ${product.pCost} `);
  }

  printProduct({ pName: "p81", pCost: 90000 });
  const msProduct = {
    pName: "MsProtection",
    pCost: 90000,
    isValid: 1,
  };
  printProduct(msProduct);

  function printProductCondition({
    pName,
    print = false,
  }: {
    pName: string;
    print?: boolean;
  }) {
    if (print) {
      console.log(`Print the product!!!! ${pName}`);
    }
  }
  printProductCondition({ pName: "googleAuthenticator", print: true });

  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  console.log(isLeapYear(1900));
  console.log(isLeapYear(2000));
}

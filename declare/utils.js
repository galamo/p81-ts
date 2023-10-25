function printArrayAsRow(array) {
  if (!Array.isArray(array)) return;
  return array.join(",");
}

function testPrintArray(r) {
  console.log(r);
}

module.exports = { printArrayAsRow, testPrintArray };

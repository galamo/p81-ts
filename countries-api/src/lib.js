function calcTax(value) {
  if (typeof value !== "number") return;
  return value * 0.17;
}

module.exports = { calcTax };

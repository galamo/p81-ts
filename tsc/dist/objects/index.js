function getRandomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
function calcLocation(point) {
    return { x: Math.random() * point.x, y: Math.random() };
}
var book = {
    title: "12 rules for life",
    numberOfPages: 345,
    publishedAt: new Date().toISOString(),
    author: {
        name: "jurden piterson",
        numberOfBooks: 100,
    },
};
// book.title = "13 rules for life";
console.log("test");
var spairWheel = { radius: 200 };
var Car = { color: "red" };
var combinedItem = { radius: 200, color: "green" };
var combinedItem2 = { radius: 200, color: "green" };

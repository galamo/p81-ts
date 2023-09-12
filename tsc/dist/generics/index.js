var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PlayList = /** @class */ (function () {
    function PlayList() {
        this.queue = [];
    }
    PlayList.prototype.add = function (someElement) {
        this.queue.push(someElement);
    };
    return PlayList;
}());
var songs = new PlayList();
songs.add({
    artist: "veronica",
    length: 2,
    name: "i love p81",
    writer: "Snir SW",
});
function mergeFunction(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var combinedObj = mergeFunction({ artist: "test", length: 2, name: "test", writer: "test", temp: 1 }, { user: "Gal", age: 34 });
console.log(combinedObj.artist);

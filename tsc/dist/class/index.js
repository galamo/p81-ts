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
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (queueItem) {
        // if (typeof queueItem === "number") {
        this.data.push(queueItem);
        // }
    };
    Queue.prototype.pop = function () {
        // excluding removing the last element
        return this.data[this.data.length - 1];
    };
    return Queue;
}());
var eventQueue = new Queue();
eventQueue.push("String");
eventQueue.push(1);
function getData(objectToSave) {
    // async operation to save the data.
    return __assign(__assign({}, objectToSave), { id: 1 });
}

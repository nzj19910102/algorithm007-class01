var LRUCache = function (capacity) {
    this.max = capacity
    this.keys = []
    this.values = []
};


LRUCache.prototype.get = function (key) {
    let index = this.keys.indexOf(key)
    if (index > -1) {
        this.keys.splice(index, 1)
        let temp = this.values[index]
        this.values.splice(index, 1)
        this.keys.unshift(key)
        this.values.unshift(temp)
    }
    return index > -1 ? this.values[0] : -1
};


LRUCache.prototype.put = function (key, value) {
    let index = this.keys.indexOf(key)
    if (index > -1) {
        this.keys.splice(index, 1)
        this.values.splice(index, 1)
    }
    this.keys.unshift(key)
    this.values.unshift(value)
    if (this.keys.length > this.max) {
        this.keys.pop()
        this.values.pop()
    }
};
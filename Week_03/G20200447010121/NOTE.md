## 二维数据结构

## 二叉树遍历
1. 前序: 根-左-右
```python
    def preorder(self, root)
        if(root): 
            self.traverse_path.append(root.val)
            self.preorder(root.left)
            self.preorder(root.right)
```
2. 中序: 左-根-右
```python
    def inorder(self, root)
        if(root): 
            self.inorder(root.left)
            self.traverse_path.append(root.val)
            self.inorder(root.right)
```
3. 后序: 左-右-根
```python
    def postorder(self, root)
        if(root): 
            self.postorder(root.left)
            self.postorder(root.right)
            self.traverse_path.append(root.val)
```

## 二叉搜索树
空树或者具有以下性质的二叉树
1. 左子树上的**所有节点**的值均小于它的根节点的值
2. 右子树上的**所有节点**的值均大于它的根节点的值
3. 左、右子树也分别为二叉搜索树
4. 中序遍历：升序遍历

查询、插入、删除O(logN)

## 堆 Heap

find-max: O(1)
delette-max: O(logN)
insert(create): O(logN) or O(1)

## 二叉堆的实现细节

i left   2*i+1 
i right  2*i+2 
i parent floor((i-1)/2) 

```javascript
const d = 2;
function heap() {
    this.heap = []
}
function parent(i) {
    return Math.floor((i - 1) / d);
}
function kthChild(i, k) {
    return d * i + k;
}
function heapifyUp(heap, i) {
    var insertValue = heap[i];
    while (i > 0 && insertValue > heap[parent(i)]) {
        heap[i] = heap[parent(i)];
        i = parent(i);
    }
    heap[i] = insertValue;
}
function heapifyDown(heap, i) {
    var child,temp = heap[i];
    while (kthChild(i, 1) < heap.length) {
        child = maxChild(i);
        if (temp >= heap[child]) {
            break;
        }
        heap[i] = heap[child];
        i = child;
    }
    heap[i] = temp;
}
function maxChild(i) {
    var leftChild = kthChild(i, 1);
    var rightChild = kthChild(i, 2);
    return heap[leftChild] > heap[rightChild] ? leftChild : rightChild;
}
heap.prototype.insert = function(x) {
    this.heap.push(x)
    heapifyUp(this.heap, this.heap.length - 1)
}
heap.prototype.delete = function(x) {
    var maxElement = this.heap[x];
    this.heap[x] = this.heap[this.heap.length - 1];
    heapifyDown(this.heap, x);
    return maxElement;
}
```

## 图的属性和分类

* Graph(V, E)
* V - vertex 点
    1. 度-入度和出度
    2. 点与点之间联通与否
* E - edge 边
    1. 有向和无向（单行线）
    2. 权重（边长）

## 泛型递归、树的递归

```javascript
function recursion(level, param) {
    // 终结条件
    if(MAX_LEVEL < level) {
        return process_result
    }
    // 处理当前层逻辑
    process(level, data)
    // 进入下一层
    recursion(level + 1, p)

    // 清理当前层
}
```

## 分治、回溯

```javascript 
function  divide_conquer(problem, param1, param2, ...) {
    // recursion terminator 
    if(problem is None) {
        return
    } 
    // prepare data 
    var data = prepare_data(problem) 
    var subproblems = split_problem(problem, data) 
    // conquer subproblems 
    var subresult1 = self.divide_conquer(subproblems[0], p1, ...) 
    var subresult2 = self.divide_conquer(subproblems[1], p1, ...) 
    var subresult3 = self.divide_conquer(subproblems[2], p1, ...) 
    ...
    // process and generate the final result 
    var result = process_result(subresult1, subresult2, subresult3, …)
    // revert the current level states
}
```
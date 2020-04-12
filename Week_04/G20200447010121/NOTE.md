## 广度优先搜索
```python
def BFS(graph, start, end):
    visited = set()
	queue = [] 
	queue.append([start]) 

	while queue: 
		node = queue.pop() 
		visited.add(node)

		process(node) 
		nodes = generate_related_nodes(node) 
		queue.push(nodes)

	# other processing work 
	...
```
## 深度优先搜搜
```python
visited = set() 

def dfs(node, visited):
    if node in visited: # terminator
    	# already visited 
    	return 

	visited.add(node) 

	# process current node here. 
	...
	for next_node in node.children(): 
		if next_node not in visited: 
			dfs(next_node, visited)
```
```python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...
```
## 贪心算法
> 贪心算法是一种在每一步选择中都选取当前状态下最好或最优的选择，从而希望导致结果是全局最优
1. 贪心算法对每个子问题的解决方案都作出选择不能回退
2. 动态规划会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能
## 二分查找
#### 二分查找的前提
1. 目标函数单调性(单调递增或者递减)
2. 存在上下界
3. 能够通过索引访问
```javascript
left, right = 0, array.length - 1 
while (left <= right) {
	mid = (left + right) / 2 
	if (array[mid] == target){
		# find the target!! 
		break or return result 
	} else if (array[mid] < target) {
		left = mid + 1 
	} else {
		right = mid - 1
	} 
} 
```
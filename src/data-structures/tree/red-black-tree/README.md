# Red-Black Tree

A **red–black tree** is a kind of self-balancing binary search 
tree in computer science. Each node of the binary tree has 
an extra bit, and that bit is often interpreted as the 
color (red or black) of the node. These color bits are used 
to ensure the tree remains approximately balanced during 
insertions and deletions.

Balance is preserved by painting each node of the tree with 
one of two colors in a way that satisfies certain properties,
which collectively constrain how unbalanced the tree can 
become in the worst case. When the tree is modified, the 
new tree is subsequently rearranged and repainted to 
restore the coloring properties. The properties are 
designed in such a way that this rearranging and recoloring 
can be performed efficiently.

The balancing of the tree is not perfect, but it is good 
enough to allow it to guarantee searching in `O(log n)` time,
where `n` is the total number of elements in the tree. 
The insertion and deletion operations, along with the tree 
rearrangement and recoloring, are also performed 
in `O(log n)` time.

An example of a red–black tree:

![red-black tree](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)
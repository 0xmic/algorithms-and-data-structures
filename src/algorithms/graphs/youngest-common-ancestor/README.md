# Youngest Common Ancestor  
You're given three inputs, all of which are instances of an `AncestralTree` class that have an `ancestor` property pointing to their youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor -- its `ancestor` property points to `None` / `null`), and the other two inputs are descendants in the ancestral tree.  

Write a function that returns the youngest common ancestor to the two descendants.  

Note that a descendant is considered its own ancestor. So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.

```
// The youngest common ancestor to nodes A and B is node A.
   A
  /
 B
```

### Sample Input  
```
// The nodes are from the ancestral tree below.  
topAncestor = node A  
descendantOne = node E  
descentantTwo = node I  
          A
       /     \
      B       C
    /   \    /  \
   D     E  F    G
 /   \
H     I
```  

### Sample Output  
```
node B
```  

## Strategy & Solution
__Strategy__:  
* You could try to simultaneously iterate through the ancestors of both input descendants until you find a commmon ancestor; however, if one of the descendants has more ancestors than the other (i.e., is lower in the ancestral tree), you won't find the youngest common ancestor. How can you get around this problem?  
* Start by finding the two input descendants' depth in the ancestral tree. If one of them is deeper, iterate up through its ancestors until you reach the depth of the highest descendant. Then, iterate through both descendants' ancestors in tandem until you find the first common ancestor. Note that at this point, one of the descendants will be the ancestor of the lower descendant that is at the same level as the higher descendant.  
__Complexity__: O(d) Time | O(1) Space
* d = depth (height) of the ancestral tree  
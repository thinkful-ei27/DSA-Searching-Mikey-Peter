/**======Dewey decimal system (DDS)
since the DDS is a sorted list, we can use a logrithmic sorting function to 
quickly find the book , given the index.
If provided sub lists for classs, subclass, book titles,
respectively, we can use sorted list algorithm at each level, to cut down on
length of total list and find the book quicker
 */



class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }


  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this.key);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this.key);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    }
    else if (this.key < key && this.left) {
      return this.left.find(key);
    }
    else if (this.key > key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        this.remove(successor, key);
      }
      else if (this.left) {
        this._replaceWith(this.right);
      }
      else if (this.right) {
        this._replaceWith(this.left);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  dfsPre(values = []) {
    values.push(this.value);
    if (this.left) {
      values = this.left.dfsPre(values);
    }

    if (this.right) {
      values = this.right.dfsPre(values);
    }
    return values;
  }

  dfsPost(values = []) {
    if (this.left) {
      values = this.left.dfsPost(values);
    }
    
    if (this.right) {
      values = this.right.dfsPost(values);
    }
    values.push(this.value);
    return values;
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.right = node.right;
        this.left = node.left;
      }
      else {
        this.key = null;
        this.value = null;
        this.right = null;
        this.left = null;

      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

let dataList = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

function createBst(list) {
  const BST = new BinarySearchTree();
  for (let i = 0; i < list.length; i++) {
    BST.insert(list[i], list[i]);
  }
  return BST;
}
const bstToSort = createBst(dataList);
console.log(JSON.stringify(bstToSort, null, 2));


// Testing ordering drill
// console.log('in order traversal ===========',bstToSort.dfs());
// console.log('pre order traversal ===========',bstToSort.dfsPre());
// console.log('post order traversal ===========',bstToSort.dfsPost());


/* Max Profit =================================================
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. 
If you had to buy shares in the company on one day, and sell the shares on one of the following days, 
write an algorithm to work out what the maximum profit you could make would be. */


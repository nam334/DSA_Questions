class TrieNode {
  constructor() {
    this.children = {};
    this.ew = 0;
    this.cp = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  //insert
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
      node.cp++;
    }
    node.ew++;
  }

  countWordsEqualTo(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return 0;
      node = node.children[char];
    }
    return node.ew;
  }

  countWordsStartingWith(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return 0;
      node = node.children[char];
    }
    return node.cp;
  }

  erase(word) {
    if (this.countWordsEqualTo(word) === 0) return 0;
    let node = this.root;
    for (let char of word) {
      node = node.children[char];
      node.cp--;
    }
    node.ew--;
  }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("apple");

console.log(trie.countWordsEqualTo("apple"));
console.log(trie.countWordsStartingWith("ap"));

trie.erase("apple");
console.log(trie.countWordsEqualTo("apple"));

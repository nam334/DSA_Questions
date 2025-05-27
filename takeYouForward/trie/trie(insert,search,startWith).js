class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
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
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.searchWord(word);
    return node !== null && node.endOfWord === true;
  }

  searchPrefix(word) {
    let node = this.searchPrefixHelper(word);
    return node !== null;
  }

  searchPrefixHelper(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }

  searchWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }

    return node;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.searchPrefix("app")); // true

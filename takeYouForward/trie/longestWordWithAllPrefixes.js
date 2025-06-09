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
  insert(words) {
    let node = this.root;
    for (let word of words) {
      if (!node.children[word]) {
        node.children[word] = new TrieNode();
      }
      node = node.children[word];
    }
    node.endOfWord = true;
  }

  checkAllPrefixes(words) {
    let node = this.root;
    for (let word of words) {
      if (!node.children[word] || !node.children[word].endOfWord) {
        return false;
      }
      node = node.children[word];
    }
    return true;
  }

  completeString(words) {
    const trie = new Trie();
    for (let word of words) {
      trie.insert(word);
    }
    let result = "";
    for (let word of words) {
      if (trie.checkAllPrefixes(word)) {
        if (
          word.length > result.length ||
          (word.length === result.length && word < result)
        ) {
          result = word;
        }
      }
    }

    return result === "" ? "None" : result;
  }
}

const trie = new Trie();
console.log(trie.completeString(["n", "ni", "nin", "ninj", "ninja", "ninga"])); // "ninja"

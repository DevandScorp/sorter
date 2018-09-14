class Sorter {
  constructor() {
    this.arr = [];
    this.sorter_method = (a,b)=>a>b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    if(this.arr[index]!==undefined)return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
      indices.sort((a,b)=>a>=b);
      let temp = [];
      for(let i of indices){
          temp.push(this.arr[i]);
      }
      temp.sort(this.sorter_method);
      let j = 0;
      for(let i of indices){
          this.arr[i] = temp[j++];
      }
  }

  setComparator(compareFunction) {
    this.sorter_method = compareFunction;
  }
}

module.exports = Sorter;
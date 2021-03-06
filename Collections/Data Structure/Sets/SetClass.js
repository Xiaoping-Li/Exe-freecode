// A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an 
// item. This can be implemented with an object,

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the set
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(set) {
        const result = new Set();
        for (let i = 0; i < this.size; i++) {
            if (set.has(collection[i])) {
                result.add(collection[i]);
            }
        }
        return result;
    }
    // this method will return the difference of two sets as a new set
    this.difference = function(set) {
      const result = new Set();
      for (let i = 0; i < this.size; i++) {
        if (!set.has(collection[i])) {
          result.add(collection[i]);
        }
      }
      return result;
    }
    // this method will return true if this is fully contained in set; otherwise return false
    this.subset = function(set) {
        for (let i = 0; i < this.size; i++) {
            if (!set.has(collection[i])) return false;
        }
        return true;
    }
}

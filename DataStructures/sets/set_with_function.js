/**
 * Sets: `Sets are kind of array which do not allow duplicate elements.`
 */
`use strict`;
function MySet() {
  // collection will hold the set;
  let collection = [];

  // this method will check the presence of the element and return boolen
  this.has = element => collection.indexOf(element) !== -1;

  // this method will return all the values of set
  this.values = () => collection;

  // this method will add the element in set
  this.add = element => {
    if (this.has(element)) return false;
    collection.push(element);
    return true;
  };

  // this method will remove the element from set
  this.remove = element => {
    if (!this.has(element)) return false;
    let index = collection.indexOf(element);
    collection.splice(index, 1);
    return true;
  };

  // this method will returent the size of set
  this.size = () => collection.length;

  // this method will return the union of two sets
  this.union = otherSet => {
    let unionSet = new MySet();
    let existingSet = this.values(); //getting existing sets values
    let passedSet = otherSet.values(); // getting vlaues of passed set

    //   getting both existingSet and passedSet Values
    existingSet.forEach(element => {
      unionSet.add(element);
    });
    passedSet.forEach(element => {
      unionSet.add(element);
    });
    return unionSet;
  };

  // intersection : this method will return the intersection of two sets
  this.intersection = otherSet => {
    let intersection = new MySet();
    let existingSet = this.values();
    existingSet.forEach(element => {
      if (otherSet.has(element)) {
        intersection.add(element);
      }
    });
    return intersection;
  };

  // differerece : this method will return the difference of two sets
  this.difference = otherSet => {
    let difference = new MySet();
    this.values().forEach(element => {
      if (!otherSet.has(element)) {
        difference.add(element);
      }
    });
    return difference;
  };

  // subset: this method will return the subset of a diffrent sets
  this.subset = otherSet =>
    this.values().every(element => otherSet.has(element));
}

/**
 * Export because of node env
 */
module.exports = { MySet };

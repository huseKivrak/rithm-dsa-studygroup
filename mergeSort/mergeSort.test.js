const mergeSort = require("./mergeSort");

describe("mergeSort", function () {

  it("sorts array with even num of elements", function () {
    let arr = [3,7,8,5,4,2,6,1];
    let result = mergeSort(arr);
    expect(result).toEqual([1,2,3,4,5,6,7,8]);
  });

  it("sorts array with odd num of elements", function () {
    let arr = [3,7,5,4,2,6,1];
    let result = mergeSort(arr);
    expect(result).toEqual([1,2,3,4,5,6,7]);
  });

  it("sorts array with 1 element", function () {
    let arr = [4];
    let result = mergeSort(arr);
    expect(result).toEqual([4]);
  });

  it("sorts array containing identical elements", function () {
    let arr = [4,4,4,4,4,4];
    let result = mergeSort(arr);
    expect(result).toEqual([4,4,4,4,4,4]);
  });

});
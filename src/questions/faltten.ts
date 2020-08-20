var a = [1, 2, 3, [4, 5, 6, [7, [8, [9, 10]]]]];

const flatten = (arr) => {
  let res = [];
  const fn = (array) => {
    array.forEach((a) => {
      if (Array.isArray(a)) {
        fn(a);
      } else {
        res.push(a);
      }
    });
  };
  fn(arr);
  console.log(res);
  return res;
};

// const res = flatten(a);
// console.log(res);

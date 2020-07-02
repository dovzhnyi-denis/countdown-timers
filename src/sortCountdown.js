export default function sortCountdown(q) {
  const arr = [];
  // deep copy array of objects into new array
  q.forEach(o => {
    arr.push(Object.assign({}, o));
  });

  // keep sorting as long as there was at least 1 position swap in array
  let swap;
  do {
    swap = 0;
    for (let w = 0; w < arr.length; ++w) {
      if (w < arr.length -1) {
// if date of current object is not greater than of next object, do nothing
        if (arr[w].endDate > arr[w + 1].endDate) {
          let tmp = {};
          // save object at current index into tmp object
          Object.assign(tmp, arr[w]);
          // copy next object into current object
          Object.assign(arr[w], arr[w + 1]);
          // copy tmp object into next object
          Object.assign(arr[w + 1], tmp);
          swap = 1;
        }
      }
    }
  } while(swap);
  return arr;
}

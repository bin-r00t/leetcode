export default function (arr, num) {
  let len = arr.length;
  let cache = [];
  const index = num % len;
  if (!index) return arr;
  let j = 0;
  console.log("arr", arr);
  for (let i = index; i < len; i++) {
    cache[j++] = arr[i];
  }
  j = 0;
  console.log("cache", cache, index);
  let k = index;
  let m = 0;
  console.log("k m ", k, m);
  for (let i = 0; i < len; i++) {
    if (i < index) arr[k++] = arr[i];
  }
  console.log("k m ", k, m);
  for (let i = k; i < len; i++) {
    arr[i] = cache[m++];
  }
  console.log("k m ", k, m, cache.length, j);
  for (let i = m; i < cache.length; i++) {
    arr[j++] = cache[i];
  }
  console.log(arr);
  return arr;
}

const obj = {
  a:1,
  arr: [2,3]
}
obj.__proto__.hello = function() {
  console.log('hello world')
}

obj.hello()

for(let item in obj) {
  // console.log(item)
  console.log(obj[item])
  // console.log(obj.hasOwnProperty(item))
}

function shallowCopy(src) {
  const dst = {}
  for(let item in obj) {
    // if(dst.has)
  }
}
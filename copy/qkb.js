var obj = { a:1, arr: [{a:2,b:3,arr:[{a:1,c:2}]},{ll:1}],obj: {a:1,b:2} };
var shallowObj = shallowCopy(obj);

function shallowCopy(obj) {
  const dst = {}
  for(let item in obj) {
    if(!dst.hasOwnProperty(item)) {
      dst[item] = obj[item]
    }
  }
  return dst
}
console.log(shallowObj === obj)

// 1.先看有没有该属性
// 2.如果有则跳出，没有的话则判断是否是引用类型，
// 3.如果是引用类型的话将该属性赋值给递归,引用类型还要判断是数组还是对象
// 4.如果不是引用类型则直接赋值

function deepCopy(obj) {
  const dst = {}
  for(let item in obj) {
    const cur = obj[item]
    if(!dst.hasOwnProperty(item)) {
      if(Array.isArray(cur)) {
        // 数组处理方法
        dst[item] = cur.map(item =>{
          if(typeof item !== 'object') {
            return item
          } 
          return deepCopy(item)
        })
      } else if(typeof cur === 'object') {
        //处理对象的方法
        dst[item] = deepCopy(cur)
      } else {
        // 值类型
        dst[item] = cur
      }
    }
  }
  return dst
}

const deepOne = deepCopy(obj)
deepOne.arr[0].arr[0].c = 99
console.log('origin:',obj)
console.log('deepOne:',deepOne)
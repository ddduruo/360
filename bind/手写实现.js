Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  return function() {
    _this.apply(context,[args,...arguments])
  }
}


Function.prototype.myCall = function(context) {
  const ctx = context || window
  context.fn = this
  const arg = [...arguments].slice(1)
  const result = ctx.fn(...arg)
  delete context.fn
  return result
}

Function.prototype.apply = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('error')
  }
  context = context || window
  const arg = arguments[1]
  context.fn = this
  const result = context.fn(...arg)
  delete context.fn
  return result
}
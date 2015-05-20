function protos(obj) {
  var result = [];
  function diver(obj){
    if(obj.__proto__){
      result.push(obj.__proto__);
    } else {
      return false;
    }
    diver(obj.__proto__);
  }
  diver(obj);
  return result;
}

console.log( new Array() );
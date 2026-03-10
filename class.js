class parent {
  test = "hello father";
}
class mother {
  test = "hello mother";
}
class child extends parent {
  test = "hello child";
}
class child2 extends parent {
  test = "hello child2";
}
let obj = new child();
console.log(obj.test);

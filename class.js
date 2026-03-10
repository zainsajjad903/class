class parent {
  test_1 = "hello father";
}
class mother {
  test_2 = "hello mother";
}
class chacha {
  test_3 = "hello chacha";
}
class child extends mother {
  test_2 = "hello child";
}
class child2 extends parent {
  test_1 = "hello child2";
}
let obj = new child();
console.log(obj.test_2);
let obj2 = new child2();
console.log(obj2.test_1);

class login {
  #i = 0;
  #email = "zainsajjad.903@gmail.com";
  #password = "123456";
  emailadress;
  Password;
  getlogin() {
    for (i = 0; i < 3; i++) {
      //  #emailadress = prompt("enter emailadress");
      //  #Password = prompt("enter password");
      if (emailadress == email && Password == password) {
        document.writeln("access granted");
        break;
      }

      if (i == 2) {
        document.writeln("Account Blocked");
      }
    }
  }
}
let obj = new login();
obj.login();

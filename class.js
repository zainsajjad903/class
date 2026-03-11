class login {
  #email = "zainsajjad.903@gmail.com";
  #password = "123456";
  #emailadress;
  #Password;

  getlogin() {
    this.i = 0;
    for (this.i = 0; this.i < 3; this.i++) {
      if (
        this.#emailadress == this.#email &&
        this.#Password == this.#password
      ) {
        document.writeln("access granted");
        break;
      }
    }

    if (this.i == 2) {
      document.writeln("Account Blocked");
    }
  }

  setlogin() {
    this.#emailadress = prompt("enter emailadress");
    this.#Password = prompt("enter password");
  }
}

let obj = new login();
obj.setlogin();
obj.getlogin();

class login {
  #email = "zainsajjad.903@gmail.com";
  #password = "123456";
  #emailadress;
  #Password;

  getlogin() {
    for (let i = 0; i < 3; i++) {
      this.setlogin();
      if (
        this.#emailadress == this.#email &&
        this.#Password == this.#password
      ) {
        document.writeln("access granted");
        return;
      }
    }
    document.writeln("Account Blocked");
  }

  setlogin() {
    this.#emailadress = prompt("enter emailadress");
    this.#Password = prompt("enter password");
  }
}

let obj = new login();
obj.getlogin();

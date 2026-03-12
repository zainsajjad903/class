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

  
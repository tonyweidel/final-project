class Password{
  constructor(publickey,privatekey){
    this.publickey = publickey
    this.privatekey = privatekey
  }
  //The first part of the class.
  validPublicKey(){
    let key = this.publickey
    if (key.length >= 8 && key.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
  //Instance functions below this comment.

  //Static function below this comment.
  static makePrivateKey(){
    let key = '';
    let limit = 14;
    for(let r=0; r<limit; r++){
      key = String(Math.floor(Math.random()*10));
    }
    console.log(key);
  }
}
let Mitchell = new Password('Give me the sweet release of death');
Password.makePrivateKey();
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
  validPrivateKey(){
    if(this.privatekey.charAt(4) != '-' || this.privatekey.charAt(9) != '-'){
      return false;
      console.log(false);
      console.log("Incorrect Format");
    }
    else if(Number.isNaN(Number(this.privatekey.substring(0,4)))){
      return false;
      console.log(false);
    }
    else if(Number.isNaN(Number(this.privatekey.substring(5,9)))){
      return false;
      console.log(false);
    }
    else if(Number.isNaN(Number(this.privatekey.substring(10,14)))){
      return false;
      console.log(false);
    }
    else{
      return true
      console.log(true)
    }
  }
  //Static function below this comment.
  static makePrivateKey(){
    let key ='';
    let limit = 14;
    for(let r=0; r<limit; r++){
      if(r==4||r==9){
        key += '-';
      }
      else{
        key += String(Math.floor(Math.random()*10));
      }
    }
    console.log(key);
  }
}

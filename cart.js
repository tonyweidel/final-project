class Cart{
  //What is the first part of every class? Type it below.
  constructor(itemList,itemQuantity){
    this.itemList = itemList;
    this.itemQuantity = itemQuantity;
  }
  addItem(i,q){
   this.itemList.push(i);
   this.itemQuantity.push(q);
 }
 totalCart(){
   let total = 0
   for(let t = 0; t<this.itemList.length; t++){
   let item = (this.itemList[t].price)*this.itemQuantity[t];
   total = total + item;
   return total;
 }
 subcart(days){
   
 }
  //Type the instance functions below this comment.


}

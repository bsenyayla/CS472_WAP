class product{
    #name="";
    #productId=0;
    #quantityInStock=0;
    #unitPrice=0.0;

    constructor(productId,name,quantityInStock ,unitPrice){
        this.#productId=productId;
        this.#name=name;
        this.#quantityInStock=quantityInStock;
        this.#unitPrice=unitPrice;
    }
    getName(){
        console.log("getName.");
        return this.#name;
    }

    setName(val){
        this.#name=val;
        console.log("setName.");
    }

    getProductId(){
        console.log("getName.");
        return this.#productId;
    }

    getQuantityInStock(){
        console.log("getName.");
        return this.#quantityInStock;
    }

    setQuantityInStock(val){
        this.#quantityInStock=val;
        console.log("setName.");
    }

    
    getUnitPrice(){
        console.log("getName.");
        return this.#unitPrice;
    }

    setUnitPrice(val){
        this.#unitPrice=val;
        console.log("setUnitPrice.");
    }

    toString() {
        return  "OverrideToString=>" + this.#name + " - " + this.#unitPrice;
    }

}


var obj=new product(1001,"Banana",64,0.99);
var obj2=new product(1002,"Apple",64,1.85);
var obj3=new product(1003,"Carrots",125,2.70);

const arryProducts = [obj, obj2, obj3];

for(let dr of arryProducts){
   console.log("Name:" +  dr.getName());
   console.log("Price:" +  dr.getProductId());
   console.log("UnitPrice:" +  dr.getUnitPrice());
   console.log("QuantityInStock:" +  dr.getQuantityInStock());

}



console.log(obj.getName());
obj.setName("Şenyayla");
console.log(obj.getName());
console.log(obj.toString());






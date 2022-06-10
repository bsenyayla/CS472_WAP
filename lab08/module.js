const product=(function(){
    var val1=100;
    const name="bahadir";
    var age=37;
    var salary="150k";
    const address="";

    setAge=(newAge)=>{
        this.age=newAge;
    }

    setSalary=(newSalary)=>{
        this.salary=newSalary;
    }

    setName=(newName)=>{
        this.name=newName;
    }

    getAge=()=>{
        return age;
    }
    getSalary=()=>{
        return salary;    
    }

    getName=()=>{
        return name;
    }

    info=()=>{
        console.log("here is product..");
    }
    
    increaseSalary=function(){
        return getSalary();
    }

    incrementAge=function(){
        return getAge();
    }  
    
    getAddress=()=>{
        return address;
    }
    setAddress=(newAddress){
        address=newAddress;
    }
    

    return{
        info:info,
        salary:salary,
        setAge:setAge,
        setSalary:setSalary,
        setName:setName,
        getName:getName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge,
        getAddress:getAddress,
        setAddress:setAddress,
        address:address
    }
})();
 

product.info();
console.log(product.salary);

product.setAge(10);
//console.log("Age:" + product.getAge());

console.log("Name:" + product.getName());
console.log("increaseSalary:" + product.increaseSalary());


 /*
 var count =(
    function(){
        var counter=0;
        var q6ResultArea=document.getElementById("q6ResultArea");
        var adderConst=1;
        add=()=>{
                    counter+=adderConst;
                    privateWriteTextArea("Add runned..." + counter);
                }

        reset=()=>{
                    counter=0;
                    privateWriteTextArea("Reset runned...");
                    }
        print=()=>{
                    privateWriteTextArea("Counter Value:" + counter);
                  }

        make_adder=(xx)=>{
            adderConst=xx;
            privateWriteTextArea("MakeAdder:" + xx + " adderConst:" +adderConst);
        }                          

        function info(){
            freeVariable="i m free variable";
            privateWriteTextArea("info..." + freeVariable);
        }

        function privateFunction(){
            privateWriteTextArea("i m private function.");                
        }

        function privateWriteTextArea(ss){                   
            q6ResultArea.innerHTML+=ss + "\n" ;
            console.log(ss);
        }

        return { //public & private ayarları buradan yapılıyor
            add:add,
            reset:reset,
            print:print,
            info:info,
            make_adder:make_adder
        }


    })();

    
Module Function -Method*/
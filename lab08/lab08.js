 /*Module Function -Method*/
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

    
count.add();
count.print();
count.add();
count.add();
count.add();


count.print();
count.reset();    

count.make_adder(3);
count.add();
count.add();
count.print();
    count.info();
count.privateFunction; 
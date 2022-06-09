/*Module Function -Method*/
        var count =(
            function(){
                var counter=0;
                var q6ResultArea=document.getElementById("q6ResultArea");
                var adderConst=1;
                add=()=>{
                            
                            counter+=adderConst;
                            console.log("Add runned..." + counter);
                            privateWriteTextArea("Add runned...");
                        }
        
                reset=()=>{
                            counter=0;
                            console.log("Reset runned...");
                            privateWriteTextArea("Reset runned...");
                            }
                print=()=>{
                            console.log("Counter Value:" + counter);
                            privateWriteTextArea("Counter Value:" + counter);
                          }

                make_adder=(xx)=>{
                    adderConst=xx;
                    console.log("MakeAdder:" + xx + " adderConst:" +adderConst);
                }                          
        
                function info(){
                    console.log("info...");
                    freeVariable="i m free variable";
                    console.log("info..." + freeVariable);
                }
        
                function privateFunction(){
                    console.log("i m private function.");
                }
        
                function privateWriteTextArea(ss){                   
                    q6ResultArea.innerHTML+=ss + "\n" ;
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
        count.privateFunction; //

        
        
        
        
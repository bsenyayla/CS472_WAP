
        var count =(
            function(){
                var counter=0;
                var q6ResultArea=document.getElementById("q6ResultArea");

                add=()=>{
                            
                            counter++;
                            console.log("Add runned...");
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
                    info:info
                }
        
        
            })();
        
            
        count.add();
        count.print();
        count.add();
        count.add();
        count.add();
        count.print();
        count.reset();    
        count.print();
            count.info();
        count.privateFunction; //

        
        
        
        
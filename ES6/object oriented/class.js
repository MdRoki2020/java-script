class myClass{
    
    fun1(length){
        let i=1;
        for(i;i<=length;i++){
            console.log(i);
        }
        console.log("Function 1")
    }
    fun2(){
        console.log("Function 2")
    }
    fun3(){
        console.log("Function 3")
    }
    fun4(){
        console.log("Function 4")
    }

}

let demo=new myClass();

demo.fun1(20);
demo.fun4();
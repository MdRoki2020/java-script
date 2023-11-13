class parent{
    fun1(){
        console.log("function 1");
    }
    fun2(){
        console.log("function 2");
    }
}

class child extends parent{

}

let obj=new parent;

obj.fun1();
// JS Datatypes
var num=5;
        console.log(typeof(num));

        var num2="15";
        console.log(typeof(num2));

        var result=num+num2;
        console.log(result); //515
        console.log(typeof(result)); //string

        var result1=num*num2;
        console.log(result1);  //75
        console.log(typeof(result1)); //number

        var result2=num/num2;
        console.log(result2);  //0.333
        console.log(typeof(result2)); //number


        var compNum="5";  // type of string

        //== only checks value while in === checks value and its data type
        if(num===compNum){
            console.log("true");
        }
        else{
            console.log("false");
            
        }
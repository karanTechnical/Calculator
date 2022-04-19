var string = "";
    const addValue = (value) =>{
    const result =
    document.getElementsByTagName("input")[0];
        if(value =="c"){
            string = "";
            result.value = "0" ;

        }else if(value=="ce"){
            string = string.substring(0,string.length-1);
             result.value = string?string:0;

        }else if(value=="="){
            try{
                let ans =eval(string)
                if(string){
                    result.value = ans;
                    string = "";
                }
            }catch(err){
                result.value = "Error";
                string ="";
            }

            }else{
                result.value = "0" ;
                string+=value;
                result.value = string;
        
        }
}


 function checkHidden(cols, rows){
        var arr = [];
        var sum = 0;
        
        var se = document.getElementById("weight");
        var p = document.createElement("P");
        for(var i = 0; i < cols.length; i++){
            var weight = [];
            if(cols[i].style.display != "none" && cols[i].className){
                arr.push(cols[i].children);
            }
            for(var j = 0; j < arr.length; j++){
                if(arr[j][2].innerText != "")
                weight.push(arr[j][2].innerText);
            }
        }   
        
       for(var i = 0; i < weight.length; i++){
           var num = Number(weight[i]);
           sum += num;
       }
       var result = sum.toString();
       console.log(sum);
       
       
    }
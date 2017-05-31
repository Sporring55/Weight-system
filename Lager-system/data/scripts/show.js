function ShowMore(){
    
    var tr = document.getElementsByTagName("tr");
    var td = document.getElementsByTagName("td");
    
    for(var i = 0; i < tr.length; i++){
        
        if(tr[i].className){

            var btn = document.createElement("BUTTON");
            var txt = document.createTextNode("DOWN");
            var up = document.createElement("BUTTON");
            var upTxt = document.createTextNode("UP");
            
            btn.append(txt);
            tr[i].appendChild(btn);
            btn.id = "btn";  
            btn.addEventListener("click", myShow); 

            up.append(upTxt);
            tr[i].appendChild(up);
            up.id = "up";  
            up.addEventListener("click", myShow);                  
        }    
    }   
}
var index = 1;
var index2 = 1;

function myShow(){
    var tr = document.getElementsByTagName("tr");
    var btn = document.getElementsByTagName("BUTTON");
    var down = document.getElementById("btn").id;
    var up = document.getElementById("up").id;
    
    for(var i = 0; i < btn.length; i++){
        // console.log(this.id);
        var parent = $(this).parent().attr("class");
        var num = 1;
        for(var j = 0; j < tr.length; j++){
            if(tr[j].id && tr[j].id == parent ){
                
                tr[j].style.background = "black";
               while(index > 0 && tr[j].style.display != ""){
                    if(this.id == down){
                        tr[j].style.display = "";
                    }
                    index--;
                    console.log(index);
               }
                while(index2 > 0 && tr[j].style.display != "none"){     
                    if(this.id == up){
                        tr[j].style.display = "none";
                    }
                    index2--;
                }
            }
        }
    }
    index = 1;
    index2 = 1;                
}


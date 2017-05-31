// Search function
$(document).ready(function(){
    $("#search").on("keyup", function(){
        function fSearch() {
            var input, filter, tr, td, a;
                input = document.getElementById("search");
                filter = input.value.toUpperCase();
                tr = document.getElementsByTagName("tr");
                td = document.getElementsByTagName("td");
                var se = document.getElementById("weight");
                var placeholder = document.createElement("P");
                var txt = document.createTextNode("Ingen vægt");
            for(var i = 0; i < tr.length; i++){         
                a = tr[i];
                if(a.innerHTML.toUpperCase().indexOf(filter) > - 1 && !tr[i].id){
                    tr[i].style.display = "";
                    tr[0].style.display = "";
                }else{
                    tr[i].style.display = "none";
                }
            }
           if(filter !== ""){
            checkHidden(tr,td);
           }
           else {
            placeholder.append(txt);
            $(se).html(placeholder);
           }
        }
        fSearch();
    })
});
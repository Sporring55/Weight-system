// Search function

    $("#search").on("keyup", function(){
        function fSearch() {
            var input, filter, tr, td, a;
                input = document.getElementById("search");
                filter = input.value.toUpperCase();
                tr = document.getElementsByTagName("tr");
                td = document.getElementsByTagName("td");
                console.log(filter);
            for(var i = 0; i < td.length; i++){         
                a = td[i];
                if(a.innerHTML.toUpperCase().indexOf(filter) > - 1 && !tr[i].id){
                    td[i].style.display = "";
                    td[0].style.display = "";
                }else{
                    td[i].style.display = "none";
                }
            }
        }
        fSearch();
    })

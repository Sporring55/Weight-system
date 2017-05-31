$(document).ready(function(){
    $("tr").show(function(){
            //Color for valid tables
            $(this).css({"background-color": "#5BC0DE", "color": "white"});
            //array: keeps id of hidden tables 
            var retval = [];
            var Id = $(this).attr("id");	
        
            $("tr").each(function(){
                var Id = $(this).attr('id');
                
                if(Id !== undefined){
                    retval.push(Id);
                }
                  
                //Running for loop through array so history is hidden
                for(var i = 0; i < retval.length; i++){
                    //Simpel if statement for hiding history
                    if($(this).attr('id') == retval[i]){
                        $(this).hide();		
                    }
                }	
                
            })
          	
        });
})
     
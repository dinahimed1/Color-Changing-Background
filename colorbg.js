var colorArray = ["purple", "tan", "lightblue", "lightgreen", "pink"];

colorIndex = 0;

$(document).ready(function(){
    $("#colorChange").click(function(){
        $("body").css("background-color", colorArray[colorIndex]);
            colorIndex = colorIndex + 1;
            if(colorIndex==colorArray.length){
            colorIndex = 0
        }
        
        });
});



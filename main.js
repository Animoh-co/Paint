var mouseeve ="empty";
var color ="black";
var linewidth= 2;
var circleradius = 6;
var last_position_of_x , last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_md);
function my_md(e){
    color= document.getElementById("circlecolor").value;
    linewidth= document.getElementById("linewidth").value;
    circleradius= document.getElementById("radiuscircle").value;


mouseeve = "mouseDown";
}


canvas.addEventListener("mouseup" , my_mu);
function my_mu(e){
    mouseeve= "MouseUp";
}

canvas.addEventListener("mouseleave", my_ml);
function my_ml(e){
    mouseeve="MouseLeave";
}

canvas.addEventListener("mousemove", my_mm);
function my_mm(e){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseeve=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= linewidth;
        ctx.arc(current_position_of_x, current_position_of_y, circleradius, 0,2*Math.PI);
        ctx.stroke();

        console.log("last position of x= " +last_position_of_x);
        console.log("last position of y= " +last_position_of_y);
        console.log("current position of x=" +current_position_of_x);
         console.log("current position of y="+ current_position_of_y);
        
        
    }


    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}

function clearcanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
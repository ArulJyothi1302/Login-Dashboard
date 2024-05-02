


var joins=document.getElementById("joined");
function joinfun(){
    visited.style.display="none";
    joins.style.display="block";
    inprocess.style.display="none";
    todayPriority.style.display="none";
}
function visitfun(){
    joins.style.display="none";
    inprocess.style.display="none";
    visited.style.display="block";
    todayPriority.style.display="none";
}
function inpfun(){
    joins.style.display="none";
    visited.style.display="none";
    todayPriority.style.display="none";
    inprocess.style.display="block";

}
function todfun(){
    inprocess.style.display="none";
    joins.style.display="none";
    visited.style.display="none";
    todayPriority.style.display="block";

}


var visited=document.getElementById("visited");

var inprocess=document.getElementById("inprocess");
var todayPriority=document.getElementById("today");
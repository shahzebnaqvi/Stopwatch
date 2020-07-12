var minsp = document.getElementById("min");
var secsp = document.getElementById("sec");
var msecsp = document.getElementById("msec");
var msec = 0;
var sec = 0;
var min = 0;
var interval;
var laplist = document.getElementById('lap_list');
var id= 0;


function timer() {
    msec++
    msecsp.innerHTML = msec
    if (msec >= 100) {
        sec++
        secsp.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        minsp.innerHTML = min
        sec = 0
    }
}



Start_btn = () => {
    if (!interval) {
        interval = setInterval(timer, 10)
    }
}



Stop_btn = () => {
    clearInterval(interval)
    interval = false
}
Reset_btn = () => {
    minsp.innerHTML = '00';
    secsp.innerHTML = '00';
    msecsp.innerHTML = '00';
    msec = 0;
    sec = 0;
    min = 0;
    Stop_btn();
    id =0;
    laplist.innerHTML="<ul></ul>";
}




function lap_btn() {
    
    id++;
    var lap ="lap "+id+" : "+ min + " : " + sec + " : " + msec;
    var node = document.createElement("li");
    var textnode = document.createTextNode(lap);
    node.appendChild(textnode);
    document.getElementById("lap_list").appendChild(node);

}
      
function cly(){
    document.body.style.backgroundColor = "#ffee00";
}
function clg(){
    document.body.style.backgroundColor = "#36d805";
}
function clp(){
    document.body.style.backgroundColor = "#9a36eb";
}
function clgy(){
    document.body.style.backgroundColor = "#757974";
}

function clb(){
    document.body.style.backgroundColor = "#00bbff";
}
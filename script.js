var removElTask=[];
var removChlTask=[];
let buttonAdd=document.getElementById('buttonAdd');
let inputTask=document.getElementById('inputText');
let containarTasks=document.getElementById('containarTasks');
let clearAllButton=document.getElementById('clearAllButton');
 var nbrTask=0;
 
 
buttonAdd.onclick=function addTask() {
    var TaskeText=document.createTextNode(inputTask.value);
    if(inputTask.value===""){
        return false;
    }
    inputTask.focus();
    var TaskeElement=document.createElement('div');
    TaskeElement.setAttribute('id','el'+nbrTask);
    var childTsk=document.createElement("div");
    childTsk.setAttribute('id','chl'+nbrTask);
    TaskeElement.appendChild(TaskeText);
    TaskeElement.appendChild(childTsk);
    containarTasks.appendChild(TaskeElement);
    
    
    
    removElTask[nbrTask]=document.querySelector("#el"+nbrTask);
    removChlTask[nbrTask]=document.querySelector("#chl"+nbrTask);
    
    
    nbrTask++;
    for (let index = 0; index < nbrTask; index++) {
        removChlTask[index].onclick=function(){
            removElTask[index].remove();
        }
        
    }

}
//button bax tbdal bin lwad3 layli nhigte o nahari 
var i=0;
clearAllButton.onclick=function clearaAll() {
    for (let index = 0; index < nbrTask; index++) {
        containarTasks.removeChild(document.querySelector("#containarTasks div"));
    }
    nbrTask=0;
}
var buttonCH=document.querySelector('.buttonBLackNight')
var buttonCHCH=document.querySelector('.buttonBLackNight div')
var main=document.querySelector(".main");
buttonCH.onclick=function chek(){
    if(i%2==0){
        buttonCHCH.style.left="60%";
        buttonCHCH.style.background="#f57f17";
    document.body.style.background="black"
    main.style.background="black"
    
    }else{
        buttonCHCH.style.left="0%";
        buttonCHCH.style.background="red";
    document.body.style.background="white"
    main.style.background="#fafafa"
    }
    i++;
}

//butoun bax thbat scroll ltaht
document.querySelector('.buttonGo').onclick=function scrol() {
    document.location.assign('#buttonAdd');
}

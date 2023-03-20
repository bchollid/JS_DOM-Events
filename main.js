console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

document.getElementById("node1").innerText = "I used the getElementById('node1') method to access this";
document.getElementsByClassName("node2")[0].innerText = "I used the getElementsByClassName('node2') method to access this";
let h3Tags = document.getElementsByTagName("h3");
for(let i = 0; i < h3Tags.length; i++){
    h3Tags[i].innerText = "I used the getElementByTagName('h3') method to access all of these"
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
let newPara = document.createElement("p");
newPara.innerText = "This node was created using the createElement() method."
let parentElement = document.getElementsByClassName("exercise-container exercise2")[0];
parentElement.appendChild(newPara);
let newAnchor = document.createElement("a");
newAnchor.innerText = `I am a <a> tag`;
newAnchor.href = "https://www.google.com/"
parentElement.insertBefore(newAnchor, newPara);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

let oldChildNode = document.getElementById("N1");
let newChildNode = document.createElement("p");
newChildNode.innerText = "New Child Node"
let theParent = document.getElementById("exercise-container3");
theParent.replaceChild(newChildNode, oldChildNode);
newChildNode.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let newList = document.createElement("ul");
let container = document.getElementById("container");
container.appendChild(newList);
list.forEach(function(item){
    let newLi = document.createElement("li");
    newLi.innerText = item;
    newList.appendChild(newLi)
})

/*----------- Exercise #5: DOM EVENTS --------------*/

var button = document.getElementById("btn");
var main = document.getElementsByClassName("root")[0];
var exerciseContainer = document.getElementsByClassName("exercise-container exercise5")[0];

button.onclick = show;


function show(){
    var alertDiv = document.createElement("div");
    alertDiv.setAttribute('id', 'modal');
    alertDiv.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user. Click anywhere to close.";
    document.body.insertBefore(alertDiv, main);
    var modal = document.getElementById("modal");
    modal.addEventListener("click", function(){
        alertDiv.remove();
    })
}

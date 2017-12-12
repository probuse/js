var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline")
var listItems = document.getElementById("our-list").getElementsByTagName("li");

ourList.addEventListener("click", activateItem);

// for(i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem);
// }

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerHTML;

    }
}

ourButton.addEventListener("click", addNewItem);

function addNewItem() {
    ourList.innerHTML += "<li>New etwin Item" + newItemCounter + "</li>";
    newItemCounter++;
}
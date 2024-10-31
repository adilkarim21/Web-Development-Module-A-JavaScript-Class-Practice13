// Attributes


// var divElement = document.getElementById("main");

// divElement.className = "container";

// divElement.setAttribute('class','container01');

// console.log(divElement);


// var btnElement = document.getElementById("btn");

// btnElement.setAttribute('class','button');

// btnElement.setAttribute('onclick','greet(this)');

// var getAtr = btnElement.getAttribute('onclick')

// console.log(btnElement.attributes[2].nodeValue);

// console.log(btnElement.hasAttribute('onmouseover'));


// function greet(e) {
//     console.log(e);
// }



// CREATE H1 ELEMENT WITH DOM:

// var h1Element = document.createElement('h1');

// var h1Text = document.createTextNode('hello world');

// h1Element.appendChild(h1Text);

// console.log(h1Element);


// CREATE A ELEMENT WITH DOM:

// var anchorElement = document.createElement('a');

// var anchorText = document.createTextNode('Google');

// anchorElement.appendChild(anchorText);

// anchorElement.setAttribute('href','https://www.google.com');

// console.log(anchorElement);


// CREATE P ELEMENT WITH DOM:

// var paraElement = document.createElement('p');

// var paraText = document.createTextNode('My name is Adil. I am a student.');

// paraElement.appendChild(paraText);

// console.log(paraElement);


// CREATE BUTTON ELEMENT WITH DOM:

// var btnElement = document.createElement('button');

// var btnText = document.createTextNode('Add to cart');

// btnElement.appendChild(btnText);

// btnElement.style.color = "purple";

// btnElement.style.backgroundColor = 'pink';

// btnElement.style.borderRadius = '5px';

// console.log(btnElement);


// INSERT ABOVE ELEMENTS INTO HTML DIV ELEMENT:

// var divElement = document.getElementById('main');

// divElement.appendChild(h1Element);

// divElement.appendChild(anchorElement);

// divElement.appendChild(paraElement);

// divElement.appendChild(btnElement);






// -------------------------------------------------------------------------------------------->





// TODO APP:


var ulElement = document.getElementById('list');

function addtodo() {

  var input = document.getElementById('inputField');

  if (input.value) {

    var liElement = document.createElement('li');

    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);

    // Create Delete Button liElement:

    var delBtnElement = document.createElement('button');

    var delBtnText = document.createTextNode('Delete');

    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);

    delBtnElement.setAttribute('onclick','deleteSingleItem(this)');

    // Create Edit Button liElement:

    var editBtnElement = document.createElement('button');

    var editBtnText = document.createTextNode('Edit');

    editBtnElement.appendChild(editBtnText);

    liElement.appendChild(editBtnElement);

    editBtnElement.setAttribute('onclick','editItem(this)');

    console.log(liElement);

    input.value = "";

  }

  else {

    alert("Fill the field..");
  
  }

}

function deleteAllItems() {

  ulElement.innerHTML = "";

}

function deleteSingleItem(d) {

  d.parentNode.remove();
  
}

function editItem(e) {
  
  var updatedValue = prompt("Enter updated value..");

  e.parentNode.firstChild.nodeValue = updatedValue;

}



// CRUD OPERATION (Create Read Update Delete):
//A reminder from your DOM Methods lesson: 
//Rather than using yourElement.innerHTML += 'hello' to add text content to an element,
// you can use yourElement.append('hello').
//NOTES FROM THE DOM LESSON:  

//let sectionElement = document.querySelector('section')
//sectionElement.innerHTML = sectionElement.innerHTML + '<div>hello</div>'

//But there is a better way…

//document.createElement()  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The document.createElement() function is used to create an element node. document.createElement()        >>>
//takes in one argument, which is a string representing the type of element we want to create. For example: >>
//document.createElement('div'), document.createElement('ul'), document.createElement('table'), etc.        >>
//                                                                                                        >>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//node.append()   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//We will use the node.append() function to do 2 things:

//Append an element node as the child of another element node.

//myElement.append(insertElement) will append the insertElement as a child node of myElement.
//Append text content to an element node.

//insertElement.append('myString') will append the text 'myString' to the insertElement node
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//EXAMPE FROM THE SHOW-KATAS DEMO:  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//let newDiv = document.createElement('div')
//newDiv.append(finalString)
//bodyElement.append(newDiv)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//ANOTHER EXAMPLE:  
//letnewDiv= document.createElement('div')
//newDiv.className - 'potato'
//newDiv.id=1
//newDiv.append('hello')
//let sectionElement = document.querySelector('section')
//sectionElement.append(newDiv)


let buttonElement = document.createElement('button')

buttonElement.addEventListener("click", function () { mainElement.remove() }
);

buttonElement.className = "button-class"
buttonElement.append('Hello')

let bodyElement = document.querySelector('body')
bodyElement.append(buttonElement)

let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let imgElement = document.createElement('img')
imgElement.className = "image"
mainElement.append(imgElement)
imgElement.src = "https://cdn.cnn.com/cnnnext/dam/assets/200622110014-british-shortair-cat-large-169.jpg"

let aElement = document.createElement('a')
aElement.className = "link"
aElement.append('Link')
mainElement.append(aElement)
aElement.href = "https://www.google.com/"
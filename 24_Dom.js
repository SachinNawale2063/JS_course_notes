const text = document.getElementById('title').innerHTML;
const attributes = document.getElementById('title').getAttribute('class');


console.log(text);
console.log(attributes);

const box = document.getElementById('box')
box.style.display = "flex"
box.style.border = "2px solid red"
box.style.justifyContent = "center"
box.style.flexDirection = "row"
box.style.alignItems = "center"

const title = document.getElementById('title')
title.style.backgroundColor = "Green"
title.style.padding = "20px"
title.style.borderRadius = "15px"
title.style.textAlign = "center"
title.style.height = "40px"
title.style.width = "700px"

console.log(title.innerHTML);
console.log(title.innerText); 

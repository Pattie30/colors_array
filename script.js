
//const li = document.querySelector('#list')
const ul = document.querySelector('#color-list')
const Btn = document.querySelector('#generate-color')
const resetBtn = document.getElementById('reset-btn');

const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];


  



const generateRan = () => {
    let num = Math.floor(Math.random() * COLORS_ARRAY.length)
    
   const li = document.createElement('li')
   
    li.textContent = COLORS_ARRAY[num]
    li.style.backgroundColor = COLORS_ARRAY[num]
    ul.appendChild(li)
}
//btn2.addEventListener('click' reset)
const reset = () => {
 //console.dir(ul)
    while(ul.firstElementChild ){ 
            ul.firstElementChild.remove()

   }
  //ul.remove(li)
  //li.style.backgroundColor = 'white';
}
resetBtn.addEventListener('click', reset);
Btn.addEventListener('click', generateRan)


 // ===== CHALLENGE =====
      // 1. Create A Function (generate)
      // Function should get a random color from the COLORS_ARRAY
      // Create a li element
      // Add the color name to the li text
            // Set the background color of the li to the random color
      // Append the li to the ul
     
      // 2. Create Function (reset)
      // Should remove all li children from the ul. 
      // Should set background color to white.
  
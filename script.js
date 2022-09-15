
//const li = document.querySelector('#list')


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
    let num = ( ) => {
       [ Math.floor(Math.random() * COLORS_ARRAY.length)]
    

    const colorsx = () => {
   const li = document.createElement('li')
   
    li.textContent = COLORS_ARRAY[num()]
    li.style.backgroundColor = num()
    ul.appendChild(li)
   
    li.addEventListener('click', () => console.log('New Li!!!'))
    
 
}}
//btn2.addEventListener('click' reset)
const reset = () => {
  ul.remove(li)
  li.style.backgroundColor = 'white';
}
resetBtn.addEventListener('click', reset());}

const ul = document.querySelector('#color-list')
const Btn = document.querySelector('#generate-color')
const resetBtn = document.getElementById('reset-btn');

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
  
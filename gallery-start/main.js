const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (var i = 1;i < 6 ; i ++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    //newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',function(){
        displayedImage.src = this.src  
    })
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(){
    const overlay = document.querySelector(".overlay")
    if (this.getAttribute("class") == "dark"){
        this.setAttribute("class","light")
        this.textContent = "Lighten"
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }else{
        this.setAttribute("class","dark")
        this.textContent = "Darken"
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
    }


})
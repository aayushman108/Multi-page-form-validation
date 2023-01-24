// get all steps of the form
const steps= document.querySelectorAll(".step");
let noOfSteps=steps.length;
console.log(noOfSteps);
let count=0;

//accessing next and previous buttons
const previous= document.getElementById("preBtn");
const next= document.getElementById("nxtBtn");

//adding event listener
next.addEventListener('click', nextButton);
previous.addEventListener('click', previousButton);

//function for next button
function nextButton(event){
    count++;
    if(count>=noOfSteps){
        return;
    }
    steps[count-1].style.display="none";
    steps[count].style.display="block";  
}

//function for previous button
function previousButton(event){
       count--;
       if(count< 0){
        return;
       }
       steps[count+1].style.display='none';
       steps[count].style.display='block';
       if(count==0){
       previous.style.backgroundColor='red';
       }
    
}

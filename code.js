//Object for regex
/*const obj ={
    mobile-number: ;
    email: ;
    pan-number: ;
    ward: ;
    street: ;
    account-number: ;
    boid: ;
}
*/

// get all steps of the form
const steps= document.querySelectorAll(".step");
let noOfSteps=steps.length;
let count=0;

//accessing next and previous buttons
const previous= document.getElementById("preBtn");
const next= document.getElementById("nxtBtn");

//adding event listener
next.addEventListener('click', nextButton);
previous.addEventListener('click', previousButton);

//function for next button
function nextButton(event){
    if(count< noOfSteps-1){
        count++;
        steps[count].style.display= 'block';
        steps[count-1].style.display= 'none';
    }
}

//function for previous button
function previousButton(event){
    if(count<=0){
        return;
    }
    if(count> 0){
        count--;
        steps[count].style.display='block';
        steps[count+1].style.display='none';   
    }
}

//getting all inputs of the form
const inputs= document.querySelectorAll("input");
const inArray= Array.from(inputs);
console.log(inArray);
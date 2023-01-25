
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




//Object for regex
const pattern = {
    mobileNumber: /^(\+977-|977-)?(98)\d{8}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    panNumber:/^\d{4}$/,
    ward: /^\d{2}$/,
    street:/^([a-z]+)(-\d{2})?$/i,
    accountNumber:/^\d{12}$/,
    boid:/^\d{13}$/
};

//getting all inputs of the form
const inputs= document.querySelectorAll("input");
const inArray= Array.from(inputs);
console.log(inArray);

//adding event listener to each inputs

inArray.forEach(arrEvent);
function arrEvent(inpt){
    inpt.addEventListener('blur', (e)=>{
        validate(e.target, pattern[e.target.attributes.name.value])
    })
}

/*validation*/
function validate(field, regex){
    if(regex.test(field.value)){
        field.classList.add("valid");
    }else{
        field.classList.add("invalid");
    }
}

/*submit*/
let countCount=0;
let button=document.getElementsByClassName("btn");
document.addEventListener('submit', checkSubmit);

function checkSubmit(event){
    event.preventDefault();
    button.classList.add('valid');
             
    for(let value of inArray){
        if(value.classList.contains("valid")){
            countCount++;
        }
    }

    if(countCount== inArray.length){
        button.submit();            
    }else{
        button.classList.add("invalid");
    }
}

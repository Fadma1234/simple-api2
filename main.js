//psuedo code
//found my working key and tested it on postman https://owen-wilson-wow-api.onrender.com/wows/random?results=5
//build my code starting with my event listener to make my function run
//create my function
//create my variables inside my function 
//console log my variables to make sure evrything is working before I move on
//create my fetch to get my json object back
//get my data readable using then
//console log the data to see what it gives back in console to use it in my code in get the right data I need
//create a catch to run when an error comes in
document.querySelector('button').addEventListener('click',getV);


function getV(){
    const movie = document.querySelector('input').value;
const url = `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${movie}`;

fetch(url)
.then(res => res.json())
.then(data =>{
    console.log(data)

            
            document.querySelector('h3').innerText=data[0].character;
            document.querySelector('img').src=data[0].poster;
            document.querySelector('h4').innerText=data[0].full_line;
            document.querySelector('audio').src=data[0].audio;
            document.querySelector('h5').innerText=data[0].current_wow_in_movie;  
})



}
const API_key='1f9c91d29227940780171489d5774358';

const input=document.querySelector('.input-box');
const search=document.querySelector('.search');
const degree=document.querySelector('.degree');
const loca=document.querySelector('.location');
const cloud=document.querySelector('.time');
const output = document.querySelector('.output');

async function getdata(API_key,city){
    let promise=await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metrics&q=${city}&appid=${API_key}`);
    return await promise.json();
}
search.addEventListener("click",async()=>{
    let city=input.value;
    const result=await getdata(API_key,city);
    degree.innerText=Math.floor((result.main.temp)/10);
    loca.innerText=result.name;
    cloud.innerText=result.weather[0].main;
    output.style.display='block';
    console.log(result);
});

function submitLocation(){
    let location_value = document.getElementById("location").value;
    return new Promise((resolve,reject)=>{
        resolve(location_value);
    });
}

function fetchWeather(locationValue){

    let infoPath =`https://api.weatherapi.com/v1/current.json?key=a6b17eeb828640a086d71334231901&q=${locationValue}`;
            
    fetch(infoPath) 
    .then((response) => response.json())
    .then((user) => {
        console.log(user);

        if(user.error){
            document.getElementById("result").innerHTML=`<p id="displayError">${user.error.message}</p>`;
        }

        else{

            document.getElementById("result").innerHTML=`<div class="mb-3 px-5">
                <div class="w-full">
                    <p class="text-3xl text-center">${user.location.name}</p>
                    <span class="flex justify-center items-center">
                        <p class="text-2xl">${user.current.condition.text}</p>
                        <img class="h-32 w-32" src=${user.current.condition.icon} >
                    </span>
                    <span class="flex justify-around py-5">
                        <p class="flex text-sm sm:text-xl"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-7 w-7 fill-white">
                                <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V152c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/>
                            </svg> : 
                            ${user.current.temp_c} 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" class="h-3 w-3 fill-white">
                                <path d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"/>
                            </svg>C
                        </p>
                        <p class="flex text-sm sm:text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="h-6 w-6 fill-white">
                                <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/>
                            </svg> : ${user.current.humidity} %
                        </p>
                        <p class="flex text-sm sm:text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 fill-white">
                                <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
                            </svg> : ${user.current.wind_kph} km/h
                        </p>
                    </span>
                </div>    
            </div>`;

        }
    });

}


function fetchTime(locationValue){

    let infoPath =`https://api.weatherapi.com/v1/current.json?key=a6b17eeb828640a086d71334231901&q=${locationValue}`;
            
    fetch(infoPath) 
    .then((response) => response.json())
    .then((user) => {
        console.log(user);
        if(user.error){

            document.getElementById("result").innerHTML=`<p>${user.error.message}</p>`;

        }
        else{
            document.getElementById("result").innerHTML=
            `<div class="mb-3 px-5">
                <div class="w-full text-center">
                    <p class="text-4xl pb-2">${user.location.name}</p>
                    <span class="flex justify-around pt-4">
                        <p class="p-1 text-xl flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6 w-6 fill-white pr-1">
                                <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"/>
                            </svg>
                            ${user.location.localtime.split(" ")[0]}
                        </p>
                        <p class="p-1 text-xl flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 fill-white pr-1">
                                <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                            </svg>
                            ${user.location.localtime.split(" ")[1]}
                        </p>
                    </span>
                </div>
            </div>`;
        }
    });

}

function weatherDetails(){
    submitLocation()
    .then(function(locationValue){
        return locationValue;
    })
    .then(function(locationValue){
        return fetchWeather(locationValue);
    })
    .catch(err => console.log(err));
}

function timeDetails(){
    submitLocation()
    .then(function(locationValue){
        return locationValue;
    })
    .then(function(locationValue){
        return fetchTime(locationValue);
    })
    .catch(err => console.log(err));
}
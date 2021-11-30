let todayDate = new Date();

function callAPI(){
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=8NxQeyomdZwXICeJHvWdnDWOnoiwpzNnZQJhOgZe&count=2')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson[0]['hdurl']);
            document.getElementById("potd").src = myJson[0]['hdurl'];
            
            let dPattern = localStorage.getItem("datePattern");

            if(dPattern == 1){
                document.getElementById("topLeft").innerHTML = todayDate;
            }else if(dPattern == 2){
                document.getElementById("topLeft").innerHTML = todayDate.getFullYear() + "-" + todayDate.getMonth() + "-" + todayDate.getDay(); 
            }
        });

}

function showDetails(){

    let item = localStorage.getItem("showItem");

    if(item == 2){
        const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let currentMonth = monthNames[todayDate.getMonth()];
        document.getElementById("topLeft1").innerHTML = currentMonth;
    }else if(item == 1){
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
        let dayName = days[todayDate.getDay()];
        document.getElementById("topLeft1").innerHTML = dayName;
    }
}

function setStorage(type){
    localStorage.setItem("showItem", type);
}

function setDateStorage(type){
    localStorage.setItem("datePattern", type);
}
let todayDate = new Date();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    if(h >= 5 && h < 12){
        document.getElementById("greetings").innerHTML = "Good Morning";
    }else if(h >= 12 && h < 18){
        document.getElementById("greetings").innerHTML = "Good Afternoon";
    }else{
        document.getElementById("greetings").innerHTML = "Good Evening";
    }
    
    document.getElementById('clockSeconds').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('clockwithoutSeconds').innerHTML =  h + ":" + m;
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
        return i;
}

window.onload = function(){
    startTime();

    fetch('https://api.nasa.gov/planetary/apod?api_key=8NxQeyomdZwXICeJHvWdnDWOnoiwpzNnZQJhOgZe&count=2')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            document.getElementById("potd").src = myJson[0]['hdurl'];
            
            document.getElementById("topLeft").innerHTML = todayDate;
            
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            document.getElementById("dayofWeek").innerHTML = "Today Is:- " + weekday[todayDate.getDay()];

            document.getElementById("dayofMonth").innerHTML = "Day Of Month Is:- " + todayDate.getDate();

            let now = new Date();
            let start = new Date(now.getFullYear(), 0, 0);
            let diff = now - start;
            let oneDay = 1000 * 60 * 60 * 24;
            let day = Math.floor(diff / oneDay)
            document.getElementById("dayofYear").innerHTML = "Day Of The Year Is:- " + day;
        });

}

document.getElementById('btnMore').addEventListener('click', function() {
    document.getElementById("moreItems").style.display = "block";
});

document.getElementById('btnSettings').addEventListener('click', function() {
    document.getElementById("pref_1").style.display = "block";
    document.getElementById("pref_2").style.display = "block";
    document.getElementById("pref_3").style.display = "block";

    document.getElementById("settings").style.display = "none";
});

document.getElementById('btnSave').addEventListener('click', function() {
    document.getElementById("greetings").style.color = document.querySelector('input[name="setColor"]:checked').value;
    document.getElementById("dayofWeek").style.color = document.querySelector('input[name="setColor"]:checked').value;
    document.getElementById("dayofMonth").style.color = document.querySelector('input[name="setColor"]:checked').value;
    document.getElementById("dayofYear").style.color = document.querySelector('input[name="setColor"]:checked').value;

    if(document.querySelector('input[name="setClock"]:checked').value == "Show Seconds"){
        document.getElementById("clockSeconds").style.display = "block";
        document.getElementById("clockwithoutSeconds").style.display = "none";
    }else if(document.querySelector('input[name="setClock"]:checked').value == "Hide Seconds"){
        document.getElementById("clockSeconds").style.display = "none";
        document.getElementById("clockwithoutSeconds").style.display = "block";
    }

    document.getElementById("pref_1").style.display = "none";
    document.getElementById("pref_2").style.display = "none";
    document.getElementById("pref_3").style.display = "none";

    document.getElementById("settings").style.display = "block";
});
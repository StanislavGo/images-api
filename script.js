const search = document.querySelector("#search");
const zoneForImg = document.querySelector(".grid");
let standardSearch = "car";

function deleteAllPhotos() {
    zoneForImg.innerHTML = "";
}

function searchForImg() {
    deleteAllPhotos();

    const url = 'https://api.unsplash.com/search/photos/?query='+search.value+'&per_page=15&client_id=MgghMIQrbdF-LBYIaWV3NHMS7xzI1B4pNbi2hYGbp40';
    fetch(url).then(response => {
        if (response.ok === true) {
            return response.json();
        } else {
            console.log('error 403 - Too many request');
        }
    })

    .then(data => {
        const imgsArray = [];
        for(let i = 0; i < data.results.length; i++) {
            imgsArray[i] = document.createElement('div');
            imgsArray[i].className = "img";
            imgsArray[i].style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
            imgsArray[i].addEventListener("dblclick", function() {
                window.open(data.results[i].links.download, '_blank');
            })
            zoneForImg.appendChild(imgsArray[i]);
        }
    })
}

search.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        standardSearch = search.value;
        searchForImg();
    }
})

function standartImgs() {
    deleteAllPhotos();

    const url = "https://api.unsplash.com/search/photos/?query=summer&per_page=15&client_id=MgghMIQrbdF-LBYIaWV3NHMS7xzI1B4pNbi2hYGbp40";
    fetch(url).then(response => {
        if (response.ok === true) {
            return response.json();
        } else {
            console.log('error 403 - Too many request');
        }
    })

    .then(data => {
        const imgsArray = [];
        for(let i = 0; i < data.results.length; i++) {
            imgsArray[i] = document.createElement('div');
            imgsArray[i].className = "img";
            imgsArray[i].style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
            imgsArray[i].addEventListener("dblclick", function() {
                window.open(data.results[i].links.download, "_blanck");
            })
            zoneForImg.appendChild(imgsArray[i]);
        }
    })
}


console.log('Вёрстка +10');
console.log("При загрузке приложения на странице отображаются полученные от API изображения +10");
console.log("Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10");
console.log("Поиск +30");
console.log("Общий бал - 60 балов");
$(document).ready(function(){

    let placesArr = [];

    let places = [
        {
            image: "pecina",
            name: "Stopića pećina",
            time: 35
        },
        {
            image: "elpaso",
            name: "El Paso City",
            time: 35
        },
        {
            image: "vodopad",
            name: "Vodopad Gostilje",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 4",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 5",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 6",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 7",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 8",
            time: 35
        },
        {
            image: "pecina",
            name: "Mesto 9",
            time: 35
        }
    ];

    let placesLength = places.length;
    let currentThree = [];
    let currentIndex = 1;
    let carouselLength = 3;
    let currentIndexMax = placesLength / carouselLength;
    console.log(Math.ceil(currentIndexMax));

    function slideCarousel(index){
        let end = index * carouselLength;
        let start = end - carouselLength;
        currentThree = [];
        for(let i = start; i < end; i++){
            if(places[i] != undefined){
                currentThree.push(places[i]);
            }
        }
        console.log(currentThree);
        console.log("end: " + end);
        console.log("start: " + start);
        console.log("index: " + index);
        fillCarousel();
    }

    slideCarousel(currentIndex);

    setInterval(function(){
        $("#carousel").css("opacity", "0");
        setTimeout(function(){
            currentIndex++;
            slideCarousel(currentIndex);
            if(currentIndex == Math.ceil(currentIndexMax)) {
                currentIndex = 0;
            };
        }, 1000);
    }, 10000);

    function fillCarousel(){
        let output = `<div class="carouselInner">`;
        placesArr = [];
        for(let x of currentThree){
            placesArr.push(x);
            output += `
            <div class="carouselItem">
                <img src="assets/images/${x.image}.jpg" alt="">
                <div class="sliderItemInfo">
                    <p><i class="fas fa-map-marker-alt"></i>Apartman - ${x.name}</p>
                    <div>
                        <p>Potrebno vreme: ${x.time} min.</p>
                        <button>Navigacija</button>
                    </div>
                </div>
            </div>
            `;
        }
        output += `</div>`;
        $("#carousel").html(output);
        $("#carousel").css("opacity", "1");
    }

    $("#burger").click(function(){
        $("#slideMenu").slideDown();
    });

    $(".slideUp").click(function(){
        $("#slideMenu").slideUp();
    });

    var w = window.innerWidth;
    var h = window.innerHeight;

    if(w < 1050){
        carouselLength = 2;
        if(w < 720){
            carouselLength = 1;
        }
    }else {
        carouselLength = 3;
    }

    var scroll = new SmoothScroll('a[href*="#"]',{
        easing: 'easeInOutQuint',
        offset: 60,
        speed: 1000
    });

    $("#header a").hover(function(){
        $(this).css("color", "#74B243");
    }, function(){
        if($("#header").offset().top > h / 4){
            $(this).css("color", "#9F9F9F");
        }else {
            $(this).css("color", "#aaa");
        }
    });

    $("#welcomeDiv").css("height", window.innerHeight);
    $(window).resize(function(){
        w = window.innerWidth;
        h = window.innerHeight;
        $("#welcomeDiv").css("height", h);
        if(w < 1050){
            carouselLength = 2;
            if(w < 720){
                carouselLength = 1;
            }
        }else {
            carouselLength = 3;
        }
    });
    $(window).scroll(function(){
        if($("#header").offset().top > h / 4){
            $("#header").css("background-color", "#fff");
            $("#header a").css("color", "#9F9F9F");
            $("#burger i").css("color", "#000");
        }else {
            $("#header").css("background-color", "transparent");
            $("#header a").css("color", "#aaa");
            $("#burger i").css("color", "#fff");
        }
        $("#body").css("background-position", "0 -" + $("#header").offset().top * 0.2);
    });
    $(window).scroll(function(){
        if($("#header").offset().top > h - 70){
            $("#header").css("box-shadow", "1px 1px 4px #aaa");
        }else {
            $("#header").css("box-shadow", "0px 0px 0px #aaa");
        }
    });
});
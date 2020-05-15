function check () {

    var question1 = document.test.question1.value;
    var question2 = document.test.question2.value;
    var question3 = document.test.question3.value;
    var question4 = document.test.question4.value;
    var literVerbruikt = 0;
    var korterDouchen = "";
    var KorterLopen = "";
    var douchekop = "";
    var geenBad = "";

    document.getElementById("button").disabled = true;

    if (question1 == "4min") {
        literVerbruikt = literVerbruikt + 40;
    }
    else if (question1 == "8min") {
        literVerbruikt = literVerbruikt + 80;
        korterDouchen = "Probeer minder lang te douchen! De producten van Drip helpen u dit doel te bereiken."
    }
    else if (question1 == "13min") {
        literVerbruikt = literVerbruikt + 130;
        korterDouchen = "Probeer minder lang te douchen! De producten van Drip helpen u dit doel te bereiken."
    }
    else if (question1 == "20min") {
        literVerbruikt = literVerbruikt + 200;
        korterDouchen = "Probeer minder lang te douchen! De producten van Drip helpen u dit doel te bereiken."
    }

    if (question2 == "2min") {
        literVerbruikt = literVerbruikt + 20;
    }
    else if (question2 == "5min") {
        literVerbruikt = literVerbruikt + 50;
        KorterLopen = "Laat de douche minder lang te laten warm lopen. Een douche doet er maximaal 2 minuten over om warm te worden!"
    }

    if (question3 == "Ja3") {
        literVerbruikt = literVerbruikt / 2;
    }
    else if (question3 == "Nee3") {
        douchekop = "Schaf een waterbesparende douchekop aan! Deze verbuiken ongeveer 50% minder water vergeleken met een normale douchekop."
    }
    
    if (question4 == "Ja4") {
        geenBad = "Minder vaak in bad te gaan! Een bad kost ongeveer 120 liter water."
    }
    
    if (literVerbruikt > 0) {
        document.getElementById("wrapper").style.visibility = "visible";
        document.getElementById("liters_verbruikt").innerHTML = "U heeft " + literVerbruikt + " liter water verbruikt."
    }

    if (question2 == "5min") {
        $('.thing').slick('slickAdd', '<div><p>' + KorterLopen + '<p></div>' )
    }

    if (question1 == "8min" || question1 == "13min" || question1 == "20min" ) {
        $('.thing').slick('slickAdd', '<div><p>' + korterDouchen + '<p></div>' )
    }
    
    if (question3 == "Nee3") {
        $('.thing').slick('slickAdd', '<div><p>' + douchekop + '<p></div>' )
    }

    if (question4 == "Ja4") {
        $('.thing').slick('slickAdd', '<div><p>' + geenBad + '<p></div>' )
    }

    document.getElementById("KorterLopen").innerHTML = KorterLopen
    document.getElementById("korterDouchen").innerHTML = korterDouchen
    document.getElementById("douchekop").innerHTML = douchekop
    document.getElementById("geenBad").innerHTML = geenBad
}

$(document).ready(function () {
        	$('.thing').slick({
        		dots:true,
        		arrows:false,
        		autoplay:true,
        		autoplaySpeed: 2000,
        });
    })

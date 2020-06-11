function check () {

    var question1 = document.test.question1.value;
    var question2 = document.test.question2.value;
    var question3 = document.test.question3.value;
    var question4 = document.test.question4.value;
    var literVerbruikt = 0;
    var korterDouchen = "Probeer minder lang te douchen! De producten van Drip helpen u dit doel te bereiken.";
    var KorterLopen = "Laat de douche minder lang te laten warm lopen. Een douche doet er maximaal 2 minuten over om warm te worden!";
    var douchekop = "Schaf een waterbesparende douchekop aan! Deze verbuiken ongeveer 50% minder water vergeleken met een normale douchekop.";
    var geenBad = "Minder vaak in bad te gaan! Een bad kost ongeveer 120 liter water.";

    document.getElementById("button").disabled = true;

    //vraag 1
    if (question1 == "4min") {
        literVerbruikt = literVerbruikt + 40;
    }

    else if (question1 == "8min") {
        literVerbruikt = literVerbruikt + 80;
        $('.thing').slick('slickAdd', '<div><p>' + korterDouchen + '<p></div>' );
    }
    else if (question1 == "13min") {
        literVerbruikt = literVerbruikt + 130;
        $('.thing').slick('slickAdd', '<div><p>' + korterDouchen + '<p></div>' );
    }
    else if (question1 == "20min") {
        literVerbruikt = literVerbruikt + 200;
        $('.thing').slick('slickAdd', '<div><p>' + korterDouchen + '<p></div>' );
    }

    // vraag 2
    if (question2 == "2min") {
        literVerbruikt = literVerbruikt + 20;
    }
    else if (question2 == "5min") {
        literVerbruikt = literVerbruikt + 50;
        $('.thing').slick('slickAdd', '<div><p>' + KorterLopen + '<p></div>' )
    }

    //vraag 3
    if (question3 == "Ja3") {
        literVerbruikt = literVerbruikt / 2;
    }

    if (question3 == "Nee3") {
        $('.thing').slick('slickAdd', '<div><p>' + douchekop + '<p></div>' )
    }

    //vraag 4
    if (question4 == "Ja4") {
        $('.thing').slick('slickAdd', '<div><p>' + geenBad + '<p></div>' )
    }

    if (literVerbruikt > 0) {
        document.getElementById("wrapper").style.visibility = "visible";
        document.getElementById("liters_verbruikt").innerHTML = "U heeft " + literVerbruikt + " liter water verbruikt."
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
        		autoplaySpeed: 2500,
        });
    })

result_p = document.createElement('p');

function calculate_b (number) {

    var rests = new Array();

    for ( number; number >= 2; number-- ) {

        rest = number % 2;
        rests.push( rest );

    }
    
    console.log(rests);

}

$("#submit-btn").click(function ( event ) { 
    event.preventDefault();

    number = parseInt($("#number").val());

    if ( isNaN ( number ) ) {

        result_p.textContent = "Te rog introdu un numar. :)";

    } else {

        // result.textContent = "ai introdus un numar, iuhuu <3";
        result = calculate_b(number);

        // console.log(rezultat);
    }

    $("#result").html(result);

    return number;
});
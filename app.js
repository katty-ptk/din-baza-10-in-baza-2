result_p = document.createElement('p');

calculate_b = ( number, number_copy ) => {

    for ( number; number >= 2; number /= 2 ){ 

        division_arr = new Array();

        div_number = number; // num after division
        division_arr.push(div_number); // div_number is pushed to the division array

     }



     result_arr = new Array(); // new array which should store the reminders

     for ( number_copy; number_copy >= 2; number_copy /= 2 ) {

        reminder = parseInt(number_copy % 2); 
        result_arr.push(reminder); // each reminder should be added to the array

     }

     last_div_num = parseInt(division_arr.slice(-1).pop()); // getting the last element of the division array -- it'll be the first element of the result array
     result_arr.push(last_div_num);


     final_result_arr = new Array();
     final_result_arr = result_arr.reverse(); // primul cat + resturile in ordine inversa

     console.log(final_result_arr.join('')); 

     /* 
        console.log(elements.join(''));
        // expected output: "FireAirWater"
    */

     

}

$("#submit-btn").click(function ( event ) { 
    event.preventDefault();

    number = parseInt($("#number").val());
    number_copy = number;

    if ( isNaN ( number ) ) {

        result_p.textContent = "Te rog introdu un numar. :)";

    } else {


        result = calculate_b ( number, number_copy );
        result_p.textContent = "b = " + final_result_arr.join(''); // cifrele fara altceva intre ele

        // console.log(rezultat);
    }

    $("#result").html(result_p);

});
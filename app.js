result_p = document.createElement('p');

calculate_b = ( number, number_copy ) => {

    for ( number; number >= 2; number -- ) { 

        division_arr = new Array();

        number /= 2;
        div_number = number; // num after division
        division_arr.push(div_number); // div_number is pushed to the division array

     }

     result_arr = new Array(); // new array which should store the reminders

     for ( number_copy; number_copy >= 2; number_copy -- ) {

        reminder = parseInt(number_copy % 2); /

        number_copy /= 2; // number will be divided by 2 each time the loop is looped through
        result_arr.push(reminder); // each reminder should be added to the array

        console.log("nr este " + number_copy);

     }

     
     console.log(result_arr);

     last_div_num = parseInt(division_arr.slice(-1).pop()); // getting the last element of the division array -- it'll be the first element of the result array
    //  console.log('ultimul cat este ' + last_div_num);


}

$("#submit-btn").click(function ( event ) { 
    event.preventDefault();

    number = parseInt($("#number").val());
    number_copy = number;

    if ( isNaN ( number ) ) {

        result_p.textContent = "Te rog introdu un numar. :)";

    } else {


        result = calculate_b(number);
        result_p.textContent = "b = " + result;

        // console.log(rezultat);
    }

    $("#result").html(result_p);

});
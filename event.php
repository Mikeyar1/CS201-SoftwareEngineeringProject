<?php
    $myfile = fopen("db.csv","w");
    
    //TODO : days must be an array value
    $days = $_POST['startDate'];

    //TODO : start and end times must be arrays
    $start_times = $_POST[''];
    $end_times = $_POST[''];

    //TODO : for all days, create an event with the construct function
    //Name, description are the same for all, unique day and/or times for all
    foreach ($days as $x => $val) {
        
    }
?>

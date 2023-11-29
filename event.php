<?php
    function write($name, $day, $stime, $etime, $desc) {
        $myfile = fopen("db.txt","a") or die("Database error");
        $start = "{'";
        $hold = "';'";
        $end = "]";
        frwite($myfile, $start);
        fwrite($mfyile, $name);
        fwrite($myfile, $hold);
        fwrite($myfile, $day);
        fwrite($myfile, $hold);
        fwrite($myfile, $stime);
        fwrite($myfile, $hold);
        fwrite($myfile, $etime);
        fwrite($myfile, $hold);
        fwrite($myfile, $desc);
        fwrite($myfile, $end);
    }
    //TODO : days must be an array value
    $days = $_POST['startDate-s'];

    $name = $_POST[];
    $desc = $_POST[];
    //TODO : for all days, create an event with the construct function
    //Name, description are the same for all, unique day and/or times for all
    foreach ($days as $x => $val) {
        if (str_contains($val, 'monday')) {
            $stime = $_POST[];
            $etime = $_POST[];
            $hold = 
        } else if (str_contains($val, 'tuesday')) {

        } else if (str_contains($val, 'wednsday')) {

        } else if (str_contains($val, 'thursday')) {

        } else if (str_contains($val, 'friday')) {

        } else if (str_contains($val, 'saturday')) {

        } else if (str_contains($val, 'sunday')) {

        }
    }
?>

<?php
    function write($name, $day, $stime, $etime, $desc) {
        $myfile = fopen("db.txt","a") or die("Database error");
        $start = "{'";
        $hold = "';'";
        $end = "}";
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

    $name = $_POST[''];
    $desc = $_POST[];
    //TODO : for all days, create an event with the construct function
    //Name, description are the same for all, unique day and/or times for all
    foreach ($days as $x => $val) {
        if (str_contains($val, 'monday')) {
            $stime = $_POST['MstartTime'];
            $etime = $_POST['MendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'tuesday')) {
            $stime = $_POST['TstartTime'];
            $etime = $_POST['TendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'wednsday')) {
            $stime = $_POST['WstartTime'];
            $etime = $_POST['WendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'thursday')) {
            $stime = $_POST['ThstartTime'];
            $etime = $_POST['ThendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'friday')) {
            $stime = $_POST['FstartTime'];
            $etime = $_POST['FendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'saturday')) {
            $stime = $_POST['SstartTime'];
            $etime = $_POST['SendTime'];
            write($name,$val,$stime,$etime,$desc);
        } else if (str_contains($val, 'sunday')) {
            $stime = $_POST['SustartTime'];
            $etime = $_POST['SuendTime'];
            write($name,$val,$stime,$etime,$desc);
        }
    }
?>

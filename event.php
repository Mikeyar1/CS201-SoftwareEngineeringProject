<?php
    $myfile = fopen("db.csv","");
    //Event class
    class Event {
        public $day;
        public $name:
        public $start_time;
        public $end_time;
        public $desc;

        public function __construct($name, $day, $start_time, $end_time, $desc) {
            $this->name = $name;
            $this->day = $day;
            $this->start_time = $start_time;
            $this->end_time = $end_time;
            $this->desc = $desc;
        }
    }
    //TODO : days must be an array value
    $days = $_POST['startDate'];

    //TODO : start and end times must be arrays
    $start_times = $_POST[];
    $end_times = $_POST[];

    //TODO : for all days, create an event with the construct function
    //Name, description are the same for all, unique day and/or times for all
    foreach ($days as $x => $val) {
        
    }
?>

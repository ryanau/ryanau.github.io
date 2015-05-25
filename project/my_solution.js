
// to display the locations of bar for a split second
  function start(){
    setTimeout(function() {
      for (i = 0; i < bar.length + 1; i++){
        document.getElementById(bar[i]["pos"]).innerHTML = "B";
      };
    }, 10);
    setTimeout(function() {
      for (i = 0; i < bar.length + 1; i++){
        document.getElementById(bar[i]["pos"]).innerHTML = " ";
      };
    }, 1000);
  }
  // setting player initial condition
  var golfer = {
    pos: 1511,
    time: 100,
    score: 0,
    drunkiness_level: "",
    multiplier: 1,
    step: 1,
    completed: 0,
    drunkiness: 0,
    status: true,
    status_1: true,
  };

  if (golfer.pos == 1513){
    alert("")
  }
  // setting bar properties
  var bar = [
    {
        name: "Pappy's",
        pos: 1510,
        pos_n: 1410,
        pos_s: 1610,
        pos_w: 1509,
        pos_e: 1511,
        birdie: "AMF",
        par: "Shot of Vodka",
        bogey: "Water",
        status: true,
    },
    {
        name: "Cafe D",
        pos: 1208,
        pos_n: 1108,
        pos_s: 1308,
        pos_w: 1207,
        pos_e: 1209,
        birdie: "Pitcher of Corona",
        par: "Margarita",
        bogey: "Coke",
        status: true,
    },
    {
        name: "Kip's",
        pos: 1913,
        pos_n: 1813,
        pos_s: 2013,
        pos_w: 1912,
        pos_e: 1914,
        birdie: "Fish Bowl",
        par: "Chinese Shit",
        bogey: "Virgin Colada",
        status: true,
    },
    {
        name: "Free House",
        pos: 1420,
        pos_n: 1320,
        pos_s: 1520,
        pos_w: 1419,
        pos_e: 1421,
        birdie: "Long Island Icetea",
        par: "Jack and Coke",
        bogey: "Fiji Water",
        status: true,
    },
    {
        name: "Jupiter",
        pos: 1616,
        pos_n: 1516,
        pos_s: 1716,
        pos_w: 1615,
        pos_e: 1617,
        birdie: "Pint of Big Daddy IPA",
        par: "Mojito",
        bogey: "Sprite",
    },
    {
        name: "GTH",
        pos: 1403,
        pos_n: 1303,
        pos_s: 1503,
        pos_w: 1404,
        pos_e: 1405,
        birdie: "3 Shots of Wishkey",
        par: "Bottle of Stella",
        bogey: "You get kicked out by the bartender",
        status: true,
    },
    {
        name: "Remy's",
        pos: 1507,
        pos_n: 1407,
        pos_s: 1607,
        pos_w: 1506,
        pos_e: 1508,
        birdie: "Shotgun 3 Beers",
        par: "Peach Margarita",
        bogey: "Horchata",
        status: true,
    },
    {
        name: "Tripe Rock",
        pos: 1803,
        pos_n: 1703,
        pos_s: 1903,
        pos_w: 1802,
        pos_e: 1804,
        birdie: "2 Bottles of Monkey Head",
        par: "Casual Beer",
        bogey: "Coconut Water",
        status: true,
    },
    {
        name: "Henry's",
        pos: 1314,
        pos_n: 1407,
        pos_s: 1607,
        pos_w: 1506,
        pos_e: 1508,
        birdie: "Pitcher of Beer",
        par: "Pint of Beer",
        bogey: "Ginger Ale",
        status: true,
    }
  ];

  // when user clicks the arrow
  function north(){
    if (golfer.status == false){
      alert("Game over, you're out of bound!")
    };
    if (golfer.pos >= 1201 && golfer.pos <= 1221){
      golfer.status = false
    };





    // move
    if (golfer.status ==  true){
      golfer.pos -= (100 * golfer.step);
      golfer.time -= 1 * golfer.multiplier;
    } else {
      return
    };

    // radar
    document.getElementById("radar_display").innerHTML = "How close are you to a bar: Nope"
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
 

    // when moving
    document.getElementById(golfer.pos).innerHTML = "A";
    document.getElementById(golfer.pos + 100).innerHTML = " ";
    document.getElementById(golfer.pos - 100).innerHTML = " ";
    document.getElementById(golfer.pos + 1).innerHTML = " ";
    document.getElementById(golfer.pos - 1).innerHTML = " ";

    // locking "B" for bar locations
    for (i = 0; i < bar.length; i++){
      if (bar[i]["status"] == false){
        document.getElementById(bar[i]["pos"]).innerHTML = "B";
      }
    }

    // display information
    document.getElementById("time_display").innerHTML = "Time left: " + golfer.time + " mins left";


    // if player has already been to the bar
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos){ 
        if (bar[i]["status"] == false){
          document.getElementById(golfer.pos).innerHTML = "B";
          alert("You've already been to " + bar[i]["name"]);
        };
      };
    }

    // drunkiness increment
    if (golfer.drunkiness <= 3){
      golfer.drunkiness_level = "Sober"
    }
    else if (golfer.drunkiness <= 8){
      golfer.drunkiness_level = "Lightheaded"
      golfer.multiplier = 1.2
    }
    else if (golfer.drunkiness <= 12){
      golfer.drunkiness_level = "Tipsy"
      golfer.multiplier = 1.5
    }
    else if (golfer.drunkiness <= 20){
      golfer.drunkiness_level = "Pretty tipsy"
      golfer.multiplier = 2
    }
    else if (golfer.drunkiness <= 28){
      golfer.drunkiness_level = "Drunk"
      golfer.multiplier = 2.5
    }
    else if (golfer.drunkiness <= 35){
      golfer.drunkiness_level = "Blacked out"
      golfer.multiplier = 4
    };



    // if run out of time
    if (golfer.time <= 0){
      if (golfer.status != false){
      golfer.score = (golfer.score + (9 - golfer.completed)*3)
      document.getElementById("time_display").innerHTML = "Time left: Oooops! You ran out of time!";
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
      golfer.status = false
      return;
      }
      else {
        return;
      }
    }

    // when player gets to the bar
    for (i = 0; i < bar.length; i++){    
      if (bar[i]["pos"] == golfer.pos){
        if (bar[i]["status"] == true){
          alert("You are at " + bar[i]["name"] + " and drinks include Birdie: " + bar[i]["birdie"] + ", Par: " + bar[i]["par"] + " and Bogey: " + bar[i]["bogey"] + ".");
          bar[i]["status"] = false;
          drink = prompt("What are you trying to score?" + " Please input: birdie, par or bogey.")
          document.getElementById(golfer.pos).innerHTML = "B";
        };
        if (drink === "birdie"){
          selection = bar[i]["birdie"];
          golfer.score += 2;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 4;
        }
        else if (drink === "par"){
          selection = bar[i]["par"];
          golfer.score += 3;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 2
        }
        else if (drink === "bogey"){
          selection = bar[i]["bogey"];
          golfer.score += 4;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        }
        golfer.completed += 1;


        // display information right after the bar
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        document.getElementById("drunkiness_display").innerHTML = "Drunkiness: " + golfer.drunkiness_level;
        document.getElementById("completed_display").innerHTML = "Completed holes: " + golfer.completed + "/9";


      }
    }
  }
  
  function east(){


    if (golfer.status == false){
      alert("Game over, you're out of bound!")
    };

    for (i = 1120; i < 2020; i += 100){
      if (golfer.pos == i){
        golfer.status = false
      }
    };

    if (golfer.status ==  true){
      golfer.pos += (1 * golfer.step);
      golfer.time -= 1 * golfer.multiplier;
    } else {
      return
    }


    // radar
    document.getElementById("radar_display").innerHTML = "How close are you to a bar: Nope"
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    // when moving
    document.getElementById(golfer.pos).innerHTML = "A";
    document.getElementById(golfer.pos + 100).innerHTML = " ";
    document.getElementById(golfer.pos - 100).innerHTML = " ";
    document.getElementById(golfer.pos + 1).innerHTML = " ";
    document.getElementById(golfer.pos - 1).innerHTML = " ";

    // locking "B" for bar locations
    for (i = 0; i < bar.length; i++){
      if (bar[i]["status"] == false){
        document.getElementById(bar[i]["pos"]).innerHTML = "B";
      }
    }

    // display information
    document.getElementById("time_display").innerHTML = "Time left: " + golfer.time + " mins left";


    // if player has already been to the bar
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos){ 
        if (bar[i]["status"] == false){
          document.getElementById(golfer.pos).innerHTML = "B";
          alert("You've already been to " + bar[i]["name"]);
        };
      };
    }

    // drunkiness increment
    if (golfer.drunkiness <= 3){
      golfer.drunkiness_level = "Sober"
    }
    else if (golfer.drunkiness <= 8){
      golfer.drunkiness_level = "Lightheaded"
      golfer.multiplier = 1.2
    }
    else if (golfer.drunkiness <= 12){
      golfer.drunkiness_level = "Tipsy"
      golfer.multiplier = 1.5
    }
    else if (golfer.drunkiness <= 20){
      golfer.drunkiness_level = "Pretty tipsy"
      golfer.multiplier = 2
    }
    else if (golfer.drunkiness <= 28){
      golfer.drunkiness_level = "Drunk"
      golfer.multiplier = 2.5
    }
    else if (golfer.drunkiness <= 35){
      golfer.drunkiness_level = "Blacked out"
      golfer.multiplier = 4
    };



    // if run out of time
    if (golfer.time <= 0){
      if (golfer.status != false){
      golfer.score = (golfer.score + (9 - golfer.completed)*3)
      document.getElementById("time_display").innerHTML = "Time left: Oooops! You ran out of time!";
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
      golfer.status = false
      return;
      }
      else {
        return;
      }
    }

    // when player gets to the bar
    for (i = 0; i < bar.length; i++){    
      if (bar[i]["pos"] == golfer.pos){
        if (bar[i]["status"] == true){
          alert("You are at " + bar[i]["name"] + " and drinks include Birdie: " + bar[i]["birdie"] + ", Par: " + bar[i]["par"] + " and Bogey: " + bar[i]["bogey"] + ".");
          bar[i]["status"] = false;
          drink = prompt("What are you trying to score?" + " Please input: birdie, par or bogey.")
          document.getElementById(golfer.pos).innerHTML = "B";
        };
        if (drink === "birdie"){
          selection = bar[i]["birdie"];
          golfer.score += 2;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 4;
        }
        else if (drink === "par"){
          selection = bar[i]["par"];
          golfer.score += 3;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 2
        }
        else if (drink === "bogey"){
          selection = bar[i]["bogey"];
          golfer.score += 4;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        }
        golfer.completed += 1;


        // display information right after the bar
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        document.getElementById("drunkiness_display").innerHTML = "Drunkiness: " + golfer.drunkiness_level;
        document.getElementById("completed_display").innerHTML = "Completed holes: " + golfer.completed + "/9";


      }
    }
  }

  function south(){

    if (golfer.status == false){
      alert("Game over, you're out of bound!")
    };
    if (golfer.pos >= 1901 && golfer.pos <= 1921){
      golfer.status = false
    };

    if (golfer.status ==  true){
      golfer.pos += (100 * golfer.step);
      golfer.time -= 1 * golfer.multiplier;
    } else {
      return
    }

    // radar
    document.getElementById("radar_display").innerHTML = "How close are you to a bar: Nope"
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };

     // when moving
    document.getElementById(golfer.pos).innerHTML = "A";
    document.getElementById(golfer.pos + 100).innerHTML = " ";
    document.getElementById(golfer.pos - 100).innerHTML = " ";
    document.getElementById(golfer.pos + 1).innerHTML = " ";
    document.getElementById(golfer.pos - 1).innerHTML = " ";

    // locking "B" for bar locations
    for (i = 0; i < bar.length; i++){
      if (bar[i]["status"] == false){
        document.getElementById(bar[i]["pos"]).innerHTML = "B";
      }
    }

    // display information
    document.getElementById("time_display").innerHTML = "Time left: " + golfer.time + " mins left";


    // if player has already been to the bar
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos){ 
        if (bar[i]["status"] == false){
          document.getElementById(golfer.pos).innerHTML = "B";
          alert("You've already been to " + bar[i]["name"]);
        };
      };
    }

    // drunkiness increment
    if (golfer.drunkiness <= 3){
      golfer.drunkiness_level = "Sober"
    }
    else if (golfer.drunkiness <= 8){
      golfer.drunkiness_level = "Lightheaded"
      golfer.multiplier = 1.2
    }
    else if (golfer.drunkiness <= 12){
      golfer.drunkiness_level = "Tipsy"
      golfer.multiplier = 1.5
    }
    else if (golfer.drunkiness <= 20){
      golfer.drunkiness_level = "Pretty tipsy"
      golfer.multiplier = 2
    }
    else if (golfer.drunkiness <= 28){
      golfer.drunkiness_level = "Drunk"
      golfer.multiplier = 2.5
    }
    else if (golfer.drunkiness <= 35){
      golfer.drunkiness_level = "Blacked out"
      golfer.multiplier = 4
    };



    // if run out of time
    if (golfer.time <= 0){
      if (golfer.status != false){
      golfer.score = (golfer.score + (9 - golfer.completed)*3)
      document.getElementById("time_display").innerHTML = "Time left: Oooops! You ran out of time!";
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
      golfer.status = false
      return;
      }
      else {
        return;
      }
    }

    // when player gets to the bar
    for (i = 0; i < bar.length; i++){    
      if (bar[i]["pos"] == golfer.pos){
        if (bar[i]["status"] == true){
          alert("You are at " + bar[i]["name"] + " and drinks include Birdie: " + bar[i]["birdie"] + ", Par: " + bar[i]["par"] + " and Bogey: " + bar[i]["bogey"] + ".");
          bar[i]["status"] = false;
          drink = prompt("What are you trying to score?" + " Please input: birdie, par or bogey.")
          document.getElementById(golfer.pos).innerHTML = "B";
        };
        if (drink === "birdie"){
          selection = bar[i]["birdie"];
          golfer.score += 2;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 4;
        }
        else if (drink === "par"){
          selection = bar[i]["par"];
          golfer.score += 3;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 2
        }
        else if (drink === "bogey"){
          selection = bar[i]["bogey"];
          golfer.score += 4;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        }
        golfer.completed += 1;


        // display information right after the bar
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        document.getElementById("drunkiness_display").innerHTML = "Drunkiness: " + golfer.drunkiness_level;
        document.getElementById("completed_display").innerHTML = "Completed holes: " + golfer.completed + "/9";

      }
    }
  }

  function west(){


    if (golfer.status == false){
      alert("Game over, you're out of bound!")
    };

    for (i = 1102; i < 2002; i += 100){
      if (golfer.pos == i){
        golfer.status = false
      }
    };

    if (golfer.status ==  true){
      golfer.pos -= 1 * golfer.step;
      golfer.time -= 1 * golfer.multiplier;
    } else {
      return
    }
    
    // radar
    document.getElementById("radar_display").innerHTML = "How close are you to a bar: Nope"
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 100){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 1){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos - 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 99){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos + 101){
        document.getElementById("radar_display").innerHTML = "How close are you to a bar: Close"
      };
    };

    // when moving
    document.getElementById(golfer.pos).innerHTML = "A";
    document.getElementById(golfer.pos + 100).innerHTML = " ";
    document.getElementById(golfer.pos - 100).innerHTML = " ";
    document.getElementById(golfer.pos + 1).innerHTML = " ";
    document.getElementById(golfer.pos - 1).innerHTML = " ";

    // locking "B" for bar locations
    for (i = 0; i < bar.length; i++){
      if (bar[i]["status"] == false){
        document.getElementById(bar[i]["pos"]).innerHTML = "B";
      }
    }

    // display information
    document.getElementById("time_display").innerHTML = "Time left: " + golfer.time + " mins left";


    // if player has already been to the bar
    for (i = 0; i < bar.length; i++){
      if (bar[i]["pos"] == golfer.pos){ 
        if (bar[i]["status"] == false){
          document.getElementById(golfer.pos).innerHTML = "B";
          alert("You've already been to " + bar[i]["name"]);
        };
      };
    }

    // drunkiness increment
    if (golfer.drunkiness <= 3){
      golfer.drunkiness_level = "Sober"
    }
    else if (golfer.drunkiness <= 8){
      golfer.drunkiness_level = "Lightheaded"
      golfer.multiplier = 1.2
    }
    else if (golfer.drunkiness <= 12){
      golfer.drunkiness_level = "Tipsy"
      golfer.multiplier = 1.5
    }
    else if (golfer.drunkiness <= 20){
      golfer.drunkiness_level = "Pretty tipsy"
      golfer.multiplier = 2
    }
    else if (golfer.drunkiness <= 28){
      golfer.drunkiness_level = "Drunk"
      golfer.multiplier = 2.5
    }
    else if (golfer.drunkiness <= 35){
      golfer.drunkiness_level = "Blacked out"
      golfer.multiplier = 4
    };



    // if run out of time
    if (golfer.time <= 0){
      if (golfer.status != false){
      golfer.score = (golfer.score + (9 - golfer.completed)*3)
      document.getElementById("time_display").innerHTML = "Time left: Oooops! You ran out of time!";
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
      golfer.status = false
      return;
      }
      else {
        return;
      }
    }

    // when player gets to the bar
    for (i = 0; i < bar.length; i++){    
      if (bar[i]["pos"] == golfer.pos){
        if (bar[i]["status"] == true){
          alert("You are at " + bar[i]["name"] + " and drinks include Birdie: " + bar[i]["birdie"] + ", Par: " + bar[i]["par"] + " and Bogey: " + bar[i]["bogey"] + ".");
          bar[i]["status"] = false;
          drink = prompt("What are you trying to score?" + " Please input: birdie, par or bogey.")
          document.getElementById(golfer.pos).innerHTML = "B";
        };
        if (drink === "birdie"){
          selection = bar[i]["birdie"];
          golfer.score += 2;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 4;
        }
        else if (drink === "par"){
          selection = bar[i]["par"];
          golfer.score += 3;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
          golfer.drunkiness += 2
        }
        else if (drink === "bogey"){
          selection = bar[i]["bogey"];
          golfer.score += 4;
          document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        }
        golfer.completed += 1;


        // display information right after the bar
        document.getElementById("score_display").innerHTML = "Score: " + golfer.score;
        document.getElementById("drunkiness_display").innerHTML = "Drunkiness: " + golfer.drunkiness_level;
        document.getElementById("completed_display").innerHTML = "Completed holes: " + golfer.completed + "/9";


      }
    }
  }
  // operations
  

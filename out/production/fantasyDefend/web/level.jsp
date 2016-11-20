<%--
  Created by IntelliJ IDEA.
  User: Leo
  Date: 11/4/16
  Time: 1:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Fire Brick Life</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--Bootstrap css stylesheet-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!--Google font-->
  <link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Signika:400,700" rel="stylesheet">
  <!--all the custom css stylesheets-->
  <link rel="stylesheet" type="text/css" href="./css/stylesheet-level.css">
</head>
<body>


<div class="game-side-bar">
  <section class="game-status-container"><div>Level:</div><div>Score:</div></section>
  <section class="game-button-container">
    <center>
    <button type="button" id="control-game-button1" class="btn control-game-button"><span id="game-control-span1" class="glyphicon glyphicon-pause"></span><span id="game-control-span2">Stop The Game</span></button>
    <button type="button" id="control-game-button2" class="btn control-game-button"><span class="glyphicon glyphicon-log-out"></span>Back to Chapter</button>

    <ul class="tower-button-list">
      <li>
        <button type="button" class="btn"><img src="./img/eye_tower.png">Eye Tower</button>
      </li>
      <li>
        <button type="button" class="btn"><img src="./img/fan_tower.png">Fan Tower</button>
      </li>
      <li>
        <button type="button" class="btn"><img src="./img/gear_tower.png">Gear Tower</button>
      </li>
      <li>
        <button type="button" class="btn"><img src="./img/java_tower.png">Java Tower</button>
      </li>
      <li>
        <button type="button" class="btn"><img src="./img/xueyou_tower.png">Xueyou Tower</button>
      </li>
    </ul>
    </center>
  </section>
</div>



  <!--jQuery and Bootstrap scripts-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <!--game scripts-->
  <script src="lib/phaser.min.js"> </script>
  <script src="lib/phaser-state-transition.js"></script>
  <script src = "lib/game.js"></script>
  <!--<script src = "lib/pause.js"></script>-->
</body>
</html>



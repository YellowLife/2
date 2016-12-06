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
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
  <!--all the custom css stylesheets-->
  <link rel="stylesheet" type="text/css" href="./css/stylesheet-level.css">
</head>
<body>
<audio id="btn_press">
  <source src="/sounds/btn_audio.mp3" type="audio/mpeg">
</audio>
<audio id="btn_click">
  <source src="/sounds/btn_click.mp3" type="audio/mpeg">
</audio>
<%--data set --%>
<jsp:useBean id="UserInfo" class="Bean.UserInfoBean" scope="session"/>
<input id="level" value="<%=UserInfo.getLevel()%>" hidden/>
<input id="userId" value="<%=UserInfo.getUserId()%>" hidden/>
<input id="currentLevel" value="0" hidden/>
<%--data set--%>

<div id="game-side-bar">
  <section class="sidebar-super-container">

    <section class="top-status-container">
      <center>
        <table class="top-status">
          <tr>
            <td>Money</td>
            <td>Enemies</td>
          </tr>
          <tr class="larger-text-tr">
            <td id="money-text">$0</td>
            <td id="remaining-monsters-text">0</td>
          </tr>
        </table>

        <table>
          <tr>
            <td><button type="button" id="control-game-button1" class="control-game-button" data-toggle="tooltip" data-placement="bottom" title="Pause/Continue"><span id="game-control-span1" class="glyphicon glyphicon-pause"></span><span id="game-control-span2"></span></button></td>
            <td><button type="button" id="control-game-button2" class="control-game-button" data-toggle="tooltip" data-placement="bottom" title="Chapter"><span class="glyphicon glyphicon-log-out"></span></button></td>
          </tr>
        </table>

        <!-- <button type="button" id="control-game-button3" class="btn control-game-button" data-toggle="tooltip" data-placement="bottom" title="Mute"><span class="glyphicon glyphicon-volume-up"></span></button> -->
      </center>
    </section>


    <section class="tower-status-container">
      <table class="tower-table">
        <tr>
          <td>Name: </td>
          <td id="tower-name-text"></td>
        </tr>
        <tr>
          <td>HP: </td>
          <td id="tower-hp-text"></td>
        </tr>
        <tr>
          <td>Attack: </td>
          <td id="tower-attack-text"></td>
        </tr>
        <tr>
          <td>Effect: </td>
          <td id="tower-effect-text"></td>
        </tr>
      </table>
    </section>

    <center>
      <ul class="tower-button-list">
        <li>
          <button id="eye-tower-button" type="button" class="btn"><img src="./img/eye_tower.png"><div>$100</div></button>
        </li>
        <li>
          <button id="fan-tower-button" type="button" class="btn"><img src="./img/fan_tower.png"><div>$200</div></button>
        </li>
        <li>
          <button id="gear-tower-button" type="button" class="btn"><img src="./img/gear_tower.png"><div>$120</div></button>
        </li>
        <li>
          <button id="java-tower-button" type="button" class="btn"><img src="./img/java_tower.png"><div>$80</div></button>
        </li>
        <li>
          <button id="xueyou-tower-button" type="button" class="btn"><img src="./img/xueyou_tower.png"><div>$150</div></button>
        </li>
      </ul>
    </center>


  </section>
</div>




<div id="level-button-container">
    <button type="button" class="btn btn-danger" onclick="playAudio('btn_click','game')"  onmouseover = "playAudio('btn_press')">Back To Start</button>
  <form method = "post" action ="/SaveServlet">
    <input name="level" value="save" hidden/>
    <button id = "savebtn" type="submit" class="btn btn-danger" onclick="playAudio('btn_click')"  onmouseover = "playAudio('btn_press')">Save Status</button>
  </form>
</div>


  <!--jQuery and Bootstrap scripts-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <!--game scripts-->
  <script src="scripts/phaser.min.js"> </script>
  <script src="scripts/phaser-state-transition.js"></script>
  <script src = "scripts/game.js"></script>
  <script src = "scripts/script-level.js"></script>
  <script src="./scripts/main.js"></script>
   <script  src="data.json"></script>


<script>
  if(document.getElementById("userId").getAttribute("value") === "Guest"){
    var child = document.getElementById("savebtn");
    child.parentNode.removeChild(child);
    document.getElementById("level-button-container").style.top="55%";
  }
</script>
</body>
</html>



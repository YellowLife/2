<%--
  Created by IntelliJ IDEA.
  User: Rex
  Date: 10/27/16
  Time: 10:06 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Fire Brick Life</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fire Brick Life</title>
    <!--Bootstrap css stylesheet-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!--Google font-->
    <link href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Signika:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!--all the custom css stylesheets-->
    <link rel="stylesheet" type="text/css" href="./css/stylesheet-splash.css">
</head>


<body>
<audio id="btn_press">
    <source src="/sounds/btn_audio.mp3" type="audio/mpeg">
</audio>
<audio id="btn_click">
    <source src="/sounds/btn_click.mp3" type="audio/mpeg">
</audio>

<jsp:useBean id="UserInfo" class="Bean.UserInfoBean" scope="session"/>

<div class="game-title-container">
    <div class="title-logo-div"><img src="./img/logo_final.png"><div>Fire Brick Life</div></div>
    <input id="level" value="<%=UserInfo.getLevel()%>" hidden/>
</div>
<div class="username-div"><%=UserInfo.getName()%></div>


<div class="center-container">
    <div class="welcome-container">WELCOME</div>
    <div class="button-container">
        <button type="button" onclick="playAudio('btn_click','chapter')"  onmouseover = "playAudio('btn_press','none')">Chapter</button>
        <button type="button" onclick="playAudio('btn_click','customize')"  onmouseover = "playAudio('btn_press','none')">Customize</button>
        <button type="button" onclick="playAudio('btn_click','quit')"  onmouseover = "playAudio('btn_press','none')">Quit</button>
    </div>
</div>



<!--jQuery and Bootstrap scripts-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!--all custom scripts-->
<script src="./scripts/main.js"></script>
</body>
</html>
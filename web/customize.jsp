<%--
  Created by IntelliJ IDEA.
  User: Leo
  Date: 11/21/16
  Time: 3:55 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
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
	<link rel="stylesheet" type="text/css" href="./css/stylesheet-custom.css">
</head>
<body>

	<div id="game-side-bar">
	  <section class="sidebar-super-container">
	    <center>
	      <ul class="map-button-list">
	        <li>
	          <button id="path-button" type="button" class="btn"><img src="./img/pathnew2.png"><div>Path</div></button>
	        </li>
	        <li>
	          <button id="origin-button" type="button" class="btn"><img src="./img/start_stage.png"><div>Origin</div></button>
	        </li>
	        <li>
	          <button id="end-button" type="button" class="btn"><img src="./img/home_5.png"><div>End</div></button>
	        </li>
	        <li>
	          <button id="remove-button" type="button" class="btn"><img src="./img/remove.png"><div>Remove</div></button>
	        </li>
	      </ul>
	    </center>

	    <section class="top-status-container">
	    <center>
	      <button type="button" id="control-customize-button3" class="all-custom-button"><span>All Custom Levels</span></button>
	      
	      <table>
	        <tr>
	          <td><button type="button" id="control-customize-button1" class="control-customize-button" data-toggle="tooltip" data-placement="bottom" title="Play"><span class="glyphicon glyphicon-play-circle"></span></button></td>
	          <td><button type="button" id="control-customize-button2" class="control-customize-button" data-toggle="tooltip" data-placement="bottom" title="Save"><span class="glyphicon glyphicon-floppy-disk"></span></button></td>
	          <td><button type="button" id="control-customize-button4" class="control-customize-button" data-toggle="tooltip" data-placement="bottom" title="Quit"><span class="glyphicon glyphicon-log-out"></span></button></td>

	        </tr>
	      </table>
	    
	    <!-- <button type="button" id="control-game-button3" class="btn control-game-button" data-toggle="tooltip" data-placement="bottom" title="Mute"><span class="glyphicon glyphicon-volume-up"></span></button> -->
	    </center>
	    </section>
	  </section>
	</div>

	<!--jQuery and Bootstrap scripts-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="scripts/phaser.min.js"> </script>
    <script src="scripts/phaser-state-transition.js"></script>
    <script src="scripts/customize.js"></script>
    <script src = "scripts/script-custom.js"></script>
</body>
</html>

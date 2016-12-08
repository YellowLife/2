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
            <div class="money-container">
                <table>
                    <tr>
                        <td><span class="glyphicon glyphicon-usd"></span></td>
                        <td class="money-text-conatiner"><span id="money-text">100</span></td>
                        <td><button id="plus-button" type="button" class="money-control-button"><span class="glyphicon glyphicon-plus"></span></button></td>
                        <td><button id="minus-button" type="button" class="money-control-button"><span class="glyphicon glyphicon-minus"></span></button></td>
                    </tr>
                </table>

            </div>

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
                <button type="button" id="control-customize-button6" class="all-custom-button select-monsters-button" data-toggle="modal" data-target="#select-monsters-popup"><span>Select Monsters</span></button>
                <button type="button" id="control-customize-button3" class="all-custom-button" data-toggle="modal" data-target="#load-popup"><span>All Custom Levels</span></button>

                <table>
                    <tr>
                        <td><button type="button" id="control-customize-button1" class="control-customize-button" data-toggle="tooltip" data-placement="bottom" title="Play"><span class="glyphicon glyphicon-play-circle"></span></button></td>
                        <td><button type="button" class="control-customize-button" data-toggle="modal" data-target="#save-popup"><span class="glyphicon glyphicon-floppy-disk" data-toggle="tooltip" title="Save" data-placement="bottom"></span></button></td>
                        <td><button type="button" id="control-customize-button4" class="control-customize-button" data-toggle="tooltip" data-placement="bottom" title="Quit"><span class="glyphicon glyphicon-log-out"></span></button></td>

                    </tr>
                </table>

                <!-- <button type="button" id="control-game-button3" class="btn control-game-button" data-toggle="tooltip" data-placement="bottom" title="Mute"><span class="glyphicon glyphicon-volume-up"></span></button> -->
            </center>
        </section>
    </section>
</div>

<div class="modal fade" id="select-monsters-popup" role="dialog">
    <div class="close-select-monster-container"><button data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button></div>
    <center>
        <div class="select-monsters-container">


            <div class="monsters-list-text"><div>Click monsters to add them into the list</div><div class="monsters-list-text2">(Min:2 Max:50)</div></div>
            <div class="monsters-list-container">

                <div class="selected-monster-list">
                    <table id="selected-monster-table">
                        <tr id="monster-row-1"><td class="monster-name">Mob</td><td class="delete-monster"><button id="monster-row-button1"><span class="glyphicon glyphicon-remove"></span></button></td></tr>
                        <tr id="monster-row-2"><td class="monster-name">Mob</td><td class="delete-monster"><button id="monster-row-button2"><span class="glyphicon glyphicon-remove"></span></button></td></tr>
                    </table>
                </div>

                <table class="monster-button-container">
                    <tr>
                        <td><button id="feilian-button" type="button" class="btn"><img src="./img/ppl_FeiLian.png"><div>Fei Lian</div></button></td>
                        <td><button id="citie-button" type="button" class="btn"><img src="./img/ppl_CiTie.png"><div>Ci Tie</div></button></td>
                        <td><button id="kirin-button" type="button" class="btn"><img src="./img/ppl_Qilin.png"><div>Kirin</div></button></td>
                    </tr>
                    <tr>
                        <td><button id="redboy-button" type="button" class="btn"><img src="./img/ppl_HongHaier.png"><div>Red Boy</div></button></td>
                        <td><button id="huodou-button" type="button" class="btn"><img src="./img/ppl_HuoDou.png"><div>Huo Dou</div></button></td>
                        <td><button id="mob-button" type="button" class="btn"><img src="./img/lizhede.png"><div>Mob</div></button></td>
                    </tr>
                </table>

            </div>

        </div>
    </center>
</div>
<div class="modal fade" id="save-popup" role="dialog">
    <div class="close-select-monster-container"><button data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button></div>
    <center>
        <div class="save-container form-group">
            <div>Please provide a unique name</div>
            <input id="levelname" type="text" class="form-control" value="Test">
            <button data-dismiss="modal" id="control-customize-button2">Save</button>
        </div>
    </center>
</div>
<div class="modal fade" id="load-popup" role="dialog">
    <div class="close-select-monster-container"><button data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></button></div>
    <center>
        <div class="load-container form-group">
            <div>Please provide a unique name</div>
            <input id="mapname" type="text" class="form-control" value="Test">
            <button data-dismiss="modal" id="control-customize-button5">Load</button>
        </div>
    </center>
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
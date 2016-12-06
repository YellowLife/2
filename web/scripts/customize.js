/**
 * Created by Leo on 11/21/16.
 */

var game;
var customizeMap;
var defaultMap;
var monsterStack;
var money = 100;
var size;
var stackIndex = 19;
var window_width = window.innerWidth;
var window_height = window.innerHeight;

var mapBase = function(positionX, positionY, gameImage ,bgimage){
    this.positionX = positionX;
    this.positionY = positionY;
    this.gameImage = gameImage;
    this.mapBaseBg = game.add.sprite(positionX,positionY,bgimage);
    game.physics.enable(this.mapBaseBg, Phaser.Physics.ARCADE);
    this.mapBaseBg.body.immovable = true;
    this.isTowerSet  = false;
}

mapBase.prototype.getPosition = function(){
    var position = new Array();
    position[0] = this.positionX;
    position[1] = this.positionY;
    return position;
}
mapBase.prototype.getImage = function(){
    return this.gameImage;
}

mapBase.prototype.setImage = function(gameImage){
    this.gameImage = gameImage;
};


function MapBaseListener(){
    this.param1.getImage().destroy();
    i = this.param1.getPosition()[0];
    j = this.param1.getPosition()[1];

    if(selectedTower === 0) {
        if(money>100) {
            this.param1.setImage(new towerObj(numberOfTowers, 'eyetower', size, 20, 500, game, Bullets277, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 500, this.param1, false));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=100;
        }
    }

    //******   add by Jun *****////
    // this below is for customize

    // 6 is start grid
    else if (selectedTower === 6){

        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.image(this.param1.getPosition()[0], this.param1.getPosition()[1],'start'),'grid');
        this.param1.getImage().scale.setTo(size/10/100,size/10/100);
        this.param1.mapBaseBg.scale.setTo(size/10/100,size/10/100);
        this.param1.getImage().inputEnabled = true;
        this.param1.getImage().events.onInputDown.add(MapBaseListener, {param1: this.param1 , param2:this.param2});
        defaultMap[this.param2] = 5;


    }
    // 7 is path
    else if (selectedTower === 7){

        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.image(this.param1.getPosition()[0], this.param1.getPosition()[1],'path'),'grid');
        this.param1.getImage().scale.setTo(size/10/100,size/10/100);
        this.param1.mapBaseBg.scale.setTo(size/10/100,size/10/100);
        this.param1.getImage().inputEnabled = true;
        this.param1.getImage().events.onInputDown.add(MapBaseListener, {param1: this.param1 , param2:this.param2});
        defaultMap[this.param2] = 1;
    }

    // 8 is end

    else if (selectedTower === 8){

        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.sprite(this.param1.getPosition()[0], this.param1.getPosition()[1],'home'),'grid');
        this.param1.getImage().frame = 1;
        this.param1.getImage().scale.setTo(size/10/400,size/10/400);
        this.param1.mapBaseBg.scale.setTo(size/10/400,size/10/400);
        this.param1.getImage().animations.add('homeAnimation',[0,1,2,3,4,5,6,7,8,9],10,true);
        this.param1.getImage().animations.play('homeAnimation');
        home = this.param1.getImage();
        this.param1.getImage().inputEnabled = true;
        this.param1.getImage().events.onInputDown.add(MapBaseListener, {param1: this.param1 , param2:this.param2});



        defaultMap[this.param2] = 4;
    }

    else if (selectedTower === 9){

        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.image(this.param1.getPosition()[0], this.param1.getPosition()[1],'grid'),'grid');
        this.param1.getImage().scale.setTo(size/10/100,size/10/100);
        this.param1.mapBaseBg.scale.setTo(size/10/100,size/10/100);
        defaultMap[this.param2] = 0;
        this.param1.getImage().inputEnabled = true;
        this.param1.getImage().events.onInputDown.add(MapBaseListener, {param1: this.param1 , param2:this.param2});


        console.log(defaultMap);

    }
    //******   add by Jun *****////

}


function actionOnClick () {

    selectedTower = this.param1;

}
function saveAction(){
    var content = JSON.stringify({Map : defaultMap, Monster: monsterStack, Money : money});

    console.log(content);






}



function addMonster(){


    if (this.monster ===0){
        monsterStack.push(0);




    }
    else if (this.monster ===1){
        monsterStack.push(1);
    }
    else if (this.monster ===2){
        monsterStack.push(2);
    }
    else if (this.monster ===3){
        monsterStack.push(3);
    }
    else if (this.monster ===4){
        monsterStack.push(4);
    }
}



window.onload = function() {
    // creating a 320x480 pixels game and executing PlayGame state
    game = new Phaser.Game(window_width, window_height, Phaser.AUTO, "");

    game.state.add("customizeScreen",customizeScreen);

    game.state.start("customizeScreen");
}


var customizeScreen =  function (game){};
customizeScreen.prototype ={
    preload: function(){

        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('high_way','assets/basic_map.png');
        game.load.spritesheet('eyetowerButton', 'assets/buttons/eye_tower.png', 200, 100);
        game.load.image('grid', 'assets/blank.png');
        game.load.spritesheet('home', 'assets/path/home.png', 400, 400);
        game.load.image('path', 'assets/path/pathnew2.png');
        game.load.image('start', 'assets/path/start_stage.png');
        game.load.image("blank",'assets/grid.png')

        game.load.spritesheet('eye', 'assets/monsters/mob_mov_2.png', 300, 300, 5);
        game.load.spritesheet('feiLian', 'assets/monsters/feiLian.png',600,600,7);
        game.load.spritesheet('huoDou', 'assets/monsters/dou_ani.png',599,599,7);
        game.load.spritesheet('hong', 'assets/monsters/hong_ani.png',599,599,7);
        game.load.spritesheet('qiLin', 'assets/monsters/qilin_ani.png',599,599,7);
        game.load.spritesheet('tie', 'assets/monsters/tie_ani.png',599,599,7);

    },
    create: function(){
        size  = Math.min(window.innerHeight,window.innerWidth);
        monsterStack = new Array();
        customizeMap = new Array();

        defaultMap =[
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0
        ];

        var bg = game.add.sprite(0, 0, 'background');
        bg.scale.setTo(window.innerWidth/1800,window.innerHeight/1199)
        var boardBg = game.add.sprite(size/20*2,size/20*2,'high_way');
        boardBg.scale.setTo(size/20*16/1000,size/20*16/1000);
        var k = 0;
        var i = 0;
        var j = 0;

        for(i=size/20*2;i<size/20*17;i=i+(size/10)){
            for(j=size/20*2;j<size/20*17;j=j+(size/10)) {
                if(defaultMap[k] ===0) {
                    customizeMap[k] = new mapBase(j,i,game.add.image(j,i,'grid'),'grid');
                    customizeMap[k].getImage().scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].getImage().inputEnabled = true;
                    customizeMap[k].getImage().events.onInputDown.add(MapBaseListener, {param1: customizeMap[k] , param2:k});

                }else if(defaultMap[k]===1){


                    customizeMap[k] = new mapBase(j,i,game.add.image(j,i,'path'),'grid');
                    customizeMap[k].getImage().scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].getImage().inputEnabled = true;
                    customizeMap[k].getImage().events.onInputDown.add(MapBaseListener, {param1: customizeMap[k] , param2:k});

                }else if(defaultMap[k]===5){


                    customizeMap[k] = new mapBase(j,i,game.add.image(j,i,'start'),'grid');
                    customizeMap[k].getImage().scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].getImage().events.onInputDown.add(MapBaseListener, {param1: customizeMap[k] , param2:k});

                }else if(defaultMap[k]===4){


                    customizeMap[k] = new mapBase(j,i,game.add.sprite(j,i,'home'),'grid');
                    customizeMap[k].getImage().frame = 1;
                    customizeMap[k].getImage().scale.setTo(size/10/400,size/10/400);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/400,size/10/400);
                    customizeMap[k].getImage().animations.add('homeAnimation',[0,1,2,3,4,5,6,7,8,9],10,true);
                    customizeMap[k].getImage().animations.play('homeAnimation');
                    home = customizeMap[k].getImage();

                    game.physics.enable(home, Phaser.Physics.ARCADE);
                    home.body.immovable = false;
                    customizeMap[k].getImage().inputEnabled = true;
                    customizeMap[k].getImage().events.onInputDown.add(MapBaseListener, {param1: customizeMap[k] , param2:k});

                }
                k++;
            }
        }

        var cstartButton = game.add.button(size/20*19, size/3, 'eyetowerButton', actionOnClick, {param1:6}, 0, 0, 0);
        var cpathButton = game.add.button(size/20*18, size/3, 'eyetowerButton', actionOnClick, {param1:7}, 0, 0, 0);
        var cendButton = game.add.button(size/20*17, size/3, 'eyetowerButton', actionOnClick, {param1:8}, 0, 0, 0);
        var removeButton = game.add.button(size/20*16, size/3, 'eyetowerButton', actionOnClick, {param1:9}, 0, 0, 0);

        var saveButton = game.add.button(size/20*30, size/3, 'eyetowerButton',saveAction);

        var addFeilian = game.add.button(size/20*19, size/2, 'eyetowerButton',addMonster,{monster:0});
        var addHon = game.add.button(size/20*24, size/2, 'eyetowerButton',addMonster,{monster:1});
        var addHuodou = game.add.button(size/20*25, size/2, 'eyetowerButton',addMonster,{monster:2});
        var addqilin = game.add.button(size/20*26, size/2, 'eyetowerButton',addMonster,{monster:3});
        var addeye= game.add.button(size/20*27, size/2, 'eyetowerButton',addMonster,{monster:4});



        // textfield
        //monster array


    },// create end
    /*update: function(){
     if (addFeilian.input.onDown){
     game.add.sprite(100,200,"feiLian");
     }
     }*/


}











/***********************************add by lead designer*****************************************/
function clickCustomButton(num){
    selectedTower = num;
}
document.getElementById("path-button").addEventListener('click',function(){clickCustomButton(7);});
document.getElementById("origin-button").addEventListener('click',function(){clickCustomButton(6);});
document.getElementById("end-button").addEventListener('click',function(){clickCustomButton(8);});
document.getElementById("remove-button").addEventListener('click',function(){clickCustomButton(9);});

document.getElementById("control-customize-button1").addEventListener('click',function(){});
document.getElementById("control-customize-button2").addEventListener('click',function(){});
document.getElementById("control-customize-button4").addEventListener('click',function(){});
/***********************************add by lead designer*****************************************/
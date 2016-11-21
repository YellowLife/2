/**
 * Created by Leo on 11/21/16.
 */
var customizeMap;
var defaultMap;


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
    }else if(selectedTower === 1){
        if(money>100) {
            this.param1.setImage(new towerObj(numberOfTowers, 'eyetower', size, 20, 500, game, Bullets277, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 500, this.param1, false));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=100;
        }
    }else if(selectedTower === 2){
        if(money>=150) {
            this.param1.setImage(new towerObj(numberOfTowers, 'xueyoutower', size, 40, 1000, game, Bullets224, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 300, this.param1, false));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=150;
        }
    }else if(selectedTower === 3) {
        if(money>=80) {
            this.param1.setImage(new towerObj(numberOfTowers, 'javatower', size, 100, 400, game, Bullets74, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 800, this.param1, false));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=80;
        }
    }else if(selectedTower === 4){
        if(money>=200) {
            this.param1.setImage(new towerObj(numberOfTowers, 'fantower', size, 20, 400, game, windBullets, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 800, this.param1, false));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=200;
        }
    }else if(selectedTower === 5){
        if(money>=120) {
            this.param1.setImage(new towerObj(numberOfTowers, 'geartower', size, 30, 3000, game, healingBullets, this.param1.getPosition()[0], this.param1.getPosition()[1], enemyArray, 4000, this.param1, true));
            this.param1.isTowerSet = true;
            towerArray.push(this.param1.getImage());
            numberOfTowers++;
            money-=120;
        }
    }

    //******   add by Jun *****////
    // this below is for customize

    // 6 is start grid
    else if (selectedTower === 6){

        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.image(this.param1.getPosition()[0], this.param1.getPosition()[1],'start'),'start');
        this.param1.getImage().scale.setTo(size/10/100,size/10/100);
        this.param1.mapBaseBg.scale.setTo(size/10/100,size/10/100);
        defaultMap[this.param2] = 5;

    }
    // 7 is path
    else if (selectedTower === 7){
        this.param1 = new mapBase(this.param1.getPosition()[0], this.param1.getPosition()[1],game.add.image(this.param1.getPosition()[0], this.param1.getPosition()[1],'path'),'path');
        this.param1.getImage().scale.setTo(size/10/100,size/10/100);
        this.param1.mapBaseBg.scale.setTo(size/10/100,size/10/100);
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

        game.physics.enable(home, Phaser.Physics.ARCADE);
        home.body.immovable = false;
        defaultMap[this.param2] = 4;
    }

    //******   add by Jun *****////
    console.log(money);
}


function actionOnClick () {

    selectedTower = this.param1;

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

    },
    create: function(){
        size  = Math.min(window.innerHeight,window.innerWidth);
        var monsterStack = new Array();
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

                }else if(gameIndexArray[k]===1){


                    customizeMap[k] = new mapBase(j,i,game.add.image(j,i,'path'),'path');
                    customizeMap[k].getImage().scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/100,size/10/100);


                }else if(gameIndexArray[k]===5){


                    customizeMap[k] = new mapBase(j,i,game.add.image(j,i,'start'),'start');
                    customizeMap[k].getImage().scale.setTo(size/10/100,size/10/100);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/100,size/10/100);


                }else if(gameIndexArray[k]===4){


                    customizeMap[k] = new mapBase(j,i,game.add.sprite(j,i,'home'),'grid');
                    customizeMap[k].getImage().frame = 1;
                    customizeMap[k].getImage().scale.setTo(size/10/400,size/10/400);
                    customizeMap[k].mapBaseBg.scale.setTo(size/10/400,size/10/400);
                    customizeMap[k].getImage().animations.add('homeAnimation',[0,1,2,3,4,5,6,7,8,9],10,true);
                    customizeMap[k].getImage().animations.play('homeAnimation');
                    home = customizeMap[k].getImage();

                    game.physics.enable(home, Phaser.Physics.ARCADE);
                    home.body.immovable = false;


                }
                k++;
            }
        }

        var cstartButton = game.add.button(size/20*19, size/3, 'eyetowerButton', actionOnClick, {param1:6}, 0, 0, 0);
        var cpathButton = game.add.button(size/20*18, size/3, 'eyetowerButton', actionOnClick, {param1:7}, 0, 0, 0);
        var cendButton = game.add.button(size/20*17, size/3, 'eyetowerButton', actionOnClick, {param1:8}, 0, 0, 0);

        save_label = game.add.text(w - 100, 20, 'Save map', { font: '24px Arial', fill: '#fff' });
        save_label.inputEnabled = true;
        save_label.events.onInputUp.add(function(){
            defaultMap.toString();
        });
        // textfield
        //monster array


    }// create end


}
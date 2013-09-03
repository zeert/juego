enchant();

var BearSprite = enchant.Class.create(enchant.Sprite,{
    initialize: function(y,imageOffset) {
        enchant.Sprite.call(this,32,32);
        var game = enchant.Game.instance;
        this.x = 0;
        this.y = y;
        this.imageOffset = imageOffset;
        this.ageDivisor = game.fps/15;
        this.image = game.assets["chara1.png"];
        game.rootScene.addChild(this);
    },
    onenterframe: function(e) {
        this.frame = (this.age/this.ageDivisor) % 2 + this.imageOffset;
    }
});

window.onload = function(){
    var game = new Game(320, 320);
    game.fps = 30;
    game.preload("chara1.png");
    game.onload = function(){
        var frameBasedBear = new BearSprite(0,6);
        var timeBasedBear = new BearSprite(30,26);

        frameBasedBear.tl.moveTo(200,frameBasedBear.y,200).scaleTo(-1,1,1).moveTo(0,frameBasedBear.y,200).scaleTo(1,1,1).loop();

        timeBasedBear.tl.setTimeBased();
        timeBasedBear.tl.moveTo(200,timeBasedBear.y,(200/game.fps)*1000).scaleTo(-1,1,1).moveTo(0,timeBasedBear.y,(200/game.fps)*1000).scaleTo(1,1,1).loop();
    };
    game.start();
};
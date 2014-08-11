var Player = {};

Player.InitComponent = function(){
    
    Crafty.c('Player', {
        init: init,
        shoot: Player.Shoot
    });

    function init(){
        this.requires('2D, Canvas, Color')  
        .color('red')
        .attr({w: 50, h: 50})
        .addComponent("Multiway").multiway(3,{ 
              W: -90, S: 90, D: 0, A: 180})
    }
}

Player.Shoot = function(){
    
}

Player.MakePlayer = function(){
    
    Player.playerEntity = Crafty.e('Player');    
    return Player.playerEntity;
}
var $game;
var player, cursor;

$(document).ready(function(){
    
    $game = $('#game');
    
    Crafty.init(800, 600, $game[0]);
    Crafty.canvas.init();
    
    Player.InitComponent();
    Cursor.InitComponent();
    
    Player.MakePlayer();
    Cursor.MakeCursor();
    
    
    $(document).on('mousemove', function(e){
        Cursor.cursorEntity.x = e.clientX - $game.offset().left;
        Cursor.cursorEntity.y = e.clientY - $game.offset().top;
    });   
    
    $(document).on('mousedown', function(e){
        Player.playerEntity.shoot();
    });
});
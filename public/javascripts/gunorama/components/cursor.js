var Cursor = {};

Cursor.InitComponent = function(){
    
    Crafty.c('Cursor', {
        init: init
    });
    
    function init(){
        this.requires('2D, Canvas, Color')
        .color('blue')
        .attr({w: 10, h: 10});
    }
}

Cursor.MakeCursor = function(){
    
    Cursor.cursorEntity = Crafty.e('Cursor');
    return Cursor.cursorEntity;
}


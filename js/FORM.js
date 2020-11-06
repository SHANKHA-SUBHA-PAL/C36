class Form{

constructor(){

}

display(){
var title = createElement('h2')
title.html("CAR RACING GAME");
title.position(350,100);
var input = createInput("name")
var button = createButton("Play");
var greeting = createElement('h3');
input.position(350,190);
button.position(350,250);
button.mousePressed(function(){
    
    input.hide();
    button.hide();
    var name = input.value()
    playerCount +=1;
    player.update(name);
    player.updateCount(playerCount)
    greeting.html("Hello "+ name);
    greeting.position (130,160)
}); 


}

}
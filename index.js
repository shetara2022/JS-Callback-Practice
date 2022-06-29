const inventory = newInventory()
move(inventory).to(0, 0)

//track the character's position
const character = newImage('assets/green-character/static.gif')
move(character).moveWithArrowKeys(100, 250)
//move(newImage('assets/tree.png')).withArrowKeys(200, 450)


//let direction = null;
let x = 100;
let y = 250;

 function moveCharacter() {
//move character west; x should decrease
if (direction === 'west'){
    x = x - 1
}
//move character north; y should decrease
if(direction === 'north'){
    y = y + 1
}
//move character east; x should increase
if(direction === 'east'){
    x = x + 1 
}
//move character south; y should decrease
if(direction === 'south'){
    y = y - 1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'
}

//setInterval calls a function at specified intervals in milliseconds
setInterval (moveCharacter, 1)
//use event key (e) function to chec which key is pressed
document.addEventListener('keydown', function(e){  
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})
 document.addEventListener('keyup', function(e){
     direction = null
})


move(newImage('assets/tree.png')).withArrowKeys(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
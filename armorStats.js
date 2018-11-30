// items will be lists that hold num for each stat even if the change is zero// last index is name

//health,mana,melee,spell,armor,speed,name
// boots1
var boots1 = [0,0,0,0,20,50, 'boots1'];

// boots2
var boots2 = [0,10,0,0,0,100, 'boots2'];

// boots2
var boots3 = [0,10,0,0,5,83, 'boots3'];

// boots2
var boots4 = [0,10,0,0,2,50, 'boots4'];

// chest piece 1
var chest1 = [15,0,0,0,50,-15,'chest1'];

// list that will hold all armor/item drops
var drop_items = [boots1, boots2, boots3, boots4, chest1];





// random drop number
function rand_d(){
    ran_drop = this.game.rnd.between(0, drop_items.length - 1);
    return ran_drop
    
}
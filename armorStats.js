// items will be lists that hold num for each stat even if the change is zero// last index is name

//health,mana,melee,spell,armor,speed,name

// boots1
var boots1 = [0,0,0,0,5,25, 'boots1'];

// boots2
var boots2 = [0,10,0,0,0,20, 'boots2'];

// boots3
var boots3 = [5,0,0,0,5,20, 'boots3'];



// chest piece 1
var chest1 = [0,0,0,0,10,0,'chest1'];

// chest piece 2
var chest2 = [5,0,0,0,5,0,'chest2'];

// chest piece 3
var chest3 = [0,0,7,0,8,0,'chest3'];



// magic piece 1
var magic1 = [0,10,0,10,0,0,'magic1'];

// magic piece 2
var magic2 = [0,0,0,10,5,0,'magic2'];

// magic piece 3
var magic3 = [10,0,0,10,0,0,'magic3'];



// sword 1
var sword1 = [10,0,10,0,0,0, 'sword1'];

// sword 2
var sword2 = [0,10,10,0,0,0, 'sword2'];

// sword 3
var sword3 = [0,0,20,0,0,0, 'sword3'];




// book 1
var book1 = [0,20,0,0,0,0, 'book1'];

// book 2
var book2 = [5,10,0,0,0,5, 'book2'];

// book 3
var book3 = [0,15,0,5,0,0, 'book3'];





// heart 1
var heart1 = [10,0,0,0,0,10, 'heart1'];

// heart 2
var heart2 = [20,0,0,0,0,0, 'heart2'];

// heart 3
var heart3 = [10,5,0,0,0,5, 'heart3'];




// 




// list that will hold all armor/item drops
var drop_items = [boots1, boots2, boots3, chest1, chest2, chest3, magic1, magic2, magic3, sword1, sword2, sword3, book1, book2, book3, heart1, heart2, heart3];


// hold list of already picked items
var dropped_items = [];


// random drop number
function rand_d(){
    ran_drop = this.game.rnd.between(0, drop_items.length - 1);
    
    while (dropped_items.includes(ran_drop)){
        ran_drop = this.game.rnd.between(0, drop_items.length - 1);
    }
    
    dropped_items.push(ran_drop);
    return ran_drop
    
}


function pick_up (hunterS, sprite, item){
        // kill sprite
        sprite.kill();
        // activate equip function
        equipS(item);
    
}




function equipS (item){
    // move item into inventory list
    inventory.item_list.push(item);
    
    // can only equip up to 5 items
    if(inventory.equipped < 5){
        // will go through each num in list to update stats
        for(var i = 0; i < item.length-1; i++){
            if(i==0) {hunter.health_max += item[i]; hunter.health += item[i];}
            if(i==1) {hunter.mana_max += item[i]; hunter.mana += item[i];}
            if(i==2) {hunter.melee_attack += item[i];}
            if(i==3) {hunter.spell_attack += item[i];}
            if(i==4) {hunter.armor += item[i];}
            if(i==5) {hunter.speed += item[i];}
        }
        
        // add one to equiped slot
        inventory.equipped ++;
    }
}



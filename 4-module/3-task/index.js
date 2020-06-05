
function highlight(table){
  
  
  
    for(let i = 0; i <table.rows.length; i++){
      
      
      //available/unavailable
      if(table.rows[i].cells[3].dataset.available ==="true"){
        table.rows[i].classList.add('available');
      }else if(table.rows[i].cells[3].dataset.available ==="false"){
        table.rows[i].classList.add('unavailable');
      };
      
      
      //hidden
      if(!table.rows[i].cells[3].hasAttribute('data-available')){
        table.rows[i].setAttribute('hidden','');
      };
      
      //male/female
      if(table.rows[i].cells[2].textContent == "m"){
        table.rows[i].classList.add('male');
      }else if(table.rows[i].cells[2].textContent == "f"){
        table.rows[i].classList.add('female');
      };
      
      //style="text-decoration: line-through"
      if(table.rows[i].cells[1].textContent <18){
        table.rows[i].style = "text-decoration: line-through";
      }
    }
    return;
  }
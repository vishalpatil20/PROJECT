const audio1 = new Audio("alert.mp3");
const audio3 = new Audio("car.mp3");   
const buttons = document.getElementById("bt1")     
const buttons3 = document.getElementById("bt3")     
      
    buttons.addEventListener('click', ()=>{
    audio1.play();
  })

    
     
    buttons3.addEventListener('click', ()=>{
    audio3.play();
  })
  
    function disDisplay(){
      document.getElementById("dist").innerHTML = "Distances is : 25m "
      setTimeout(5000);
    }

    



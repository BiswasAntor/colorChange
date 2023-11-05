let body = document.querySelector("body");
let heading = document.querySelector("#heading");
let buttons = document.querySelectorAll(".button");
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      if(e.target.id === "grey"){
        body.style.background = e.target.id;
        heading.style.background = "orange"
      }
      else if(e.target.id === "green"){
        body.style.background = e.target.id;
          heading.style.background = "red"
      }
      else if(e.target.id === "blue"){
        body.style.background = e.target.id;
          heading.style.background = "darkblue"
      }
      else if(e.target.id === "yellow"){
        body.style.background = e.target.id;
          heading.style.background = "pink"
      }
    })
})
function HideElement(elmt) {
  elmt.setAttribute("style", "display:none")
  }

//desktop js

if(screen.width > 500)
{
  let searchForTrigger = true;
  let counter = 1;
  
  while (searchForTrigger) {
    let trigger = document.getElementById("sbmenu-trig-" + counter);
  
    if (trigger == null) {
      searchForTrigger = false;
    } else {
      let query = ".sbmenu-elmt-" + counter;

      let elements = document.querySelectorAll(query);
  
      // elements.forEach((e) => 
      // {
      // e.addEventListener("mouseover", () => {
      //   e.setAttribute("style", "display:inline")
      //   console.log(e.getAttribute("class"));
      // })
      // })  

      trigger.addEventListener("mouseover", () => {
        elements.forEach((element) => {
          element.setAttribute("style", "display:inline;");
        });
      });
  
  
      trigger.addEventListener("mouseout", () => {
        elements.forEach((element) => {
          element.setAttribute("style", "display:none;");
        })
      })
  
      counter++;
      
    }
  }
  
}

//mobile js

if(screen.width <= 500)
{ 

  console.log(screen.width)

  let burgMenuButton = document.getElementById("burger-menu-btn")

  let showBurgMenu = false;
  
  let burgerMenu = document.querySelectorAll(".navlink")
  
  burgMenuButton.addEventListener("click",() => {
    
    showBurgMenu = !showBurgMenu
    
    if(showBurgMenu)
      {
        burgerMenu.forEach((e) =>
        {
        e.setAttribute("style","display:flex;")
        })
      }
    else
      {
        burgerMenu.forEach((e) => {
        e.setAttribute("style","display:none;")
        })
      }
  
  
  })

  

  let searchForTrigger = true;

  let counter = 1;

  while(searchForTrigger)
  {
    
    let trigger = document.getElementById("sbmenu-trig-" + counter);

    if (trigger == null) {
      searchForTrigger = false;
    } else {
      let query = ".sbmenu-elmt-" + counter;
      //hoverTracker[query] = false;
      let elements = document.querySelectorAll(query);
  
      // elements.forEach((e) => 
      // {
      // e.addEventListener("click", () => {
      //   e.setAttribute("style", "display:inline")
      //   console.log(e.getAttribute("class"));
      // })
      // })  

      trigger.addEventListener("click", () => {
        elements.forEach((element) => {

          let currentStyle =  element.getAttribute("style")

          if(currentStyle == "display:none;")
          {
            element.setAttribute("style", "display:inline;");
          }
          else
          {
            element.setAttribute("style", "display:none;");
          }
          
        });
      });
  
  
      // trigger.addEventListener("click", () => {
      //   elements.forEach((element) => {
      //     element.setAttribute("style", "display:none;");
      //   })
      // })
  
      counter++;
      
    }
  }





}







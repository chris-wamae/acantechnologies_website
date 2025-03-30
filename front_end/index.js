//hover effect system

//when certain elements are hovered over, they trigger the display of other element(s)
//when the mouse leaves the trigger or is not over newly displayed elements the other elements go back to being invisible
//after a short delay

//all trigger elements have id's with the same text part but different (unique) number parts
//all elements that are triggered by the same trigger have the same class which has the same number part as their trigger element

//when the website loads
//it runs a loop which finds all the triggers and adds all the logic that allows the hover functionality

//the required logic is:
//search functionality for trigger names
//event listeners
//search functionality for elements in activates
//functionality that changes whether the elements are visible or not

//

// let nonExist = document.getElementById("sbmenu-trig-5")
// console.log(nonExist)

console.log(screen.width)

if(screen.width > 500)
{
  let searchForTrigger = true;
  let counter = 1;
  let hoverTracker = {}
  
  function HideElement(elmt) {
  elmt.setAttribute("style", "display:none")
  }
  
  while (searchForTrigger) {
    let trigger = document.getElementById("sbmenu-trig-" + counter);
  
    if (trigger == null) {
      searchForTrigger = false;
    } else {
      let query = ".sbmenu-elmt-" + counter;
      hoverTracker[query] = false;
      let elements = document.querySelectorAll(query);
  
      elements.forEach((e) => 
      {
      e.addEventListener("mouseover", () => {
        e.setAttribute("style", "display:inline")
        console.log(e.getAttribute("class"));
      })
      })
  
  
  
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
  
  
  let hoverExpt = document.getElementById("hover-expt")
  
  let hiddenElmt = document.getElementById("hidden-elmt")
  
  hoverExpt.addEventListener("mouseover", () => {
  hiddenElmt.setAttribute("style","display:inline;")
  })
  
  hoverExpt.addEventListener("mouseout", () => {
  hiddenElmt.setAttribute("style","display:none;")
  })
}

// let navServiceSubmenuInUse = false;

// let toggleServicesNavLink = document.getElementById("nav-services-link");

// let navServiceList = document.getElementById("nav-servicelist");

// toggleServicesNavLink.addEventListener("mouseover", (e) => {
//   navServiceList.setAttribute("class", "nav_service_submenu");
// });

// function HideNavServiceSubMenu() {
//   if (!navServiceSubmenuInUse) {
//     navServiceList.setAttribute("class", "nav_service_submenu_hidden");
//   }
// }

// toggleServicesNavLink.addEventListener("mouseout", (e) => {
//   setTimeout(HideNavServiceSubMenu, 1000);
// });

// navServiceList.addEventListener("mouseover", () => {
//   navServiceSubmenuInUse = true;
// });

// navServiceList.addEventListener("mouseout", () => {
//   navServiceSubmenuInUse = false;
//   setTimeout(HideNavServiceSubMenu, 1000);
// });

// // inactiveLinks = document.querySelectorAll(".inactive");

// // inactiveLinksLength = inactiveLinks.length;

// // for (let x = 0; x < inactiveLinksLength; x++) {
// //   inactiveLinks[x].addEventListener("click", (e) => {
// //     inactiveLinks[x].setAttribute("class", "link_error_active");

// //     setTimeout(() => {
// //       inactiveLinks[x].setAttribute("class", "inactive_link_error");
// //     }, 1000);
// //   });
// // }

// let navContactSubMenuInUse = false;

// let toggleContactsNavLink = document.getElementById("nav-contact-link");

// let navContactList = document.getElementById("nav-contactlist");

// toggleContactsNavLink.addEventListener("mouseover", (e) => {
// navContactList.setAttribute("class","nav_contact_submenu")
// })

// function HideNavContactSubMenu() {

// if(!navContactSubMenuInUse)
// {
//   navContactList.setAttribute("class", "nav_contact_submenu_hidden")
// }

// }

// toggleContactsNavLink.addEventListener("mouseout",(e) => {
//   setTimeout(HideNavContactSubMenu,1000)
// })

// navContactList.addEventListener("mouseover",(e) => {
//   navContactSubMenuInUse = true
// })

// navContactList.addEventListener("mouseout",(e) => {
//  navContactSubMenuInUse = false
//  setTimeout(HideNavContactSubMenu,1000)
// })

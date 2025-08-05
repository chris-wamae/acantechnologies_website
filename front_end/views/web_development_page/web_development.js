// const changeContactOptionsCookie = (contactOption) => {
//     document.cookie = `contactType=${contactOption};path=/`
//    }

// const businessContactButtton = document.getElementsByClassName("business_contact_button")[0]

// businessContactButtton.addEventListener("click", () => {
//   changeContactOptionsCookie("BusinessSite")
// })

// const commerceContactButtton = document.getElementsByClassName("commerce_contact_button")[0]

// commerceContactButtton.addEventListener("click", () => {
//   changeContactOptionsCookie("CommerceSite")
// })

// const apiContactButtton = document.getElementsByClassName("api_contact_button")[0]

// apiContactButtton.addEventListener("click", () => {
//   changeContactOptionsCookie("WebAPI")
// })

// const applicationContactButtton = document.getElementsByClassName("application_contact_button")[0]

// applicationContactButtton.addEventListener("click", () => {
//   changeContactOptionsCookie("WebApp")
// })

let searchForTrigger = true;
let trigCount = 1;

if (screen.width <= 500) {
  while (searchForTrigger) {
    let trig = document.querySelector(".card_trig_" + trigCount);
    if (trig == null) {
      searchForTrigger = false;
    } else {
      let elmts = document.querySelectorAll(".card_elmt_" + trigCount);
      trig.addEventListener("click", () => {
        elmts.forEach((e) => {
          if (e.getAttribute("style") == "display:none;") {
            e.setAttribute("style", "display:inline;");
          } else {
            e.setAttribute("style", "display:none;");
          }
        });
      });
    }
    trigCount++;
  }
}

let searchForElements = true;
let elmtCount = 1;

if (screen.width > 500) {
  while (searchForElements) {
    let elmts = document.querySelectorAll(".card_elmt_" + elmtCount);
    if (elmts.length > 0) {
      elmts.forEach((e) => {
        e.setAttribute("style", "display:inline");
      });
    } else {
      searchForElements = false;
    }
    elmtCount++;
  }
}

function HideElement(elmt) {
  elmt.setAttribute("style", "display:none");
}

//desktop js

if (screen.width > 500) {
  let searchForTrigger = true;
  let counter = 1;

  while (searchForTrigger) {
    let trigger = document.getElementById("sbmenu-trig-" + counter);

    if (trigger == null) {
      searchForTrigger = false;
    } else {
      let query;
      if (counter == 3 || counter == 4) {
        query = ".sbmenu-elmt-" + (counter - 2);
      } else {
        query = ".sbmenu-elmt-" + counter;
      }

      let elements = document.querySelectorAll(query);

      if (counter == 3 || counter == 4) {
        trigger.addEventListener("click", () => {
          elements.forEach((element) => {
            element.setAttribute("style", "display:inline;");
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
      } else {
        trigger.addEventListener("mouseover", () => {
          elements.forEach((element) => {
            element.setAttribute("style", "display:inline;");
          });
        });

        trigger.addEventListener("mouseout", () => {
          elements.forEach((element) => {
            element.setAttribute("style", "display:none;");
          });
        });
      }
      counter++;
    }
  }
}

//mobile js

if (screen.width <= 500) {
  let burgMenuButton = document.getElementById("burger-menu-btn");

  let showBurgMenu = false;

  let burgerMenu = document.querySelectorAll(".navlink");

  burgMenuButton.addEventListener("click", () => {
    showBurgMenu = !showBurgMenu;

    if (showBurgMenu) {
      burgerMenu.forEach((e) => {
        e.setAttribute("style", "display:flex;");
      });
    } else if (showBurgMenu == false) {
      burgerMenu.forEach((e) => {
        e.setAttribute("style", "display:none;");
      });
    }
  });

  let searchForTrigger = true;

  let counter = 1;

  while (searchForTrigger) {
    let trigger = document.getElementById("sbmenu-trig-" + counter);

    if (trigger == null) {
      searchForTrigger = false;
    } else {
      let query;

      if (counter == 3 || counter == 4) {
        query = ".sbmenu-elmt-" + (counter - 2);
      } else {
        query = ".sbmenu-elmt-" + counter;
      }

      let elements = document.querySelectorAll(query);

      if (counter == 3 || counter == 4) {
        trigger.addEventListener("click", () => {
          elements.forEach((element) => {
            let burgerMenu = document.querySelectorAll(".navlink");

            showBurgMenu = true;

            burgerMenu.forEach((e) => {
              e.setAttribute("style", "display:flex;");
            });
            window.scrollTo({ top: 0, behavior: "smooth" });

            element.setAttribute("style", "display:inline;");
          });
        });
      } else {
        trigger.addEventListener("click", () => {
          elements.forEach((element) => {
            let currentStyle = element.getAttribute("style");
            if (currentStyle == "display:none;") {
              element.setAttribute("style", "display:inline;");
            } else {
              element.setAttribute("style", "display:none;");
            }
          });
        });
      }
      counter++;
    }
  }
}

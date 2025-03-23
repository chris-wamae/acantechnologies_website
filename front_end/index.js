let navServiceSubmenuInUse = false;

let toggleServicesNavLink = document.getElementById("nav-services-link");

let navServiceList = document.getElementById("nav-servicelist");

toggleServicesNavLink.addEventListener("mouseover", (e) => {
  navServiceList.setAttribute("class", "nav_service_submenu");
});

function HideNavServiceSubMenu() {
  if (!navServiceSubmenuInUse) {
    navServiceList.setAttribute("class", "nav_service_submenu_hidden");
  }
}

toggleServicesNavLink.addEventListener("mouseout", (e) => {
  setTimeout(HideNavServiceSubMenu, 1000);
});


navServiceList.addEventListener("mouseover", () => {
  navServiceSubmenuInUse = true;
});


navServiceList.addEventListener("mouseout", () => {
  navServiceSubmenuInUse = false;
  setTimeout(HideNavServiceSubMenu, 1000);
});

// inactiveLinks = document.querySelectorAll(".inactive");

// inactiveLinksLength = inactiveLinks.length;

// for (let x = 0; x < inactiveLinksLength; x++) {
//   inactiveLinks[x].addEventListener("click", (e) => {
//     inactiveLinks[x].setAttribute("class", "link_error_active");

//     setTimeout(() => {
//       inactiveLinks[x].setAttribute("class", "inactive_link_error");
//     }, 1000);
//   });
// }

let navContactSubMenuInUse = false;

let toggleContactsNavLink = document.getElementById("nav-contact-link");

let navContactList = document.getElementById("nav-contactlist");

toggleContactsNavLink.addEventListener("mouseover", (e) => {
navContactList.setAttribute("class","nav_contact_submenu")
})

function HideNavContactSubMenu() {

if(!navContactSubMenuInUse)
{
  navContactList.setAttribute("class", "nav_contact_submenu_hidden")
}
  
}

toggleContactsNavLink.addEventListener("mouseout",(e) => {
  setTimeout(HideNavContactSubMenu,1000)
})

navContactList.addEventListener("mouseover",(e) => {
  navContactSubMenuInUse = true
})

navContactList.addEventListener("mouseout",(e) => {
 navContactSubMenuInUse = false
 setTimeout(HideNavContactSubMenu,1000)
})






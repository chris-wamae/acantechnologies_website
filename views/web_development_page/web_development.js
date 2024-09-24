const changeContactOptionsCookie = (contactOption) => {
    document.cookie = `contactType=${contactOption}`
   }

const businessContactButtton = document.getElementsByClassName("business_contact_button")[0]

businessContactButtton.addEventListener("click", () => {
  changeContactOptionsCookie("BusinessSite")
})



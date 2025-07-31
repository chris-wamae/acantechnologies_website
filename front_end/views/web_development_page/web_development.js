const changeContactOptionsCookie = (contactOption) => {
    document.cookie = `contactType=${contactOption};path=/`
   }

const businessContactButtton = document.getElementsByClassName("business_contact_button")[0]

businessContactButtton.addEventListener("click", () => {
  changeContactOptionsCookie("BusinessSite")
})

const commerceContactButtton = document.getElementsByClassName("commerce_contact_button")[0]

commerceContactButtton.addEventListener("click", () => {
  changeContactOptionsCookie("CommerceSite")
})

const apiContactButtton = document.getElementsByClassName("api_contact_button")[0]

apiContactButtton.addEventListener("click", () => {
  changeContactOptionsCookie("WebAPI")
})


const applicationContactButtton = document.getElementsByClassName("application_contact_button")[0]

applicationContactButtton.addEventListener("click", () => {
  changeContactOptionsCookie("WebApp")
})





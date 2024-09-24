function createContactOptionsCookies(){
document.cookie = "contactType=Default"
}

const contactLinks = document.getElementsByClassName("contact_link")

contactLinks[0].addEventListener("click", () => {
    createContactOptionsCookies()
})

const contactButtons = document.getElementsByClassName("contact_button")

contactButtons[0].addEventListener("click", () => {
    createContactOptionsCookies()
})





//const contactButton = document.getElementsByClassName
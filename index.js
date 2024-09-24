function createContactOptionsCookies(){
document.cookie = "contactType=Default"
}

const contactLinks = document.getElementsByClassName("contact_link")

console.log(contactLinks)

contactLinks[0].addEventListener("click", () => {
    console.log(10)
    createContactOptionsCookies()
})

//const contactButton = document.getElementsByClassName
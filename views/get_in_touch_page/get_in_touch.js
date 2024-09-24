const cookiesString = document.cookie;

const cookiesArray = cookiesString.split(";")

console.log(10)
console.log(cookiesString)
console.log(cookiesArray)

const cookieSearch = (cookieName) => {
let nameLength = cookieName.length
console.log(nameLength)
cookiesArray.filter((cookie) => {
console.log(cookie)
console.log(cookieName)
if(cookie.substring(0,nameLength) == cookieName)
{
return cookie.substring(nameLength)
}})
}


let foundCookie = cookieSearch("contactType");
console.log(foundCookie)
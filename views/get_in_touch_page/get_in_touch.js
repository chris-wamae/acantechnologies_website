const cookiesString = document.cookie;

const cookiesArray = cookiesString.split(";");

const cookieSearch = (cookieName) => {
  let nameLength = cookieName.length;

  let result = "";
  let foundCookie = false;

  for (let x = 0; x < cookiesArray.length && !foundCookie; x++) {
    if (cookiesArray[x].substring(0, nameLength) == cookieName) {
      result = cookiesArray[x].substring(nameLength + 1);
    foundCookie = true;
    } 
  }
  return result;
};

let foundCookie = cookieSearch("contactType");

console.log(foundCookie);

const cookiesString = document.cookie;

const cookiesArray = cookiesString.split(";");

const cookieSearch = (cookieName) => {
  let nameLength = cookieName.length;

  let result = "";

  for (let x = 0; x < cookiesArray.length; x++) {
    if (cookie.substring(0, nameLength) == cookieName) {
      result = cookie.substring(nameLength + 1);
    }
  }
  return result;
};

let foundCookie = cookieSearch("contactType");

console.log(foundCookie);

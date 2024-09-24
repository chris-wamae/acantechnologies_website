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

const changeFormDefaultValues = () => {

    let titleInput = document.getElementsByClassName("title_input")[0]

    let topicInput = document.getElementsByClassName("topic_input")[0]

    switch(foundCookie)
    {
    case "BusinessSite" : 
    topicInput.value = "Business Website"
    titleInput.value = "More information on getting the process of getting a business website developed by Acan"
    break;

    case "CommerceSite" : 
    topicInput.value = "E-commerce Website"
    titleInput.value = "Additional information on getting an E-commerce website developed for my business by Acan"
    break;

    case "WebAPI" : 
    topicInput.value = "Web API"
    titleInput.value = "More information on the Web API development offered by Acan"
    break;

    case "WebApp" : 
    topicInput.value = "Business Website"
    titleInput.value = "Whats the process of getting my Web Application developed through Acan"
    break;

    default:
    console.log("No form changes made")
    }
}

changeFormDefaultValues()

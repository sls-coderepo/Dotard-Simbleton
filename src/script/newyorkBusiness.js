// Array to contain all the New York businesses

const listOfBusinessInNewYork = document.querySelector(
    "#businessInNY-container"
  );
  listOfBusinessInNewYork.innerHTML = "<h1>Business in New York</h1>";
  
  const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false;
    if (business.addressStateCode === "NY") {
      inNewYork = true;
    }
    return inNewYork;
  });
  ;
  
  const createHTMLForBusinessInNY = businessObj => {
    return `<h2>${businessObj.companyName}</h2>
    <p>${businessObj.addressFullStreet}</p>
    <p>${businessObj.addressCity} ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
    <hr>`;
  };
  
  newYorkBusinesses.forEach(business => {
    let list = createHTMLForBusinessInNY(business);
    listOfBusinessInNewYork.innerHTML += list;
  });
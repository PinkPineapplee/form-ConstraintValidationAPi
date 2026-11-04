//Create function to make ui for form
function createFormUI(){
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    form.className = "form-Val";
    form.setAttribute("novalidate");
    form.setAttribute("method","POST");
   //Email components
    const container = document.createElement("fieldset");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: " ;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.name = "email";

//country components
 const container1 = document.createElement("fieldset");
    const countryLabel = document.createElement("label");
    countryLabel.textContent = "Country: " ;

    const countrySelect = document.createElement("select");
    countryInput.name = "country";
    const countryInput = document.createElement("input");
    countryInput.type = "text";

    const countryOptions = document.createElement("option");

//postal code components
 const container2 = document.createElement("fieldset");
    const postalCodeLabel = document.createElement("label");
    postalCodeLabel.textContent = "Postal Code: " ;

    const postalCodeInput = document.createElement("input");
    postalCodeInput.type = "text";
    postalCodeInput.name = "postalCode";

//password components
 const container3 = document.createElement("fieldset");
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password: " ;

    const passwordInput = document.createElement("input");
    passwordInput.type = "text";
    passwordInput.name = "password";

//password comfirm components
 const container4 = document.createElement("fieldset");
    const passwordCLabel = document.createElement("label");
    passwordCLabel.textContent = "password Confirmation: " ;

    const passwordCInput = document.createElement("input");
    passwordCInput.type = "text";
    passwordCInput.name = "passwordC";


container.append(emailLabel,emailInput);
container1.append(countryLabel,countryInput,countrySelect,countryOptions);
container2.append(postalCodeLabel,postalCodeInput);
container3.append(passwordLabel,passwordInput);
container4.append(passwordCLabel,passwordCInput);
  

    formDiv.append(form);
}



export {
    createFormUI
}
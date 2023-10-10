// const form = document.getElementById("regForm"); // Replace with your form's actual ID
// form.addEventListener("submit", Validate);
const Validate = (event) => {
  let error = 0;
  //   const form = document.getElementById("regForm"); // Replace with your form's actual ID
  //   form.addEventListener("submit", Validate);
  event.preventDefault();
  // pick inputs
 
  let password = document.getElementById("password");
  let email = document.getElementById("email");

  // pick error sections

  let passwordError = document.getElementById("passwordErr");
  let emailError = document.getElementById("emailErr");
 

  // // validating password input emptiness
  // if(password.value == ""){
  //     password.style.border = "2px solid red"
  //     passwordError.innerHTML = "Password can not be empty"
  //     passwordError.style = "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
  //     error++
  // }
  //  // validating password for minimum length
  // else if(password.value.length < 3){
  //     password.style.border = "2px solid red"
  //     passwordError.innerHTML = "Password must be atleast 3 letters"
  //     passwordError.style = "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
  //     error++
  // }
  // // validating password for maximum length
  // else if(password.value.length > 14){
  //     password.style.border = "2px solid red"
  //     passwordError.innerHTML = "Password must be less than 14 letters"
  //     passwordError.style = "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
  //     error++
  // } else {
  //     password.style.border = "2px solid green"
  //     passwordError.innerHTML = ""
  // }

  // validating email input emptiness
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email can not be empty";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  }
  // validating email for minimum length
  else if (email.value.length < 3) {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email must be atleast 3 characters";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  }
  // validating email for maximum length
  else if (email.value.length > 50) {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email must be less than 50 characters";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else {
    email.style.border = "2px solid green";
    emailError.innerHTML = "";
  }

  // password validation
  const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else if (!password.value.match(passwordregex)) {
    password.style.border = "2px solid red";
    passwordError.textContent = "Please put in the correct password";
    passwordError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else {
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }

  
};

 // JavaScript code
 const searchInput = document.getElementById('searchInput');
 const searchButton = document.getElementById('searchButton');
 const searchResults = document.getElementById('searchResults');

 // Function to perform the search
 function performSearch() {
   // Get the search query from the input field
   const query = searchInput.value.toLowerCase();

   // Perform your search logic here (e.g., filtering a list of items)
   // Replace this with your actual search logic
   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
   const filteredItems = items.filter(item => item.toLowerCase().includes(query));

   // Display the search results
   const resultsHTML = filteredItems.map(item => `<p>${item}</p>`).join('');
   searchResults.innerHTML = resultsHTML;
 }

 // Add a click event listener to the search button
 searchButton.addEventListener('click', performSearch);

 // Optionally, you can also trigger the search when the user presses Enter in the input field
 searchInput.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
     performSearch();
   }
 });

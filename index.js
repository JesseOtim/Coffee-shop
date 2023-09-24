const Validate = (event) => {
    let error = 0

    event.preventDefault();
    // pick inputs
    let password = document.getElementById("password");
    let email = document.getElementById("email")


    // pick error sections
    let passwordError = document.getElementById("passwordErr")
    let emailError = document.getElementById("emailErr")
   


    // // validating password input emptiness
    // if(password.value == ""){
    //     password.style.border = "2px solid red"
    //     passwordError.innerHTML = "Password can not be empty"
    //     passwordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    //  // validating password for minimum length
    // else if(password.value.length < 3){
    //     password.style.border = "2px solid red"
    //     passwordError.innerHTML = "Password must be atleast 3 letters"
    //     passwordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    // // validating password for maximum length
    // else if(password.value.length > 11){
    //     password.style.border = "2px solid red"
    //     passwordError.innerHTML = "Password must be less than 11 letters"
    //     passwordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // } else {
    //     password.style.border = "2px solid green"
    //     passwordError.innerHTML = ""
    // }


    // validating email input emptiness
    if(email.value == ""){
        email.style.border = "2px solid red"
        emailError.innerHTML = "Email can not be empty"
        emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
     // validating email for minimum length
    else if(email.value.length < 3){
        email.style.border = "2px solid red"
        emailError.innerHTML = "Email must be atleast 3 characters"
        emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    // validating email for maximum length
    else if(email.value.length > 50){
        email.style.border = "2px solid red"
        emailError.innerHTML = "Email must be less than 50 characters"
        emailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } 
    else{
        email.style.border = "2px solid green"
        emailError.innerHTML = ""
    }

    // password validation
  const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    
  } else if (!password.value.match(passwordregex)) {
    password.style.border = "2px solid red";
    passwordError.textContent = "Please put in the correct password";
    passwordError.style =
      "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++;
    
  } else {
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }

}


//   // // Get references to the input field and search button
//   // const searchInput = document.getElementById('searchInput');
//   // const searchButton = document.getElementById('searchButton');

//   // // Add a click event listener to the search button
//   // searchButton.addEventListener('click', function() {
//   //     // Get the value of the input field
//   //     const searchTerm = searchInput.value.trim(); // trim removes leading/trailing whitespace

//   //     // Check if the input is empty
//   //     if (searchTerm === '') {
//   //         alert('Please enter a search term.'); // You can replace this with your preferred validation method
//   //     } else {
//   //         // Perform the search or other action here
//   //         alert(`Searching for: ${searchTerm}`);
//   //         // Replace the alert with the actual search logic
//   //     }
//   // });

// //   document.getElementById('liveAlertBtn').addEventListener('click', function () {
// //     const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
// //     const alertHTML = `
// //     <div class="alert alert-success alert-dismissible fade show" role="alert">
// //         This is a live Bootstrap alert! You can customize its content.
// //         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
// //             <span aria-hidden="true">&times;</span>
// //         </button>
// //     </div>
// //     `;

// //     // Clear any existing alerts
// //     alertPlaceholder.innerHTML = '';

// //     // Insert the new alert
// //     alertPlaceholder.insertAdjacentHTML('beforeend', alertHTML);

// //     // You can also use Bootstrap's JavaScript functions to initialize the alert (optional)
// //     // For example, to close the alert after a few seconds:
// //     const alertElement = document.querySelector('.alert');
// //     if (alertElement) {
// //         const bsAlert = new bootstrap.Alert(alertElement);
// //         setTimeout(function () {
// //             bsAlert.close();
// //         }, 5000); // Close the alert after 5 seconds
// //     }
// // });

// // document.getElementById('liveAlertBtn').addEventListener('click', function () {
// //   const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
// //   const alertHTML = `
// //   <div class="alert alert-success alert-dismissible fade show" role="alert">
// //       This is a live Bootstrap alert! You can customize its content.
// //       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
// //           <span aria-hidden="true">&times;</span>
// //       </button>
// //   </div>
// //   `;

// //   // Clear any existing alerts
// //   alertPlaceholder.innerHTML = '';

// //   // Insert the new alert
// //   alertPlaceholder.insertAdjacentHTML('beforeend', alertHTML);

// //   // You can also use Bootstrap's JavaScript functions to initialize the alert (optional)
// //   // For example, to close the alert after a few seconds:
// //   const alertElement = document.querySelector('.alert');
// //   if (alertElement) {
// //       const bsAlert = new bootstrap.Alert(alertElement);
// //       setTimeout(function () {
// //           bsAlert.close();
// //       }, 5000); // Close the alert after 5 seconds
// //   }
// // });
// const ValidatePassword = (password) => {
//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//   if (password === "") {
//       return {
//           isValid: false,
//           errorMessage: "Password can't be blank",
//       };
//   } else if (!password.match(passwordRegex)) {
//       return {
//           isValid: false,
//           errorMessage: "Please put in the correct password",
//       };
//   } else {
//       return {
//           isValid: true,
//       };
//   }
// };

// const ValidateEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (email === "") {
//       return {
//           isValid: false,
//           errorMessage: "Email can't be blank",
//       };
//   } else if (!email.match(emailRegex)) {
//       return {
//           isValid: false,
//           errorMessage: "Please enter a valid email address",
//       };
//   } else {
//       return {
//           isValid: true,
//       };
//   }
// };

// const passwordInput = document.getElementById("password");
// const emailInput = document.getElementById("email");
// const passwordError = document.getElementById("passwordErr");
// const emailError = document.getElementById("emailErr");

// passwordInput.addEventListener("input", () => {
//   const password = passwordInput.value.trim();
//   const validationResult = ValidatePassword(password);

//   if (validationResult.isValid) {
//       passwordInput.style.border = "2px solid green";
//       passwordError.innerHTML = "";
//   } else {
//       passwordInput.style.border = "";
//       passwordError.innerHTML = validationResult.errorMessage;
//   }
// });

// emailInput.addEventListener("input", () => {
//   const email = emailInput.value.trim();
//   const validationResult = ValidateEmail(email);

//   if (validationResult.isValid) {
//       emailInput.style.border = "2px solid green";
//       emailError.innerHTML = "";
//   } else {
//       emailInput.style.border = "";
//       emailError.innerHTML = validationResult.errorMessage;
//   }
// });

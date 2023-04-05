if (
  window.location.pathname === "/" ||
  window.location.pathname === "/sign-up.html"
) {
  //SIGNUP PAGE
  const nameInput = document.getElementById("username");
  const nameAlert = nameInput.nextElementSibling;
  const emailInput = document.getElementById("email");
  const emailAlert = emailInput.nextElementSibling;
  const password1 = document.getElementById("password1");
  const passAlert1 = document.getElementById("pass1Err");
  const password2 = document.getElementById("password2");
  const passAlert2 = document.getElementById("pass2Err");
  // console.log(emailInput);
  // console.log(emailAlert);

  // const eye1 = document.getElementById("toggle-password-button");
  // eye1.addEventListener("click", function() {
  //   if (password1.hasAttribute("type", "password")) {
  //     password1.removeAttribute("type");
  //     password1.setAttribute("type", "text");
  //   } else {
  //     password1.removeAttribute("type");
  //     password1.setAttribute("type", "password")
  //   }
  // })

  //CHECKED FOR SUBMIT
  let namePass = false;
  let emailPass = false;
  let passChecked = false;
  let boxValue = false;

  // NAMA
  nameInput.addEventListener("keyup", function (event) {
    if (event.target.value.trim() === "") {
      nameInput.setAttribute("style", "border-color: #FFBA7B;");
      nameAlert.innerText = `field can't be empty`;
    } else {
      nameInput.removeAttribute("style");
      nameInput.setAttribute("style", "border-color: #BAFF7B;");
      nameAlert.innerText = "";
      namePass = true;
    }
  });

  // EMAIL
  emailInput.addEventListener("keyup", function (event) {
    if (event.target.value.trim() === "") {
      emailInput.setAttribute("style", "border-color: #FFBA7B;");
      emailAlert.innerText = `field can't be empty`;
    } else {
      if (!event.target.value.includes("@")) {
        emailInput.setAttribute("style", "border-color: #FFBA7B;");
        emailAlert.innerText = "Must contains @ at the field";
      } else {
        emailInput.removeAttribute("style");
        emailInput.setAttribute("style", "border-color: #BAFF7B;");
        emailAlert.innerText = "";
        emailPass = true;
      }
    }
  });

  //PASSWORD
  let passwordValue;
  password1.addEventListener("keyup", function (event) {
    passwordValue = event.target.value;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let i = 0; i < passwordValue.length; i++) {
      const char = passwordValue.charAt(i);

      if (char >= "A" && char <= "Z") {
        hasUppercase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowercase = true;
      } else if (char >= "0" && char <= "9") {
        hasDigit = true;
      }
    }
    console.log(passwordValue)

    if (passwordValue.trim() === "") {
      password1.setAttribute("style", "border-color: #FFBA7B;");
      passAlert1.innerText = `field can't be empty`;
      passAlert1.removeAttribute("style");
    } else {
      if (passwordValue.length < 8 || passwordValue.length > 16) {
        password1.setAttribute("style", "border-color: #FFBA7B;");
        passAlert1.innerText = `Password must be 8 - 16 characters`;
        passAlert1.removeAttribute("style");
      } else {
        if (!hasUppercase) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast an UPPERCASE letter is expected`;
          passAlert1.removeAttribute("style");
        } else if (!hasLowercase) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast a lowercase letter is expected`;
          passAlert1.removeAttribute("style");
        } else if (!hasDigit) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast a number is expected`;
          passAlert1.removeAttribute("style");
        } else {
          password1.removeAttribute("style");
          password1.setAttribute("style", "border-color: #BAFF7B;");
          passAlert1.setAttribute("style", "color: #93C961;");
          passAlert1.innerText = "Looks Good";
        }
      }
    }
  });

  //CONFIRM PASSWORD
  password2.addEventListener("keyup", function (event) {
    const confirmPassValue = event.target.value;
    console.log(confirmPassValue);

    // let passCheck;
    if (confirmPassValue.trim() === "") {
      password2.setAttribute("style", "border-color: #FFBA7B;");
      passAlert2.innerText = `field can't be empty`;
      passAlert2.removeAttribute("style");
      passChecked = false;
    } else if (passwordValue !== confirmPassValue) {
      password2.setAttribute("style", "border-color: #FFBA7B;");
      passAlert2.innerText = `Password doesn't match`;
      passAlert2.removeAttribute("style");
      passChecked = false;
    } else {
      password2.removeAttribute("style");
      password2.setAttribute("style", "border-color: #BAFF7B;");
      passAlert2.setAttribute("style", "color: #93C961; ");
      passAlert2.innerText = "Password match";
      passChecked = true;
    }
  });
  // console.log(passChecked);

  //CHECKBOX
  const checkBox = document.getElementById("checkbox");
  const cbChecked = checkBox.addEventListener("click", function (event) {
    if (event.target.checked) {
      boxValue = true;
    } else {
      boxValue = false;
    }
    // console.log(boxValue);
  });

  //SUBMITTING
  const formInput = document.getElementById("form-login");
  formInput.addEventListener("submit", function (event) {
    event.preventDefault();

    validateInputs();
  });

  //panggil alert submit
  const notSubmit = document.getElementById("form-login-alert");

  const validateInputs = () => {
    if (
      namePass !== true ||
      emailPass !== true ||
      passChecked !== true ||
      boxValue !== true
    ) {
      notSubmit.innerText = "Enter correct inputa and check the checkbox";
    } else {
      window.location.href = "home.html";
    }
  };
}

if (window.location.pathname === "/sign-in.html") {
  //SIGNIN PAGE
  const nameInput = document.getElementById("username");
  const nameAlert = nameInput.nextElementSibling;
  const emailInput = document.getElementById("email");
  const emailAlert = emailInput.nextElementSibling;
  const password1 = document.getElementById("password1");
  const passAlert1 = document.getElementById("pass1Err");

  //CHECKED FOR SUBMIT
  let namePass = false;
  let emailPass = false;
  let makePassValue = false;

  // NAMA

  nameInput.addEventListener("keyup", function (event) {
    if (event.target.value.trim() === "") {
      nameInput.setAttribute("style", "border-color: #FFBA7B;");
      nameAlert.innerText = `field can't be empty`;
    } else {
      nameInput.removeAttribute("style");
      nameInput.setAttribute("style", "border-color: #BAFF7B;");
      nameAlert.innerText = "";
      namePass = true;
    }
  });

  // EMAIL

  emailInput.addEventListener("keyup", function (event) {
    if (event.target.value.trim() === "") {
      emailInput.setAttribute("style", "border-color: #FFBA7B;");
      emailAlert.innerText = `field can't be empty`;
    } else {
      if (!event.target.value.includes("@")) {
        emailInput.setAttribute("style", "border-color: #FFBA7B;");
        emailAlert.innerText = "Must contains @ at the field";
      } else {
        emailInput.removeAttribute("style");
        emailInput.setAttribute("style", "border-color: #BAFF7B;");
        emailAlert.innerText = "";
        emailPass = true;
      }
    }
  });

  //PASSWORD
  let passwordValue;

  password1.addEventListener("keyup", function (event) {
    passwordValue = event.target.value;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;

    for (let i = 0; i < passwordValue.length; i++) {
      const char = passwordValue.charAt(i);

      if (char >= "A" && char <= "Z") {
        hasUppercase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowercase = true;
      } else if (char >= "0" && char <= "9") {
        hasDigit = true;
      }
    }

    // console.log(passwordValue)

    if (passwordValue.trim() === "") {
      password1.setAttribute("style", "border-color: #FFBA7B;");
      passAlert1.innerText = `field can't be empty`;
      passAlert1.removeAttribute("style");
      makePassValue = false;
    } else {
      if (passwordValue.length < 8 || passwordValue.length > 16) {
        password1.setAttribute("style", "border-color: #FFBA7B;");
        passAlert1.innerText = `Password must be 8 - 16 characters`;
        passAlert1.removeAttribute("style");
        makePassValue = false;
      } else {
        if (!hasUppercase) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast an UPPERCASE letter is expected`;
          passAlert1.removeAttribute("style");
          makePassValue = false;
        } else if (!hasLowercase) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast a lowercase letter is expected`;
          passAlert1.removeAttribute("style");
          makePassValue = false;
        } else if (!hasDigit) {
          password1.setAttribute("style", "border-color: #FFBA7B;");
          passAlert1.innerText = `atleast a number is expected`;
          passAlert1.removeAttribute("style");
          makePassValue = false;
        } else {
          password1.removeAttribute("style");
          password1.setAttribute("style", "border-color: #BAFF7B;");
          passAlert1.setAttribute("style", "color: #93C961;");
          passAlert1.innerText = "Looks Good";
          makePassValue = true;
        }
      }
    }
  });

  //SUBMITTING
  const formInput = document.getElementById("form-login");
  formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    validateInputs();
  });

  //panggil alert submit
  const notSubmit = document.getElementById("form-login-alert");
  //code fungsi validateInputs
  const validateInputs = () => {
    //1.Name
    if (namePass !== true || emailPass !== true || makePassValue !== true) {
      notSubmit.innerText = "Enter correct input to the field";
    } else {
      window.location.href = "home.html";
    }
  };
  console.log(makePassValue);
}

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/forgot-password.html"
) {
  //FORGOT PAGE

  const emailInput = document.getElementById("email");
  const emailAlert = emailInput.nextElementSibling;

  //CHECKED FOR SUBMIT

  let emailPass = false;

  // EMAIL

  emailInput.addEventListener("keyup", function (event) {
    if (event.target.value.trim() === "") {
      emailInput.setAttribute("style", "border-color: #FFBA7B;");
      emailAlert.innerText = `field can't be empty`;
    } else {
      if (!event.target.value.includes("@")) {
        emailInput.setAttribute("style", "border-color: #FFBA7B;");
        emailAlert.innerText = "Must contains @ at the field";
      } else {
        emailInput.removeAttribute("style");
        emailInput.setAttribute("style", "border-color: #BAFF7B;");
        emailAlert.innerText = "";
        emailPass = true;
      }
    }
  });

  //SUBMITTING
  const formInput = document.getElementById("form-login");
  formInput.addEventListener("submit", function (event) {
    event.preventDefault();

    validateInputs();
  });

  //panggil alert submit
  const notSubmit = document.getElementById("form-login-alert");

  const validateInputs = () => {
    //1.Name
    if (emailPass !== true) {
      notSubmit.innerText = "Enter correct input to the field";
    } else {
      window.location.href = "sign-in.html";
    }
  };
}

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/home.html"
) {
  //HOME PAGE

  const arrayBanner = [
    {//revisi tambah object
      image: "assets/images/Banner3.jpg",
      schedule: "Fri, 17 Nov, 10:00 PM",
      title: "Jimi Hendrix Experience",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    {
      image: "assets/images/Banner6.jpg",
      schedule: "Thu, 20 Nov, 7:00 PM",
      title: "Afternoon S(T)ea Party",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    {
      image: "assets/images/Banner4.jpg",
      schedule: "Mon, 18 Nov, 7:00 AM",
      title: "Set Green for Next Gen",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    {
      image: "assets/images/Banner5.jpg",
      schedule: "Sat, 19 Nov, 4:00 PM",
      title: "Aquascaping Exceptional",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    {
      image: "assets/images/Banner1.png",
      schedule: "Wed, 15 Nov, 4:00 PM",
      title: "Sights & Sound Exhibition",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    {
      image: "assets/images/Banner2.png",
      schedule: "Thu, 16 Nov, 7:00 PM",
      title: "See it in Gold Class",
      viewer: "assets/images/avatars.png",
      link: "event.html",
    },
    
  ];

  //PARENT EVENT BANNER WRAP

  //ebw>a>eb>img'image',btxt>'schedule','title',bv>div>'viewer'

  //Ganti isi event-banner-wrap, dengan input dari javascript

  const ParentEB1 = document.getElementsByClassName("event-banner-wrap")[0];
  const ParentEB2 = document.getElementsByClassName("event-banner-wrap")[1];
  // const ParentEB = [ParentEB1, ParentEB2];
  function callBanner(times, ParentEB, arrayBanner) {
    for (let j = 0; j < times; j++) {
      for (let i = 0; i < arrayBanner.length; i++) {
        const anchorEB = document.createElement("a");
        anchorEB.setAttribute("href", `${arrayBanner[i].link}`);
        ParentEB.appendChild(anchorEB);

        const divEB = document.createElement("div");
        divEB.setAttribute("class", "event-banner");
        anchorEB.appendChild(divEB);

        const imageEB = document.createElement("img");
        imageEB.setAttribute("src", `${arrayBanner[i].image}`);
        divEB.appendChild(imageEB);

        const textEB = document.createElement("div");
        textEB.setAttribute("class", "banner-text");
        divEB.appendChild(textEB);

        const scheduleEB = document.createElement("div");
        scheduleEB.setAttribute("class", "banner-text-first");
        scheduleEB.innerText = `${arrayBanner[i].schedule}`;
        textEB.appendChild(scheduleEB);

        const titleEB = document.createElement("div");
        titleEB.setAttribute("class", "banner-text-second");
        titleEB.innerText = `${arrayBanner[i].title}`;
        textEB.appendChild(titleEB);

        const viewerEB = document.createElement("div");
        viewerEB.setAttribute("class", "banner-view-account");
        textEB.appendChild(viewerEB);

        const inView = document.createElement("div");
        viewerEB.appendChild(inView);

        const imgView = document.createElement("img");
        imgView.setAttribute("src", `${arrayBanner[i].viewer}`);
        inView.appendChild(imgView);
      }
    }
  }
  // function to code
  callBanner(1, ParentEB1, arrayBanner);
  callBanner(1, ParentEB2, arrayBanner); //event banner bawah

  // coba grid
  // const parentGrid = document.querySelector('.location-grid');
  // const grid = parentGrid.querySelectorAll;

  // console.log(typeof grid);

  //NAVBAR
  const menu = document.getElementById("menu");
  const menuToggler = document.getElementById("menu-toggler");

  menuToggler.addEventListener("click", function () {
    const token = menu.classList;
    if (token.contains("hidden")) {
      token.remove("hidden");
    } else {
      token.add("hidden");
    }
  });
}

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("email", email);
    const user = await fetch(`https://blean-api.onrender.com/analytics`, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Content type
      },
      body: JSON.stringify({ email: email }),
    }).then((res) => {
      return res.json();
    });
    alert("Login efetuado");
    window.location.replace("/blean/frontend/src/pages/statistcs/index.html");
  } else {
    alert("Preencha os campos corretamente");
  }
});

const user = document.querySelector(".perfil");
user.textContent = localStorage.getItem("email").split("@")[0].substring(0, 10);

const getUserData = async () => {
  const user = await fetch(
    `https://blean-api.onrender.com/analytics/${localStorage.getItem("email")}`,
    {
      method: "GET", // HTTP method
      headers: {
        "Content-Type": "application/json", // Content type
      },
    }
  ).then((res) => {
    return res.json();
  });
  console.log(user)

  document.querySelector(".totalComp").textContent = user[0].totalComponents
  document.querySelector(".quantMicro").textContent = user[0].percentualMicroplastic
  document.querySelector(".quantAnalise").textContent = user[0].quantityTests
};

getUserData();

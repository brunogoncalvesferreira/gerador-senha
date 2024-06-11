const buttonGeneratePassword = document.querySelector("button")

buttonGeneratePassword.addEventListener("click", () => {
  const chars =
    "1234567890qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM@#$%&*"

  const passwordLength = 6
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    let passwordRamdom = Math.floor(Math.random() * chars.length)

    password += chars.substring(passwordRamdom, passwordRamdom + 1)
  }

  document.querySelector("p").innerHTML = password
})

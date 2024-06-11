```javascript
// Buscando o botão
const buttonGeneratorPassword = document.querySelector("button")

// Criando um evento de click para o botão
buttonGeneratorPassword.addEventListener("click", handleGeneratorPassword)

// Função que vai processar nosso código
function handleGeneratorPassword() {
  // Váriavel com os caracteres
  const chars =
    "1234567890qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM@#$%&*"

  // Variável com o tamanho da senha
  const passwordLength = 8

  // Variável onde vamos armazenar a senha
  let password = ""

  // Loop para gerar valores aleatórios
  for (let i = 0; i < passwordLength; i++) {
    // Variável que gera números aleatórios
    let passwordRandom = Math.floor(Math.random() * chars.length)

    // Armazenando os caracteres formando a senha
    password += chars.substring(passwordRandom, passwordRandom + 1)
  }

  // Usando a dom para buscar a tag p é mostrar a senha gerada em tela
  document.querySelector("p").innerHTML = password
}
```

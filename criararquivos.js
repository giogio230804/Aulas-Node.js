const fs = require("fs");

fs.appendFile("novoArquivo.txt", "Arquivo criado com sucesso!", function (err) {
  if (err) throw err;
  console.log("Arquivo criado...");
});

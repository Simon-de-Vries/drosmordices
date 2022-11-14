//1. mkdir, dann cd in den Ordner und erstelle darin ein npm package (mit den ganzen json-Files)
//2. installiere "nodemon" in dem Ordner
//3. Passe die json-Datei so an, wie hier in diesem Projekt
//4. Im Terminal hier in VS: Geh in den Server-Ordner (cd)
//5. Befehl im Terminal: npm run devStart
//Dann kann man sehen, dass sich der Server immer aktualisiert (wegen nodemon)
//=> console.log("hi");

const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:5500"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (number) => {
    console.log(number);
  });
});

const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "6847987",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
    subject: "Química",
    cost: "R$ 20,00",
    weekday: [0],
    time_from: [720],
    time_to: [3600],
  },
  {
    name: "Gabriel Óliver",
    avatar:
      "https://avatars2.githubusercontent.com/u/39492830?s=460&u=48eb20a9520d5605fd31282c101320df86c4641e&v=4",
    whatsapp: "96896859",
    bio: "Entusiasta das melhores tecnologias de química avançada.",
    subject: "Química",
    cost: "R$ 20,00",
    weekday: [0],
    time_from: [720],
    time_to: [3600],
  },
];
function pageLanding(req, res) {
  return res.render("index.html");
}
function pageStudy(req, res) {
  return res.render("study.html", { proffys });
}
function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
}
const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5500);

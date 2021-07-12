const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("./public/db.json");
const middlewares=  jsonserver.defaults({
    static: "./build",
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT, ()=>{
    console.log("Server is running");
})
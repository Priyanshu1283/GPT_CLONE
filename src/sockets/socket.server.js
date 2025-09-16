const { Server } = require("socket.io");

function initServer(httpServer){
    const io = new Server(httpServer ,{})

    io.on("connection", (socket) => {
        console.log("a user connected" , socket.id);
    })
}

module.exports = {
    initServer
}
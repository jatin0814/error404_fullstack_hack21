import socketIOClient from "socket.io-client";

const ENDPOINT = "https://mobivax-api.herokuapp.com/";

const socket = socketIOClient(ENDPOINT);

export default socket;
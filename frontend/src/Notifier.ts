import * as SockJS from "sockjs-client";

export class Notifier {

    private url:string = "https://localhost:8081/echo";
    private sock:SockJS.Socket;

    send(message:string):void {
        this.sock.send(message);
    }

    connect():void {
        this.sock = new SockJS(this.url);
        this.sock.onopen = () => {
            console.log("OPENED WebSocket.")
            this.sock.send("This is message from client");
            setInterval(()=> {
                this.sock.send("This is message from client by scheduler");
            }, 5000);
        };
        this.sock.onclose = ()=> {
            console.log("CLOSED WebSocket.");
        }
        this.sock.onmessage = (msg:MessageEvent) => {
            console.log("Got message: "+msg.data);
        };
    }
}

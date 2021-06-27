import React, { Component } from "react";

import styles from "./Chat.module.css";
// import Header from '../../components/Header/Header'
import socket from "../../Components/socket";
import Navbar from "../../Components/Navbar/Navbar2";
class Chat extends Component {
  state = {
    mssg: "",
    messages: [],
    room: "Support System",
    users: [],
  };

  onInputChangeHandler = (event) => {
    this.setState({ mssg: event.target.value });
  };

  autoScroll = () => {
    const mssgs = document.getElementById("mssgs");

    mssgs.scrollTop = mssgs.scrollHeight;
  };

  onSendMessage = (event) => {
    var today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();

    const user = localStorage.getItem("phone");

    event.preventDefault();

    socket.emit("sendMessage", this.state.mssg, time, user, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("message delivered!");
        this.setState({ mssg: "" });
        this.nameInput.focus();
      }
    });

    this.autoScroll();
  };

  onSendAEFI = (event) => {
    var today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();

    const user = localStorage.getItem("phone");

    event.preventDefault();

    socket.emit(
      "sendMessage",
      "AEFI EMERGENCY! I need immidiate help.",
      time,
      user,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("message delivered!");
          this.setState({ mssg: "" });
          this.nameInput.focus();
        }
      }
    );

    this.autoScroll();
  };

  onSendLocation = (event) => {
    var today = new Date(),
      time = today.getHours() + ":" + today.getMinutes();

    const user = localStorage.getItem("phone");

    event.preventDefault();

    if (!navigator.geolocation) {
      return alert("This feature is not supported on your browser!");
    }

    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit(
        "sendLocation",
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        time,
        user,
        () => {
          console.log("Location sent!");
        }
      );
    });

    this.autoScroll();
  };

  componentDidMount() {
    // socket.emit('join', localStorage.getItem("phone"), this.props.match.params.room, (e) => {
    //     if(e){
    //         alert(e);
    //     }
    // });
  }

  render() {
    socket.off("connection").on("connection", (mssg) => {
      socket.emit("sendMessage", mssg, "time", "Admin", (err) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({ mssg: "" });
        }
      });
    });

    socket.off("message").on("message", (mssg, d, user) => {
      this.state.messages.push(
        <div className={styles.mssg}>
          <div className={styles.user}>{user}</div>
          <div className={styles.time}>{d}</div>
          <div className={styles.txt}>{mssg}</div>
        </div>
      );
      this.setState({ message: "" });
    });

    socket.off("locationMessage").on("locationMessage", (mssg, time, user) => {
      this.state.messages.push(
        <div className={styles.mssg}>
          <div className={styles.user}>{user}</div>
          <div className={styles.time}>{time}</div>
          <a className={styles.txt_loc} href={mssg} target="_blank">
            My Location <i class="fa fa-location-arrow"></i>
          </a>
        </div>
      );
      this.setState({ message: "" });
      console.log(mssg);
    });

    socket.off("roomData").on("roomData", ({ room, users }) => {
      console.log(room);
      console.log(users);
      this.setState({ room: room });

      this.setState({ users: [] });

      users.map((user) => {
        this.state.users.push(<div>{user.username}</div>);
      });

      console.log(this.state.users);
    });

    return (
      <div>
        <Navbar />
        <div className={styles.chat}>
          <div className={styles.side}>
            <div className={styles.room}>{this.state.room}</div>
            <div className={styles.users_list}>
              Ask your Queries from Live Support System <br />
              <br />
              Press AEFI button in case of Emergency post Vaccination.
            </div>
            <div className={styles.users_cont}>{this.state.users}</div>
          </div>

          <div>
            <div className={styles.main_chat}>
              <div className={styles.mssgs_cont} id="mssgs">
                <div className={styles.chat_messages}>
                  {this.state.messages}
                </div>
              </div>

              <div className={styles.compose}>
                <form onSubmit={this.onSendMessage}>
                  <input
                    className={styles.inpu}
                    autoFocus
                    type="text"
                    value={this.state.mssg}
                    onChange={this.onInputChangeHandler}
                    ref={(input) => {
                      this.nameInput = input;
                    }}
                    defaultValue="It will focus"
                  />
                  <button onClick={this.onSendMessage} className={styles.send}>
                    <i class="fa fa-arrow-circle-right"></i>
                  </button>
                  <button onClick={this.onSendLocation} className={styles.loc}>
                    Send Location
                  </button>
                  <button onClick={this.onSendAEFI} className={styles.loc2}>
                    AEFI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;

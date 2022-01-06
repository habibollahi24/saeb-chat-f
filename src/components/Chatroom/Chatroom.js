import React, { useEffect, useRef, useState } from "react";
import styles from "./Chatroom.module.css";
import send from "../../assets/sendb.png";
import io from "socket.io-client"; //کتابخانه سوکت کلاینت نصب شد

const Chatroom = (props) => {
  const userAvator = props.location.state.gender;
  const username = props.location.state.name;
  //ارتباطمان را ادرسی که سوکت سرش وصل شده برقرار میکنیم
  //و داخل یوزرف میزاریم چون هربار کامپوننت اجرا میشه ما نمیخایم ارتباط برقرار بشه
  //الان من هرچی توی این کامپوننت بنویسم وصله به سوکت و داخل بکند داره لاگ میگیره

  const socket = useRef(io.connect("http://localhost:3010/socket")); //درخواست سمت سرور
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const addMessage = () => {
    if (!text) {
      return;
    }
    socket.current.emit("messageToServer", {
      text: text,
      avatar: userAvator,
      id: "",
      name: username,
      avatar: userAvator,
    });
    // message.push({
    //   text: text,
    //   avatar: userAvator,
    //   id: "",
    //   name: username,
    // });
    // setMessage([...message]);
    setText("");
  };
  useEffect(() => {
    socket.current.on("messageToClient", (messageFromServer) => {
      message.push(messageFromServer);
      setMessage([...message]);
    });
  }, [message]);

//   const secendPerson = (arr) => {
//     const obj = arr.find((item) => {
//       return item.name !== username;
//     });
//     if (obj.name !== username) {
//       return obj.name;
//     } else {
//       return "";
//     }
//   };

  return (
    <div className={styles.chatroom}>
      <header>
        <h1>SAEB-messenger</h1>
        <div className={styles.leftHeader}>
          {/* <div>
            <img src={require(`../../assets/${userAvator}.png`)} alt="logo" />
            <span>{message.length === 0 ? "" : secendPerson(message)}</span>
          </div> */}
          <div>
            <img src={require(`../../assets/${userAvator}.png`)} alt="logo" />
            <span>{username}</span>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {message.map((mes, index) => (
          <div
            key={index}
            className={mes.name !== username ? styles.parentBoxToLeft : ""}
          >
            <div
              className={
                mes.name === username
                  ? styles.messageBox
                  : styles.messageBoxReverse
              }
            >
              <img
                src={require(`../../assets/${mes.avatar}.png`)}
                alt="avatar"
                style={{ width: "30px" }}
              />
              <p>{mes.text}</p>
              {/* <p>{mes.name}</p> */}
            </div>
          </div>
        ))}
      </main>
      <footer>
        <img src={send} alt="sendBTN" onClick={addMessage} />
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </footer>
    </div>
  );
};

export default Chatroom;

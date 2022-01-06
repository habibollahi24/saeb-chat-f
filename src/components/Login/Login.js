import React, { useState } from "react";
// import google from "../../assets/icons8-google.svg";
import saeb from "../../assets/untitle3.png";
import styles from "./Login.module.css";
const Login = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [error, serError] = useState(false);

  const validation = () => {
    if (name === "") {
      return "لطفا انتخاب کنید.";
    } else if (gender === "") {
      return "لطفا انتخاب کنید.";
    } else {
      props.history.push({
        pathname: "chatroom",
        state: {
          name,
          gender,
        },
      });
    }
  };

  const submitHandler = () => {
    serError(validation());
  };
  return (
    <div className={styles.login}>
      <span className={styles.name}>پیامرسان صائب</span>
      <span className={styles.mahsa}>گپ دونفره</span>
      <input
        className={styles.inputName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="نام:"
      />
      <div className={styles.avatar}>
        <p className={styles.avatarText}>لطفا یک گزینه انتخاب کنید.</p>
        <div className={styles.avatars}>
          <input
            className={styles.radio}
            type="radio"
            id="heart"
            name="gender"
            value="heart"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.heartAvatar}`}
            htmlFor="heart"
          ></label>
          <input
            className={styles.radio}
            type="radio"
            id="mustache"
            name="gender"
            value="mustache"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.mustacheAvatar}`}
            htmlFor="mustache"
          ></label>
          <input
            className={styles.radio}
            type="radio"
            id="js"
            name="gender"
            value="js"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.jsAvatar}`}
            htmlFor="js"
          ></label>
          <input
            className={styles.radio}
            type="radio"
            id="dollar"
            name="gender"
            value="dollar"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.dollarAvatar}`}
            htmlFor="dollar"
          ></label>
          <input
            className={styles.radio}
            type="radio"
            id="skirt"
            name="gender"
            value="skirt"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.skirtAvatar}`}
            htmlFor="skirt"
          ></label>
          <input
            className={styles.radio}
            type="radio"
            id="broken"
            name="gender"
            value="broken"
            onChange={(e) => setGender(e.target.value)}
          />
          <label
            className={`${styles.label} ${styles.brokenAvatar}`}
            htmlFor="broken"
          ></label>
        </div>
      </div>

      <p className={styles.eror}>{error}</p>

      <button className={styles.signBtn} onClick={submitHandler}>
        ورود به گپ
      </button>
      <div style={{ textAlign: "center" }}>
        <img
          src={saeb}
          alt="saeb"
          style={{ width: "70px", marginBottom: "0rem" }}
        />
        <br />
        <span className={styles.creator}>by:MohammadHabibollahi</span>
      </div>
    </div>
  );
};

export default Login;

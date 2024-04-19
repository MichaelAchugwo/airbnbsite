import React from "react";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Card from "./components/Card";
import cardData from "./components/cardData";
import Supabase from "./components/Supabase";
import { useEffect, useState } from "react";

const database = Supabase.database;

const cards = cardData.map((item) => {
  return <Card key={item.id} {...item} />;
});

export default function App() {
  const [logInPic, setLoginPic] = useState();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      await database.auth.getUser().then((value) => {
        if (value.data?.user) {
          let picture = `${value.data.user.user_metadata.avatar_url}`;
          setUser(value.data.user);
          setLoginPic(
            <div className="loginArea">
              <img src={picture} alt="Profile Picture" />
              <a id="logOutBtn" href="/logout">
                Logout
              </a>
            </div>
          );
        } else {
          setLoginPic(
            <div className="loginArea">
              <a id="logOutBtn" href="/login">
                Login
              </a>
            </div>
          );
        }
      });
    };
    getUserData();
  }, []);

  return (
    <div className="App">
      <Navbar loginPic={logInPic} />
      <Experiences />
      <section className="card-group">{cards}</section>
    </div>
  );
}

import Supabase from "./Supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const database = Supabase.database;

export default function SuccessPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      await database.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    };
    getUserData()
  }, []);

  return (
    <>
      <div className="success">
        <h1>Successful</h1>
      </div>
    </>
  );
}

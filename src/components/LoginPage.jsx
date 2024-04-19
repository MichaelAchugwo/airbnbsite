import Supabase from "./Supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const database = Supabase.database;

export default function LoginPage() {
  const navigate = useNavigate();
  const handleAuthStateChange = async (event) => {
    if (event === "SIGNED_IN") {
      navigate("/");
      console.log("successfully logged in");
    }
  };

  useEffect(() => {
    database.auth.onAuthStateChange(handleAuthStateChange);
  }, []);

  return (
    <div id="loginPage">
      <div id="loginContainer">
        <Auth
          supabaseClient={database}
          appearance={{
            theme: ThemeSupa,
          }}
          providers={["discord", "google"]}
        />
      </div>
    </div>
  );
}

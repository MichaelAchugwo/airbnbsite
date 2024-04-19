import Supabase from "./Supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const database = Supabase.database;

export default function LogoutPage() {
  const navigate = useNavigate();
  const logUserOut = async () => {
    try {
      const { error } = await database.auth.signOut();
      if (error) {
        throw error;
      }
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    logUserOut();
  }, []);
  return (
    <>
      <div className="logout">
        <h1>Logging Out...</h1>
      </div>
    </>
  );
}

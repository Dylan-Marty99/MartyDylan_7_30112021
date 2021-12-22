import React, { useEffect, useState }  from "react";
import Routes from "./components/Routes";
import { AuthContext } from "./components/AppContext";
import axios from "axios";

const App = () => {

  const [uid, setUid] = useState(null);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: "http://localhost:3001/jwtid",
  //       withCredentials: true,
  //     })
  //       .then((res) => {
  //         setUid(res.data);
  //       })
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();

  // }, [uid,]);

  return (
    <AuthContext.Provider value={uid}>
    <Routes />
  </AuthContext.Provider>
  );
};

export default App;

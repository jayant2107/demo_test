import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { OutcoachRoutes } from "./routes/OutcoachRoutes";
import { useDispatch } from "react-redux";
import { logindata } from "./store/Createslice";
import { getClubDetailsAtWeb } from "./services/Collection";
import styled from "styled-components";
import AppLoader from "./Loader/AppLoader";
const CryptoJS = require("crypto-js");

function App() {
  const dispatch = useDispatch();
  const location = window?.location;

  const [splashLoader, setSplashLoader] = useState(true);

  const getClubDetails = async (clubID) => {
    setSplashLoader(true);
    const params = new URLSearchParams();
    params.append("clubId", clubID);
    if (clubID) {
      const res = await getClubDetailsAtWeb(params);
      if (res?.status === 200) {
        res?.data &&
          dispatch(logindata({ ...res?.data, token: location?.search }));
        setSplashLoader(false);
      } else {
        dispatch(logindata(null));
        setSplashLoader(false);
        toast.error(res?.error || res?.message || "Something went worng");
      }
    } else {
      toast.error("Club Id NOT FOUND!");
    }
  };

  const getTokenValues = () => {
    let tempValues = location?.search.split("?token=");
    const decryptToken = CryptoJS.AES.decrypt(
      tempValues?.[1],
      "itsarandomsecret"
    ).toString(CryptoJS.enc.Utf8);
    getClubDetails(decryptToken);
  };

  useEffect(() => {
    location?.pathname === "/" &&
      location?.search?.includes("?token=") &&
      getTokenValues();
  }, []);

  if (location?.pathname === "/" && !location?.search?.includes("?token=")) {
    return (
      <PublishedURL>
        This is not a vaild Published URL, Please contact support team!
      </PublishedURL>
    );
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      {!splashLoader ? (
        <PreLoading>
          <AppLoader />
          <p className="loading-para">Loading...</p>
        </PreLoading>
      ) : (
        <OutcoachRoutes />
      )}
    </>
  );
}

export default App;

const PublishedURL = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const PreLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  .loading-para {
    text-align: center;
    font-weight: 600;
  }
`;

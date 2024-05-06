import styled from "styled-components";
import Filtter from "../components/Filtter";
import Bookcompo from "../components/Bookcompo";
import outcoachlogo from "../assets/Outcoach logo 1.svg";
import { useLocation } from "react-router-dom";
import { BookingBoxWrapper } from "./Landing";
import { useState } from "react";
import { getListingApi } from "../services/Collection";
import AppLoader from "../Loader/AppLoader";
import { HorizontaLine } from "../common/styleComponent";
import NotDataFound from "../utils/NotDataFound";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function SearchMelbourne() {
  const data = useLocation().state;

  const selectClass = data?.defaultValue?.class || null;
  const selectClassType = data?.defaultValue?.classType || null;
  const setectLocation = data?.defaultValue?.loaction || null;
  const [regularlisting, setRegularlisting] = useState(data?.data || []);
  const [loading, setLoading] = useState(false);
  const clubId = useSelector((store) => store?.login?.data?.id);

  const handleSelect = async (selectValue) => {
    const params = new URLSearchParams();
    params.append("clubId", clubId);
    if (selectValue?.type === "class") {
      params.append("eventType", selectValue?.value);
    } else if (selectClass) {
      params.append("eventType", selectClass?.value);
    }
    if (selectValue?.type === "classType") {
      params.append("clubEventTypeId", selectValue?.value);
    } else if (selectClassType) {
      params.append("eventType", selectClassType?.value);
    }
    if (selectValue?.type === "location") {
      params.append("venueId", selectValue?.value);
    } else if (setectLocation) {
      params.append("venueId", setectLocation?.value);
    }
    if (clubId) {
    setLoading(true);
    const res = await getListingApi(params);
      if (res?.status == 200) {
        setRegularlisting(res?.data);
      } else {
        toast.error(res?.message);
      }
      setLoading(false);
    }
    else{
      toast.error("Not found club Id!")
    }
  };

  // const getListing = async () => {
  //   setLoading(true);
  //   const params = new URLSearchParams();
  //   params.append("clubId", 207);
  //   if (selectClass) {
  //     params.append("eventType", selectClass);
  //   }
  //   if (setectLocation) {
  //     params.append("venueId", setectLocation);
  //   }
  //   if (selectClassType) {
  //     params.append("clubEventTypeId", selectClassType);
  //   }

  //   const res = await getListingApi(params);
  //   if (res?.status == 200) {
  //     setRegularlisting(res?.data);
  //   } else {
  //     console.log(res?.error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (data) {
  //     setRegularlisting(data);
  //   } else {
  //     getListing();
  //   }
  // }, [selectClass, selectClassType, setectLocation]);

  return (
    <Melbourne>
      <div className="wrap-filter">
        <Filtter
          handleSelect={handleSelect}
          data={data}
          defaultValue={data?.defaultValue}
        />
      </div>
      <Upcommingclass>
        <div className="main-wrap-hadding">
          <div className="wrapper-hadding">
            <p className="upcoming-hadding">Regular Classes</p>
            <div className="right-side-hadding-wrap">
              <p className="powered-hadding">Powered by</p>
              <img src={outcoachlogo} alt="" />
            </div>
          </div>
          <HorizontaLine height="1px" margin="0 0 24px 0" />
          {loading ? (
            <div className="loading-container">
              <AppLoader />
            </div>
          ) : regularlisting?.length === 0 ? (
            <NotDataFound />
          ) : (
            <BookingBoxWrapper>
              {regularlisting?.map((el) => (
                <Bookcompo data={el} />
              ))}
            </BookingBoxWrapper>
          )}
        </div>
      </Upcommingclass>
    </Melbourne>
  );
}

export default SearchMelbourne;

const Melbourne = styled.div`
  .wrap-filter {
    width: 100%;
    border-radius: 16px;
    padding: 24px 32px 24px 32px;
    border-style: none;
    outline: none;
  }
`;

const Upcommingclass = styled.div`
  width: 100%;
  min-height: 400px;
  .upcoming-hadding {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
  }
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
  }

  .powered-hadding {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
  }

  .wrapper-hadding {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-side-hadding-wrap {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .main-wrap-hadding {
    width: calc(100% - 64px);
    margin: auto;
    padding: 25.5px 32px;
    border-radius: 16px 16px 0px 0px;
    background: #ffffff;
    box-shadow: 1px 1px 8px 0px #aaaaaa80;
  }
  .border-bottom {
    border-bottom: 1px solid #aaaaaa80;
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    .right-side-hadding-wrap {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .wrapper-hadding {
      margin-bottom: 10px;
    }
  }
`;

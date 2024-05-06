import patterimg from "../assets/Pattern.svg";
import styled from "styled-components";
import Filtter from "../components/Filtter";
import outcoachlogo from "../assets/Outcoach logo 1.svg";
import Bookcompo from "../components/Bookcompo";
import navarrowright from "../assets/nav-arrow-right.svg";
import { memo, useEffect, useState } from "react";
import { HorizontaLine } from "../common/styleComponent";
import {
  getListingApi,
  getVenues,
  getclubevent,
  getfirstListingApi,
} from "../services/Collection";
import AppLoader from "../Loader/AppLoader";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../components/ButtonLoader";
import { toast } from "react-toastify";
import { filterOption } from "../store/filterValueSlice";
import { useDispatch, useSelector } from "react-redux";
import NotDataFound from "../utils/NotDataFound";

function Landing() {
  const dispatch = useDispatch();
  const [listingData, setListingData] = useState([]);
  const [btnClickable, setBtnclickable] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);
  const [totalCount, setTotalCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnloading, setBtnloading] = useState(false);
  const [viewMoreLoader, setVeiwMoreLoader] = useState(false);
  const [selectClass, setSelectClasss] = useState(null);
  const [selectClassType, setSelectClassType] = useState(null);
  const [setectLocation, setSetectLocation] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);

  const clubId = useSelector((store) => store?.login?.data?.id);

  const navigate = useNavigate();

  const handlegetvanues = async () => {
    const params = new URLSearchParams();
    params.append("clubId", clubId);
    const res = await getVenues(params);
    if (res.status == 200) {
      const modifyData = res?.data?.map((e) => ({
        ...e,
        label: e?.venueName,
        value: e?.id,
      }));
      return modifyData;
    }
  };

  const handlegetclubevent = async () => {
    const params = new URLSearchParams();
    params.append("clubId", clubId);
    const res = await getclubevent(params);
    if (res?.status == 200) {
      let modifyData = res?.data?.map((e) => ({
        ...e,
        label: e?.eventType,
        value: e?.id,
      }));
      return modifyData;
    }
  };

  const handleSelect = (selectValue) => {
    if (selectValue?.type === "class") setSelectClasss(selectValue?.value);
    else if (selectValue?.type === "classType")
      setSelectClassType(selectValue?.value);
    else if (selectValue?.type === "location")
      setSetectLocation(selectValue?.value);
    setDefaultValue((pev) => {
      return {
        ...pev,
        [selectValue?.type]: selectValue,
      };
    });
    setBtnclickable(true);
  };

  const getfirstListing = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    params.append("clubId", clubId);
    params.append("pageNumber", 1);
    if (clubId) {
      const res = await getfirstListingApi(params);
      if (res?.status == 200) {
        setListingData(res?.data);
        setTotalCount(res?.extraData?.count);
      } else {
        toast.error(res?.message);
      }
      setLoading(false);
    } else {
      toast.error("Club Id NOT FOUND!");
    }
  };

  const paginationListing = async () => {
    const params = new URLSearchParams();
    params.append("clubId", clubId);
    params.append("pageNumber", pageNumber);
    if (clubId) {
      setVeiwMoreLoader(true);
      const res = await getfirstListingApi(params);
      if (res?.status == 200) {
        setListingData((previous) => [...previous, ...res.data]);
        if (res?.data.length <= 2) {
          setPageNumber("lastData");
        } else {
          setPageNumber(pageNumber + 1);
        }
      } else {
        toast.error(res?.message);
      }
      setVeiwMoreLoader(false);
    } else {
      toast.error("Club Id NOT FOUND!");
    }
  };
  async function getFilterValue() {
    const classType = await handlegetclubevent();
    const location = await handlegetvanues();
    dispatch(filterOption({ classType: classType, location: location }));
  }
  useEffect(() => {
    if (clubId) {
      getfirstListing();
      getFilterValue();
    }else{
      toast.error("Club Id NOT FOUND!");
    }
  }, []);

  const getListing = async () => {
    const params = new URLSearchParams();
    params.append("clubId", 207);

    let checkfield = false;
    if (selectClass) {
      params.append("eventType", selectClass);
      checkfield = true;
    }
    if (setectLocation) {
      params.append("venueId", setectLocation);
      checkfield = true;
    }
    if (selectClassType) {
      params.append("clubEventTypeId", selectClassType);
      checkfield = true;
    }
    if(clubId){
      if (checkfield) {
        setBtnloading(true);
        const res = await getListingApi(params);
        if (res?.status == 200) {
          setBtnloading(false);
          navigate("/searchMelbourne", {
            state: { data: res?.data, defaultValue: defaultValue },
          });
        } else {
          toast.error(res?.message);
        }
      } else {
        setBtnclickable(false);
      }
    }else{
      toast.error("Club Id NOT FOUND!");
    }
   
  };
  return (
    <div>
      <Nextclasswrapper>
        <div className="main-wrap-next-class">
          <p className="book-next-hadding">Book your next class</p>
          <Filtter
            handleSubmit={getListing}
            handleSelect={handleSelect}
            searchBtn={true}
            width={true}
            loading={btnloading}
            btnClickable={btnClickable}
          />
        </div>
      </Nextclasswrapper>

      <Upcommingclass>
        <div className="main-wrap-hadding">
          <div className="wrapper-hadding">
            <p className="upcoming-hadding">Upcoming Classes</p>
            <div className="right-side-hadding-wrap">
              <p className="powered-hadding">Powered by</p>
              <img src={outcoachlogo} alt="" />
            </div>
          </div>
          <HorizontaLine height="1px" margin="0 0 24px 0" />
          {loading ? (
            <AppLoader />
          ) : listingData?.length === 0 ? (
            <NotDataFound />
          ) : (
            <>
              <BookingBoxWrapper>
                {listingData?.map((el) => (
                  <Bookcompo data={el} />
                ))}
              </BookingBoxWrapper>
              <Viewmorewrapper>
                {!(totalCount === listingData?.length) && (
                  <div className="main-wrap-viewmore-button">
                    {viewMoreLoader ? (
                      <div className="view-more-wrap">
                        <ButtonLoader onlyLoading={true} />
                      </div>
                    ) : (
                      <div
                        className="view-more-wrap"
                        onClick={paginationListing}
                      >
                        <button className="view-more-hadding">View more</button>
                        <img
                          className="nav-arrow-right"
                          src={navarrowright}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                )}
              </Viewmorewrapper>
            </>
          )}
        </div>
      </Upcommingclass>
    </div>
  );
}
export default memo(Landing);

export const BookingBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 785px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Viewmorewrapper = styled.div`
  .view-more-wrap {
    width: 411px;
    height: 64px;
    border-radius: 24px;
    border-style: none;
    outline: none;
    background: #ffffff;
    border: 1px solid #33374e;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .view-more-hadding {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    background: transparent;
    border-style: none;
    cursor: pointer;
  }
  .nav-arrow-right {
    width: 24px;
    height: 24px;
  }
  .main-wrap-viewmore-button {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
  }

  @media (max-width: 620px) {
    .view-more-wrap {
      width: 380px;
    }
  }

  @media (max-width: 555px) {
    .view-more-wrap {
      width: 300px;
      height: 60px;
    }
  }

  @media (max-width: 450px) {
    .view-more-wrap {
      width: 200px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Nextclasswrapper = styled.div`
  .main-wrap-next-class {
    width: 100%;
    background: url(${patterimg});
    padding: 24px 32px 24px 32px;
    margin-bottom: 40px;
  }

  .book-next-hadding {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font: Montserrat;
    margin-bottom: 48px;
  }

  @media (max-width: 590px) {
    .book-next-hadding {
      font-size: 35px;
    }
  }

  @media (max-width: 450px) {
    .book-next-hadding {
      font-size: 30px;
    }
  }

  @media (max-width: 390px) {
    .book-next-hadding {
      font-size: 23px;
    }
  }
`;

const Upcommingclass = styled.div`
  .upcoming-hadding {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
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

  @media (max-width: 600px) {
    .right-side-hadding-wrap {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .upcoming-hadding {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .main-wrap-hadding {
      width: calc(100% - 30px);
      margin: auto;
      padding: 25.5px 12px;
    }
  }
`;

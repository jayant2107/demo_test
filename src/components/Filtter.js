import styled from "styled-components";
import vector from "../assets/Vector (13).svg";
import Searchdropdown from "./Searchdropdown";
import ButtonLoader from "./ButtonLoader";
import { useSelector } from "react-redux";
import { colorslotCondition } from "../common/styleComponent";
import SlotCondition from "../common/SlotCondition";

const classOption = [
  {
    label: "One off",
    value: 1,
  },
  {
    label: "Recurring",
    value: 2,
  },
];

const Available = {
  label: "Available",
  boxSize: "30px",
  color: colorslotCondition.availableColor,
  fontSize: "16px",
  fontWight: 600,
};

const almostFull = {
  label: "Almost full",
  boxSize: "30px",
  color: colorslotCondition.fullColor,
  fontSize: "16px",
  fontWight: 600,
};
const waitList = {
  label: "Full/Wait list",
  boxSize: "30px",
  color: colorslotCondition.waitColor,
  fontSize: "16px",
  fontWight: 600,
};

function Filtter({
  defaultValue,
  loading,
  data,
  width,
  handleSelect,
  searchBtn,
  handleSubmit,
  btnClickable,
}) {
  const filterValue = useSelector((store) => store?.filterValue?.data) || {};

  const datavanue = filterValue?.location || null;
  const dataclubevent=filterValue?.classType || null
 

  return (
    <>
      <Filtterwrapper isfullwidth={width} btnClickable={btnClickable}>
        <div className="filtter-wrap">
          <div className="all-search-drop-down">
            <img className="vectorimg" src={vector} alt="" />
            <Searchdropdown
              width={"100%"}
              data={classOption}
              placeholder={"Select Class"}
              handleclick={(e, label) =>
                handleSelect({ value: e, label: label?.label, type: "class" })
              }
              value={data?.class}
              defaultValue={defaultValue?.class || null}
            />
            <Searchdropdown
              width={"100%"}
              data={dataclubevent}
              placeholder={"Select Class Type"}
              handleclick={(e, label) =>
                handleSelect({
                  value: e,
                  label: label?.label,
                  type: "classType",
                })
              }
              defaultValue={defaultValue?.classType || null}
            />
            <Searchdropdown
              width={"100%"}
              data={datavanue}
              defaultValue={defaultValue?.location || null}
              placeholder={"Select Location"}
              handleclick={(e, label) =>
                handleSelect({
                  value: e,
                  label: label?.label,
                  type: "location",
                })
              }
            />
          </div>
          {data && (
            <div className="box-wrap">
              <SlotCondition conditions={Available} />
              <SlotCondition conditions={almostFull} />
              <SlotCondition conditions={waitList} />
            </div>
          )}
        </div>

        {searchBtn && (
          <div className="search-botton-wrap">
            {loading ? (
              <button className="search-button">
                <ButtonLoader onlyLoading={true} />
              </button>
            ) : (
              <button
                className="search-button"
                type="serch"
                onClick={handleSubmit}
              >
                Search
              </button>
            )}
          </div>
        )}
      </Filtterwrapper>
    </>
  );
}

export default Filtter;

const Filtterwrapper = styled.div`
  .filtter-wrap {
    width: 100%;
    border: 1px solid #2e3038;
    background: #ffffff;
    padding: 24px 32px 24px 32px;
    border-radius: 16px;
    display: flex;
    gap: 12px;
    border-style: none;
    outline: none;
    align-items: center;
    justify-content: space-between;
  }

  .vectorimg {
    height: 24px;
    width: 24px;
  }
  .box-wrap {
    gap: 16px;
    white-space: nowrap;
    display: flex;
  }
  .all-search-drop-down {
    width: ${({ isfullwidth }) => (isfullwidth ? "100%" : "728px")};
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }

  .search-button {
    width: 411px;
    height: 64px;
    padding: 12px 16px 12px 16px;
    gap: 8px;
    border-radius: 24px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    border-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .search-botton-wrap {
    margin-top: 63px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${(props) => (props?.btnClickable ? "1" : "0.3")};
    pointer-events: ${(props) => (props?.btnClickable ? "1" : "none")};
  }

  @media (max-width: 850px) {
    .all-search-drop-down {
      flex-direction: column;
    }
    .vectorimg {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    .filtter-wrap {
      flex-direction: column;
    }
  }

  @media (max-width: 850px) {
    .all-search-drop-down {
      width: 100%;
    }
  }
  @media (max-width: 490px) {
    .box-wrap {
      flex-direction: column;
    }
  }
`;

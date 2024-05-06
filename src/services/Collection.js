import { deleteApi, getApi, postApi, putApi } from "./APImethods";

const selectclass = "web/getVenues?";
export const getVenues = (payload) => {
  return getApi(selectclass+payload);
};

const getClubDetails = "/web/getClubDetailsAtWeb";
export const getClubDetailsAtWeb = (payload) => {
  return getApi(`${getClubDetails}?${payload}`);
};

const clubevent = "web/getClubEventTypeListing?";
export const getclubevent = (payload) => {
  return getApi(clubevent+payload);
};

// const clubeventlisting = "web/clubEventsListing?clubId=207&pageNumber=1";
// export const getclubeventlisting = () => {
//   return getApi(clubeventlisting);
// };

const getfirstListing = "/web/clubEventsListing?";
export const getfirstListingApi = (payload) => {
  return getApi(getfirstListing + payload);
};

const getListing = "/web/clubEventsListingAndFilter?";
export const getListingApi = (payload) => {
  return getApi(getListing + payload);
};

const bookkingpostMyself = "/web/createBookingForMyself";
export const postBookingMyselfApi = (payload) => {
  return postApi(bookkingpostMyself, payload);
};

const bookkingpostChild = "/web/createBookingForChild";
export const postBookingApiChild = (payload) => {
  return postApi(bookkingpostChild, payload);
};


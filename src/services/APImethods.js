import Api from "./Intercepter";


//get Api
export const getApi = async (url) => {
  try {
    let result = await Api.get(url);
    if (result.status === 200) {
      if (result.data.status === 200 || result?.data?.message === "OK") {
        return result.data;
      } else {
        return result.data.message;
      }
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
};

//post Api
export const postApi = async (url, data) => {
  try {
    let result = await Api.post(url, data);
    if (result.status === 200) {
      if (result.data.status === 200) {
        return result.data;
      } else {
        return result.data.message;
      }
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
};

//put api

//put Api
export const putApi = async (url, data) => {
  try {
    let result = await Api.put(url, data);
    if (result.status === 200) {
      if (result.data.status === 200) {
        return result.data;
      } else {
        return result.data.message;
      }
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
};

//patch Api
export const patchApi = async (url, data) => {
  try {
    let result = await Api.patch(url, data);
    if (result.status === 200) {
      if (result.data.status === 200) {
        return result.data;
      } else {
        return result.data.message;
      }
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
};

//delete Api
export const deleteApi = async (url) => {
  try {
    let result = await Api.delete(url);
    if (result.status === 200) {
      if (result.data.status === 200) {
        return result.data;
      } else {
        return result.data.message;
      }
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
};

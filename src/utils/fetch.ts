import axios from "axios";

const URL_API = "https://dummyapi.io/data/v1";
const API_KEY = "63473330c1927d386ca6a3a5";

const config = {
  headers: {
    "app-id": `${API_KEY}`,
  },
};

const getResource = async (resource: string) => {
  try {
    const response = await axios.get(`${URL_API}/${resource}`, config);

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postResource = async (
  resource: string,
  endPoint: string,
  data: object
) => {
  try {
    const response = await axios.post(
      `${URL_API}/${resource}/${endPoint}`,
      data,
      config
    );

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteResource = async (resource: string, id: string) => {
  try {
    const response = await axios.delete(`${URL_API}/${resource}/${id}`, config);

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getResourceById = async (resource: string, id: string) => {
  try {
    const response = await axios.get(`${URL_API}/${resource}/${id}`, config);

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateRoseource = async (resource: string, id: string, data: object) => {
  try {
    const response = await axios.put(
      `${URL_API}/${resource}/${id}`,
      data,
      config
    );

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  getResource,
  postResource,
  deleteResource,
  getResourceById,
  updateRoseource,
};

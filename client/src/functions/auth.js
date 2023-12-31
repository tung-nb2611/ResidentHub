import axios from "axios";

export const createOrUpdateUser = async (authtoken, role) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {
      role: role,
    },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentSeller = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-seller`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
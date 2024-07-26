import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const checkOrCreateUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/check-or-create`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in checkOrCreateUser:", error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/email`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { email },
    });
    return response.data;
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
    throw error;
  }
};

export const getUserRewardsByEmail = async (email) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/users/${email}/rewards/email`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in getUserRewardsByEmail:", error);
    throw error;
  }
};

export const getRewardsById = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/users/${userId}/rewards`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in getRewardsById:", error);
    throw error;
  }
};

export const redeemRewards = async (userId, points) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/${userId}/rewards`,
      { points },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in redeemRewards:", error);
    throw error;
  }
};

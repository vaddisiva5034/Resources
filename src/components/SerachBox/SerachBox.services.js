import axios from "axios";
export const getSerachWord = async () => {
  try {
    const response = await axios.get("https://dummy.com/12");
    return response.data.name;
  } catch (err) {
    return null;
  }
};

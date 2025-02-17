
import client from "../constants/api/apollo-client";
import router from "../routes/Routes";

export const handleLogout = async () => {
  router.navigate("/login");
  
  try {
    await client.resetStore();
  } catch (resetError) {
    console.error("Error resetting store:", resetError);
  }
  
};

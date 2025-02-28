import client from "../constants/api/apollo-client";
import router from "../routes/Routes";

export const onLogout = async () => {
  await client.clearStore();
  router.navigate("/login");
};

import client from "../constants/api/apollo-client";
import { authenticatedVar } from "../constants/authenticated";
import router from "../routes/Routes";

export const onLogout = async () => {
  authenticatedVar(false);
  await client.clearStore();
  router.navigate("/login");
};

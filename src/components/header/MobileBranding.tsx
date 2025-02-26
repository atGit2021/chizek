import { Typography } from "@mui/material";
import GamesIcon from '@mui/icons-material/Games';
import router from "../../routes/Routes";

const MobileBranding = () => {
  return (
    <>
      <GamesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHIZEK
      </Typography>
    </>
  );
};

export default MobileBranding;

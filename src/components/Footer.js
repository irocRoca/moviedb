import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div>
          <h4>Powered by IMBD</h4>
          <FacebookIcon className={classes.logo} />
          <TwitterIcon className={classes.logo} />
          <InstagramIcon className={classes.logo} />
        </div>
        <div className={classes.subtext}>
          <p>&copy; 2021 MovieDb, Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

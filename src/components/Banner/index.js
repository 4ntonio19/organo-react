import BannerImg from "../../assets/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <header className="banner">
      <img src={BannerImg} alt="banner organo" />
    </header>
  );
};

export default Banner;

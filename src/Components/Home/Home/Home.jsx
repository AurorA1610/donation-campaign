import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationList from "../DonationList/DonationList";

const Home = () => {
  const donations = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <DonationList donations={donations}></DonationList>
    </div>
  );
};

export default Home;

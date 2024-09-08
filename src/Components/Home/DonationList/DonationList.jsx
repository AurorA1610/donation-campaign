import DonationCard from "../DonationCard/DonationCard";
import PropTypes from "prop-types";

const DonationList = ({ donations }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-3">
      {donations.map((donation) => (
        <DonationCard key={donation.id} donation={donation}></DonationCard>
      ))}
    </div>
  );
};

DonationList.propTypes = {
  donations: PropTypes.array,
};

export default DonationList;

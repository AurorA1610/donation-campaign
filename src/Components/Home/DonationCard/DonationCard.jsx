import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ donation }) => {
  const { name, img, category, bgColor, categoryBgColor, textColor, id } =
    donation;
  return (
    <Link to={`/donation-details/${id}`}>
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className="rounded-lg hover:-translate-y-2 ease-in delay-100 duration-150"
      >
        <img src={img} alt="" />
        <div
          className="w-min my-3 mx-3 text-sm	font-medium capitalize px-2 py-1 rounded"
          style={{
            backgroundColor: `${categoryBgColor}`,
            color: `${textColor}`,
          }}
        >
          {category}
        </div>
        <h5
          className="mb-4 mx-3 text-xl	font-semibold"
          style={{ color: `${textColor}` }}
        >
          {name}
        </h5>
      </div>
    </Link>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;

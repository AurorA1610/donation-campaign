import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleDonation = ({ donation }) => {
  const {
    id,
    img,
    name,
    price,
    textColor,
    bgColor,
    categoryBgColor,
    category,
  } = donation;

  return (
    <div
      className="card lg:card-side shadow-xl hover:-translate-y-1.5 ease-in-out duration-200"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <figure className="lg:w-4/12">
        <img src={img} alt="" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <div
          className="w-min text-sm capitalize px-2 py-1 rounded"
          style={{
            backgroundColor: `${categoryBgColor}`,
            color: `${textColor}`,
          }}
        >
          {category}
        </div>
        <h2 className="card-title text-2xl font-semibold text-zinc-950">
          {name}
        </h2>
        <p
          className="text-base font-semibold"
          style={{ color: `${textColor}` }}
        >
          ${price}
        </p>
        <div className="card-actions">
          <Link to={`/donation-details/${id}`}>
            <button
              className="text-white rounded px-3 py-2 font-semibold text-lg hover:scale-105 ease-in-out duration-150"
              style={{ backgroundColor: `${textColor}` }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
SingleDonation.propTypes = {
  donation: PropTypes.object,
};

export default SingleDonation;

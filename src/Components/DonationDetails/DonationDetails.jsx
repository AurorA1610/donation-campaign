import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const allDonations = useLoaderData();
  const { donationId } = useParams();
  const donation = allDonations.find((donation) => donation.id == donationId);
  const { id, img, name, description, price, textColor } = donation;

  const handleDonate = (id) => {
    const isSaved = saveDonation(id);
    if (isSaved) {
      toast("Thank you. This choice is added to your donation list.");
    } else {
      toast("This choice was already added to your donation list.");
    }
  };
  return (
    <div className="my-12 mx-3">
      <ToastContainer></ToastContainer>
      <div className="relative w-full">
        <img src={img} alt="" className="w-full rounded-lg" />
        <div
          className="py-6 absolute bottom-0 left-0 w-full rounded-b-lg ps-6"
          style={{ backgroundColor: "rgba(11, 11, 11, 0.5)" }}
        >
          <button
            onClick={() => {
              handleDonate(id);
            }}
            style={{ backgroundColor: `${textColor}` }}
            className="text-white rounded px-3 py-2 font-semibold text-xl hover:scale-105 ease-in-out duration-150"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-neutral-950 mt-10">{name}</h2>
      <p className="text-neutral-600 text-base mt-4">{description}</p>
    </div>
  );
};

export default DonationDetails;

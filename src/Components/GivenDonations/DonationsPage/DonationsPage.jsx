import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../../utility/localStorage";
import { useEffect, useState } from "react";
import SingleDonation from "../SingleDonation/SingleDonation";

const DonationsPage = () => {
  const donations = useLoaderData();
  const [allSavedDonations, setAllSavedDonations] = useState([]);
  const [isSeeAllClicked, setIsSeeAllClicked] = useState(false);
  useEffect(() => {
    const savedDonationsIds = getStoredDonations();
    if (donations.length > 0) {
      const savedDonations = donations.filter((job) =>
        savedDonationsIds.includes(job.id)
      );
      setAllSavedDonations(savedDonations);
    }
  }, []);
  const handleSeeAll = () => {
    setIsSeeAllClicked(true);
  };
  return (
    <div className="mb-6">
      <div className="gap-6 grid md:grid-cols-2 my-12 lg:mx-0 mx-6">
        {isSeeAllClicked
          ? allSavedDonations.map((donation) => (
              <SingleDonation
                key={donation.id}
                donation={donation}
              ></SingleDonation>
            ))
          : allSavedDonations
              .slice(0, 4)
              .map((donation) => (
                <SingleDonation
                  key={donation.id}
                  donation={donation}
                ></SingleDonation>
              ))}
      </div>
      <div className="flex justify-center">
        {isSeeAllClicked ? (
          <></>
        ) : (
          <button
            onClick={handleSeeAll}
            className="text-white rounded-lg px-6 py-2 font-semibold text-base bg-green-600 hover:bg-transparent hover:text-green-600 border-2 border-transparent hover:border-green-600 ease-linear	"
          >
            See All{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default DonationsPage;

const getStoredDonations = () => {
  const storedDonations = localStorage.getItem("donations");
  if (storedDonations) {
    return JSON.parse(storedDonations);
  }
  return [];
};
const saveDonation = (id) => {
  const storedDonations = getStoredDonations();
  const isExisting = storedDonations.find((donationId) => donationId === id);
  if (isExisting) {
    return 0;
  } else {
    storedDonations.push(id);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
    return 1;
  }
};

export { getStoredDonations, saveDonation };

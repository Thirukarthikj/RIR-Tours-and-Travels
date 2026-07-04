export const submitEnquiry = async (enquiryData) => {
  console.log("Enquiry Submitted (Mock API call):", enquiryData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Enquiry received! Our concierge will contact you shortly." });
    }, 600);
  });
};

export const subscribeNewsletter = async (email) => {
  console.log("Newsletter Subscription (Mock API call):", email);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Subscribed successfully!" });
    }, 400);
  });
};

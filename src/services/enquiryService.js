import { addDocument } from './firebase/firestore';

export const submitEnquiry = async (enquiryData) => {
  try {
    const payload = {
      ...enquiryData,
      date: new Date().toISOString(),
      status: "New"
    };
    await addDocument('enquiries', payload);
    return { success: true, message: "Enquiry received! Our concierge will contact you shortly." };
  } catch (err) {
    console.error("Enquiry submission error:", err);
    return { success: false, message: "Failed to submit enquiry. Please try again." };
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    await addDocument('newsletter', {
      email,
      date: new Date().toISOString()
    });
    return { success: true, message: "Subscribed successfully!" };
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return { success: false, message: "Subscription failed. Please try again." };
  }
};

// Cloudinary image service implementation with base64 data-url fallback
export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (cloudName && uploadPreset) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        let errMsg = `Status ${response.status} (${response.statusText})`;
        try {
          const errData = await response.json();
          if (errData && errData.error && errData.error.message) {
            errMsg = errData.error.message;
          }
        } catch {
          // ignore
        }
        throw new Error(errMsg);
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw error;
    }
  }

  // Fallback: Read file as Base64 data URL if credentials are not set
  if (file instanceof File || file instanceof Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  return file;
};

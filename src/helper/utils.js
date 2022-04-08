export const getBase64 = (e) => {
  let { files } = e.target;
  const fileInfo = {};
  let file = files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    fileInfo.base64 = reader.result;
  };
  return fileInfo;
};

export const phonevalidation = (phone) => {
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phone);
};

export const emailvalidation = (email) => {
  const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  return emailRegex.matchAll(email);
};

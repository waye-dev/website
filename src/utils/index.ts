export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailRegex.test(email);
};

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name);
};

export const checkFormValues = (name: string, email: string, setMessage: React.Dispatch<React.SetStateAction<string>>) => {
  if (!name || !email) {
    setMessage("Please fill in all fields");
    return;
  }

  if (!isValidName(name)) {
    setMessage("Please enter a valid name (2-50 characters, letters only)");
    return;
  }

  if (!isValidEmail(email)) {
    setMessage("Please enter a valid email address");
    return;
  }

  setMessage("");
};

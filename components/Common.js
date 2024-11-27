// Input fields
export const initialInputFields = (includeOtp = false) => {
    const fields = [
      {
        title: "Email",
        input: "",
      },
      {
        title: "Password",
        input: "",
      },
    ];
  
    if (includeOtp) {
      fields.push({
        title: "OTP",
        input: "",
      });
    }
  
    return fields;
  };
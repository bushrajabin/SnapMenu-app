// Input fields with a "Send OTP" option for bot loginScreen & Registration
export const initialInputFields = (includeOtp = false, showSendOtp = false) => {
  const fields = [
    {
      title: "Email",
      input: "",
      showSendOtp: showSendOtp,
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

// ICONS for login & registration option options----
import Icon from "react-native-vector-icons/FontAwesome";
export const Icons = [
  <Icon name="google" size={18} />,
  <Icon name="facebook" size={18} />,
  <Icon name="apple" size={18} />,
];

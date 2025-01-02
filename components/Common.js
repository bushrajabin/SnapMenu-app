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
import Icon from "react-native-vector-icons/AntDesign";

export const Icons = [
  <Icon name="google" size={18} />,
  <Icon name="facebook-square" size={18} />,
  <Icon name="apple1" size={18} />,
];

// Settings options

export const Setting = {
  inputFields: [
    {
      title: "Enter Restaurent Name",
      input: "",
    },
    {
      title: "Enter Restaurent Address",
      input: "",
    },
    {
      title: "Number of Table",
      input: "",
    },
    {
      title: "Enter phone Number",
      input: "",
    },
  ],
  hours: ["1hours", "2hours", "3hours", "4hours", "5hours", "6hours"],
  day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

// AddMenu fields---

export const addMenu = [
  {
    title: "Enter Item Name",
    input: "",
  },
  {
    title: "Enter Item Description",
    input: "",
  },
  {
    title: "Enter Item Price",
    input: "",
  },
  // {
  //   title: "Upload Cover Image",
  // input:null
  // },
];

// Offer Dish---

// Offer Dish with Icons
export const offerDishes = [
  {
    title: "Select Dish",
    input: "",
    icon: <Icon name="downcircleo" size={12} color="black" />, // Icon for dish selection
  },
  {
    title: "Expiry Date",
    input: "",
    icon: <Icon name="calendar" size={12} color="black" />, // Icon for expiry date
  },
  {
    title: "Enter Discount",
    input: "",
    icon: <Icon name="tago" size={12} color="black" />, // Icon for discount
  },
];

// ----SideBar----

export const SideBarItems = [
  {
    icon: <Icon name="home" size={25} color={"white"} />,
    title: "Home",
  },
  {
    icon: <Icon name="qrcode" size={25} color={"white"} />,
    title: "QR-code",
  },
  {
    icon: <Icon name="home" size={25} color={"white"} />,
    title: "Orders",
  },
  {
    icon: <Icon name="home" size={25} color={"white"} />,
    title: "Payment",
  },
  {
    icon: <Icon name="question" size={25} color={"white"} />,
    title: "Contact-us",
  },
  {
    icon: <Icon name="setting" size={25} color={"white"} />,
    title: "Restaurant settings",
  },
];

// RegisterRestaurent

export const Register = [
  {
    title: "Enter Your Name",
    input: "",
  },
  {
    title: "Enter Restaurant Name",
    input: "",
  },
  {
    title: "Enter city",
    input: "",
  },
];

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

import { Link } from "expo-router";
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
    icon: <Icon name="home" size={20} color={"white"} />,
    title: "Home",
    link: "/HomePage",
  },
  {
    icon: <Icon name="qrcode" size={20} color={"white"} />,
    title: "QR-code",
    link: "/OfferDishes",
  },
  {
    icon: <Icon name="filetext1" size={20} color={"white"} />,
    title: "Orders",
  },
  {
    icon: <Icon name="creditcard" size={20} color={"white"} />,
    title: "Payment",
  },
  {
    icon: <Icon name="question" size={20} color={"white"} />,
    title: "Contact-us",
  },
  {
    icon: <Icon name="setting" size={20} color={"white"} />,
    title: "Restaurant settings",
    link: "/RestaurantSettingPage",
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

// Restaurent setting---
export const RestaurentSetting = [
  {
    title: "Table Settings",
    Icon: <Icon name="right" size={23} />,
    link:"/TableManagementQR"
  },
  {
    title: "Manager Members",
    Icon: <Icon name="right" size={23} />,
    link:"/ManageMember"
  },
  {
    title: "In-House Delivery",
    Icon: <Icon name="right" size={23} />,
  },
];

//manage members---- 
export const newMember=[
  {
    title: "Enter member email",
    input: "",
  },
  {
    title: "Enter member password",
    input: "",
  },
]
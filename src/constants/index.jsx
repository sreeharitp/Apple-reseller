import { FiCheckCircle, FiGlobe, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

export const navlinks = [
  {
    id: 1,
    link: "Home",
    url: "/",
  },
  {
    id: 2,
    link: "Mac",
    url: "",
  },
  {
    id: 3,
    link: "iPhone",
    url: "",
  },
  {
    id: 4,
    link: "iPad",
    url: "",
  },
  {
    id: 5,
    link: "Apple Watch",
    url: "",
  },
  {
    id: 6,
    link: "AirPods",
    url: "",
  },
  {
    id: 7,
    link: "Accessories",
    url: "",
  },
];

export const collection = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "From ₹134900",
    img: product1,
    url: "/product_single",
  },
  {
    id: 2,
    name: "iPhone 15 Plus",
    price: "From ₹89900",
    img: product2,
    url: "",
  },
  {
    id: 3,
    name: "iPhone 14",
    price: "From  ₹69900",
    img: product3,
    url: "",
  },
  {
    id: 4,
    name: "iPhone 13",
    price: "From  ₹59900",
    img: product4,
    url: "",
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    price: "From ₹134900",
    img: product1,
    url: "",
  },
  {
    id: 6,
    name: "iPhone 15 Pro",
    price: "From ₹134900",
    img: product1,
    url: "",
  },
  {
    id: 7,
    name: "iPhone 15 Plus",
    price: "From ₹89900",
    img: product2,
    url: "",
  },
  {
    id: 8,
    name: "iPhone 14",
    price: "From  ₹69900",
    img: product3,
    url: "",
  },
  {
    id: 9,
    name: "iPhone 13",
    price: "From  ₹59900",
    img: product4,
    url: "",
  },
];

export const productdetails = [
  {
    id: 1,
    title: "Model",
    desc: "	iPhone 15 Pro",
  },
  {
    id: 2,
    title: "Storage	",
    desc: "512 GB",
  },
  {
    id: 3,
    title: "Color",
    desc: "	Natural Titanium	",
  },
  {
    id: 4,
    title: "Operating System	",
    desc: "iOS",
  },
  {
    id: 5,
    title: "Model",
    desc: "	iPhone 15 Pro",
  },
  {
    id: 6,
    title: "Storage	",
    desc: "512 GB",
  },
];

export const sellerdetails = [
  {
    id: 1,
    icon: <FiPhoneCall />,
    desc: "+9989887777",
  },
  {
    id: 2,
    icon: <FiMail />,
    desc: "erik@gmail.com",
  },
  {
    id: 3,
    icon: <FiMapPin />,
    desc: "South Florida",
  },
  {
    id: 4,
    icon: <FiCheckCircle />,
    desc: "Verified Seller",
  },
  {
    id: 5,
    icon: <FiGlobe />,
    desc: "Worldwide shipping",
  },
];


export const filters = [
  {
    id: 1,
    title: "Model",
    items: [
      { id: 1, name: "iPhone 15 Pro", url: "" },
      { id: 2, name: "iPhone 15  ", url: "" },
      { id: 3, name: "iPhone 14 Pro", url: "" },
      { id: 4, name: "iPhone 13", url: "" },
      { id: 5, name: "iPhone 12 Pro", url: "" },
    ],
  },
  {
    id: 2,
    title: "Storage",
    items: [
      { id: 1, name: "128 GB", url: "" },
      { id: 2, name: "256 GB", url: "" },
      { id: 3, name: "512 GB", url: "" },
      { id: 4, name: "1 TB", url: "" },
    ],
  },
  {
    id: 2,
    title: "Series",
    items: [
      { id: 1, name: "M Series", url: "" },
      { id: 2, name: "N Series", url: "" },
      { id: 3, name: "F Series", url: "" },
    ],
  },
  
];



export const productList = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹134900",
    img: product1,
    status: "Active",
    date:"10/07/2023"
  },
  {
    id: 2,
    name: "iPhone 15 Plus",
    price: " ₹89900",
    img: product2,
    status: "Active",
    date:"10/07/2023"
  },
  {
    id: 3,
    name: "iPhone 14",
    price: "  ₹69900",
    img: product3,
    status: "Disabled",
    date:"10/07/2023"
  },
  {
    id: 4,
    name: "iPhone 13",
    price: "  ₹59900",
    img: product4,
    status: "Active",
    date:"10/07/2023"
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    price: " ₹134900",
    img: product1,
    status: "Active",
    date:"10/07/2023"
  },
  {
    id: 6,
    name: "iPhone 15 Pro",
    price: " ₹134900",
    img: product1,
    status: "Disabled",
    date:"10/07/2023"
  },


];

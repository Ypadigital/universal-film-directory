import { ethers } from "ethers";
import httpService from "../services/httpService";
import crypto from "crypto";
import { omit, omitBy, pick } from "lodash";

export const setAuthToken = (token) => {
  localStorage.setItem("ufd-auth-token", token);
  httpService.setJwt(token);
};

export const getAuthToken = () => {
  return localStorage.getItem("ufd-auth-token");
};

export const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};

export const getSignature = async (message = null) => {
  if (!message) {
    message =
      "UF Directory wants you to confirm your identity, please sign this message to proceed.";
  }
  const signer = getSigner();
  const signature = await signer.signMessage(message);
  return signature;
};

export function parseJSON(value) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    return undefined;
  }
}

const checkIfDashboardRoute = (route) => {
  const dashboardRoutes = [
    "/dashboard",
    "/freelancer-dashboard",
    "/manage-projects",
    "verify-identity",
  ];
};

export const unkownImageUrl = "https://telegram.im/img/nnashenasbot";

export const freelancerDashboardCards = [
  {
    title: "Completed Jobs",
    slug: "noOfCompletedJobs",
    link: "freelancer-projects?Completed",
  },
  {
    title: "Ongoing Jobs",
    slug: "noOfOngoingJobs",
    link: "freelancer-projects?Ongoing",
  },
  {
    title: "Reviews",
    slug: "noOfReviews",
    link: "freelancer-review",
  },
];

export const contractorDashboardCards = [
  {
    title: "Pending Jobs",
    slug: "noOfPendingJobs",
    link: "manage-projects?Pending",
  },
  {
    title: "Ongoing Jobs",
    slug: "noOfOngoingJobs",
    link: "manage-projects?Ongoing",
  },
  {
    title: "Completed Jobs",
    slug: "noOfCompletedJobs",
    link: "manage-projects?Completed",
  },
  {
    title: "Cancelled Jobs",
    slug: "noOfCancelledJobs",
    link: "manage-projects?Cancelled",
  },
];

export const freelancerDashboardCardInfo = (user) => {
  return freelancerDashboardCards.map((card) => {
    const value = user[card.slug];
    return { ...card, value };
  });
};

export const contractorDashboardCardInfo = (user) => {
  return contractorDashboardCards.map((card) => {
    const value = user[card.slug];
    return { ...card, value };
  });
};

export const getRandomKey = (length = 7) => {
  return crypto.randomBytes(length).toString("hex");
};

export const getMonthShortForm = (month) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month];
};

export const getLastMonths = (numberOfMonths) => {
  const months = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const month = getMonthShortForm(date.getMonth());
    const x = `${month} '${date.getFullYear().toString().slice(-2)}`;
    months.push(x);
  }
  return months.reverse();
};

export const lineChartOptions = {
  colors: ["#FF5B37"],
  stroke: {
    curve: "straight",
    width: [1],
  },
  chart: {
    width: 500,
    height: 500,
    id: "profile-views",
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  markers: {
    size: 4,
    colors: ["#FF5B37"],
    strokeColors: "#FF5B37",
    strokeWidth: 1,
    hover: {
      size: 7,
    },
  },
  grid: {
    position: "front",
    borderColor: "#ddd",
    strokeDashArray: 7,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

export const radialChartOptions = {
  series: [100],
  chart: {
    id: "static-analytics",
    toolbar: {
      show: false,
    },
    height: 400,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "14px",
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true,
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },
  colors: ["#7B46BE"],
  labels: ["Job Success"],
};

export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}, ${getMonthShortForm(
    d.getMonth()
  )} ${d.getFullYear()}`;
};

export const formatDatewithSlash = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export const getFullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

export const getFileUrl = (file) => {
  if (!file) return "";
  return URL.createObjectURL(file);
};

export const starsConfig = {
  size: 15,
  count: 5,
  color: "black",
  activeColor: "orange",
  a11y: true,
  isHalf: true,
};

export const getRatingConfig = (rating) => {
  return {
    ...starsConfig,
    value: rating,
  };
};

export const formatReviews = (jobs) => {
  return (
    jobs
      .map((job) => {
        return {
          title: job.serviceId.title,
          description: job.review,
          rating: job.rating,
          starsConfig: getRatingConfig(job.rating),
        };
      })
      .filter((review) => review.description) || []
  );
};

export const protectedFreelancerRoutes = [
  "/freelancer-dashboard",
  "/freelancer-projects",
];

export const countries = [
  "USA",
  "Canada",
  "United Kingdom",
  "India",
  "Nigeria",
  "South Africa",
];

export const languages = ["English", "Spanish", "French", "German"];

export const getPayloadForProfileEdit = (values, categories) => {
  let payload = omit(values, ["selectedCategory", "selectedLanguage"]);
  if (payload.location.includes("Select")) payload.location = countries[0];
  payload = omitBy(payload, (v) => !v || v?.length === 0);
  const socialLinks = pick(payload, [
    "facebook",
    "twitter",
    "linkedIn",
    "instagram",
  ]);
  payload = omit(payload, ["facebook", "twitter", "linkedIn", "instagram"]);
  if (Object.keys(socialLinks).length > 0) {
    payload.socialLinks = socialLinks;
  }
  if (payload.categories?.length > 0) {
    const categoryIds = categories
      .filter((c) => payload.categories.includes(c.name))
      .map((c) => c._id);
    payload.categories = categoryIds;
  }
  return payload;
};

export const objectSearch = (obj, searchKey) => {
  return Object.keys(obj).some((key) => {
    if (typeof obj[key] === "object") {
      return objectSearch(obj[key], searchKey);
    }
    return obj[key].includes(searchKey);
  });
};

export const getAverage = (arr) => {
  if (arr.length === 0 || !arr) return 0;
  return arr.reduce((a, b) => a + b) / arr.length;
};

// format date range to number of months or years
export const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.abs(start - end);
  const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.ceil(diffInDays / 30);
  const diffInYears = Math.ceil(diffInMonths / 12);
  if (diffInYears > 1) {
    return `${diffInYears} years`;
  } else if (diffInYears === 1) {
    return `${diffInYears} year`;
  }
  if (diffInMonths > 1) {
    return `${diffInMonths} months`;
  }
  return `${diffInMonths} month`;
};

// format total experience from array of date ranges
export const formatTotalExperience = (experiences) => {
  if (!experiences) return 0;
  const totalMonths = experiences.reduce((acc, curr) => {
    const start = new Date(curr.startDate);
    const end = new Date(curr.endDate);
    const diff = Math.abs(start - end);
    const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.ceil(diffInDays / 30);
    return acc + diffInMonths;
  }, 0);
  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  if (totalYears > 1) {
    return `${totalYears} years ${remainingMonths} months`;
  } else if (totalYears === 1) {
    return `${totalYears} year ${remainingMonths} months`;
  }
  return `${totalMonths} months`;
};

export const getProfileLink = (id) => {
  return process.env.REACT_APP_BASE_URL + `/freelancer/${id}`;
};

//format date to month, day, year
export const formatDate2 = (date) => {
  const d = new Date(date);
  return `${d.getDate()}, ${getMonthShortForm(
    d.getMonth()
  )} ${d.getFullYear()}`;
};

export const sliderConfig = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  centerPadding: "0px",
};

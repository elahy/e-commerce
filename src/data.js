const data = {
  products: [
    {
      _id: "1",
      name: "Simple Letter Cover",
      category: "Envelope",
      image: "/images/p1.jpg",
      price: "50tk",
      countInStock: 21,
      brand: "Aliexpress",
      rating: 4.5,
      numReviews: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "2",
      name: "Crown Shape Ring",
      category: "Ring",
      image: "/images/p2.jpg",
      price: "80tk",
      countInStock: 17,
      brand: "Aliexpress",
      rating: 4.6,
      numReviews: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "3",
      name: "Antique Pocket Watch",
      category: "Watch",
      image: "/images/p3.jpg",
      price: "300tk",
      countInStock: 9,
      brand: "Aliexpress",
      rating: 4.4,
      numReviews: 16,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "4",
      name: "Square Envelope Set",
      category: "Envelope",
      image: "/images/p4.jpg",
      price: "140tk",
      countInStock: 52,
      brand: "Aliexpress",
      rating: 4.7,
      numReviews: 38,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "5",
      name: "Vintage Hand Band",
      category: "Band",
      image: "/images/p5.jpg",
      price: "70tk",
      countInStock: 25,
      brand: "Aliexpress",
      rating: 4.3,
      numReviews: 21,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "6",
      name: "Single Wing Necklace",
      category: "Necklace",
      image: "/images/p6.jpg",
      price: "150tk",
      countInStock: 8,
      brand: "Aliexpress",
      rating: 3.9,
      numReviews: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "7",
      name: "Crystal Solid Ring Set",
      category: "Ring",
      image: "/images/p7.jpg",
      price: "400tk",
      countInStock: 15,
      brand: "Aliexpress",
      rating: 4.5,
      numReviews: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "8",
      name: "Multiple Ring Set",
      category: "Ring",
      image: "/images/p8.jpg",
      price: "150tk",
      countInStock: 1,
      brand: "Aliexpress",
      rating: 4.3,
      numReviews: 16,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "9",
      name: "White Crytal Earring Set",
      category: "Earring",
      image: "/images/p9.jpg",
      price: "370tk",
      countInStock: 2,
      brand: "Aliexpress",
      rating: 4.2,
      numReviews: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "10",
      name: "Crystal-Round Necklace",
      category: "Necklace",
      image: "/images/p10.jpg",
      price: "320tk",
      countInStock: 0,
      brand: "Aliexpress",
      rating: 3.9,
      numReviews: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "11",
      name: "Pandent Earring",
      category: "Earrings",
      image: "/images/p11.jpg",
      price: "140tk",
      countInStock: 52,
      brand: "Aliexpress",
      rating: 4.7,
      numReviews: 38,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      _id: "12",
      name: "Owl Pandant/Necklace",
      category: "Necklace",
      image: "/images/p12.jpg",
      price: "180tk",
      countInStock: 21,
      brand: "Aliexpress",
      rating: 4.5,
      numReviews: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};
export default data;

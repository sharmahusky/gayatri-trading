// Navigation structure for Gayatri Chemicals website
export const navigationItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
    type: "link"
  },
  {
    id: "about",
    label: "About Us",
    path: "/about",
    type: "link"
  },
  {
    id: "products",
    label: "Our Products",
    path: "/products",
    type: "dropdown",
    children: [
      {
        id: "chemicals",
        label: "Chemicals",
        path: "/products/chemicals"
      },
      {
        id: "acids",
        label: "Acids",
        path: "/products/acids"
      },
      {
        id: "pigments",
        label: "Pigments",
        path: "/products/pigments"
      },
      {
        id: "solvents",
        label: "Solvents",
        path: "/products/solvents"
      }
    ]
  },
  {
    id: "key-products",
    label: "Key Products",
    path: "/#",
    type: "link"
  },
  {
    id: "quality-policy",
    label: "Quality Policy",
    path: "/#",
    type: "link"
  },
  {
    id: "she-policy",
    label: "SHE Policy",
    path: "/#",
    type: "link"
  },
  {
    id: "team",
    label: "Team",
    path: "/#",
    type: "link"
  },
  {
    id: "clients",
    label: "Our Clients",
    path: "/#",
    type: "link"
  },
  {
    id: "contact",
    label: "Contact Us",
    path: "/contact",
    type: "link"
  }
];

// Footer navigation
export const footerNavigation = {
  quickLinks: [
    { label: "About Us", path: "/about" },
    { label: "Our Products", path: "/products" },
    { label: "Quality Policy", path: "/#" },
    { label: "Contact Us", path: "/contact" }
  ],
  products: [
    { label: "Chemicals", path: "/products/chemicals" },
    { label: "Acids", path: "/products/acids" },
    { label: "Pigments", path: "/products/pigments" },
    { label: "Solvents", path: "/products/solvents" }
  ],
  policies: [
    { label: "Quality Policy", path: "/#" },
    { label: "SHE Policy", path: "/#" },
    { label: "Privacy Policy", path: "/#" },
    { label: "Terms of Service", path: "/#" }
  ]
};

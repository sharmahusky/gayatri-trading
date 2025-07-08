// Product data for Gayatri Chemicals
export const products = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARGnfIIrLkGvJbfvhBUWc0n36HD4B3pwMvLOLLuv5xUFZ7wQfeSX05H2b4b7jUYRXzyGFXs60yeANco-KUx26enE8pMGU7qHFBLL7_jbkfOWK7ltjJrc6ErNRZOtUBnZ4JX4kXhC7LqOoqDGWuOd6g8_kHd6OYmhag5I84H1vl5SltJLLIrhLxZPdjiZQE-fMxNmuLj065rHbbPeOROXQjw5QicihciiBH-oc6lybsuDKUwwt-dkktuZYJEFxknY06H-2k60Hwr1cL",
    title: "Hydrochloric Acid",
    description: "A strong corrosive acid used in various industrial processes.",
    category: "acids",
    specifications: {
      purity: "35-37%",
      grade: "Industrial Grade",
      packaging: "25L, 50L, 200L containers"
    }
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD93ZPuh_IRTT4NZh5FgdwhTYVE-mahkw3K0yXz_a2I2tp3EyhQOkejmS4Dcy7n1Vxh5cMC41qxUWv7Hm4n5CwNt4WejNedjvr-Ks3cIN0qu-Y3GslsOZJOS2V3oYfAdPd_RWdyiXALyuGa3QYTTxZl320wR_PbaaGhmCyihqHkLwgvbR8rp2jKpT1_g7wZ6wYKLIeCEukJa4OcqMyfgZThgsR2Z2tJ1AewzjIzovNKhkWqGRx_hmLf6WsFk3o6kkSCtnxkjSmRHNXs",
    title: "Thinner",
    description: "A volatile solvent used to dissolve or dilute paints and coatings.",
    category: "solvents",
    specifications: {
      type: "Paint Thinner",
      grade: "Commercial Grade",
      packaging: "1L, 5L, 20L containers"
    }
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhUR9iN6JT9NVw_f3GcSsvfh9NZgmkdeTelIs0ITMQKYWurrcjDL3ygT_JOrR54stEDVouVtNcwafbZeXY3ZmXIRaHMKeshVR-1H7g6yb_zGYmla95xkZXCtxO33A1owgqgTD5Tm3_AmU_MZ5SSDaVD4lzGhTmsqtuVH4JSsGAtUDUJvLJZxWi1E_fZhWG9I5B1OWh3iqnt-UAZri4MGDoei6Ss-vkjgW8-COxGJ2vRHh5AwxcYqLtljfNVneLZ6qx3BGYEigRf_sq",
    title: "Recovered Solvent",
    description: "Eco-friendly recycled solvents for sustainable industrial use.",
    category: "solvents",
    specifications: {
      type: "Recycled Solvent",
      grade: "Industrial Grade",
      packaging: "20L, 50L, 200L containers"
    }
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwnj5zfl8IqFNWBKKlVw1zy-NeFzcDUXZf_COOOJ5gZqhOtpkxPBIOWcQWnqz8CMfF0cnVI4ahzozRyMD4b9YjU_2mIcLknZc0BiyrD99rIbXncxra9eQ1wocQbHihvJN1FctL_EcOmhq-Iw3vsifFm0JxTkHmTNbDod-PTngeiuMwJ8gje-4lBJupFcrhr0YtCtN5cEq4noVfyTH3DjgoHUdHKrEN0esZkO4leGdqTg0LWWpKiO1nk9ymGWhvY_xoBEF0d4Inwpwj",
    title: "Acetic Acid",
    description: "A key ingredient in vinegar and a vital industrial chemical.",
    category: "acids",
    specifications: {
      purity: "99.5%",
      grade: "Technical Grade",
      packaging: "25L, 50L, 200L containers"
    }
  }
];

// Product categories
export const productCategories = [
  {
    id: "chemicals",
    name: "Chemicals",
    description: "Industrial chemicals for various applications"
  },
  {
    id: "acids",
    name: "Acids",
    description: "High-quality acids for industrial processes"
  },
  {
    id: "pigments",
    name: "Pigments",
    description: "Colorants and pigments for manufacturing"
  },
  {
    id: "solvents",
    name: "Solvents",
    description: "Solvents and thinners for industrial use"
  }
];

// Helper functions
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

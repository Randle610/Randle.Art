export const products = [
  {
    id: "print-001",
    name: "Untitled No. 1",
    type: "print",
    description: "Fine art giclée print on 300gsm archival paper. Rich, museum-quality reproduction of the original work.",
    price: 45.00,
    sizes: [
      { label: '8x10"', price: 45.00, gelatoProductId: "GELATO_PRINT_8X10_ID" },
      { label: '11x14"', price: 65.00, gelatoProductId: "GELATO_PRINT_11X14_ID" },
      { label: '16x20"', price: 95.00, gelatoProductId: "GELATO_PRINT_16X20_ID" },
    ],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    featured: true,
  },
  {
    id: "print-002",
    name: "Untitled No. 2",
    type: "print",
    description: "Fine art giclée print on 300gsm archival paper.",
    price: 45.00,
    sizes: [
      { label: '8x10"', price: 45.00, gelatoProductId: "GELATO_PRINT_8X10_ID" },
      { label: '11x14"', price: 65.00, gelatoProductId: "GELATO_PRINT_11X14_ID" },
      { label: '16x20"', price: 95.00, gelatoProductId: "GELATO_PRINT_16X20_ID" },
    ],
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    featured: true,
  },
  {
    id: "print-003",
    name: "Untitled No. 3",
    type: "print",
    description: "Fine art giclée print on 300gsm archival paper.",
    price: 45.00,
    sizes: [
      { label: '8x10"', price: 45.00, gelatoProductId: "GELATO_PRINT_8X10_ID" },
      { label: '11x14"', price: 65.00, gelatoProductId: "GELATO_PRINT_11X14_ID" },
      { label: '16x20"', price: 95.00, gelatoProductId: "GELATO_PRINT_16X20_ID" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
  },
  {
    id: "tshirt-001",
    name: "Studio Tee — No. 1",
    type: "apparel",
    description: "100% organic cotton unisex tee. Original artwork printed with water-based inks. Sustainably produced via Gelato.",
    price: 38.00,
    sizes: [
      { label: "S", price: 38.00, gelatoProductId: "GELATO_TSHIRT_S_ID" },
      { label: "M", price: 38.00, gelatoProductId: "GELATO_TSHIRT_M_ID" },
      { label: "L", price: 38.00, gelatoProductId: "GELATO_TSHIRT_L_ID" },
      { label: "XL", price: 38.00, gelatoProductId: "GELATO_TSHIRT_XL_ID" },
    ],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    featured: true,
  },
  {
    id: "tshirt-002",
    name: "Studio Tee — No. 2",
    type: "apparel",
    description: "100% organic cotton unisex tee. Original artwork printed with water-based inks.",
    price: 38.00,
    sizes: [
      { label: "S", price: 38.00, gelatoProductId: "GELATO_TSHIRT_S_ID" },
      { label: "M", price: 38.00, gelatoProductId: "GELATO_TSHIRT_M_ID" },
      { label: "L", price: 38.00, gelatoProductId: "GELATO_TSHIRT_L_ID" },
      { label: "XL", price: 38.00, gelatoProductId: "GELATO_TSHIRT_XL_ID" },
    ],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
    featured: false,
  },
];

export const getFeatured = () => products.filter(p => p.featured);
export const getPrints = () => products.filter(p => p.type === "print");
export const getApparel = () => products.filter(p => p.type === "apparel");
export const getById = (id) => products.find(p => p.id === id);

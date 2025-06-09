/**
 * A list of price range objects for filtering products.
 * Each object contains a user-friendly name, min/max numerical values,
 * and a simple string 'value' for use in filters or URLs.
 */
export const price = [
  { name: "Below ₹500", min: 0, max: 500, value: "500" },
  { name: "₹500 to ₹1000", min: 500, max: 1000, value: "500 - 1000" },
  { name: "₹1000 to ₹2000", min: 1000, max: 2000, value: "1000 - 2000" },
  { name: "₹2000 to ₹5000", min: 2000, max: 5000, value: "2000 - 5000" },
  { name: "₹5000 to ₹10000", min: 5000, max: 10000, value: "5000 - 10000" },
  { name: "Above ₹10000", min: 10000, max: null, value: "10000+" },
]

export const fetchItemDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };
  
export const fetchItemDetails = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching item details:", error);
  }
};


export const fetchItemById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = [
        { id: 1, name: 'Car 1', description: 'Description of Car 1', price: 10000, image: 'https://example.com/car1.jpg' },
        { id: 2, name: 'Car 2', description: 'Description of Car 2', price: 15000, image: 'https://example.com/car2.jpg' },
        { id: 3, name: 'Car 3', description: 'Description of Car 3', price: 20000, image: 'https://example.com/car3.jpg' },
      ];

      const item = items.find(item => item.id === parseInt(id));
      if (item) {
        resolve(item);
      } else {
        reject(new Error('Item not found'));
      }
    }, 1500); 
  });
};

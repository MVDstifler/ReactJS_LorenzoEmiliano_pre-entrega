// Crear una promesa que se resuelve en 3 segundos con un array de productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const products = [
          { id: '1', name: 'Laptop', description: 'A high-end laptop', stock: 15 },
          { id: '2', name: 'Phone', description: 'A smartphone with a good camera', stock: 30 },
          { id: '3', name: 'Tablet', description: 'A tablet for reading and browsing', stock: 10 }
        ];
        resolve(products);
      }, 3000);
    });
  };
  
  // Ejecutar la promesa y mostrar los productos en consola
  getProducts()
    .then(products => {
      console.log('Products:', products);
    })
    .catch(error => {
      console.error('Error fetching products:', error)
    .finally(() =>{
      return console.log('Finally todo termino');
    }); 
;
    });
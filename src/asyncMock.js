// asyncMock.js

export const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: 1,
            name: 'Montevideo Cars',
            description: 'A mock car shop service',
          },
        });
      }, 1000); // Simula una demora de 1 segundo
    });
  };
  
  // Esta función simula una llamada asíncrona que podría fallar
  export const fetchWithError = async () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Error al cargar los datos'));
      }, 1000); // Simula una demora de 1 segundo y luego falla
    });
  };
  
  // Simula una llamada asíncrona que retorna una lista de items
  export const fetchItems = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Car 1', price: 10000 },
          { id: 2, name: 'Car 2', price: 15000 },
          { id: 3, name: 'Car 3', price: 20000 },
        ]);
      }, 1500); // Simula una demora de 1.5 segundos
    });
  };
  
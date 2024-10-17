import { useState, useEffect } from 'react';

export default function ProductsComponent() {
  const [myProds, setMyProds] = useState([]);
  const [singleProd, setSingleProd] = useState(null);
  useEffect(() => {
    getSingleProduct('RrNIOj4PreW6tE2E3iFo')).then((response => 
        console.log(response))

  }, []);

  const handleUpdate = () => {};

  const handleDelete = () => {};

  return <></>;
}

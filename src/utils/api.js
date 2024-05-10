async function fetchProducts() {
    const apiLink = process.env.API_LINK;
    const response = await fetch(apiLink);
    const data = await response.json();
    return data;
  }
  
  export { fetchProducts };
  
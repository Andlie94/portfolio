export async function fetchProductData() {
  try {
    console.log('Fetching data from ../../json_file/product.json');
    const response = await fetch("../../json_file/product.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    console.log('Data fetched:', data); 
    return data; 
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null; 
  }
}
// Array of API URLs to fetch data from
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from a given API URL and measure the time taken
const fetchData = async (url) => {
  const start = new Date();
  const response = await fetch(url);
  const data = await response.json();
  const end = new Date();
  const timeTaken = end - start;
  return timeTaken;
};

// Function to measure the time taken by Promise.all to fetch data from all APIs
const measurePromiseAll = async () => {
  const start = new Date();
  try {
    const times = await Promise.all(apiUrls.map(fetchData));
    const end = new Date();
    const timeTaken = end - start;
    document.getElementById("output-all").innerHTML = timeTaken;
  } catch (error) {
    console.error(error);
  }
};

// Function to measure the time taken by Promise.any to fetch data from all APIs
const measurePromiseAny = async () => {
  const start = new Date();
  try {
    const timeTaken = await Promise.any(apiUrls.map(fetchData));
    const end = new Date();
    const totalTimeTaken = end - start;
    document.getElementById("output-any").innerHTML = totalTimeTaken;
  } catch (error) {
    console.error(error);
  }
};

// Call the functions to measure the time taken
measurePromiseAll();
measurePromiseAny();

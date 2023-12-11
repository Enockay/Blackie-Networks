import { useEffect,useState } from "react";



const DataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to the server endpoint
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON data
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const sendData = async (postData) => {
    try {
      // Make a POST request to the server endpoint

      const response = await fetch('https://api.example.com/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      // Handle success, e.g., show a success message or update state
      console.log('Data sent successfully');
    } catch (error) {
      // Handle errors, e.g., show an error message or update state
      console.error('Failed to send data', error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Data received from the server:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* Example of sending data */}
      <button
        onClick={() => sendData({ key: 'value' })}
      >
        Send Data
      </button>
    </div>
  );
};

export default DataComponent;
import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";

function Component() {
  // tours
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const rawData = await response.json();
        setTours(rawData);
        console.log(rawData);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "there was an error...";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error {isError}</h3>;
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      {tours.map((tour) => {
        return <h2>{tour.name}</h2>;
      })}
      <h2>Fetch Data</h2>
    </div>
  );
}
export default Component;

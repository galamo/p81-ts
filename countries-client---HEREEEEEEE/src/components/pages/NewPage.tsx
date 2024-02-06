import React, { Suspense, useEffect } from "react";
import { useQuery } from "react-query";

class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch(error: any, info: any) {
    // Handle the error
  }

  render() {
    return this.props?.children;
  }
}

export function NewPageSuspense() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <DataFetching />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

// // A component that fetches data
// const fetchApiData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data loaded!");
//     }, 2000); // Simulating a 2-second delay for data fetching
//   });
// };

// // A component that uses Suspense to handle asynchronous data fetching
// const DataComponent = async () => {
//   const apidata = await fetchApiData(); // This can be any async function, like an API call

//   return <div>fffff</div>;
// };

// A simple loading spinner component
const LoadingSpinner = () => {
  return <div>Loading...</div>;
};

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  console.log(res, "response");
  return res;
}
setTimeout(() => {
  isLoading = false;
}, 2000);
let isLoading = true;
function DataFetching() {
  console.log("reqct query not working...");
  //   const { isLoading, data } = useQuery({
  //     queryKey: ["usersData"],
  //     queryFn: () => {
  //       console.log("run query...");
  //     },
  //   });

  //   useEffect(() => {
  //     async function fetchDate() {}
  //   }, []);

  //   console.log(data);
  if (isLoading) {
    throw new Promise((resolve) => {
      console.log("stop loading?...");
      setTimeout(resolve, 2000);
    }); // Simulate loading delay   
  }

  //   if (isError) {
  //     throw new Error("Error while fetching data");
  //   }
  //   console.log(data);
  return (
    <div>
      <h1>Fetching data with React Suspense</h1>
      {/* <p>{data?.info?.seed}</p> */}
    </div>
  );
}

import { useState,useEffect } from "react";
import './App.css';
const App = () => {
  // let [isSubscribed, setIsSubscribed] = useState(0);

  //  const handleSubscribe = () => {
  //     setIsSubscribed(isSubscribed + 1)
  //   }

  // const [students, setStudents] = useState(['adnub', 'sajid', 'ali']);


  const [isPost, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setLoading(false);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }).then((data) => {

      setPosts(data);
    });
  
  },[])

  return (
    <>
      {/* <button
        onClick={function () {
          if(isSubscribed > 0){
            setIsSubscribed(isSubscribed - 1);
          }
        }}
      >
        -
      </button>
      <h1>{isSubscribed}</h1>
      <button onClick={() => setIsSubscribed(isSubscribed + 1)}>+</button> */}


       {isLoading && <h1>Loading...</h1>}
  <div className="max-w-6xl mx-auto">
    <h1 className="text-2xl font-bold mb-4 text-center">User Post Data</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase tracking-wider">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">User ID</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Body</th>
          </tr>
        </thead>
        <tbody id="dataTable" className="text-gray-600 text-sm">
         
          {
            isPost ? isPost.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="px-6 py-4">{post.id}</td>
                <td className="px-6 py-4">{post.userId}</td>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.body}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No Data Found.</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  </div>
    </>
  );
};

export default App;

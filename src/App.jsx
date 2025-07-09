import { useState } from "react";
import "./App.css";
const App = () => {
  const [isData, setData] = useState([
    { id: 1, name: "Ali Raza", age: 20, grade: "A", email: "ali@example.com" },
    {
      id: 2,
      name: "Sara Khan",
      age: 22,
      grade: "B",
      email: "sara@example.com",
    },
    {
      id: 3,
      name: "Usman Tariq",
      age: 19,
      grade: "A+",
      email: "usman@example.com",
    },
    {
      id: 4,
      name: "Hina Shah",
      age: 21,
      grade: "C",
      email: "hina@example.com",
    },
    {
      id: 5,
      name: "Bilal Ahmed",
      age: 23,
      grade: "B+",
      email: "bilal@example.com",
    },
    {
      id: 6,
      name: "Maria Yousuf",
      age: 20,
      grade: "A",
      email: "maria@example.com",
    },
    {
      id: 7,
      name: "Zain Malik",
      age: 22,
      grade: "B",
      email: "zain@example.com",
    },
    {
      id: 8,
      name: "Fatima Noor",
      age: 18,
      grade: "A+",
      email: "fatima@example.com",
    },
    {
      id: 9,
      name: "Hamza Ali",
      age: 24,
      grade: "C+",
      email: "hamza@example.com",
    },
    {
      id: 10,
      name: "Iqra Siddiqui",
      age: 21,
      grade: "B-",
      email: "iqra@example.com",
    },
  ]);


  const FindById=()=>{
    const student = isData.find((s) => s.id === 2);
    if (student) {
      alert(`Found: ${student.name}, Age: ${student.age}, Email: ${student.email}`);
    } else {
      alert("Student not found");
    }
  }


  return(
    <>
    <section className="flex flex-wrap gap-8">
      {/* {
        isData.map((sutdent,index)=>(
        
            <div key={index} className="card bg-amber-100 p-5 rounded-xl">
              <small className="name">{sutdent.id}</small>
              <h2 className="name">{sutdent.name}</h2>
              <p className="age">Age: {sutdent.age}</p>
              <p className="email">Email: {sutdent.email}</p>
              <p className="grade">Grade: {sutdent.grade}</p>
            </div>
          
        ))
      } */}

    <FindById/>

    </section>
    </>
  )
};

export default App;

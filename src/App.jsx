import React from 'react'
import Parent from './components/Parent'

const App = () => {

  const users = [
    {
      id: 1,
      name: "Rachel Elliott",
      email: "sean97@newman.com",
      age: 35,
      country: "Kazakhstan",
      isActive: true
    },
    {
      id: 2,
      name: "Tammy Graham",
      email: "william39@hotmail.com",
      age: 43,
      country: "Christmas Island",
      isActive: true
    },
    {
      id: 3,
      name: "Robert Simon",
      email: "christopherkelly@hotmail.com",
      age: 49,
      country: "Afghanistan",
      isActive: false
    },
    {
      id: 4,
      name: "Mary Rhodes",
      email: "bsantiago@carter-fox.com",
      age: 58,
      country: "Solomon Islands",
      isActive: false
    },
    {
      id: 5,
      name: "Bryan Smith",
      email: "ghanson@yahoo.com",
      age: 42,
      country: "Austria",
      isActive: false
    },
    {
      id: 6,
      name: "Ryan Munoz",
      email: "tuckerjennifer@reed-garcia.com",
      age: 55,
      country: "Fiji",
      isActive: false
    },
    {
      id: 7,
      name: "Savannah Ward",
      email: "psullivan@yahoo.com",
      age: 22,
      country: "Montserrat",
      isActive: false
    },
    {
      id: 8,
      name: "Ronald Cain",
      email: "andrewgould@gmail.com",
      age: 20,
      country: "Slovenia",
      isActive: true
    },
    {
      id: 9,
      name: "Jonathon Glover",
      email: "brandi09@ponce.com",
      age: 43,
      country: "France",
      isActive: true
    },
    {
      id: 10,
      name: "Ricky Murray",
      email: "hsmith@foster.com",
      age: 59,
      country: "United States Minor Outlying Islands",
      isActive: false
    },
    {
      id: 11,
      name: "Julie Grant",
      email: "pevans@powell-jones.com",
      age: 49,
      country: "Iran",
      isActive: false
    },
    {
      id: 12,
      name: "Kerri Barker",
      email: "torreschristopher@gmail.com",
      age: 21,
      country: "Taiwan",
      isActive: false
    },
    {
      id: 13,
      name: "Willie Carroll",
      email: "dmartin@hotmail.com",
      age: 46,
      country: "Hungary",
      isActive: true
    },
    {
      id: 14,
      name: "Elizabeth Wilcox",
      email: "hthompson@hotmail.com",
      age: 44,
      country: "Honduras",
      isActive: false
    },
    {
      id: 15,
      name: "Carrie Ramirez",
      email: "thomascody@taylor.net",
      age: 55,
      country: "San Marino",
      isActive: true
    },
    {
      id: 16,
      name: "Lori Davis",
      email: "yhernandez@johnson.net",
      age: 43,
      country: "Uruguay",
      isActive: false
    },
    {
      id: 17,
      name: "Dr. John Kennedy",
      email: "crosstami@yahoo.com",
      age: 33,
      country: "Netherlands",
      isActive: true
    },
    {
      id: 18,
      name: "Cynthia Mccoy",
      email: "davisamanda@bright-bush.com",
      age: 57,
      country: "Cook Islands",
      isActive: true
    },
    {
      id: 19,
      name: "Janet Knapp",
      email: "joe82@smith.com",
      age: 46,
      country: "Philippines",
      isActive: true
    },
    {
      id: 20,
      name: "Barbara Spence",
      email: "gutierrezjulie@yahoo.com",
      age: 19,
      country: "Bahamas",
      isActive: false
    }
  ];
  
  

  return (
    <Parent userData={users}></Parent>
  )
}

export default App 
import React from 'react'
import{useState} from 'react'
import './App.css'

const App = () => {
  
  const[isFormData, setIsFormData] = useState({
    username: '',
    email: '',
    password: '',
    privacyAccepted: false
  })
  
console.log("isFormData:", isFormData);

  const LoginHandler = (e) => { 
    e.preventDefault();
    
    console.log("htmlForm submitted:", { username, email, password, privacyAccepted });
  }

 return (
    <>
    <form onSubmit={LoginHandler} className="mt-8 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-5">
  <h2 className="text-2xl font-semibold text-gray-800 text-center">Register</h2>

  <input 
    type="text" 
    placeholder="Username"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={isFormData.username}
    onChange={(e) => setIsFormData({ ...isFormData, username: e.target.value })}
  />

  <input 
    type="email" 
    placeholder="Email"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={isFormData.email}
    onChange={(e) => setIsFormData({ ...isFormData, email: e.target.value })}
  />

  <input 
    type="password" 
    placeholder="Password"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={isFormData.password}
    onChange={(e) => setIsFormData({ ...isFormData, password: e.target.value })}
  />

  <div className="flex items-center space-x-2">
    <input type="checkbox" id="privacy" className="w-4 h-4 text-blue-600 rounded" checked={isFormData.privacyAccepted}
    onChange={(e) => setIsFormData({ ...isFormData, privacyAccepted: e.target.checked })}
    />
    <label htmlFor="privacy" className="text-sm text-gray-700">
      Accept Privacy and Policy
    </label>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
  >
    Submit
  </button>
</form>
    </>
  )
}

export default App
import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";

interface Todo {
  title: string;
  description: string;
  done: boolean;
  timeStamp?: "11:10";
}

function App() {
  return (
    <>
      <Loading />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

// const Todos = ({title , description , done }: Todo ) => {
//   return  (
//     <>
//       <h1 className='bg-red-300'>{title}</h1>
//       <h1>{description}</h1>
//       <h3>{done ? "Done" : "Pending"}</h3>
//     </>
//   )
// }

export default App;

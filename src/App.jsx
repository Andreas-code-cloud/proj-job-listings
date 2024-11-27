import './App.scss'

import {Route,
        createRoutesFromElements,
        createBrowserRouter,
        RouterProvider,
} from "react-router-dom"

import MainLayouts from "./layouts/MainLayouts.jsx";
import  HomePage from "./pages/HomePage.jsx"
import PageNotFound from './pages/PageNotfound.jsx';
import AllJobs from "./pages/AllJobs.jsx"
import SingleJobPage from './pages/SingleJobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import { useEffect, useState } from 'react';
import EditJobPage from './pages/EditJobPage.jsx';

function App() {

// add a new listing
  const submitAddData = async (data)=>{
    const res = await fetch("/api/jobs",{
      method:"POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(data)
    });
  };

// delete a listing
  const deleteData = async (id) =>{
    const fetchDataDelete = async(id)=>{
      console.log("FUNCTION ID",id)

      try {
        const res = await fetch(`/api/jobs/${id}`, {
          method:"DELETE"
  
        });
        // const data = await res.json();
      } catch (error) {
        console.log("error fetch", error)
      }
    }
    fetchDataDelete(id)
    console.log("delete operation done")
  }

//edit a listing
const editData = async(id)=>{
  // console.log("FUNCTION ID",id)

  try {
    console.log("FUNCTION ID",id)

    const res = await fetch(`/api/jobs/${id}`,
      {method:"GET"})
    const data = await res.json()
    // console.log("edit data in fetch function",data)
    return data

  } catch (error) {
    console.log("editDataApp error", error)
  }
}

// language selection
  const [langSelected, setLangSelected] = useState("en");
  const langFunc = (lang) =>{
    try {
      setLangSelected(lang)

    } catch (error) {
      console.log(error," langFunc app ")
    }
  }







const router =   createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts langFunc={langFunc} />}>
      <Route index element={<HomePage langSelected={langSelected} />} />
      <Route path="/jobs" element={<AllJobs langSelected={langSelected} /> }/>
      <Route path="/job/:id" element={<SingleJobPage deleteData={deleteData} langSelected={langSelected}/>}/>
      <Route path="/add-job" element={<AddJobPage submitRetrieveData={submitAddData} langSelected={langSelected} />}    />
      <Route path="/edit-job/:id" element={<EditJobPage editData={editData} langSelected={langSelected}/>}/>

      <Route path="/*" element={<PageNotFound langSelected={langSelected} />} />
    </Route>
  )
)



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
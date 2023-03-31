import React from 'react';
import Sidebar from "./Sidebar/Sidebar"
import Map from "./Map/Map"
import Footer from "../../components/Footer/Footer"

const Overview = () => {
  return (
    <div>
        <Sidebar/>
        <Map/>
        <Footer />
    </div>
  )
}

export default Overview
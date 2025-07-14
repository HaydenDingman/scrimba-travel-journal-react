import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import travelEntries from "./data.js"
import './App.css'

function App() {

  const entries = travelEntries.map((log) => {
    return <Entry 
      img={log.img}
      title={log.title}
      country={log.country}
      googleMapsLink={log.googleMapsLink}
      dates={log.dates}
      text={log.text}
    />
  })

  return (
    <>
      <Header />
      {entries}
    </>
  )
}

export default App

import { useState } from 'react'
import Home from './Home'
import ProjectStats from './ProjectStats'
import AboutMe from './AboutMe'
import KeySkills from './KeySkills'
import MyExperience from './MyExperience'
import ConnectSection from './ConnectSection'
import Projects from './Projects'
import Sidebar from './Sidebar'
import Certificates from './Certificates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main content area with left margin to avoid overlap */}
      <main className="ml-16 w-full">
        <Home />
        <ProjectStats />
        <AboutMe />
        <KeySkills />
        <Projects />
        <MyExperience />
        <Certificates />
        <ConnectSection />
      </main>
    </div>
  )
}

export default App

import Navbar1 from './components/navbar'
import MainSection from './components/main'
import AboutSection from './components/about'
import './App.css'
import WorkSection from './components/work'


function App() {

  return (
    <div className='bg-gray-900 min-h-screen text-white px-12 overflow-x-hidden'>
      <Navbar1/>
      <MainSection></MainSection>
      <AboutSection></AboutSection>
      <WorkSection></WorkSection>
    </div>
  )
}

export default App

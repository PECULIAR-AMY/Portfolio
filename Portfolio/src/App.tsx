import NavBar from './components/NavBar'
import './App.css'
import Heroine from './components/Heroine'
import Tech from './components/Tech.tsx'
import Project from './components/Project.tsx'
import Contact from './components/Contact.tsx'

function App() {

  return (
    
    <>
    <NavBar />
    <Heroine />
    <Tech />
    <Project />
    <Contact />

 <div className=" fixed -z-10 min-h-screen w-full absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 '>
    
    </main> 
    </>
  )
}

export default App

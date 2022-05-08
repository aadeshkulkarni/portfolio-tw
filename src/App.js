import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'

function App() {
  return (
    <div className='h-screen min-w-full px-16 py-8 bg-gray-200'>
      <div className='w-full h-full bg-white rounded-sm shadow-lg'>
        <Header />
        <Hero />
      </div>
    </div>
  )
}
export default App

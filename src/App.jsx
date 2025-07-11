import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/:duration" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

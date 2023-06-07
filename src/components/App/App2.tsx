import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

const App2: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>

        </div>
    )
}

export default App2

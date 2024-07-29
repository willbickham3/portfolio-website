// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
// import './data/products.js' 
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
// import './pages/TopicPage.js'
// import './pages/GalleryPage.js'
// import './pages/OrderPage.js'
// import './pages/ContactPage.js'

import AchievementsPage from './pages/AchievementsPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
// import AddAchievementPageForm from './pages/AddAchievementPageForm';
// import EditAchievementPageForm from './pages/EditAchievementPageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditAchievementPageTable from './pages/EditAchievementPageTable';
import AddAchievementPageTable from './pages/AddAchievementPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [achievement, setAchievementToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Will Bickham's Portfolio</h1>
            <p>My portfolio site showcasing my use of MERN.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/topics' element={<TopicsPage />} />
                    
                    <Route path="/achievements" element={<AchievementsPage setAchievement={setAchievementToEdit}/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddAchievementPageTable />} /> 
                    <Route path="/update" element={<EditAchievementPageTable achievementToEdit={achievement} />} />

                    {/* Or these if your schema requires SHORT data input: */}
                     {/* <Route path="/create" element={<AddAchievementPageForm />} />   
                     <Route path="/update" element={<EditAchievementPageForm achievementToEdit={achievement} />} /> */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy;2024 William Bickham</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
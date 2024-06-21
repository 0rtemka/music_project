import { Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './pages/RootPage/Root'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import AwardsPage from './pages/AwardsPage/AwardsPage'
import ArtistPage from './pages/ArtistPage/ArtistPage'
import SongPage from './pages/SongPage/SongPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Root />} />
          <Route path='awards' element={<AwardsPage />} />
          <Route path='me' element={<ProfilePage />} />
          <Route path='artists/:slug' element={<ArtistPage />} />
          <Route path='songs/:id' element={<SongPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
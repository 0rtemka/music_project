import { Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './pages/RootPage/Root'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ErrorPage from './pages/NotFoundPage/NotFoundPage'
import Layout from './components/Layout'
import AddContentPage from './pages/AddContentPage/AddContentPage'
import ArtistPage from './pages/ArtistPage/ArtistPage'
import SongPage from './pages/SongPage/SongPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import { useEffect } from 'react'
import axios from 'axios'
import { API_URL } from './http'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { FindPage } from './pages/FindPage/FindPage'
import { observer } from 'mobx-react-lite'
import { userDataStore } from './store/mobx/userDataStore'

const App = observer(() => {

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
          .get(`${API_URL}/refresh`, { withCredentials: true })
          .then((res) => {
            localStorage.setItem("token", res.data.access_token);

            userDataStore.setAuth(true);
            userDataStore.setUser(res.data.user);
          });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Root />} />
          <Route path='addData' element={<AddContentPage />} />
          <Route path='me' element={<ProfilePage />} />
          <Route path='users/:userId' element={<ProfilePage />} />
          <Route path='artists/:artistId' element={<ArtistPage />} />
          <Route path='songs/:songId' element={<SongPage />} />
          <Route path='search' element={<FindPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
})

export default App
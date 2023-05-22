import { Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
function MultRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  )
}

export default MultRoutes

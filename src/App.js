import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from './pages/Home'
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

const App = () =>{
  return(
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/book/create" element={<CreateBook />}/>
   <Route path="/book/details/:id" element={<ShowBook />}/>
   <Route path="book/edit/:id" element={<EditBook />}/>
   <Route path="/book/delete/:id" element={<DeleteBook />}/>
   
   </Routes>
  )
}
export default App;
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';



import TodoLists from './components/todolists.component';
import EditTodo from './components/edittodo.component';
import AddTodo from './components/addtodo.component';
import Recipe from './components/recipe.component';
import Upload from './components/upload.component';
import Team from './components/team.component';
import Contact from './components/contact.component';

import GDLogo from './components/images/GDLogo.jpg';
import SearchImg from './components/images/search.jpg';
import UploadImg from './components/images/upload.jpg';
import RecentImg from './components/images/recent.jpg';



function App() {
  return (
    <Router>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={GDLogo} alt="Company Logo" style={{ width: '150px', marginRight: '150px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Added 'ml-auto' to move the nav items to the right */}
            <li class="nav-item active">
            <Link class="navbar-brand" to="/">Home</Link>
            </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="recipe">Recipe</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="upload">Upload</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/team">Team</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/contact">Contact Us</Link>
             </li>
             <li class="nav-item active">
              <Link class="navbar-brand" to="/add">Add Todo</Link>
             </li>
          </ul>
        </div>
      </nav>
      <div className="container">
      <div className="col-lg-6">
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary">Search for Recipe</button>
          <button className="btn btn-secondary">Upload Recipe</button>
        </div>
      </div>
    </div>
    <div className="container">
  <div className="row">
    <div className="col-lg-4">
      {/* Search image 1 */}
      <div className="search">
        <img src={SearchImg} alt="Search" style={{ width: '150px', marginRight: '20px' }} />
      </div>
    </div>
    <div className="col-lg-4">
      {/* Search image 2 */}
      <div className="recent">
        <img src={RecentImg} alt="Recent" style={{ width: '150px', marginRight: '20px' }} />
      </div>
    </div>
    <div className="col-lg-4">
      {/* Search image 3 */}
      <div className="upload">
        <img src={UploadImg} alt="Upload" style={{ width: '150px' }} />
      </div>
    </div>
  </div>
</div>




      <Routes>
        <Route path='/' element={TodoLists} />
        <Route path='/edit/:id' element={EditTodo} />
        <Route path='/add' element={AddTodo} />
        <Route path='/recipe' element={Recipe} />
        <Route path='/upload' element={Upload} />
        <Route path='/team' element={Team} />
        <Route path='/contact' element={Contact } />
      </Routes>
    </Router>
  );
}

export default App;

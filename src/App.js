import {useState} from 'react'
function App() {
  return (
   <Navbar>
     <NavItem
      icon="😎"
     />
     <NavItem
      icon="🥳"
     />
     <NavItem
      icon="🥶"
     />
     <NavItem icon="☺️">
       <p>settings 0</p>
       <p>settings 1</p>
       <p>settings 2</p>
       <p>settings 3</p>
     </NavItem>
   </Navbar>
  );
}
function Navbar({children}) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {children}
      </ul>
    </nav>
  )
}
function NavItem({icon, children}) {
  const [open, setOpen]= useState(false)
  return (
    <li className="nav-item">
      <a href="#" className="icon-btn" onClick={(e) => {
        setOpen(!open)
      }}>
       {open && children}
      </a>
    </li>
  )
}

export default App;
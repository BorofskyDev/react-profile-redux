import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './Navbar.scss'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} setMenu={setMenu} />
    </div>
  )
}

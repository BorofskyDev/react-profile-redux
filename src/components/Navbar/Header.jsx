import { GiFalconMoon, GiBarbedSun } from 'react-icons/gi'

export default function Header(props) {
  const { menu, setMenu } = props
  return (
    <header className='header'>
      <div className='header__logo'>
        <GiFalconMoon className='header__mode-toggle dark-icon' />
        <span className='sr-only'>Dark Mode</span>
        <p className='header__logo--title'>
          &lt;<span className='logo__first'>Borofsky</span>
          <span className='logo__second'>Dev</span> /&gt;
        </p>
        <GiBarbedSun className='header__mode-toggle light-icon' />
        <span className='sr-only'>Light Mode</span>
      </div>
      <div className='header__button'>
        <button
          className={`menu__trigger ${menu ? 'menu__close' : ''}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

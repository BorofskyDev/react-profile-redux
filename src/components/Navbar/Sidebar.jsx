import { useEffect, useRef } from 'react'
import { FaCode, FaCodepen, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import gsap from 'gsap'

export default function Sidebar(props) {
  const { menu, setMenu } = props
  let sidebarMenu = useRef(null)
  let sidebarMenuOverlay = useRef(null)
  let menuLayer = useRef(null)
  let menuTimeline = useRef(null)

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true })
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      { duration: 0, x: '100%' },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    )
  }, [])

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse()
  }, [menu])

  return (
    <div className='menu' ref={(el) => (sidebarMenuOverlay = el)}>
      <div className='menu__wrapper'>
        <div className='menu__layer' ref={(el) => (menuLayer = el)}></div>
        <nav className='menu__nav' ref={(el) => (sidebarMenu = el)}>
          <div className='menu__top'>
            <ul className='menu__links'>
              <li className='menu__link'>
                <a href='#' className='menu__link--section'>
                  Stack
                </a>
              </li>
              <li className='menu__link'>
                <a href='#' className='menu__link--section'>
                  About
                </a>
              </li>
              <li className='menu__link'>
                <a href='#' className='menu__link--section'>
                  Projects
                </a>
              </li>
              <li className='menu__link'>
                <a href='#' className='menu__link--section'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='menu__bottom'>
            <h2 className='menu__bottom--title'>Social Media</h2>
            <div className='menu__buttons'>
              <FaGithub className='menu__icon' />
              <span className='sr-only'>Git Hub</span>
              <FaLinkedinIn className='menu__icon' />
              <span className='sr-only'>Linked In</span>
              <FaCodepen className='menu__icon' />
              <span className='sr-only'>Code Pen</span>
              <FaTwitter className='menu__icon' />
              <span className='sr-only'>Twitter</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}


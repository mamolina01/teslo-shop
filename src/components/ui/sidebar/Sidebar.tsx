'use client'
import { logout } from '@/actions'
import { useUiStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline
} from 'react-icons/io5'

export const Sidebar = () => {
  const options = {
    firstPart: [
      {
        route: '/profile',
        icon: <IoPersonOutline size={20} />,
        title: 'Perfil',
        function: () => closeSideMenu()
      },
      {
        route: '/',
        icon: <IoTicketOutline size={20} />,
        title: 'Ordenes'
      },
      {
        route: '/auth/login',
        icon: <IoLogInOutline size={20} />,
        title: 'Ingresar'
      },
      {
        route: '/',
        icon: <IoLogOutOutline size={20} />,
        title: 'Salir',
        function: () => logout()
      }
    ],
    secondPart: [
      {
        route: '/',
        icon: <IoShirtOutline size={20} />,
        title: 'Productos'
      },
      {
        route: '/',
        icon: <IoTicketOutline size={20} />,
        title: 'Ordenes'
      },
      {
        route: '/',
        icon: <IoPeopleOutline size={20} />,
        title: 'Usuarios'
      }
    ]
  }

  const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen)
  const closeSideMenu = useUiStore(state => state.closeSideMenu)

  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/* Background black */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />

          {/* Blur */}
          <div
            onClick={() => closeSideMenu()}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        </>
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        <IoCloseOutline className="absolute top-5 right-5 cursor-pointer" size={40} onClick={() => closeSideMenu()} />

        {/* Input */}
        <div className="relative mt-10">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}

        {options.firstPart.map(option => (
          <Link
            key={option.title}
            href={option.route}
            onClick={option.function}
            className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {option.icon}
            <span className="text-lg ml-3">{option.title}</span>
          </Link>
        ))}

        <div className="w-full h-px bg-gray-200 my-5" />

        {options.secondPart.map(option => (
          <Link
            key={option.title}
            href={option.route}
            className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
          >
            {option.icon}
            <span className="text-lg ml-3">{option.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

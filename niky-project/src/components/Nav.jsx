import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import NavLinks from './NavLinks';
import { useState } from 'react';

const Nav = () => {

  const [listView, setListView] = useState(false);
  const [toggleListClass, setToggalListClass] = useState('max-lg:hidden');
  const [toggleBtnClass, setToggleBtnClass] = useState('max-lg:block');

  function toggleList() {
    setListView((prev) => !prev);
    // console.log(listView);
    if(listView){
      setToggalListClass('max-lg:block');
      setToggleBtnClass('max-lg:hidden')
    }else{
      setToggalListClass('max-lg:hidden');
      setToggleBtnClass('max-lg:block');
    }
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>

        <NavLinks classes={`flex-1 flex justify-center items-center gap-16 max-lg:hidden`} liClasses= {`bg-transparent`} />

        <div className={`hidden ${toggleBtnClass}`}>

          <img src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            onClick={toggleList}
          />

        </div>

        <div className={`hidden ring-1 ring-gray-300 p-4 translate-x-12  ${toggleListClass}`}>
          <button onClick={toggleList} className='bg-red-500 text-white p-2 rounded-2xl mb-8'>Close</button>
          <NavLinks classes={`space-y-4 p-3 `} liClasses = {`bg-red-200 p-2 rounded-xl text-center`} />
        </div>
      </nav>
    </header>
  )
}

export default Nav

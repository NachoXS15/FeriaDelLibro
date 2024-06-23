import '../styles/library.scss'
import { useState } from 'react';
import Library from "../components/Library/LibraryItems";
import Header from "../components/ui/Header";
import Categories from "../config/Categories";
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '../components/ui/svgs';

export default function Biblioteca() {
  const [categorySelected, setCategorySelected] = useState<string>("Todos")
  console.log("categoria: ", categorySelected);

  const handleCategorySelected = (c: string) => {
    setCategorySelected(c)
    console.log("categoria: ", categorySelected);

  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 40px' }}>
        <NavLink to={'/'}>
          <ArrowBack />
        </NavLink>
        <h2 className='blue-title'>Biblioteca Digital</h2>
      </div>
      <section id="library-container">
        <aside>
          {Categories.map((c, i) => (
            <button key={i} onClick={() => handleCategorySelected(c)} className={categorySelected === c ? 'active' : ''}>{c}</button>
          ))}
        </aside>
        <Library categorySelected={categorySelected} />
      </section>
    </>
  )
}
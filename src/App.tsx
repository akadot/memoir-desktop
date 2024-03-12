import settings from './assets/settings.svg'
import hash from './assets/hash.svg'
import trash from './assets/trash.svg'
import server from './assets/server.svg'
import search from './assets/search.svg'

import './styles/app.css'
function App() {
  return (
    <main className="container">
      <section className="sidebar">
        <header className='headerContainer'>
          <h1>Memoir</h1>
          <img src={settings} alt="Settings Icon" />
        </header>

        <nav className='menu'>
          <section className='navItem'>
            <img src={server} alt="Source" />
            <p>Source</p>
          </section>
          <section className='navItem'>
            <img src={hash} alt="Hash" />
            <p>Tags</p>
          </section>
          <section className='navItem'>
            <img src={trash} alt="Trash" />
            <p>Trash</p>
          </section>
        </nav>

        <section className='notesContainer'>
          <section className='notesMenu'>
            <p>Notes</p>
            <label htmlFor="search">
              <input type="text" id='search' placeholder='Search...'/>
              <img src={search} alt="Search" />
            </label>
          </section>
          <section></section>
        </section>
      </section>
    </main>
  );
}

export default App;

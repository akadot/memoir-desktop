import NavItem from './components/NavItem'

import settings from './assets/settings.svg'
import hash from './assets/hash.svg'
import trash from './assets/trash.svg'
import server from './assets/server.svg'
import search from './assets/search.svg'
import addFile from './assets/addFile.svg'
import addFolder from './assets/addFolder.svg'

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
          <NavItem label='Source' img={server} />
          <NavItem label='Tags' img={hash} />
          <NavItem label='Trash' img={trash} />
        </nav>

        <section className='notesContainer'>
          <section className='notesMenu'>
            <label htmlFor="search">
              <input type="text" id='search' placeholder='Search...' />
              <img src={search} alt="Search" />
            </label>

            <section>
              <button className='addNote'>
                <img src={addFile} alt="Add Note" />
                <span>Add Note</span>
              </button>
              <button className='addFolder'>
                <img src={addFolder} alt="Add Folder" />
                <span>Add Folder</span>
              </button>
            </section>
          </section>
          <section className='notesList'>

          </section>
        </section>
      </section>
      <section className='noteContent'>
        <p>NOTE DETAILS</p>
      </section>
    </main>
  );
}

export default App;

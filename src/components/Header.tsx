import settings from '../assets/settings.svg'
import '../styles/header.css'

function Header() {
    return (
        <section className='container'>
            <h1>Memoir</h1>
            <img src={settings} alt="Settings Icon" />
        </section>
    );
}

export default Header;

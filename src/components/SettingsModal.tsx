import '../styles/settings.css'

interface ModalProps {
    close:boolean,
    handleClose:Function
}

function SettingsModal(props:ModalProps) {
    return (
        <section className={props.close == true ? 'closeModal' : 'settingsContainer'}>
            <section>
                <p>Folder</p>
                <input type="file" dir='' />
                <button className='cancel' onClick={() => props.handleClose()}>
                    Close
                </button>
            </section>
        </section>
    )
}

export default SettingsModal;
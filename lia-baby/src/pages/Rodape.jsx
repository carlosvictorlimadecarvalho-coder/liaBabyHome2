import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/image.png'

export default function Rodape() {
  return (
    <>
    <section id='sobre'>
    <div className='container12'>
        <div className='rodape'>
            <div className='redes'>
            <a href="https://wa.me/558433165175" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com/liababyhome/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/liababyhome/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            </div>
            <div className='contato'>
                <p><FontAwesomeIcon icon={faPhone} />+55 84 3316-5175</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> lia@gmail.com</p>
            </div>
            <div className='logoFinal'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='final'><p>Copyright © 2024 Lia Baby Home. Todos os direitos reservados.</p></div>
        </div>
    </div>
    </section>
    </>
  )
}

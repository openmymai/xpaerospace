import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <section
        id='footer'
        className='section-footer'
      >
        <footer className='footer'>
          <div className='footer__footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <Image
                    src='/img/xplogo.png'
                    alt='client1'
                    width={300}
                    height={150}
                  />
                </div>
                <div className='col'>
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    GLOBAL HEADQUARTERS
                  </h3>
                  <h4>
                    105 NW Taxiway Lane
                    <br />
                    Tullahoma Airport (KTHA)
                    <br />
                    Tullahoma, TN 37388, US
                    <br />
                    (931) 392-4444
                  </h4>
                </div>
                <div className='col'>
                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    CAPABILITIES
                  </h3>
                  <h4>
                    Aviation Procurement
                    <br />
                    Aircraft Maintenance and Upgrades
                    <br />
                    Flight Testing and Certification
                    <br />
                    Flight and Avionics Training
                    <br />
                  </h4>
                </div>
                <div className='col footer__footer-links'>
                  <ul>
                    <li>
                      <i className='bi bi-chevron-right'></i>
                      <Link href='#about'>ABOUT</Link>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>
                      <Link href='#feature'>WHY XP</Link>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>
                      <Link href='#mission'>PAST PERFORMANCE</Link>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>
                      <Link href='#process'>PARTNERS</Link>
                    </li>
                    <li>
                      <i className='bi bi-chevron-right'></i>
                      <Link href='#contact'>CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;

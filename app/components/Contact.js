import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <section
        id='contact'
        className='section-contact'
      >
        <div className='u-text-center-contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <div className='u-margin-bottom-small'>
                  <h2>
                    With XP Services, you get the expertise and services that
                    operators and pilots need to rise above their most complex
                    aviation challenges.
                  </h2>
                  <Link
                    href='#about'
                    className='btn btn--white btn--animated'
                  >
                    Contact US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

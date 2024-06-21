import Link from 'next/link';

const Process = () => {
  return (
    <div>
      <section
        id='process'
        className='section-process'
      >
        <div className='u-center-text u-margin-bottom-small'>
          <h1 className='heading-secondary'>Flight Process</h1>

          <div className='container'>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <Link
                  href='#about'
                  className='btn btn--white btn--animated'
                >
                  Why XP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;

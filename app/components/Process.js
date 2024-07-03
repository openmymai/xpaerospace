import Link from 'next/link';

const Process = () => {
  return (
    <div>
      <section
        id='process'
        className='section-process'
      >
        <div className='u-center-text u-margin-bottom-small'>
          <h1 className='heading-secondary'>กระบวนการ Flight</h1>

          <div className='redbox__word-block'>
            <div className='redbox__word-wrap'>
              <div className='redbox__word'>
                <span>F</span>
                acititate
              </div>
              <div className='redbox__word'>
                <span>L</span>
                earn
              </div>
              <div className='redbox__word'>
                <span>I</span>
                dentify
              </div>
              <div className='redbox__word'>
                <span>G</span>
                auge
              </div>
              <div className='redbox__word'>
                <span>H</span>
                andle
              </div>
              <div className='redbox__word'>
                <span>T</span>
                est
              </div>
            </div>
          </div>

          {/* Button */}
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <Link
                  href='/whyxp'
                  className='btn btn--white btn--animated'
                >
                  ทำไมต้อง XP
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

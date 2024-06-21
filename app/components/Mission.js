const Mission = () => {
  return (
    <div>
      <section className='section-mission'>
        <div className='bg-video'>
          <video
            className='bg-video__content'
            autoPlay={true}
            muted
            loop
          >
            <source
              src='/img/video.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='u-center-text-video u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            INSTEAD OF A MISSION STATEMENT, HERE’S OUR MISSION CRITICAL
            STATEMENT.
          </h2>

          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <p className='paragraph'>
                  XP Services creates the most efficient and effective solutions
                  to meet every client’s specific goals through flight testing,
                  prototype development, and aviation training.
                </p>
                <a
                  href='#'
                  className='btn btn--white btn--animated'
                >
                  About XP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

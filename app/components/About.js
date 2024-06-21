import Image from 'next/image';

const About = () => {
  return (
    <div>
      <section
        id='about'
        className='section-about'
      >
        <div className='u-center-text u-margin-bottom-big'>
          <h1 className='heading-secondary'>
            The complex aviation challenges you face
          </h1>
        </div>

        <div className='row'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            The complex aviation challenges you face are the ones we help you
            rise above at XP Services.
          </h3>
          <p className='paragraph'>
            From military to commercial aircraft, our worldwide client base
            requires the speciality capabilities we provide in procurement,
            avionics, cockpit refurbishment, prototyping, flight testing, and
            pilot training. What we do is proven to deliver the reliability you
            require to rise above in the most unpredictable flight environments.
          </p>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              OUR PROVING GROUND IS THOUSANDS OF FEET ABOVE THE GROUND.
            </h3>
            <p className='paragraph'>
              At the core of our aviation capabilities are the pilots, engineers
              and maintenance professionals at XP Services. They back what they
              deliver for your helicopter or fixed wing project with extensive
              military backgrounds, over 100 years of flight testing experience,
              and the certifications to meet the most stringent demands of both
              US and foreign governments.
            </p>
            <a
              href='#about'
              className='btn btn--white btn--animated'
            >
              Capabilities
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <Image
                src='/img/client1.png'
                alt='client1'
                width={200}
                height={200}
                className='composition__photo composition__photo--p1'
                sizes='(maxWidth: 56.25em) 20vw, (maxWidth: 37.5em) 30vw, 300px'
              />
              <Image
                src='/img/client2.png'
                alt='client2'
                width={200}
                height={200}
                className='composition__photo composition__photo--p2'
                sizes='(maxWidth: 56.25em) 20vw, (maxWidth: 37.5em) 30vw, 300px'
              />
              <Image
                src='/img/client3.png'
                alt='client3'
                width={200}
                height={200}
                className='composition__photo composition__photo--p3'
                sizes='(maxWidth: 56.25em) 20vw, (maxWidth: 37.5em) 30vw, 300px'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

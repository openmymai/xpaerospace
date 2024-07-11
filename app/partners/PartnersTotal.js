import Image from 'next/image';

export default function PastPerformanceTotal() {
  return (
    <div>
      <section
        id='partnerstotal'
        className='section-partners-total'
      >
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/genesys.png'
                alt='genesys'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/bellheli.png'
                alt='bell helicopter'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/garmin.png'
                alt='garmin'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/leidos.png'
                alt='leidos'
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/airbus.png'
                alt='airbus'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/ses.png'
                alt='ses'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/generalatomics.png'
                alt='generalatomics'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/frasca.png'
                alt='frasca'
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/l3harris.png'
                alt='l3harris'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/usairforce.png'
                alt='usairforce'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/usarmy.png'
                alt='usarmy'
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <Image
                src='/img/usmarine.png'
                alt='usmarine'
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

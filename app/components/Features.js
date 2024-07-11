import Link from 'next/link';

const Features = () => {
  return (
    <div>
      <section
        id='features'
        className='section-features-process'
      >
        <div className='row'>
          <div className='u-center-text u-margin-bottom-medium'>
            <h1 className='heading-secondary'>
              คุณไม่สามารถคาดเดาวันพรุ่งนี้ได้ แต่คุณสามารถเตรียมตัวให้พร้อมได้
            </h1>
          </div>
          <div className='letters__block'>
            <div className='letters__wrap'>
              <div className='letters__single'>F</div>
              <div className='letters__single'>L</div>
              <div className='letters__single'>I</div>
              <div className='letters__single'>G</div>
              <div className='letters__single'>H</div>
              <div className='letters__single'>T</div>
            </div>
            <div className='letters__subtitle'>Process</div>
          </div>
          <div className='col-3-of-3'>
            <p className='paragraph'>
              ทุกสิ่งที่เราทำที่ XPAT
              คือการรับประกันการตระหนักรู้ในสถานการณ์ที่เหนือกว่าสำหรับนักบินของคุณ
              และความน่าเชื่อถือที่ไม่มีใครเทียบได้ของเครื่องบินที่พวกเขาบิน
              กระบวนการ FLIGHT
              ของเราช่วยให้มั่นใจว่าเราตอบสนองความต้องการที่แน่นอนของคุณ
              ในทุกขั้นตอนของโครงการพร้อมกับการจัดส่งที่รวดเร็ว
              เราใช้แนวทางที่คล่องตัวเพื่อให้แน่ใจว่าอุปสรรคทั้งหมดในการประสบความสำเร็จจะถูกขจัดออกไป
            </p>
            <p className='paragraph__bold'>
              ด้วยกระบวนการ FLIGHT ที่ได้รับการพิสูจน์แล้วของเรา
              เราสามารถจำลองความสำเร็จของโครงการในขณะเดียวกันก็มอบประสบการณ์
              การพัฒนาโครงการที่ครอบคลุมและว่องไวอยู่เสมอ
            </p>
          </div>
        </div>

        <div className='u-center-text u-margin-bottom-big'>
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
                  className='btn btn--red btn--animated'
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

export default Features;

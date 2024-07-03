import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <section
        id='about'
        className='section-about'
      >
        <div className='u-center-text u-margin-bottom-big'>
          <h1 className='heading-secondary'>
            ความท้าทายด้านการบินที่ซับซ้อนที่คุณต้องเผชิญ
          </h1>
        </div>

        <div className='row'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            ความท้าทายด้านการบินที่ซับซ้อนที่คุณเผชิญอยู่คือสิ่งที่เราช่วยให้คุณก้าวขึ้นมาเหนือบริการของ
            XP
          </h3>
          <p className='paragraph'>
            ตั้งแต่เครื่องบินทหารไปจนถึงเครื่องบินพาณิชย์
            ฐานลูกค้าทั่วโลกของเราต้องการความสามารถพิเศษที่เรามอบให้ในการจัดซื้อ
            ระบบการบิน การปรับปรุงห้องนักบิน การสร้างต้นแบบ การทดสอบการบิน
            และการฝึกนักบิน
            สิ่งที่เราทำได้รับการพิสูจน์แล้วว่ามอบความน่าเชื่อถือที่คุณต้องการ
            เพื่อให้เหนือกว่าในสภาพแวดล้อมการบินที่คาดเดาไม่ได้มากที่สุด
          </p>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              พื้นที่ทดสอบของเราอยู่เหนือพื้นดินหลายพันฟุต
            </h3>
            <p className='paragraph'>
              หัวใจสำคัญของความสามารถด้านการบินของเราคือนักบิน วิศวกร
              และผู้เชี่ยวชาญด้านการบำรุงรักษาที่ XPAT
              พวกเขาสนับสนุนสิ่งที่พวกเขาส่งมอบสำหรับเฮลิคอปเตอร์หรือโครงการปีกคงที่ของคุณซึ่งมีพื้นฐานทางทหารมายาวนาน
              ประสบการณ์การทดสอบการบินมากกว่า 100 ปี
              และการรับรองเพื่อตอบสนองความต้องการที่เข้มงวดที่สุดของรัฐบาลทั้งสหรัฐอเมริกาและต่างประเทศ
            </p>
            <Link
              href='/capabilities'
              className='btn btn--white btn--animated'
            >
              ความสามารถ
            </Link>
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

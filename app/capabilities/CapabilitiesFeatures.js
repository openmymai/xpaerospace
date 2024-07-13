import Image from 'next/image';
import Link from 'next/link';

export default function CapabilitiesFeatures() {
  return (
    <div>
      <section
        id='capabilitiesfeatures'
        className='section-capabilities-features'
      >
        <div className='row'>
          <div className='story'>
            <Link href='/aviationprocurement'>
              <figure className='story__shape'>
                <Image
                  src='/img/capa_procurement.png'
                  alt='procurement'
                  width={250}
                  height={250}
                  className='story__img'
                />
                <figcaption className='story__caption'>
                  การจัดซื้อจัดจ้าง
                </figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  การจัดซื้อจัดจ้าง
                </h3>
                <p>
                  เพื่อให้เป็นไปตามข้อกำหนดด้านเที่ยวบินที่มีความต้องการมากที่สุดของคุณ
                  ให้หันไปใช้บริการ XP เพื่อค้นหาเครื่องบินที่เหมาะสม
                  พร้อมแพลตฟอร์มที่ได้รับการพิสูจน์แล้วเพื่อให้ภารกิจสำเร็จลุล่วง
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='story'>
            <Link href='/avionicsmodernization'>
              <figure className='story__shape'>
                <Image
                  src='/img/capa_avionics.png'
                  alt='procurement'
                  width={250}
                  height={250}
                  className='story__img'
                />
                <figcaption className='story__caption'>
                  Avionics ที่ทันสมัย
                </figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Avionics Modernization
                </h3>
                <p>
                  โซลูชัน Avionics ออกแบบมาโดยเฉพาะเพื่อลดภาระงานของนักบิน
                  และเพิ่มความสามารถในการปฏิบัติงานภายใต้สถานการณ์ที่เลวร้ายที่สุดระหว่างปฏิบัติการบิน
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='story'>
            <Link href='/aircraftmaintenance'>
              <figure className='story__shape'>
                <Image
                  src='/img/capa_aircraft.png'
                  alt='procurement'
                  width={250}
                  height={250}
                  className='story__img'
                />
                <figcaption className='story__caption'>
                  การบำรุงรักษาและการอัพเกรดเครื่องบิน
                </figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  การบำรุงรักษาและการอัพเกรดเครื่องบิน
                </h3>
                <p>
                  วิศวกรผู้เชี่ยวชาญด้านการผลิตและช่างเครื่องของเรามีความเชี่ยวชาญ
                  ด้านเครื่องบินทางการทหารและเชิงพาณิชย์ในการดูแลรักษาเครื่องบินของคุณ
                  ตลอดจนสร้างแม้แต่การดัดแปลงที่ซับซ้อนที่สุด
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='story'>
            <Link href='/flighttesting'>
              <figure className='story__shape'>
                <Image
                  src='/img/capa_flighttesting.png'
                  alt='procurement'
                  width={250}
                  height={250}
                  className='story__img'
                />
                <figcaption className='story__caption'>
                  การทดสอบและการรับรองการบิน
                </figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  การทดสอบและการรับรองการบิน
                </h3>
                <p>
                  ตรวจสอบให้แน่ใจว่าเครื่องบินทุกลำได้รับการรับรอง FAA
                  โดยผ่านการทดสอบการบินในการจัดการ ระบบทั้งหมด
                  รวมถึงระบบการบินและระบบไฟฟ้า
                  และความสมบูรณ์ของโครงสร้างของลำตัวเครื่องบิน
                  อาจารย์ผู้สอนของเรามีทั้ง FAA และ U.S.
                  ใบรับรองทางทหารที่ได้รับการรับรองว่านักบินฝึกหัด
                  จำเป็นต้องบรรลุวัตถุประสงค์การบินในทุกสภาพอากาศ
                  ในสภาพแวดล้อมใดๆ ในเครื่องบินทุกประเภท
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='story'>
            <Link href='/flighttraining'>
              <figure className='story__shape'>
                <Image
                  src='/img/capa_flighttraining.png'
                  alt='procurement'
                  width={250}
                  height={250}
                  className='story__img'
                />
                <figcaption className='story__caption'>
                  การฝึกอบรมการบิน
                </figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  การฝึกอบรมการบิน
                </h3>
                <p>
                  อาจารย์ผู้สอนของเรามีทั้ง FAA และ U.S.
                  ใบรับรองทางทหารที่ได้รับการรับรองว่านักบินฝึกหัด
                  จำเป็นต้องบรรลุวัตถุประสงค์การบินในทุกสภาพอากาศ
                  ในสภาพแวดล้อมใดๆ ในเครื่องบินทุกประเภท
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

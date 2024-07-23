import Image from 'next/image';

export default function AboutLogo() {
  return (
    <div>
      <section
        id='aboutlogo'
        className='section-about-logo'
      >
        <div className='container'>
          <div className='u-center-text u-margin-bottom-small'>
            <h1 className='heading-secondary'>
              โลโก้ที่สะท้อนถึงพลังของขีดความสามารถด้านการบินของเรา
            </h1>
          </div>

          <div className='row'>
            <div className='col-2-of-3'>
              <p className='aboutcontent__paragraph'>
                <Image
                  src='/img/xplogo.png'
                  alt='xplogo'
                  width={200}
                  height={200}
                  className='section-about-logo__alignleft'
                />
                XP Services
                มีชื่อเสียงด้านความสามารถที่มีประสิทธิภาพในหมวดบริการการบิน
                เห็นได้ชัดในทุกด้าน
                ตั้งแต่การปรับปรุงระบบการบินให้ทันสมัยไปจนถึงบริการทดสอบการบิน
                จุดแข็งนี้แสดงอยู่บนโลโก้ของเรา
                ซึ่งมีจุดประสงค์เพื่อให้รู้สึกถึงความแข็งแกร่งและความสามารถโดยธรรมชาติ
              </p>
              <p className='aboutcontent__paragraph'>
                การออกแบบตัวอักษร {'"XP"'}
                ที่โดดเด่นและทรงพลังตลอดจนการออกแบบปีก/โรเตอร์แบบคงที่
                ที่แสดงภาพเครื่องบินหลายประเภท
                สิ่งนี้แสดงถึงความเชี่ยวชาญด้านการบินทั้งหมดของเรา
                และทำให้โดดเด่นยิ่งขึ้นด้วยสีแดงเข้มที่สะท้อนถึงพลังงานที่เราทุ่มเทในทุกโครงการเพื่อให้บรรลุความสำเร็จ
              </p>
            </div>
            <div className='col-1-of-3 aboutcontent__sidebar'>
              <Image
                src='/img/xp-logo-old.png'
                alt='xplogo'
                width={300}
                height={200}
              />
              <p className='aboutcontent__rucieparagraph'>
                ในปี 2019 เร็วเกินไปที่เราได้สูญเสีย รูซี่ มัวร์
                การออกแบบโลโก้บริษัทดั้งเดิมของเราได้ถูกเก็บรักษาไว้เพื่อเป็นตัวแทนแห่งความรักในการบินของเขา
                มันเป็นสัญลักษณ์ที่แสดงถึงของความหลงใหลในการบินของเขาที่จะไม่หยุดเติบโตทั้งในด้านอาชีพและส่วนตัว
                เราได้ตีแผ่แรงบันดาลใจของเขาผ่านวิวัฒนาการของโลโก้ที่มีทั้งหมด
                ซึ่งเริ่มต้นโดย รูซี่ และเราจะไม่มีวันลืม
              </p>
              <Image
                src='/img/rucie-moore.png'
                alt='xplogo'
                width={300}
                height={200}
              />
              <div className='aboutcontent__subtitle-lowercase'>
                รูซี่ มัวร์, นักบินอาปาเช่ของกองทัพสหรัฐฯ และ นักบินทดสอบของ
                เอ็กซ์พี เซอร์วิส
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

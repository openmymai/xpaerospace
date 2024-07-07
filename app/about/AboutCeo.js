import Image from 'next/image';

export default function AboutCeo() {
  return (
    <div>
      <section
        id='aboutceo'
        className='section-about-ceo'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='u-center-text u-margin-bottom-small'>
                <h1 className='heading-secondary'>มรดกแห่งความเป็นเลิศ</h1>
              </div>
              <div className='letters__subtitle'>
                Rodney Allison, President & CEO, XP Services
              </div>
              <div className='section-about-ceo__content-wrap'>
                <div className='section-about-ceo__text'>
                  <p className='paragraph'>
                    <Image
                      src='/img/rodney.jpg'
                      alt='xplogo'
                      width={200}
                      height={200}
                      className='section-about-ceo__alignleft'
                    />
                    คุณอัลลิสันสำเร็จการศึกษาจากโรงเรียนนักบินทดสอบกองทัพเรือสหรัฐฯ
                    ด้วยประสบการณ์การบินในหน่วยปฏิบัติการพิเศษกองทัพสหรัฐฯ
                    มากกว่า 20 ปี และรักษาใบรับรองประเภท FAA มากกว่า 20
                    รายการในเครื่องบินปีกหมุนและปีกคงที่ มีชั่วโมงบินมากกว่า
                    10,000 ชั่วโมง และผ่านการรับรองมากกว่า 140 รายการ
                    เครื่องบินที่แตกต่างกัน นอกจากนี้
                    เขายังดำรงตำแหน่งนักบินขนส่งสายการบิน วิศวกรการบิน
                    และใบรับรองผู้สอนการบินที่ได้รับการรับรอง
                    และยังเป็นตัวแทนด้านวิศวกรรมที่กำหนดโดย FAA
                    รวมถึงเป็นสมาชิกของสมาคมนักบินทดสอบทดลองอีกด้วย
                  </p>
                  <p className='paragraph'>
                    คุณแอลลิสันได้จัดหน่วยลับสุดยอดของกระทรวง-แผนกพิเศษ
                    การกวาดล้างข้อมูล (TS-SCI)
                    และปัจจุบันถือเป็นความลับของกระทรวง การกวาดล้าง.
                    เขายังเป็นอดีตศาสตราจารย์วิจัยที่
                    มหาวิทยาลัยเทนเนสซีสถาบันอวกาศและรัฐบาลกลางในปัจจุบัน
                    คุณแอลลิสันสำเร็จการศึกษาวิทยาศาสตรบัณฑิต สาขาวิชาชีพ
                    วิชาการบินจาก Embry-Riddle Aeronautical University และ a
                    วิทยาศาสตรมหาบัณฑิตจากมหาวิทยาลัยเทนเนสซีอวกาศ สถาบัน.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

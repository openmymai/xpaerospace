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
            <div className='col-3-of-3'>
              <div className='u-center-text u-margin-bottom-small'>
                <h1 className='heading-secondary'>ตัวแทนแห่งความเป็นเลิศ</h1>
              </div>
              <div className='letters__subtitle'>
                ร็อดนีย์ อัลลิสัน ประธานและผู้บริหารสูงสุดของ XP Services
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
                    ร็อดนีย์ อัลลิสัน ประธานและผู้บริหารสูงสุด
                    สำเร็จการศึกษาจากโรงเรียนนักบินทดสอบกองทัพเรือสหรัฐฯ
                    ด้วยประสบการณ์การบินในหน่วยปฏิบัติการพิเศษของกองทัพบกสหรัฐอเมริกามากกว่า
                    20 ปี โดย คุณอัลลิสันได้เก็บรักษาใบรับรองประเภท FAA
                    ได้มากกว่า 20 ใบทั้งในเครื่องบินปีกหมุนและปีกตรึง
                    ซึ่งมีชั่วโมงบินมากกว่า 1,000 ชั่วโมง
                    และมีคุณสมบัติที่ผ่านการรับรองในเครื่องบินที่ต่างกันมากกว่า
                    140 ลำ
                    นอกจากนี้เขายังดำรงตำแหน่งนักบินขนส่งสายการบินคนปัจจุบัน,
                    วิศวกรการบิน , ใบรับรองผู้สอนการบินที่ผ่านการรับรอง
                    และเป็นตัวแทนด้านวิศวกรรมที่ได้รับมอบหมายจาก FAA
                    ตลอดจนเป็นสมาชิกของสมาคมนักบินทดสอบทดลองอีกด้วย
                  </p>
                  <p className='paragraph'>
                    คุณอัลลิสัน ได้จัดตั้ง DoD Top Secret–Special Compartmented
                    Information (TS-SCI) และDoD Secret
                    ปัจจุบันเขายังตำลงตำแหน่งเป็นอดีตศาสตราจารย์วิจัยที่สถาบันอวกาศมหาวิทยาลัยเทนเนสซี
                    และ LEO ของรัฐบาลกลางในปัจจุบัน คุณอัลลิสัน
                    สำเร็จการศึกษาวิทยาศาสตร์บัณฑิต
                    สาขาการบินมืออาชีพจากมหาวิทยาลัยการบินเอ็มบรี-ริดเดิ้ล
                    และวิทยาศาสตร์มหาบัณฑิตจากสถาบันอวกาศมหาวิทยาลัยเทนเนสซี
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

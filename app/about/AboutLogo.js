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
              โลโก้ที่สะท้อนถึงพลังแห่งความสามารถในการบินของเรา
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
                XP Services มีชื่อเสียงด้านความสามารถอันทรงพลังภายใน
                หมวดบริการการบิน มันชัดเจนในทุกสิ่งจากเรา
                การปรับปรุงระบบการบินให้ทันสมัยเป็นบริการทดสอบการบิน ความแรงนี้
                จะแสดงอยู่ในโลโก้ของเรา มันถูกออกแบบมาให้มีความรู้สึก
                ของความแข็งแกร่งและประสิทธิภาพโดยธรรมชาติ
              </p>
              <p className='aboutcontent__paragraph'>
                การออกแบบตัวอักษร “XP” ที่โดดเด่นและทรงพลังเช่นกัน
                เนื่องจากทั้งการออกแบบปีกคงที่และโรเตอร์ที่แสดงภาพหลายประเภท
                อากาศยาน. นี่แสดงถึงขอบเขตการบินที่สมบูรณ์ของเรา
                ความเชี่ยวชาญและโดดเด่นยิ่งขึ้นด้วยสีแดงเข้ม
                สะท้อนถึงพลังงานที่เราทุ่มเทให้กับทุกโครงการเพื่อให้บรรลุผลสำเร็จ
                ความสำเร็จ.
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
                เมื่อเราสูญเสีย Rucie Moore เร็วเกินไปในปี 2019 มรดกของเขาคือ
                ความรักในการบินยังคงอยู่ในการออกแบบของเขาเพื่อเรา
                โลโก้บริษัทเดิม มันเป็นสัญลักษณ์ของความหลงใหลในการบินและ
                ที่จะไม่หยุดเติบโตทั้งในด้านอาชีพและส่วนตัว เราได้
                ขยายแรงบันดาลใจของเขาผ่านวิวัฒนาการโลโก้ที่เริ่มต้นขึ้น
                กับรูซี่และจะไม่มีวันลืม
              </p>
              <Image
                src='/img/rucie-moore.png'
                alt='xplogo'
                width={300}
                height={200}
              />
              <div className='aboutcontent__subtitle-lowercase'>
                Rucie Moore, U.S. Army Apache pilot and XP Services test pilot
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

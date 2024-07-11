import Link from 'next/link';

const Mission = () => {
  return (
    <div>
      <section
        id='mission'
        className='section-mission'
      >
        <div className='row'>
          <div className='u-center-text u-margin-bottom-medium'>
            <div className='col-1-of-2'>
              <h2 className='heading-secondary'>
                แทนที่จะเป็นคำแถลงพันธกิจ นี่คือคำแถลงเชิงวิพากษ์ของเรา
              </h2>
              <p className='paragraph'>
                XPAT
                สร้างโซลูชันที่มีประสิทธิภาพและประสิทธิผลสูงสุดเพื่อบรรลุเป้าหมายเฉพาะของลูกค้าทุกคน
                ผ่านการทดสอบการบิน การพัฒนาต้นแบบ และการฝึกอบรมการบิน
                สำหรับทุกโครงการ
                เรายังคงมุ่งมั่นที่จะพัฒนานักบินรุ่นต่อไปและเทคโนโลยีการบินขั้นสูงที่พวกเขาต้องพึ่งพา
                นี่คือสิ่งที่จำเป็นในการก้าวข้ามขีดจำกัดในโลกการบินที่มีภารกิจสำคัญ
              </p>
              <Link
                href='/about'
                className='btn btn--white btn--animated'
              >
                เกี่ยวกับ XP
              </Link>
            </div>
            <div className='col-1-of-2'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

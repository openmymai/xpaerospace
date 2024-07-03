import Link from 'next/link';

const Mission = () => {
  return (
    <div>
      <section
        id='mission'
        className='section-mission'
      >
        <div className='bg-video'>
          <video
            className='bg-video__content'
            autoPlay={true}
            muted
            loop
            playsInline
          >
            <source
              src='/img/video.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='u-center-text-video u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            แทนที่จะเป็นคำแถลงพันธกิจ นี่คือคำแถลงเชิงวิพากษ์ของเรา
          </h2>

          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

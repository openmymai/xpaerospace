import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <section
        id='contact'
        className='section-contact'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-2-of-3'>
              <div className='u-margin-bottom-small'>
                <p>
                  ด้วย XPAT คุณจะได้รับความเชี่ยวชาญและบริการที่ผู้ปฏิบัติงาน
                  และนักบินต้องการเพื่อก้าวข้ามความท้าทายด้านการบินที่ซับซ้อนที่สุด
                </p>
                <Link
                  href='/contactus'
                  className='btn btn--white btn--animated'
                >
                  ติดต่อเรา
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

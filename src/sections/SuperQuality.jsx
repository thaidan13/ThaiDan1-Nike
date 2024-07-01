import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Chúng tôi cung cấp cho bạn những đôi giày
          <span className='text-coral-red'> Siêu </span>
          <span className='text-coral-red'>Chất lượng </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Đảm bảo sự thoải mái và phong cách cao cấp, giày dép được chế tạo tỉ mỉ của chúng tôi được thiết kế để nâng cao trải nghiệm của bạn, mang đến cho bạn chất lượng, sự đổi mới và nét thanh lịch chưa từng có.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Sự cống hiến của chúng tôi đến từng chi tiết và sự xuất sắc đảm bảo sự hài lòng của bạn.
        </p>
        <div className='mt-11'>
          <Button label='Xem thêm' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality
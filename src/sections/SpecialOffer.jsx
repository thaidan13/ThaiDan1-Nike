import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Đề nghị 
          <span className='text-coral-red'> đặc biệt </span>
        </h2>
        <p className='mt-4 info-text'>
          Bắt tay vào hành trình mua sắm để xác định lại trải nghiệm của bạn với những ưu đãi không 
          thể tuyệt vời hơn. Từ những lựa chọn hàng đầu đến những khoản tiết kiệm đáng kinh ngạc, 
          chúng tôi mang đến những giá trị tuyệt vời khiến chúng tôi trở nên khác biệt.
        </p>
        <p className='mt-6 info-text'>
          Điều hướng một lĩnh vực khả năng được thiết kế để đáp ứng những mong muốn riêng biệt của bạn, 
          vượt qua những kỳ vọng cao cả nhất. Cuộc hành trình của bạn với chúng tôi không có gì đặc biệt.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Mua ngay' iconURL={arrowRight} />
          <Button
            label='Tìm hiểu thêm'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer
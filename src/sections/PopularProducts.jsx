import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
        Sản phẩm phổ biến <span className='text-coral-red'> phổ biến </span> của chúng tôi
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Trải nghiệm chất lượng và phong cách hàng đầu với các lựa chọn được săn đón của chúng tôi. 
        Khám phá thế giới tiện nghi, thiết kế và giá trị.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts
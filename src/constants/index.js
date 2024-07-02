import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Trang chủ" },
    { href: "#about-us", label: "Giới thiệu" },
    { href: "#products", label: "Sản phẩm" },
    { href: "#contact-us", label: "Liên hệ" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Nhãn hiệu' },
    { value: '500+', label: 'Cửa hàng' },
    { value: '250k+', label: 'Khách hàng' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Miễn phí vận chuyển",
        subtext: "Tận hưởng mua sắm liền mạch với dịch vụ vận chuyển miễn phí của chúng tôi."
    },
    {
        imgURL: shieldTick,
        label: "Thanh toán an toàn",
        subtext: "Trải nghiệm giao dịch không cần lo lắng với các tùy chọn thanh toán an toàn của chúng tôi."
    },
    {
        imgURL: support,
        label: "Hỗ trợ tận tâm",
        subtext: "Đội ngũ tận tâm của chúng tôi luôn sẵn sàng hỗ trợ bạn từng bướy."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Nâu',
        rating: 4.5,
        feedback: "Sự chú ý đến từng chi tiết và chất lượng của sản phẩm vượt quá mong đợi của tôi. Rất khuyến khích!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Vàng',
        rating: 4.5,
        feedback: "Sản phẩm không chỉ đáp ứng mà còn vượt quá sự mong đợi của tôi. Tôi chắc chắn sẽ là khách hàng quay trở lại!"
    }
];


export const footerLinks = [
    {
        title: "Sản phẩm",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Hỗ trợ",
        links: [
            { name: "Giới thiệu", link: "/" },
            { name: "Câu hỏi thường gặp", link: "/" },
            { name: "Hoạt động", link: "/" },
            { name: "Chính sách bảo mật", link: "/" },
            { name: "Chính sách thanh toán", link: "/" },
        ],
    },
    {
        title: "Liên lạc",
        links: [
            { name: "thaidan13@nike.com", link: "mailto:thaidan13@nike.com" },
            { name: "+84969792731", link: "tel:+84969792731" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
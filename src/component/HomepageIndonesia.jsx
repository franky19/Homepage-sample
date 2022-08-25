import { FaTelegramPlane} from "react-icons/fa";
import AboutUs from "./SharedComponent/AboutUs";
import ContactUs from "./SharedComponent/ContactUs";
import Header from "./SharedComponent/Header";
import Strategy from "./SharedComponent/Strategy";

const Index = (props) => {
    return (
        <>
           <Header
                description="Kami adalah sebuah perusahaan teknologi yang berbasis bussiness oriented terbesar dan terefisien di Indonesia"
                buttonText="Lebih lanjut"
           />
            <AboutUs
                title="Apa saja Kelebihan kami ?"
                description="Kami memiliki strategi yang luar biasa dalam memajukan bisnis anda"
                descriptionSubTitle1="Setiap iterasi dalam process agile kami selesai dalam periode 2 minggu saja"
                descriptionSubTitle2="Iterasi cepat dalam process agile memungkinkan kendala di ketahui sedari dini"
                descriptionSubTitle3="Sistem product delivery kami menggunakan pipeline yang terintegrasi"
            />
            <Strategy
                  title="Strategi kami"
                  description="Kami percaya pada kekuatan pengaruh pasar, oleh karena itu kami memercayai kemampuan kami untuk menjadi market leader dengan berpegangan pada pillar-pillar berikut"
                  descriptionSubTitle1="Memiliki sebuah bussiness model tersendiri yang memiliki perbedaan dengan perusahaan yang sejenis"
                  descriptionSubTitle2="Selalu melakukan update terhadap teknologi informasi"
                  descriptionSubTitle3="Selalu berorientasi kepada bisnis, dimana semua produk yang ditawarkan itu akan dikelola sendiri oleh best talent asli dari Indonesia"
                  descriptionSubTitle4="Terobosan terbaru dan di luar kelaziman"
            />
           <ContactUs
                title="Kontak Kami"
                description="Ingin tahu lebih lanjut tentang Pojokan.io? Silahkan kirim pesan kepada kami dengan form dibawah ini"
                label1="Nama"
                InputPlaceholderName="Nama"
                label2="Email"
                InputPlaceholderEmail="email@mail.com"
                label3="Pesan Kamu"
                InputPlaceholderMessage="Pesan Kamu"
                buttonTitle="Kirim"
           />
        </>
    )
}

export default Index
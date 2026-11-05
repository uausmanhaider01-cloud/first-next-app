import Image from "next/image";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className='bg-slate-100 min-h-[calc(100vh-80px)] py-15'>
      <Container>
        <div className="overflow-hidden">
          <h1 className='text-5xl font-bold text-center text-slate-900 mb-5'>Discover Your Style, Shop Your Favorites</h1>
          <p className='text-center text-lg text-gray-600 font-medium mb-20'>Explore our exclusive collection of high-quality products at amazing prices. From everyday essentials to the latest trends, <br /> find everything you need in one place with a seamless shopping experience.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-15 max-w-6xl mx-auto'>
          <div className="">
            <Image src="/men's-fashion.jpg" alt="Men's Collection" width={500} height={500} className="w-full h-auto object-cover rounded-lg mb-5 transition-transform duration-500 ease-in-out hover:scale-103" />
            <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Men's Collection</h1>
            <p className="font-medium text-gray-600 text-xl mb-5">"Upgrade your style with our latest men's fashion collection."</p>
            <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition-transform duration-500 ease-in-out hover:bg-blue-600
            hover:-translate-y-1">Explore Collection</button>
          </div>
          <div>
            <Image src="/women's-fashion.jpg" alt="Women's Collection" width={500} height={500} className="w-full h-130 object-cover rounded-lg mb-5 transition-transform duration-500 ease-in-out hover:scale-103" />
            <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Women's Collection</h1>
            <p className="font-medium text-gray-600 text-xl mb-5">"Find comfortable, colorful and stylish outfits for little ones."</p>
            <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1">Explore Collection</button>
          </div>
          <div>
            <Image src="/kid's-fashion.jpg" alt="Kid's Collection" width={500} height={500} className="w-full h-130 object-cover rounded-lg mb-5 transition-transform duration-500 ease-in-out hover:scale-103" />
            <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Kid's Collection</h1>
            <p className="font-medium text-gray-600 text-xl mb-5">"Upgrade your style with our latest men's fashion collection."</p>
            <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1">Explore Collection</button>
          </div>
        </div>
      </Container>
    </main>
  )
}


import Image from "next/image";
import Container from "@/components/Container";
import { Truck, RefreshCcw, ShieldCheck, Gem } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-[#f5f1eb] min-h-137.5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-md font-semibold tracking-widest uppercase mb-5 text-black/70">New Collection 2026</p>
            <h1 className="text-5xl md:text-6xl leading-tight font-bold mb-6 text-[#1c1917] ">Discover Your Style, <br /> Define Your Fashion.</h1>
            <p className="text-lg leading-relaxed mb-8 text-[#292524]">
              Explore the latest fashion trends and find the perfect style
              that matches your personality.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-lg cursor-pointer hover:bg-[#292524] transition duration-400 hover:-translate-y-1">
              Shop Now
            </button>
          </div>
          <div>
            <Image src="/hero-image.jpg" width={500} height={500} className="w-full h-100 object-cover rounded-2xl transition-transform duration-500 ease-in-out hover:scale-102" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold text-[#1c1917] mb-5">Shop by Category</h1>
          <p className="text-2xl text-[#292524]">Find your perfect style</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl">
          <div className="relative h-112 group overflow-hidden rounded-xl">
            <Image src="/men-collection.jpg" alt="Men's Collection" width={500} height={500} className="object-cover w-full h-full rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-107" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to transparent rounded-2xl">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold mb-1 uppercase">Men's Collection</p>
                <h1 className="text-2xl">Little Styles, Big Smiles</h1>
                <p className="text-lg mb-3">Explore modern styles.</p>
                <button className="border px-3 py-2 rounded-lg cursor-pointer w-40">Explore Men</button>
              </div>
            </div>
          </div>
          <div className="relative h-112 group overflow-hidden rounded-xl">
            <Image src="/women-collection.jpg" alt="Men's Collection" width={500} height={500} className="object-cover w-full h-150 rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-107" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to transparent rounded-2xl">
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-semibold mb-1 uppercase">Women's Collection</h2>
                <p className="text-lg mb-3">Explore modern styles.</p>
                <button className="border px-3 py-2 rounded-lg cursor-pointer w-40">Explore Women</button>
              </div>
            </div>
          </div>
          <div className="relative h-112 group overflow-hidden rounded-xl">
            <Image src="/kid-collection.jpg" alt="Men's Collection" width={500} height={500} className="object-cover w-full h-full rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-107" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to transparent rounded-2xl">
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-semibold mb-1 uppercase">Kid's Collection</h2>
                <p className="text-lg mb-3">Explore modern styles.</p>
                <button className="border px-3 py-2 rounded-lg cursor-pointer w-40">Explore Kid</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff7ed] py-16">
        <div className="text-center">
          <p className="text-[#c54a17] text-xl uppercase mb-3">The Fashion Experience</p>
          <h1 className="text-5xl text-[#1c1917] mb-3">Why Choose Us?</h1>
          <p className="text-xl text-[#57534e] mb-10">We bring you style, comfort and quality with every purchase.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20 max-w-6xl mx-auto">
          <div className="bg-orange-100 py-20 rounded-xl text-center transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="w-14 h-14 bg-orange-300 flex items-center justify-center rounded-full shrink-0 mx-auto mb-5">
              <Truck size={40} className="text-orange-600" />
            </div>
            <h1 className="text-3xl text-[#1c1917] font-semibold mb-2">Free Shipping</h1>
            <p className="text-[#57534e] text-xl">Free delivery on your orders.</p>
          </div>
          <div className="bg-orange-100 py-20 rounded-xl text-center transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="w-14 h-14 bg-orange-300 flex items-center justify-center rounded-full shrink-0 mx-auto mb-5">
              <RefreshCcw size={32} className="text-orange-600" />
            </div>
            <h1 className="text-3xl text-[#1c1917] font-semibold mb-2">Easy Returns</h1>
            <p className="text-[#57534e] text-xl">Shop confidently with our easy return policy.</p>
          </div>
          <div className="bg-orange-100 py-20 rounded-xl text-center transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="w-14 h-14 bg-orange-300 flex items-center justify-center rounded-full shrink-0 mx-auto mb-5">
              <ShieldCheck size={32} className="text-orange-600" />
            </div>
            <h1 className="text-3xl text-[#1c1917] font-semibold mb-2">Secure Payments</h1>
            <p className="text-[#57534e] text-xl">Your payments are safe and protected.</p>
          </div>
          <div className="bg-orange-100 py-20 rounded-xl text-center transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="w-14 h-14 bg-orange-300 flex items-center justify-center rounded-full shrink-0 mx-auto mb-5">
              <Gem size={32} className="text-orange-600" />
            </div>
            <h1 className="text-3xl text-[#1c1917] font-semibold mb-2">Premium Quality</h1>
            <p className="text-[#57534e] text-xl">Discover quality fashion for everyday style.</p>
          </div>
        </div>
      </section>
    </main>
  )
}


// <Container>
//   <div className="overflow-hidden">
//     <h1 className='text-5xl font-bold text-center text-slate-900 mb-5'>Discover Your Style, Shop Your Favorites</h1>
//     <p className='text-center text-lg text-gray-600 font-medium mb-20'>Explore our exclusive collection of high-quality products at amazing prices. From everyday essentials to the latest trends, <br /> find everything you need in one place with a seamless shopping experience.</p>
//   </div>
//   <div className='grid grid-cols-1 md:grid-cols-3 gap-15 max-w-6xl mx-auto'>
//     <div className="transition-transform duration-600 ease-in-out hover:scale-102">
//       <Image src="/men's-fashion.jpg" alt="Men's Collection" width={500} height={500} className="w-full h-auto object-cover rounded-lg mb-5" />
//       <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Men's Collection</h1>
//       <p className="font-medium text-gray-600 text-xl mb-5">"Upgrade your style with our latest men's fashion collection."</p>
//       <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition-transform duration-500 ease-in-out hover:bg-blue-600
//       hover:-translate-y-1">Explore Collection</button>
//     </div>
//     <div className="transition-transform duration-600 ease-in-out hover:scale-102">
//       <Image src="/women's-fashion.jpg" alt="Women's Collection" width={500} height={500} className="w-full h-130 object-cover rounded-lg mb-5" />
//       <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Women's Collection</h1>
//       <p className="font-medium text-gray-600 text-xl mb-5">"Find comfortable, colorful and stylish outfits for little ones."</p>
//       <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1">Explore Collection</button>
//     </div>
//     <div className="transition-transform duration-600 ease-in-out hover:scale-102">
//       <Image src="/kid's-fashion.jpg" alt="Kid's Collection" width={500} height={500} className="w-full h-130 object-cover rounded-lg mb-5" />
//       <h1 className="font-bold text-3xl text-slate-900 mb-3 ">Kid's Collection</h1>
//       <p className="font-medium text-gray-600 text-xl mb-5">"Upgrade your style with our latest men's fashion collection."</p>
//       <button className="bg-blue-500 rounded-xl w-50 py-3 text-lg font-medium text-white transition duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1">Explore Collection</button>
//     </div>
//   </div>
// </Container>



// {<div className="flex gap-6">
//   <Truck size={32} className="text-orange-600" />
//   <RefreshCcw size={32} className="text-orange-600" />
//   <ShieldCheck size={32} className="text-orange-600" />
//   <Gem size={32} className="text-orange-600" />
// </div>}
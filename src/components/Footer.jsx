import Image from "next/image"
import Link from "next/link";
import Container from "@/components/Container";
import {
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#1c1917] shadow-sm h-full py-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Image src="/fashion-logo-white.png" width={300} height={50} />
                        <p className="px-18 text-[#d6d3d1] text-xl mb-10">Discover your style. Find your fashion.</p>
                        <div className="flex items-center gap-4 text-2xl text-gray-300 px-18">
                            <FaInstagram className="hover:text-orange-500 transition-colors cursor-pointer" />
                            <FaFacebookF className="hover:text-orange-500 transition-colors cursor-pointer" />
                            <FaXTwitter className="hover:text-orange-500 transition-colors cursor-pointer" />
                            <FaYoutube className="hover:text-orange-500 transition-colors cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-5xl text-white mb-5">Quick Links</h1>
                        <ul className="font-medium text-xl text-[#d6d3d1] leading-loose">
                            <li><Link href="/" className="transition duration-300 hover:text-orange-500">Home</Link></li>
                            <li><Link href="/product" className="transition duration-300 hover:text-orange-500">Shop</Link></li>
                            <li><Link href="/about" className="transition duration-300 hover:text-orange-500">About</Link></li>
                            <li><Link href="/contact" className="transition duration-300 hover:text-orange-500">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-5xl text-white mb-5">Shop</h1>
                        <ul className="font-medium text-xl text-[#d6d3d1] leading-loose">
                            <li><Link href="" className="transition duration-300 hover:text-orange-500">Men's Collection</Link></li>
                            <li><Link href="" className="transition duration-300 hover:text-orange-500">Women's Collection</Link></li>
                            <li><Link href="" className="transition duration-300 hover:text-orange-500">Kid's Collection</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

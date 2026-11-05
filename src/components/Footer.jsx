import Image from "next/image"
import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
    return (
        <footer className="bg-slate-900 shadow-sm h-full py-10">
            <Container>
                <div className="w-fit grid grid-cols-1 md:grid-cols-2">
                    <Link href="/">
                        <Image src="/logo-fashion.png" alt="Logo" width={300} height={50} />
                    </Link>
                    <div>
                    <h1 className="text-4xl font-bold text-slate-400 mb-4">Quick Links</h1>
                    <nav>
                        <ul className="font-medium text-xl text-white">
                        <li><Link href="/" className="transition duration-300 hover:text-gray-300">Home</Link></li>
                        <li><Link href="/about" className="transition duration-300 hover:text-gray-300">About</Link></li>
                        <li><Link href="/product" className="transition duration-300 hover:text-gray-300">Product</Link></li>
                        <li><Link href="/contact" className="transition duration-300 hover:text-gray-300">Contact</Link></li>
                    </ul>
                    </nav>
                    </div>
                    {/* <p className=' text-lg text-gray-400 font-medium'>Discover your style. Find your fashion.</p> */}
                </div>
            </Container>
        </footer>
    )
}

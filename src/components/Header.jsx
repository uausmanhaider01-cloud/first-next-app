import Image from "next/image"
import Link from "next/link";
import Container from "@/components/Container";

export default function Header() {
    return (
        <header className="bg-slate-900 shadow-sm h-fit">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo-fashion.png" alt="Logo" width={300} height={50} />
                    </Link>
                    <ul className="flex gap-10 font-medium text-xl text-white">
                        <li><Link href="/" className="transition duration-300 hover:text-gray-300">Home</Link></li>
                        <li><Link href="/about" className="transition duration-300 hover:text-gray-300">About</Link></li>
                        <li><Link href="/product" className="transition duration-300 hover:text-gray-300">Product</Link></li>
                        <li><Link href="/contact" className="transition duration-300 hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

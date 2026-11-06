import Image from "next/image"
import Link from "next/link";
import Container from "@/components/Container";

export default function Header() {
    return (
        <header className=" shadow-sm z-50 sticky top-0 backdrop-blur-sm h-fit">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/fashion-logo.png" alt="Logo" width={300} height={50} />
                    </Link>
                    <ul className="flex gap-10 font-medium text-xl text-black">
                        <li><Link href="/" className="transition duration-300 hover:text-orange-500">Home</Link></li>
                        <li><Link href="/product" className="transition duration-300 hover:text-orange-500">Shop</Link></li>
                        <li><Link href="/about" className="transition duration-300 hover:text-orange-500">About</Link></li>
                        <li><Link href="/contact" className="transition duration-300 hover:text-orange-500">Contact</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

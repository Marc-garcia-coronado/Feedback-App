import Image from "next/image";
import Link from "next/link";
import {Twitter, Facebook, Linkedin} from "lucide-react";

export default function SiteFooter() {

  return (
    <footer className="border-t">
      <nav className="container flex flex-col md:flex-row md:justify-between py-10 gap-10">
        <div className="flex flex-col gap-3">
          <Link className='flex items-center gap-3' href='/'>
            <Image alt='kindred logo' src='/kindred-logo.png' width={40} height={40} />
            <p>Publicis LePont</p>
          </Link>
          <p className=''>A product by Publicis LePont</p>
        </div>
        <div className="flex justify-between gap-10">
          <ul className="grid md:grid-cols-3 md:flex md:flex-col gap-3">
            <li><Link href='/' className='hover:underline underline-offset-8'>Get started</Link></li>
            <li><Link href='/feedback-form/1' className='hover:underline underline-offset-8'>Give feedback</Link></li>
            <li><Link href='/feedback-results' className='hover:underline underline-offset-8'>Results</Link></li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li><a href="https://twitter.com"><Twitter className='hover:scale-105'/></a></li>
            <li><a href="https://facebook.com"><Facebook className='hover:scale-105'/></a></li>
            <li><a href="https://linkedin.com"><Linkedin className='hover:scale-105'/></a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}
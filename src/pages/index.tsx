/* rebased image */
import Head from 'next/head'
import Image from 'next/image'

import siteConfig from '../../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      {/* Rebased background image */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src="https://cdn.discordapp.com/attachments/1382939841649578098/1494901106768220262/dxrsrpq.jpg?ex=69e44aa5&is=69e2f925&hm=db1918effd1c34d3d9c0317677cb03db8837f66a0e304db5566509223ac91724&"
          alt="background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      <main className="flex w-full flex-1 flex-col bg-black/40 backdrop-blur-sm">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between px-4 sm:px-0 sm:pl-1">
            <Breadcrumb />
            <SwitchLayout />
          </nav>
          <FileListing />
        </div>
      </main>

      <Footer />
    </div>
  )
}

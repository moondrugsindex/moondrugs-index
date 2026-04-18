/* Yep, another rebased*/
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import siteConfig from '../../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Folders() {
  const { query } = useRouter()

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      {/* Very background image */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src="https://wq64c-my.sharepoint.com/personal/nhatnam_repo_wq64c_onmicrosoft_com/_layouts/15/download.aspx?SourceUrl=%2Fpersonal%2Fnhatnam%5Frepo%5Fwq64c%5Fonmicrosoft%5Fcom%2FDocuments%2F20240217%5F134724%5F2%2Ejpg"
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
          <nav className="mb-4 flex items-center justify-between space-x-3 px-4 sm:px-0 sm:pl-1">
            <Breadcrumb query={query} />
            <SwitchLayout />
          </nav>
          <FileListing query={query} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

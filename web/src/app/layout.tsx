import './globals.css'
import { ReactNode } from 'react';
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { EmptyMemories } from '@/components/EmptyMemories';
import { Hero } from '@/components/Hero';
import { Profile } from '@/components/Profile';
import { Signin } from '@/components/Signin';
import { Copyright } from '@/components/Copyright';
import { cookies } from 'next/headers';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
});

const baijamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree'
});

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({children}: {children: ReactNode}) {
  const isAutenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-grey-900 text-grey-100`}>
            <main className="grid min-h-screen grid-cols-2">
              <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
                <div className="absolute right-0  top-1/2 h-[188px] w-[136px] -translate-y-1/2  rounded-full bg-purple-700 opacity-40 blur-full"/>
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>
              
                {isAutenticated ? <Profile /> : <Signin />}

                <Hero />

                <Copyright />
              </div>
              
              <div className="flex flex-col overflow-y-scroll max-heigth-scream bg-[url(../assets/bg-stars.svg)] bg-cover">
                {children}  
              </div>
            </main>
        </body>
    </html>
  )
}

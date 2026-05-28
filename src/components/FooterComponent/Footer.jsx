import React from 'react'

function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 bg-white'>
      <div className='w-full !px-6 sm:!px-10 lg:!px-16 !py-6 flex flex-col md:flex-row items-center justify-between !gap-6 md:!gap-4'>

        {/* Brand */}
        <div className='flex flex-col items-center md:items-start !gap-1'>
          <h2 className='text-xl sm:text-2xl font-bold !m-0'>
            SMART{' '}
            <span className='bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent'>
              Buy
            </span>
          </h2>
          <p className='text-gray-500 text-xs sm:text-sm text-center md:text-left !m-0'>
            Shopping powered by AI. Discover smarter, shop faster.
          </p>
        </div>

        {/* Nav Links */}
        <div className='flex flex-wrap items-center justify-center !gap-4 sm:!gap-6 md:!gap-8 text-sm text-gray-600'>
          <a href='#' className='hover:text-rose-500 transition'>Home</a>
          <a href='#' className='hover:text-rose-500 transition'>Products</a>
          <a href='#' className='hover:text-rose-500 transition'>About</a>
          <a href='#' className='hover:text-rose-500 transition'>Contact</a>
        </div>

        {/* Copyright */}
        <p className='text-xs sm:text-sm text-gray-400 text-center md:text-right !m-0'>
          © 2025 SmartBuy. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
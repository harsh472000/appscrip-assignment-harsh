import React from 'react'
import '../styles/footer.css'
import Flag from '../assets/Flag.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTERLEFTLINKS } from '@/constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container footer__information'>
            <div className='footer__upperContent'>
                <div className='upperContent__leftSide'>
                    <div className='leftSide__title font-bold'>Be the first to know</div>
                    <div className='leftSide__subTitle'>Sign up for updates from mettā muse.</div>
                    <div className='leftSide__inputButton'>
                        <input type="text" placeholder='Enter your e-mail...'/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='upperContent__rightSide'>
                    <div className='rightSide__contactUs font-bold'>CONTACT US</div>
                    <div className='rightSide__mobileNo'>+44 221 133 5360</div>
                    <div className='rightSide__email'>customercare@mettamuse.com</div>
                    <div className='rightSide__currency'><Image src={Flag} alt='flag' /> Currency</div>
                    <div className='rightSide__note'>Transactions will be completed in Euros and a currency reference is available on hover.</div>
                </div>
            </div>
            <div className='footer__lowerContent'>
                <div className='lowerContent__leftSide'>
                    <div className='leftSide__title font-bold'>mettā muse</div>
                    <ul>
                        {
                            FOOTERLEFTLINKS.map((footerlink)=>{
                                return (
                                    <li key={footerlink.key}><Link href={footerlink.href}>{footerlink.label}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='lowerContent__middle'></div>
                <div className='lowerContent__rightSide'></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

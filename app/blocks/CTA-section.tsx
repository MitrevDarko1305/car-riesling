import { ArrowsRightLeftIcon, CloudArrowUpIcon, CurrencyEuroIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import ContactForm from './form'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-foreground px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-normal text-accent">Over twenty years of experience</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Everything you need all in one place
              </h1>
              <p className="mt-6 text-[14px] text-light/50">
                From financing to insurance, We handle the details so you can focus on finding the right car. A brand-independent, family-run dealership built on trust.
              </p>
            </div>
          </div>
        </div>
       <div className="relative mt-8 lg:-mt-12 lg:-ml-16 p-4 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden">
        <img
        alt="Car-Riesling CTA"
        src="/Hero-Images/CTA-Image.png"
       className="w-full max-w-2xl  bg-gray-800 shadow-xl ring-1 ring-white/10"
       />
      </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-[14px] text-light/50 lg:max-w-lg">
              <p>
                The Car-Riesling car center in Stuttgart, Baden-Würrtemberg, is a brand-independent, family-run car dealership with over 20 years of experience. We offer a complete range of car services for both new and used cars.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <CurrencyEuroIcon aria-hidden="true" className="mt-1 size-5 flex-none text-accent bg-light" />
                  <span className='text-light/50'>
                    <strong className="font-semibold text-light">Flexible financing </strong> Comprehensive financing options
                    through trusted partners like Santander, ADAC Bank, and ING DiBa - tailored to you 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-accent bg-light" />
                  <span>
                    <strong className="font-semibold text-white">Insurance bundled </strong> All types of insurance available in-house, with a bundle discount of up to 20 percent.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowsRightLeftIcon aria-hidden="true" className="mt-1 size-5 flex-none text-accent bg-light" />
                  <span>
                    <strong className="font-semibold text-white">Trade-in and brokarage</strong> Looking to sell or use your current vehicle as a deposit?
                    We offer trade-in and used car brokarage services.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">Available when you need us</h2>
              <p className="mt-6">
                We&apos;re available daily from 8:00 a.m. to 10:00 p.m. 
                Whether you&apos;re buying, selling, or trading in — we&apos;re 
                here to help. Reach us directly via <br /> WhatsApp at 
                +49 172-10 58 392.
              </p>
            </div>
          </div>
        </div>
         <ContactForm />
      </div>
    </div>
  )
}

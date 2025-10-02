import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import navData from '../data/navData'
import images from '../data/images'
import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

function ContactPage() {
  const contactMethods = [
    {
      id: 'phone',
      title: 'Call us',
      value: navData?.topbar?.phone?.label,
      href: navData?.topbar?.phone?.raw ? `tel:${navData.topbar.phone.raw}` : undefined,
      icon: Phone,
    },
    {
      id: 'email',
      title: 'Email us',
      value: navData?.topbar?.email?.label,
      href: navData?.topbar?.email?.raw ? `mailto:${navData.topbar.email.raw}` : undefined,
      icon: Mail,
    },
    {
      id: 'whatsapp',
      title: 'Chat on WhatsApp',
      value: navData?.topbar?.whatsapp?.number || navData?.topbar?.whatsapp?.label,
      href: navData?.topbar?.whatsapp?.link,
      icon: FaWhatsapp,
    },
  ]

  return (
    <>
        <Navbar/>
        <Hero
          bg={images.home.about}
          title="Let’s Build Your Next Project"
          description="Share your requirements and our consultants will get back within one business day with next steps."
          breadcrumb="Home / Contact"
          heightClass="h-[50vh]"
        />
        <ContactForm />
        <section className="bg-slate-50 py-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Get in touch</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Prefer another channel? Reach our team directly.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map(({ id, title, value, href, icon: Icon }) => (
                <div
                  key={id}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</span>
                    {href ? (
                      <a href={href} className="text-lg font-semibold text-slate-900 hover:text-indigo-600">
                        {value}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold text-slate-900">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default ContactPage

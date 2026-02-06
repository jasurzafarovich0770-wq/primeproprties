'use client'

import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.contactTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.getInTouch}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.contactSubtitle}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <MapPin className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.visitOffice}</h3>
                  <p className="text-gray-600">
                    {t.officeAddress1}<br />
                    {t.officeAddress2}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Phone className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.callUs}</h3>
                  <p className="text-gray-600">{t.phoneNumber1}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Mail className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.emailUs}</h3>
                  <p className="text-gray-600">{t.emailAddress}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Clock className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.officeHours}</h3>
                  <div className="text-gray-600">
                    <p>{t.monday}</p>
                    <p>{t.saturday}</p>
                    <p>{t.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.whyChoose}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t.reason1}</li>
                <li>{t.reason2}</li>
                <li>{t.reason3}</li>
                <li>{t.reason4}</li>
                <li>{t.reason5}</li>
                <li>{t.reason6}</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.findUs}</h2>
          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg">{t.mapPlaceholder}</p>
              <p className="text-sm">{t.officeAddress1}, {t.officeAddress2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

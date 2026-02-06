'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface FormData {
  name: string
  phone: string
  message: string
  projectId?: string
}

interface ContactFormProps {
  projectId?: string
  projectTitle?: string
}

export default function ContactForm({ projectId, projectTitle }: ContactFormProps) {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime] = useState(Date.now()) // Track when form loaded
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Client-side validation
      if (data.name.length < 2 || data.name.length > 100) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      if (!/^[\+]?[1-9][\d]{0,15}$/.test(data.phone)) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name.trim().substring(0, 100),
          phone: data.phone.trim().substring(0, 20),
          message: data.message?.trim().substring(0, 500) || null,
          projectId: projectId || null,
          timestamp: formLoadTime, // Send form load time for bot detection
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold mb-6">
        {projectTitle ? `${t.interestedIn} ${projectTitle}?` : t.getInTouch}
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field - hidden from users, bots will fill it */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
          aria-hidden="true"
        />
        
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t.fullName} *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { 
              required: t.nameRequired || 'Name is required',
              minLength: { value: 2, message: t.nameMinLength || 'Name must be at least 2 characters' }
            })}
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder={t.enterName}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t.phoneNumber} *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { 
              required: t.phoneRequired || 'Phone number is required',
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: t.phoneInvalid || 'Please enter a valid phone number'
              }
            })}
            className={`input ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="textarea"
            placeholder={projectTitle 
              ? `${t.interestedIn} ${projectTitle}...`
              : t.tellRequirements
            }
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              {t.sending}
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              {t.sendMessage}
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 p-6 rounded-xl"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-bold text-green-900 mb-2">
                  {t.successTitle}
                </h4>
                <p className="text-green-700 mb-3">
                  {t.successMessage}
                </p>
                <div className="bg-white/50 rounded-lg p-3 text-sm text-green-800">
                  <p className="font-medium mb-1">✅ {t.successDetail1}</p>
                  <p className="font-medium">📱 {t.successDetail2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-500 p-6 rounded-xl"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle size={28} className="text-red-600" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-bold text-red-900 mb-2">
                  {t.errorTitle}
                </h4>
                <p className="text-red-700">
                  {t.errorMessage}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
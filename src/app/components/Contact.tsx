"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Briefcase, DollarSign, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "medium",
    timeline: "",
  })
  const [projectBrief, setProjectBrief] = useState("")
  const { t } = useLanguage()

  // Generate project brief automatically
  useEffect(() => {
    if (formData.projectType && formData.budget && formData.timeline) {
      const projectTypeName = t(`contact.projectTypes.${formData.projectType}`)
      const budgetRange = t(`contact.budgetRanges.${formData.budget}`)
      const timelineText = t(`contact.timelineOptions.${formData.timeline}`)
      
      const brief = `${t('contact.projectBriefGenerated')}\n\n• ${t('contact.projectType')}: ${projectTypeName}\n• ${t('contact.budget')}: ${budgetRange}\n• ${t('contact.timeline')}: ${timelineText}\n\n${t('contact.projectBriefInfo')}`
      
      setProjectBrief(brief)
      setFormData(prev => ({ ...prev, subject: `${projectTypeName} - ${budgetRange}` }))
    } else {
      setProjectBrief("")
    }
  }, [formData.projectType, formData.budget, formData.timeline, t])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Include project brief in the message
    const fullMessage = projectBrief ? `${projectBrief}\n\n--- Additional Details ---\n${formData.message}` : formData.message
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: fullMessage,
        }),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: "", email: "", subject: "", message: "", projectType: "", budget: "medium", timeline: "" })
          setProjectBrief("")
        }, 3000)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = ['wordpress', 'shopify', 'custom', 'redesign', 'maintenance', 'consulting']
  const budgetRanges = ['small', 'medium', 'large', 'enterprise']
  const timelineOptions = ['asap', 'week', 'month', 'quarter', 'flexible']

  return (
    <section id="contact" className="py-5 lg:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-muted/30 p-8 rounded-2xl border border-border/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{t('contact.success')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Smart Project Form Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {t('contact.projectDetails')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project Type Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {t('contact.projectType')}
                      </Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between bg-background"
                            type="button"
                          >
                            {formData.projectType ? t(`contact.projectTypes.${formData.projectType}`) : t('contact.projectTypePlaceholder')}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {projectTypes.map((type) => (
                            <DropdownMenuItem 
                              key={type}
                              onClick={() => handleSelectChange('projectType', type)}
                              className="cursor-pointer"
                            >
                              {t(`contact.projectTypes.${type}`)}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Budget Range Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {t('contact.budget')}
                      </Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between bg-background"
                            type="button"
                          >
                            {t(`contact.budgetRanges.${formData.budget}`)}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {budgetRanges.map((range) => (
                            <DropdownMenuItem 
                              key={range}
                              onClick={() => handleSelectChange('budget', range)}
                              className="cursor-pointer"
                            >
                              {t(`contact.budgetRanges.${range}`)}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Timeline Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {t('contact.timeline')}
                      </Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between bg-background"
                            type="button"
                          >
                            {formData.timeline ? t(`contact.timelineOptions.${formData.timeline}`) : t('contact.timelinePlaceholder')}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {timelineOptions.map((option) => (
                            <DropdownMenuItem 
                              key={option}
                              onClick={() => handleSelectChange('timeline', option)}
                              className="cursor-pointer"
                            >
                              {t(`contact.timelineOptions.${option}`)}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Auto-generated Project Brief */}
                  {projectBrief && (
                    <motion.div
                      className="p-4 bg-primary/10 rounded-lg border border-border/50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        {t('contact.projectBrief')}
                      </h4>
                      <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
                        {projectBrief}
                      </pre>
                    </motion.div>
                  )}
                </div>

                {/* Traditional Contact Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('contact.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.subject')}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t('contact.subjectPlaceholder')}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="outline"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.sendButton')}
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
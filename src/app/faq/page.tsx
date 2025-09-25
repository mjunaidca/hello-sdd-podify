'use client'

import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Mail } from 'lucide-react'
import faqData from '@/content/faq.json'

interface FAQItem {
  question: string
  answer: string
  category: string
  order: number
}

export default function FAQPage() {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqItems = faqData as FAQItem[]

  // Group FAQs by category
  const groupedFAQs = faqItems.reduce((acc, item, index) => {
    const category = item.category || 'General'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push({ ...item, index })
    return acc
  }, {} as Record<string, (FAQItem & { index: number })[]>)

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Got Questions? We&apos;ve Got Answers.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Hello A Podcast,
            our content, and how to get the most out of our episodes.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(groupedFAQs).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary border-b pb-2">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.index} className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.index)}
                      className="w-full text-left"
                      aria-expanded={openItems.has(item.index)}
                      aria-controls={`faq-answer-${item.index}`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold pr-4">
                            {item.question}
                          </CardTitle>
                          {openItems.has(item.index) ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                    </button>
                    {openItems.has(item.index) && (
                      <CardContent
                        id={`faq-answer-${item.index}`}
                        className="pt-0 border-t"
                      >
                        <CardDescription className="text-base leading-relaxed">
                          {item.answer}
                        </CardDescription>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="text-lg text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? We&apos;d love to hear from you.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hello@hello-a-podcast.com" className="inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

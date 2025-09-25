'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AudioPlayer } from '@/components/audio-player'
import { ArrowLeft, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react'

interface Episode {
  number: number
  title: string
  description: string
  duration: string
  publishDate: string
  coverImageUrl: string
  audioUrl: string
  slug: string
  featured: boolean
}

interface EpisodeContentProps {
  episode: Episode
  slug: string
}

export function EpisodeContent({ episode, slug }: EpisodeContentProps) {
  const shareUrl = `https://hello-a-podcast.vercel.app/episodes/${slug}`

  const handleShare = async (platform: string) => {
    const text = `Check out "${episode.title}" from Hello A Podcast!`
    const url = encodeURIComponent(shareUrl)

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
    }
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Back Navigation */}
      <div className="container">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Episodes
          </Link>
        </Button>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Episode Header */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">Episode {episode.number}</Badge>
                <span className="text-muted-foreground">{episode.duration}</span>
                <span className="text-muted-foreground">
                  {new Date(episode.publishDate).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight">{episode.title}</h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {episode.description}
              </p>
            </div>

            {/* Audio Player */}
            <AudioPlayer
              src={episode.audioUrl}
              title={episode.title}
              duration={episode.duration}
            />

            {/* Share Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Share this episode</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl)
                    // You could add a toast notification here
                  }}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Episode Cover */}
            <Card>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={episode.coverImageUrl}
                  alt={episode.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </Card>

            {/* Episode Info */}
            <Card>
              <CardHeader>
                <CardTitle>Episode Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Duration</h4>
                  <p className="text-sm text-muted-foreground">{episode.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Published</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(episode.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

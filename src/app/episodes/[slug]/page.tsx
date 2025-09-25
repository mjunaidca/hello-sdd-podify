import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EpisodeContent } from '@/components/episode-content'
import episodesData from '@/content/episodes.json'

interface EpisodePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: EpisodePageProps) {
  const { slug } = await params
  const episodes = episodesData as Array<{
    number: number
    title: string
    description: string
    duration: string
    publishDate: string
    coverImageUrl: string
    audioUrl: string
    slug: string
    featured: boolean
  }>

  const episode = episodes.find(ep => ep.slug === slug)

  if (!episode) {
    return {
      title: 'Episode Not Found',
    }
  }

  return {
    title: `${episode.title} - Hello A Podcast`,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: [episode.coverImageUrl],
    },
  }
}

export async function generateStaticParams() {
  const episodes = episodesData as Array<{
    number: number
    title: string
    description: string
    duration: string
    publishDate: string
    coverImageUrl: string
    audioUrl: string
    slug: string
    featured: boolean
  }>

  return episodes.map((episode) => ({
    slug: episode.slug,
  }))
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = await params
  const episodes = episodesData as Array<{
    number: number
    title: string
    description: string
    duration: string
    publishDate: string
    coverImageUrl: string
    audioUrl: string
    slug: string
    featured: boolean
  }>

  const episode = episodes.find(ep => ep.slug === slug)

  if (!episode) {
    notFound()
  }

  return (
    <div>
      {/* Episode Cover for Metadata */}
      <div style={{ display: 'none' }}>
        <Image
          src={episode.coverImageUrl}
          alt={episode.title}
          width={1200}
          height={630}
          unoptimized
        />
      </div>
      <EpisodeContent episode={episode} slug={slug} />
    </div>
  )
}

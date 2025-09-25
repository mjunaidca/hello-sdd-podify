import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'
import episodesData from '@/content/episodes.json'

export default function HomePage() {
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

  const featuredEpisode = episodes.find(episode => episode.featured)
  const regularEpisodes = episodes.filter(episode => !episode.featured).slice(0, 19)

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      {featuredEpisode && (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Featured Episode
                </Badge>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                    {featuredEpisode.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                    {featuredEpisode.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Episode {featuredEpisode.number}</span>
                    <span>•</span>
                    <span>{featuredEpisode.duration}</span>
                    <span>•</span>
                    <span>{new Date(featuredEpisode.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    <Play className="mr-2 h-5 w-5" />
                    Play Episode
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={`/episodes/${featuredEpisode.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                  <Image
                    src={featuredEpisode.coverImageUrl}
                    alt={featuredEpisode.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Episodes List */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">All Episodes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of episodes covering modern web development,
            from React and Next.js to performance optimization and accessibility.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularEpisodes.map((episode) => (
            <Card key={episode.number} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <Image
                  src={episode.coverImageUrl}
                  alt={episode.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Episode {episode.number}</span>
                  <span>{episode.duration}</span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/episodes/${episode.slug}`}>
                    {episode.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {episode.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(episode.publishDate).toLocaleDateString()}
                  </span>
                  <Button size="sm" asChild>
                    <Link href={`/episodes/${episode.slug}`}>
                      Listen
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

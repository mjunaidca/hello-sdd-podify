import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  const hosts = [
    {
      name: 'Alex Chen',
      role: 'Host & Frontend Engineer',
      bio: 'Alex is a passionate frontend engineer with over 8 years of experience building web applications. They specialize in React, Next.js, and modern web technologies, and love sharing knowledge about web development best practices.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Sarah Johnson',
      role: 'Host & UX Designer',
      bio: 'Sarah brings a design-focused perspective to web development. With a background in both design and development, she excels at creating beautiful, accessible, and user-friendly web experiences.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    },
  ]

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            About Hello A
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Building the Future of Web Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hello A is a podcast dedicated to modern web development, where we explore
            cutting-edge technologies, share best practices, and discuss the evolving
            landscape of web applications.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                We believe that great web development is about more than just writing code—
                it&apos;s about creating meaningful experiences that work for everyone. Our mission
                is to empower developers with the knowledge, tools, and inspiration they need
                to build better web applications.
              </p>
              <p className="text-lg leading-relaxed">
                Through in-depth discussions, practical examples, and expert insights, we
                explore the latest trends and technologies in web development, from React and
                Next.js to performance optimization, accessibility, and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Cover */}
      <section className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">What We Cover</h2>
            <p className="text-xl text-muted-foreground">
              From foundational concepts to advanced techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep dives into React, Next.js, TypeScript, and modern frontend frameworks.
                  We discuss component architecture, state management, and rendering strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about Core Web Vitals, bundle optimization, image optimization,
                  and caching strategies to make your applications blazingly fast.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility & UX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building inclusive web experiences with WCAG compliance, keyboard navigation,
                  screen reader support, and thoughtful user experience design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modern Development Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore static site generation, edge computing, testing strategies,
                  and development workflows that scale with your applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Your Hosts</h2>
            <p className="text-xl text-muted-foreground">
              The voices behind Hello A
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hosts.map((host, index) => (
              <Card key={index}>
                <div className="aspect-square relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={host.avatar}
                    alt={host.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle>{host.name}</CardTitle>
                  <CardDescription className="text-base">{host.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {host.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

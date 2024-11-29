"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Plus } from 'lucide-react'

interface AudioTrack {
  title: string
  artist: string
  imageUrl: string
}

const audioTracks: AudioTrack[] = [
  {
    title: "React Rendezvous",
    artist: "Ethan Byte",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Async Awakenings",
    artist: "Nina Netcode",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "The Art of Reusability",
    artist: "Lena Logic",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Stateful Symphony",
    artist: "Beth Binary",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
]

export function AudioSection() {
  return (
    <div className="bg-background">
      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="music" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add music
        </Button>
      </div>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Listen Now</h2>
          <p className="text-muted-foreground mb-6">Top picks for you. Updated daily.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audioTracks.map((track) => (
              <Card key={track.title} className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={track.imageUrl}
                      alt={track.title}
                      className="object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        size="icon"
                        variant="secondary"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Made for You</h2>
          <p className="text-muted-foreground mb-6">Your personal playlists. Updated daily.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audioTracks.map((track) => (
              <Card key={track.title} className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={track.imageUrl}
                      alt={track.title}
                      className="object-cover transition-transform group-hover:scale-105"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        size="icon"
                        variant="secondary"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.artist}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


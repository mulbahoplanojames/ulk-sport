"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Play, Calendar, Download, Share2, Heart } from "lucide-react";
import Image from "next/image";
import { photos, videos } from "@/data/gallery";

export default function GalleryClient() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  //   const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
  //     null
  //   );

  const filteredPhotos = photos.filter((photo) => {
    const sportMatch =
      selectedSport === "all" || photo.sport.toLowerCase() === selectedSport;
    const categoryMatch =
      selectedCategory === "all" || photo.category === selectedCategory;
    return sportMatch && categoryMatch;
  });

  const filteredVideos = videos.filter((video) => {
    const sportMatch =
      selectedSport === "all" || video.sport.toLowerCase() === selectedSport;
    const categoryMatch =
      selectedCategory === "all" || video.category === selectedCategory;
    return sportMatch && categoryMatch;
  });
  return (
    <>
      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="mixed">Mixed Sports</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="match">Match Photos</SelectItem>
                  <SelectItem value="celebration">Celebrations</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="team">Team Photos</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                  <SelectItem value="highlights">Highlights</SelectItem>
                  <SelectItem value="compilation">Compilations</SelectItem>
                  <SelectItem value="interview">Interviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="photos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
            <TabsTrigger value="videos">Video Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
              <p className="text-muted-foreground">
                Browse through our collection of memorable moments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <Dialog key={photo.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow p-0">
                      <div className="relative h-64">
                        <Image
                          src={photo.image || "/placeholder.svg"}
                          alt={photo.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary">{photo.sport}</Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className="bg-white/80">
                            <Camera className="w-3 h-3 mr-1" />
                            Photo
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {photo.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {photo.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{photo.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{photo.likes}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <div className="relative h-96">
                        <Image
                          src={photo.image || "/placeholder.svg"}
                          alt={photo.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{photo.title}</h3>
                        <p className="text-muted-foreground">
                          {photo.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>By {photo.photographer}</span>
                            <span>{photo.date}</span>
                            <Badge variant="outline">{photo.sport}</Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Heart className="w-4 h-4 mr-1" />
                              {photo.likes}
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
              <p className="text-muted-foreground">
                Watch highlights, interviews, and behind-the-scenes content
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow p-0"
                >
                  <div className="relative h-64 cursor-pointer group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary">{video.sport}</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge
                        variant="outline"
                        className="bg-black/60 text-white border-white/20"
                      >
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Play className="w-4 h-4" />
                        <span>{video.views} views</span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

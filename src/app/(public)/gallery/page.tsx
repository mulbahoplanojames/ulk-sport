import GalleryClient from "@/components/public/gallery/gallery-client";
import Hero from "@/components/public/hero";
import { Card, CardContent } from "@/components/ui/card";
import { photos, videos } from "@/data/gallery";
import { Camera, Heart, Play, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Relive the best moments from ULK Sports League. Browse our photo and video gallery capturing the excitement, passion, and achievements of the league.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        label="Photo & Video Gallery"
        description="Relive the best moments from ULK Sports League. Browse through our collection of photos and videos
              capturing the excitement, passion, and achievements."
      />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Camera className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{photos.length}</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Play className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{videos.length}</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">
                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Likes</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">
                {videos.reduce((sum, video) => sum + video.views, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </CardContent>
          </Card>
        </div>
      </section>
      <GalleryClient />
    </>
  );
}

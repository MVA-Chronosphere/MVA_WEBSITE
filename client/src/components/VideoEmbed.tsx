import { Play } from "lucide-react";
import { useState } from "react";

interface VideoEmbedProps {
  title: string;
  description?: string;
}

export default function VideoEmbed({ title, description }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-card border border-card-border rounded-lg overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-primary to-[#0055A4]">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              data-testid="button-play-video"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors">
                <Play className="h-12 w-12 text-white" />
              </div>
            </button>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-4">🎬</div>
                <p className="text-sm">Video Player Placeholder</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-card-foreground mb-2">{title}</h3>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

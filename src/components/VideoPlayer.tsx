import { X, Maximize2, Volume2 } from "lucide-react";
import { Channel } from "@/data/channels";

interface VideoPlayerProps {
  channel: Channel | null;
  onClose: () => void;
}

export function VideoPlayer({ channel, onClose }: VideoPlayerProps) {
  if (!channel) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-3">
          <img
            src={channel.logo}
            alt={channel.nome}
            className="w-10 h-10 rounded-lg object-contain bg-white/10 p-1"
          />
          <div>
            <h2 className="font-semibold text-white">{channel.nome}</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-white/70">Ao Vivo</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Volume2 className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Maximize2 className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-red-500/80 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      {/* Video iframe */}
      <iframe
        src={channel.iframe}
        className="flex-1 w-full h-full"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
        title={channel.nome}
      />
    </div>
  );
}

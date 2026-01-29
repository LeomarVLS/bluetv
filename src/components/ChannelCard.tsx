import { Channel } from "@/data/channels";
import { Play } from "lucide-react";

interface ChannelCardProps {
  channel: Channel;
  onSelect: (channel: Channel) => void;
}

export function ChannelCard({ channel, onSelect }: ChannelCardProps) {
  return (
    <button
      onClick={() => onSelect(channel)}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] active:scale-95"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo container */}
      <div className="relative w-20 h-20 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden">
        <img
          src={channel.logo}
          alt={channel.nome}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <Play className="w-8 h-8 text-primary-foreground fill-current" />
        </div>
      </div>
      
      {/* Channel name */}
      <span className="text-sm font-medium text-foreground/90 text-center line-clamp-2 group-hover:text-primary transition-colors">
        {channel.nome}
      </span>
      
      {/* Live indicator */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Ao Vivo</span>
      </div>
    </button>
  );
}

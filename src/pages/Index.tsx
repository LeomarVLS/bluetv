import { useState, useMemo } from "react";
import { canais, categorias, Channel } from "@/data/channels";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ChannelCard } from "@/components/ChannelCard";
import { VideoPlayer } from "@/components/VideoPlayer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const filteredChannels = useMemo(() => {
    let filtered = canais;
    
    // Filter by category
    if (activeCategory !== "Todos") {
      filtered = filtered.filter(c => c.categoria === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c => 
        c.nome.toLowerCase().includes(query) ||
        c.categoria.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
  };

  const handleClosePlayer = () => {
    setSelectedChannel(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Category filters */}
        <CategoryFilter
          categories={categorias}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Channel count */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {activeCategory === "Todos" ? "Todos os Canais" : activeCategory}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredChannels.length} canais
          </span>
        </div>
        
        {/* Channel grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredChannels.map((channel, index) => (
            <ChannelCard
              key={`${channel.nome}-${index}`}
              channel={channel}
              onSelect={handleChannelSelect}
            />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredChannels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum canal encontrado</p>
          </div>
        )}
      </main>
      
      {/* Video player modal */}
      <VideoPlayer channel={selectedChannel} onClose={handleClosePlayer} />
    </div>
  );
};

export default Index;

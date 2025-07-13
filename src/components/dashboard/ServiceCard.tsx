import { ExternalLink, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  thumbnail?: string;
  icon?: string;
}

export function ServiceCard({ title, description, url, category, date, thumbnail, icon }: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:bg-card-hover hover:border-primary/20 transition-all duration-200 cursor-pointer">
      {/* Thumbnail */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            {icon ? (
              <img src={icon} alt={title} className="w-12 h-12" />
            ) : (
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">
                  {title.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        )}
        
        {/* Action button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-background/90 backdrop-blur-sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {title}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-2" />
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground truncate">
            {url}
          </p>
        </div>
      </div>
    </div>
  );
}
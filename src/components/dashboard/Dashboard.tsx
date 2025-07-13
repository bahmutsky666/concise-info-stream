import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { RightSidebar } from "./RightSidebar";
import { ServiceCard } from "./ServiceCard";
import aiTrainingThumb from "@/assets/ai-training-thumb.jpg";
import githubThumb from "@/assets/github-thumb.jpg";
import facebookThumb from "@/assets/facebook-thumb.jpg";
import openaiThumb from "@/assets/openai-thumb.jpg";

const dashboardData = [
  {
    title: "Train, Infer, and Build Agents with GradientAI",
    description: "Power your AI workloads from training to inference to agent creation. Use GradientAI...",
    url: "https://www.digitalocean.com/products/gradientai",
    category: "Others",
    date: "lipiec 13, 2025",
    thumbnail: aiTrainingThumb,
  },
  {
    title: "Text generation and prompting - OpenAI API",
    description: "Learn how to generate text with OpenAI's powerful language models using the API.",
    url: "https://platform.openai.com/docs/guides/text-generation",
    category: "Others", 
    date: "lipiec 13, 2025",
    thumbnail: openaiThumb,
  },
  {
    title: "Konfiguracja - wallabag",
    description: "Configure your wallabag instance for optimal performance and user experience.",
    url: "https://www.wallabag.vcc.pl/web/config",
    category: "Others",
    date: "lipiec 13, 2025",
  },
  {
    title: "GitHub | midnight-tab-organizer",
    description: "GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
    url: "https://github.com/bahmutskyy666/midnight-tab-organizer",
    category: "Others",
    date: "lipiec 13, 2025",
    thumbnail: githubThumb,
  },
  {
    title: "Facebook",
    description: "Log into Facebook to start sharing and connecting with your friends, family, and people you know.",
    url: "https://www.facebook.com/photo/?fbid=1...",
    category: "Media",
    date: "lipiec 13, 2025",
    thumbnail: facebookThumb,
  },
  {
    title: "Bookmark Llama",
    description: "Smart bookmark management for developers and researchers. Organize, search, and discover your saved links.",
    url: "https://app.bookmarkllama.com/uninstall?...",
    category: "Others",
    date: "lipiec 13, 2025",
  },
];

export function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardData.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                category={item.category}
                date={item.date}
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </main>
      </div>
      
      <RightSidebar />
    </div>
  );
}
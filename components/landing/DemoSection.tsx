"use client"
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
// import demoVideo from '@/./public/demo.mp4'

export function DemoSection() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience the Power of Smart School Management!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our platform transforms educational institutions
          </p>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {!isVideoVisible ? (
            <div
              onClick={handlePlayVideo}
              className="aspect-video rounded-xl overflow-hidden bg-primary/5 flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:opacity-75 transition-opacity" />
              <Play className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
            </div>
          ) : (
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black">
              <video
                src='@/public/demo.mp4'
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleCloseVideo}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                ✕
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button size="lg" variant="outline">
              Try a Live Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// There may be Fewissue
"use client"
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function CTASection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Institution?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of schools already making a difference with our platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Request a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
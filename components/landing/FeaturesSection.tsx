"use client"
import { motion } from 'framer-motion';
import {
  BookOpen, Users, UserSquare2, Building2,
  Brain, ChartBar, Video, Wallet,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    title: 'For Students',
    icon: BookOpen,
    items: ['Attendance Tracking', 'Grade Management', 'Learning Paths', 'Gamification']
  },
  {
    title: 'For Teachers',
    icon: Users,
    items: ['Lesson Planning', 'Grading System', 'Performance Analytics', 'Resource Library']
  },
  {
    title: 'For Parents',
    icon: UserSquare2,
    items: ['Real-time Updates', 'Fee Payment', 'Teacher Communication', 'Progress Tracking']
  },
  {
    title: 'For Admins',
    icon: Building2,
    items: ['Fee Management', 'Transport System', 'Hostel Management', 'Reporting Tools']
  }
];

const advancedFeatures = [
  { icon: Brain, title: 'AI Integration' },
  { icon: ChartBar, title: 'Advanced Analytics' },
  { icon: Video, title: 'Virtual Classrooms' },
  { icon: Wallet, title: 'Blockchain Payments' }
];

export function FeaturesSection() {
  return (
    <section id='features' className="py-24 bg-gray-100 p-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed for every stakeholder in the educational ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer   ">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/5 rounded-full p-4 inline-block mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
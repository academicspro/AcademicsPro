"use client"
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { GraduationCap, Users, UserSquare2, Building2 } from 'lucide-react';

const modules = [
  {
    id: 'student',
    label: 'Student Module',
    icon: GraduationCap,
    title: 'Comprehensive Student Management',
    description: 'Everything students need for a successful academic journey',
    features: ['Digital Student Profiles', 'Attendance Tracking', 'Grade Management', 'Course Registration', 'View grades and attendance', 'Track academic progress', 'Make fee payments securely through Razorpay', 'Access learning paths and assignments']
  },
  {
    id: 'teacher',
    label: 'Teacher Module',
    icon: Users,
    title: 'Efficient Teaching Tools',
    description: 'Empower teachers with modern educational tools',
    features: ['Lesson Planning', 'Assignment Management', 'Student Performance Tracking', 'Resource Library', 'Manage classes and lesson plans', 'Track attendance and grades', 'Communicate with students and parents']
  },
  {
    id: 'parent',
    label: 'Parent Portal',
    icon: UserSquare2,
    title: 'Stay Connected with Your Child\'s Progress',
    description: 'Keep parents involved in their children\'s education',
    features: ['Academic Progress Monitoring', 'Fee Payment Portal', 'Teacher Communication', 'Event Calendar', 'Track student progress, attendance, and grades', 'Pay fees online', 'Communicate with teachers and school staff']
  },
  {
    id: 'admin',
    label: 'Admin Dashboard',
    icon: Building2,
    title: 'Complete Administrative Control',
    description: 'Streamline school operations efficiently',
    features: ['Institution Management', 'Staff Administration', 'Financial Overview', 'Report Generation', 'Manage students, teachers, and parent profiles', 'Track attendance and grades', 'Manage fees, transport, hostel, and library resources', 'Generate school reports']
  },
  // {
  //   id: 'library',
  //   label: 'Library Management',
  //   icon: Book,
  //   title: 'Complete Administrative Control',
  //   description: 'Streamline school operations efficiently',
  //   features: ['Search and borrow books','Track overdue books and send reminders','View book inventory and availability']
  // },
  // {
  //   id: 'transport',
  //   label: 'Transport Management',
  //   icon: Bus,
  //   title: 'Complete Administrative Control',
  //   description: 'Streamline school operations efficiently',
  //   features: ['Manage routes and schedules','Notify parents about delays or changes']
  // },
  // {
  //   id: 'hostel',
  //   label: 'Hostel Management',
  //   icon: Home,
  //   title: 'Complete Administrative Control',
  //   description: 'Streamline school operations efficiently',
  //   features: ['Allocate and manage hostel rooms','Collect hostel fees','Track student occupancy']
  // }
];

export function ModulesSection() {
  return (
    <section id='modules' className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Comprehensive Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our feature-rich modules designed for every role
          </p>
        </motion.div>

        <Tabs defaultValue="student" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8">
            {modules.map((module) => (
              <TabsTrigger key={module.id} value={module.id} className="gap-2">
                <module.icon className="h-4 w-4" />
                {module.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
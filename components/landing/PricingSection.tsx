"use client"
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const plans = [
  {
    name: 'Basic',
    price: '₹99',
    period: 'per month',
    description: 'Perfect for small schools',
    features: [
      'Core Management Features',
      'Basic Analytics',
      'Up to 500 Students',
      'Email Support',
      '5GB Storage'
    ]
  },
  {
    name: 'Standard',
    price: '₹199',
    period: 'per month',
    description: 'Ideal for growing institutions',
    features: [
      'All Basic Features',
      'Advanced Analytics',
      'Up to 2000 Students',
      'Priority Support',
      '20GB Storage',
      'AI-Powered Insights'
    ]
  },
  {
    name: 'Premium',
    price: '₹399',
    period: 'per month',
    description: 'For large educational institutions',
    features: [
      'All Standard Features',
      'Custom Integrations',
      'Unlimited Students',
      '24/7 Support',
      'Unlimited Storage',
      'Advanced AI Features',
      'Custom Reporting'
    ]
  }
];

export function PricingSection() {
  return (
    <section id='pricing' className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to fit institutions of all sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative group h-full overflow-hidden transition-all duration-300">
                {/* Light effect with gradient color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,130,246,0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-0"></div>

                <CardHeader className="relative z-10">
                  <CardTitle>
                    <p className="text-2xl font-bold">{plan.name}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8">Get Started</Button>
                </CardContent>

                {/* Hover effects for translation */}
                <div className="group-hover:relative group-hover:z-10 group-hover:translate-x-8 group-hover:translate-y-4 group-hover:scale-105 transition-all duration-300 transform group-hover:origin-top group-hover:scale-y-105"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'FAQ', href: '#' }
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-center gap-6 mb-8">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <div className="text-center text-muted-foreground">
          <p>© 2025 AcademicsPro. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            {' · '}
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
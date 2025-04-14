import {
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Zap,
  Star,
  Palette,
  Waypoints,
  Cloud,
  Container,
  Pyramid,
  TvMinimal,
  Figma,
} from "lucide-react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const expertiseSection = document.getElementById('about-section');
      if (expertiseSection) {
        const scrollPosition = window.scrollY;
        const sectionPosition = expertiseSection.offsetTop;
        setShowHeader(scrollPosition >= sectionPosition - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Header */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold md:text-2xl text-gray-800 gradient-text">Ruhaim Mohammed</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/50 to-background" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
                Ruhaim Mohammed K
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                Senior Frontend Engineer
              </p>
            </div>
            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/ruhaimmohammed"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruhaimmohammed/"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:ruhaimmohammed87@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="h-16 w-0.5 bg-primary/50 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hey, I'm a Senior Frontend Engineer with 3+ years of wrangling
                React, Next.js, TypeScript, and all the usual suspects (SCSS,
                REST APIs, GraphQL). Started as an intern, leveled up to Senior
                in under 3 years at YouGotaGift, and built some pretty cool
                stuff along the way. I'm big on clean, reusable code, decent
                test coverage (because bugs are sneaky), and UI that doesn't
                make users cry. From dev to deployment, I like owning my work
                and making apps that actually work.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10 transform transition duration-300 group-hover:scale-105">
                  <img
                    src="/assets/profile.jpg"
                    alt="Ruhaim Mohammed K"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "JavaScript", icon: <Code className="h-6 w-6" /> },
              { name: "TypeScript", icon: <Sparkles className="h-6 w-6" /> },
              { name: "React", icon: <Zap className="h-6 w-6" /> },
              { name: "Next.js", icon: <Star className="h-6 w-6" /> },
              { name: "SCSS/LESS", icon: <Palette className="h-6 w-6" /> },
              { name: "Rest APIs", icon: <Waypoints className="h-6 w-6" /> },
              { name: "AWS", icon: <Cloud className="h-6 w-6" /> },
              { name: "Docker", icon: <Container className="h-6 w-6" /> },
              { name: "Git", icon: <Github className="h-6 w-6" /> },
              { name: "GraphQL", icon: <Pyramid className="h-6 w-6" /> },
              { name: "UI/UX Design", icon: <Figma className="h-6 w-6" /> },
              { name: "VS Code", icon: <TvMinimal className="h-6 w-6" /> },
            ].map((skill) => (
              <div
                key={skill.name}
                className="skill-card p-6 rounded-xl bg-card hover:bg-accent transition-all duration-300 transform hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-3">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
        <div className="container px-4 md:px-6 relative">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 gradient-text">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    Senior Frontend Engineer
                  </h3>
                  <p className="text-muted-foreground text-lg">YouGotaGift</p>
                </div>
                <p className="text-muted-foreground font-bold">
                  April, 2022 - Present
                </p>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3 group">
                  <span className="flex-shrink-0 text-primary">•</span>
                  <p className="group-hover:text-foreground transition-colors">
                    Led the switch to ViteJS (bye-bye long builds), built
                    scalable frontend architecture, and created boilerplates
                    that actually saved time—25% more efficient, less
                    hair-pulling.
                  </p>
                </li>
                <li className="flex gap-3 group">
                  <span className="flex-shrink-0 text-primary">•</span>
                  <p className="group-hover:text-foreground transition-colors">
                    Did the usual code wizardry: 20+ pages, reusable components,
                    80%+ test coverage with Jest, and fewer bugs thanks to code
                    reviews, ESLint, and SonarQube nagging us into best
                    practices.
                  </p>
                </li>
                <li className="flex gap-3 group">
                  <span className="flex-shrink-0 text-primary">•</span>
                  <p className="group-hover:text-foreground transition-colors">
                    Helped modernize the company's biggest product, integrated a
                    buffet of payment options (Apple Pay, PayPal, Tabby—you name
                    it), and made sure it all ran smoothly on AWS like a
                    well-oiled machine.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 gradient-text">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce solution built with React and Node.js",
                image:
                  "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management tool with real-time updates",
                image:
                  "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Social Media Dashboard",
                description: "Analytics dashboard for social media management",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="project-card group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 gradient-text">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always open to new opportunities and collaborations.
            </p>
            <a
              href="mailto:ruhaimmohammed87@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground h-12 px-6 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Send me an email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Ruhaim Mohammed K. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ruhaimmohammed"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruhaimmohammed/"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ruhaimmohammed87@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

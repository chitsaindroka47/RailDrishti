import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/raildrishti-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Circuit Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-px h-20 bg-primary opacity-60 animate-circuit-flow" />
        <div className="absolute top-1/3 right-1/3 w-20 h-px bg-digital-cyan opacity-40 animate-circuit-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-px h-16 bg-circuit-green opacity-50 animate-circuit-flow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-px bg-primary opacity-30 animate-circuit-flow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Optimizing Train
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-primary animate-glow-pulse">
            Movements with AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed font-semibold">
          RAILDRISHTI – An intelligent decision-support system for Indian Railways
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Revolutionary artificial intelligence meets railway infrastructure to create 
          smarter, safer, and more efficient train operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-glow text-lg px-8 py-4 rounded-xl"
          >
            Login
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4 rounded-xl"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-digital-cyan mb-2">24/7</div>
            <div className="text-muted-foreground">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-circuit-green mb-2">AI</div>
            <div className="text-muted-foreground">Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
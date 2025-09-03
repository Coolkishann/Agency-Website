import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/10 via-background to-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              CONNECT WITH <span className="text-primary">US</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              We connect the dots between Business and Market, helping B2B brands establish themselves at the top of
              their industry—while unlocking explosive ROI.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">Digitize your Business Now</h3>

            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="mr-3 w-5 h-5" />
              Become a Client
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:scale-110 transition-all duration-300"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
        <div className="text-xs text-muted-foreground text-center">Whatsapp</div>

        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:scale-110 transition-all duration-300 mt-4"
          title="Give a Call"
        >
          <Phone className="w-6 h-6 text-white" />
        </Button>
        <div className="text-xs text-muted-foreground text-center">Give a Call</div>
      </div> */}
    </section>
  )
}

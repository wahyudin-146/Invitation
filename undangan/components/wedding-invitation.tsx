"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Calendar, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export function WeddingInvitation() {
  const [showRSVP, setShowRSVP] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-12">
          {/* Decorative Ornament */}
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="h-12 w-12 text-primary" fill="currentColor" />
              <div className="absolute -left-16 top-1/2 h-px w-12 -translate-y-1/2 bg-primary/30" />
              <div className="absolute -right-16 top-1/2 h-px w-12 -translate-y-1/2 bg-primary/30" />
            </div>
          </div>

          {/* Main Invitation Text */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Together with their families</p>
            </div>

            <div className="space-y-6">
              <h1
                className="font-serif text-6xl font-light tracking-tight text-foreground sm:text-7xl md:text-8xl"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Emma Rose
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-primary/30" />
                <span className="text-2xl font-light text-primary">&</span>
                <div className="h-px w-16 bg-primary/30" />
              </div>

              <h1
                className="font-serif text-6xl font-light tracking-tight text-foreground sm:text-7xl md:text-8xl"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                James Alexander
              </h1>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-lg text-muted-foreground">Request the honor of your presence</p>
              <p className="text-base text-muted-foreground">at the celebration of their marriage</p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-border" />
            <Heart className="h-4 w-4 text-primary" />
            <div className="h-px w-24 bg-border" />
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="border-t border-border bg-card px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-3">
            {/* Date */}
            <Card className="border-none bg-transparent p-8 text-center shadow-none">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">When</h3>
              <p className="mb-1 text-2xl font-light text-primary" style={{ fontFamily: "Cormorant, serif" }}>
                Saturday
              </p>
              <p className="text-3xl font-light" style={{ fontFamily: "Cormorant, serif" }}>
                June 15, 2025
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>4:00 PM</span>
              </div>
            </Card>

            {/* Venue */}
            <Card className="border-none bg-transparent p-8 text-center shadow-none">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Where</h3>
              <p className="mb-2 text-2xl font-light" style={{ fontFamily: "Cormorant, serif" }}>
                The Garden Estate
              </p>
              <p className="text-sm text-muted-foreground">123 Blossom Lane</p>
              <p className="text-sm text-muted-foreground">Riverside, CA 92501</p>
            </Card>

            {/* Reception */}
            <Card className="border-none bg-transparent p-8 text-center shadow-none">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Reception</h3>
              <p className="mb-2 text-2xl font-light" style={{ fontFamily: "Cormorant, serif" }}>
                Dinner & Dancing
              </p>
              <p className="text-sm text-muted-foreground">To follow ceremony</p>
              <p className="mt-2 text-sm text-muted-foreground">Cocktail Attire</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <img
            src="https://placehold.co/1200x600?text=Romantic+wedding+venue+with+elegant+garden+setting+natural+lighting+and+floral+arrangements"
            alt="Romantic wedding venue with elegant garden setting natural lighting and floral arrangements"
            className="h-auto w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="border-t border-border bg-muted/30 px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Heart className="mx-auto mb-8 h-12 w-12 text-primary" />

          <h2 className="mb-6 text-5xl font-light" style={{ fontFamily: "Cormorant, serif" }}>
            Join Us
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Your presence would mean the world to us as we begin our journey together. Please let us know if you can
            celebrate with us.
          </p>

          {!showRSVP ? (
            <Button onClick={() => setShowRSVP(true)} size="lg" className="rounded-full px-12 py-6 text-lg">
              RSVP Now
            </Button>
          ) : (
            <Card className="p-8 text-left">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Will you be attending?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-input bg-background px-4 py-3 transition-colors hover:border-primary">
                      <input type="radio" name="attending" value="yes" className="text-primary" />
                      <span className="text-sm">Joyfully Accept</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-input bg-background px-4 py-3 transition-colors hover:border-primary">
                      <input type="radio" name="attending" value="no" className="text-primary" />
                      <span className="text-sm">Regretfully Decline</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium">
                    Number of Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    min="1"
                    max="5"
                    defaultValue="1"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Special Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Share your well wishes..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full py-6 text-lg">
                  Submit RSVP
                </Button>
              </form>
            </Card>
          )}

          <p className="mt-8 text-sm text-muted-foreground">Kindly respond by May 15, 2025</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="flex justify-center">
            <Heart className="h-6 w-6 text-primary" fill="currentColor" />
          </div>

          <p className="text-3xl font-light text-primary" style={{ fontFamily: "Cormorant, serif" }}>
            Emma & James
          </p>

          <p className="text-sm text-muted-foreground">
            For questions, please contact us at{" "}
            <a href="mailto:wedding@emmajames.com" className="text-primary underline">
              wedding@emmajames.com
            </a>
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs text-muted-foreground">June 15, 2025</span>
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </footer>
    </div>
  )
}

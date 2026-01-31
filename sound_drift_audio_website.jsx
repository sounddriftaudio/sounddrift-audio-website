import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Music,
  Building2,
  Church,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";

// Hash router so it works on any host without server config.
// Routes:
//   #/         Home
//   #/services Services
//   #/contact  Contact
function useHashRoute() {
  const getRoute = () => {
    const h = window.location.hash || "#/";
    const path = h.replace(/^#/, "");
    return path.startsWith("/") ? path : "/";
  };

  const [route, setRoute] = useState(typeof window === "undefined" ? "/" : getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (path) => {
    const next = path.startsWith("/") ? path : `/${path}`;
    window.location.hash = `#${next}`;
  };

  return { route, navigate };
}

function Container({ children }) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

function TopBar({ route, navigate }) {
  const links = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <div className="h-11 w-11 rounded-xl bg-black border border-zinc-800 overflow-hidden grid place-items-center">
              {/* Put your logo file in /public/logo.png */}
              <img
                src="/logo.png"
                alt="SoundDrift Audio logo"
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <div className="text-white font-semibold leading-none">SoundDrift Audio</div>
              <div className="text-xs text-gray-400 mt-1">Orlando • Central Florida</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => {
              const active = route === l.path;
              return (
                <button
                  key={l.path}
                  onClick={() => navigate(l.path)}
                  className={
                    "px-4 py-2 rounded-xl text-sm transition border " +
                    (active
                      ? "text-black bg-[#E7C87A] border-[#E7C87A]"
                      : "text-gray-200 border-transparent hover:border-zinc-700 hover:bg-zinc-900")
                  }
                >
                  {l.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-[#E7C87A] text-black hover:bg-[#d6b968] rounded-xl"
              onClick={() => navigate("/contact")}
            >
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden pb-4 flex gap-2">
          {links.map((l) => {
            const active = route === l.path;
            return (
              <button
                key={l.path}
                onClick={() => navigate(l.path)}
                className={
                  "flex-1 px-3 py-2 rounded-xl text-sm border transition " +
                  (active
                    ? "text-black bg-[#E7C87A] border-[#E7C87A]"
                    : "text-gray-200 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900")
                }
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <Container>
        <div className="py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-semibold">SoundDrift Audio</div>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Professional audio for live events, corporate productions, and churches across Central Florida.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E7C87A]" /> sounddriftaudio@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E7C87A]" /> 787-226-3697
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#E7C87A]" /> Orlando, FL
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">Availability</div>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Weekends and select weekdays. Fast response for time-sensitive bookings.
            </p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500 border-t border-zinc-800">
          © {new Date().getFullYear()} SoundDrift Audio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

function HomePage({ navigate }) {
  const highlights = [
    "Clean, consistent mixes",
    "Professional setup & teardown",
    "Clear communication from start to finish",
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_20%,rgba(231,200,122,0.18),transparent_55%),radial-gradient(700px_circle_at_20%_80%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative bg-gradient-to-b from-black via-black to-zinc-900">
          <Container>
            <div className="py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7C87A]/30 bg-[#E7C87A]/10 text-xs text-[#E7C87A]">
                  <Clock className="h-4 w-4" /> Quick quotes • Local service
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-black border border-zinc-800 overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="SoundDrift Audio logo"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                    <span className="text-[#E7C87A]">SoundDrift</span>{" "}
                    <span className="text-white">Audio</span>
                  </h1>
                </div>

                <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                  <span className="text-white font-medium">Professional audio services</span> for live events, corporate productions, and churches — delivering{" "}
                  <span className="text-[#E7C87A] font-medium">clear, reliable sound</span> across the Orlando area.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-[#E7C87A] text-black hover:bg-[#d6b968] rounded-xl px-8"
                    onClick={() => navigate("/contact")}
                  >
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#E7C87A] text-[#E7C87A] rounded-xl px-8"
                    onClick={() => navigate("/services")}
                  >
                    View Services
                  </Button>
                </div>

                <div className="mt-10 grid gap-3">
                  {highlights.map((t) => (
                    <div key={t} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-[#E7C87A] mt-0.5" />
                      <span className="text-white font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="bg-black/40 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="text-sm text-gray-300">Fast overview</div>
                <div className="mt-4 grid gap-4">
                  <Card className="bg-black border border-zinc-800 rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <Music className="h-5 w-5 text-[#E7C87A]" />
                        <div className="text-white font-semibold">Live Sound</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                        Small to mid-size events with clean output, safe gain structure, and smooth changeovers.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black border border-zinc-800 rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-[#E7C87A]" />
                        <div className="text-white font-semibold">Corporate AV</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                        Clear speech, professional presentation support, and dependable show flow.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black border border-zinc-800 rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <Church className="h-5 w-5 text-[#E7C87A]" />
                        <div className="text-white font-semibold">Church Audio</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                        Worship services, special events, and system support built for consistency.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  Want a detailed breakdown? Go to{" "}
                  <button
                    className="text-[#E7C87A] hover:underline"
                    onClick={() => navigate("/services")}
                  >
                    Services
                  </button>
                  .
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-zinc-900 py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold">
              <span className="text-white">Why</span>{" "}
              <span className="text-[#E7C87A]">SoundDrift Audio</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              A professional experience from planning to show day — with audio that translates in the room.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional & Reliable",
                desc: "Prepared, on time, and focused on consistent, high-quality results.",
              },
              {
                title: "Clear Communication",
                desc: "We coordinate with clients, venues, and teams to keep everything smooth.",
              },
              {
                title: "Experience That Matters",
                desc: "Live events, corporate settings, and churches — we understand each environment.",
              },
            ].map((b) => (
              <Card key={b.title} className="bg-black border border-zinc-800 rounded-3xl">
                <CardContent className="p-7">
                  <div className="text-white font-semibold text-xl">{b.title}</div>
                  <p className="mt-3 text-gray-300 leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-[#E7C87A] text-[#E7C87A] rounded-xl px-8"
              onClick={() => navigate("/contact")}
            >
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ServicesPage({ navigate }) {
  const cards = [
    {
      icon: <Music className="h-6 w-6 text-[#E7C87A]" />,
      title: "Live Sound",
      bullets: [
        "PA setup and tuning",
        "Wireless/IEM coordination",
        "Band mixes and monitor support",
        "Fast, organized changeovers",
      ],
      note: "Ideal for small to mid-size events, private events, and community gatherings.",
    },
    {
      icon: <Building2 className="h-6 w-6 text-[#E7C87A]" />,
      title: "Corporate AV",
      bullets: [
        "Speech clarity and gain staging",
        "Playback and cue management",
        "Panel / Q&A microphone support",
        "Professional show flow",
      ],
      note: "Perfect for meetings, conferences, trainings, and presentations.",
    },
    {
      icon: <Church className="h-6 w-6 text-[#E7C87A]" />,
      title: "Church Audio",
      bullets: [
        "Worship mix support",
        "Volunteers and team support",
        "Special events and productions",
        "System troubleshooting",
      ],
      note: "Designed for consistency across services and special events.",
    },
  ];

  return (
    <div className="bg-black">
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Services</span>{" "}
              <span className="text-[#E7C87A]">Built for Real-World Shows</span>
            </h1>
            <p className="mt-5 text-gray-200 leading-relaxed">
              Whether it’s a live performance, corporate production, or worship service, we prioritize{" "}
              <span className="text-white font-medium">clarity</span>,{" "}
              <span className="text-white font-medium">consistency</span>, and{" "}
              <span className="text-[#E7C87A] font-medium">professional execution</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-[#E7C87A] text-black hover:bg-[#d6b968] rounded-xl px-8"
                onClick={() => navigate("/contact")}
              >
                Request a Quote
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-gray-200 rounded-xl px-8"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((c) => (
              <Card key={c.title} className="bg-zinc-900 border border-zinc-800 rounded-3xl">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-black border border-zinc-800 grid place-items-center">
                      {c.icon}
                    </div>
                    <div className="text-white font-semibold text-xl">{c.title}</div>
                  </div>

                  <ul className="mt-6 space-y-3 text-gray-200">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#E7C87A] mt-0.5" />
                        <span className="text-white font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm text-gray-300 leading-relaxed">{c.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 bg-black border border-zinc-800 rounded-3xl p-7 md:p-10">
            <div className="text-2xl font-semibold">
              <span className="text-white">Need something specific?</span>{" "}
              <span className="text-[#E7C87A]">Let’s plan it.</span>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
              Share your venue, headcount, and event type — we’ll recommend the best approach for clean coverage and dependable performance.
            </p>
            <div className="mt-8">
              <Button
                className="bg-[#E7C87A] text-black hover:bg-[#d6b968] rounded-xl px-8"
                onClick={() => navigate("/contact")}
              >
                Contact SoundDrift
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ContactPage() {
  // UI-only form. Connect to email with Netlify Forms, Formspree, or your backend when deploying.
  return (
    <div className="bg-black">
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-white">Get in</span>{" "}
                <span className="text-[#E7C87A]">Touch</span>
              </h1>
              <p className="mt-6 text-gray-200 leading-relaxed">
                Tell us about your event and we’ll respond with next steps. For faster booking, include the date, location, and approximate audience size.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="h-11 w-11 rounded-2xl bg-[#E7C87A]/10 border border-[#E7C87A]/30 grid place-items-center">
                    <Mail className="h-5 w-5 text-[#E7C87A]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <div className="text-white font-medium">sounddriftaudio@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-200">
                  <div className="h-11 w-11 rounded-2xl bg-[#E7C87A]/10 border border-[#E7C87A]/30 grid place-items-center">
                    <Phone className="h-5 w-5 text-[#E7C87A]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Phone</div>
                    <div className="text-white font-medium">787-226-3697</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-200">
                  <div className="h-11 w-11 rounded-2xl bg-[#E7C87A]/10 border border-[#E7C87A]/30 grid place-items-center">
                    <MapPin className="h-5 w-5 text-[#E7C87A]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Service Area</div>
                    <div className="text-white font-medium">Orlando & Central Florida</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Tip:</span> Include{" "}
                <span className="text-[#E7C87A] font-medium">date</span>,{" "}
                <span className="text-[#E7C87A] font-medium">venue</span>, and{" "}
                <span className="text-[#E7C87A] font-medium">event type</span> for the fastest quote.
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">
              <div className="text-white font-semibold text-xl">Request a Quote</div>
              <p className="mt-2 text-sm text-gray-300">We’ll reply as soon as possible with availability and pricing.</p>

              <form
                name="quote"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-8 grid gap-5"
              >
                {/* Netlify required hidden fields */}
                <input type="hidden" name="form-name" value="quote" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Event Date"
                    className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                  />
                  <input
                    type="text"
                    placeholder="Event Type (Live / Corporate / Church)"
                    className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Venue / Location"
                  className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                />
                <textarea
                  placeholder="Tell us about your event (audience size, schedule, band/DJ, mics, playback, etc.)"
                  rows={5}
                  className="bg-black border border-zinc-700 p-3 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E7C87A]/40"
                />
                <button
                  type="submit"
                  className="bg-[#E7C87A] text-black py-3 rounded-xl font-semibold hover:bg-[#d6b968]"
                >
                  Submit Request
                </button>
                <div className="text-xs text-gray-400">
                  This form is currently UI-only. Connect it to email with a form provider when you deploy.
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-black">
        <Container>
          <div className="border border-zinc-800 rounded-3xl p-7 md:p-10 bg-[radial-gradient(900px_circle_at_20%_40%,rgba(231,200,122,0.12),transparent_55%)]">
            <div className="text-2xl font-semibold">
              <span className="text-white">Prefer email or phone?</span>{" "}
              <span className="text-[#E7C87A]">We’re easy to reach.</span>
            </div>
            <p className="mt-3 text-gray-300 leading-relaxed max-w-3xl">
              Send details to <span className="text-white font-medium">sounddriftaudio@gmail.com</span> or call{" "}
              <span className="text-white font-medium">787-226-3697</span>.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

function NotFound({ navigate }) {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900">
          <div className="text-white text-2xl font-semibold">Page not found</div>
          <p className="mt-3 text-gray-300">This route doesn’t exist. Head back home.</p>
          <div className="mt-6">
            <Button
              className="bg-[#E7C87A] text-black hover:bg-[#d6b968] rounded-xl"
              onClick={() => navigate("/")}
            >
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function SoundDriftAudio() {
  const { route, navigate } = useHashRoute();

  const Page = useMemo(() => {
    if (route === "/") return <HomePage navigate={navigate} />;
    if (route === "/services") return <ServicesPage navigate={navigate} />;
    if (route === "/contact") return <ContactPage />;
    return <NotFound navigate={navigate} />;
  }, [route, navigate]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <TopBar route={route} navigate={navigate} />
      {Page}
      <Footer />
    </div>
  );
}

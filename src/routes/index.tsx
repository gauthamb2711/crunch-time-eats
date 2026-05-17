import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  Flame,
  Drumstick,
  MapPin,
  Phone,
  Star,
  Leaf,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import burgerImg from "@/assets/burger.jpg";
import chickenImg from "@/assets/chicken.jpg";
import snacksImg from "@/assets/snacks.jpg";
import wrapImg from "@/assets/wrap.jpg";
import mojitoImg from "@/assets/mojito.jpg";
import vegImg from "@/assets/veg.jpg";
import comboImg from "@/assets/combo.jpg";
import storefrontImg from "@/assets/storefront.jpg";
import { MENU } from "@/data/menu";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WE CRUNCH — Chennai's Crispiest Burgers & Fried Chicken | Open till 2 AM" },
      {
        name: "description",
        content:
          "WE CRUNCH in Iyyappanthangal, Chennai. Extra-crispy fried chicken, towering burgers, peri-peri snacks and electric mojitos. Open daily 11 AM – 2 AM.",
      },
      { property: "og:title", content: "WE CRUNCH — Crispiest Crust in Chennai" },
      { property: "og:description", content: "Late-night cravings solved. Open till 2 AM, Iyyappanthangal." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const CATEGORY_IMAGES: Record<string, string> = {
  burgers: burgerImg,
  crunchy: chickenImg,
  periperi: snacksImg,
  snacks: snacksImg,
  wraps: wrapImg,
  mojitos: mojitoImg,
  shakes: mojitoImg,
  combos: comboImg,
};

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Drumstick className="h-5 w-5" />
          </div>
          <span className="font-display text-2xl tracking-wider">WE CRUNCH</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="transition-colors hover:text-foreground">Menu</a>
          <a href="#story" className="transition-colors hover:text-foreground">Story</a>
          <a href="#visit" className="transition-colors hover:text-foreground">Visit</a>
        </nav>
        <a
          href="tel:+910000000000"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:inline-flex"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          Order Now <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <img
        src={heroImg}
        alt="Crunchy chicken burger, fried chicken bucket and blue mojito"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Open · Closes 2 AM
          </span>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Hear the <span className="text-primary text-glow">CRUNCH.</span>
            <br />
            Feel the <span className="italic">juice.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Chennai's crispiest crust meets late-night cravings. Towering burgers, golden fried chicken
            and electric mojitos — straight from Iyyappanthangal.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Order Now <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function USPs() {
  const items = [
    { icon: Clock, title: "Open Till 2 AM", text: "Late-night cravings, solved daily." },
    { icon: Drumstick, title: "100% Fresh & Juicy", text: "Hand-breaded. Fried to order. Never sitting." },
    { icon: Flame, title: "Crispiest Crust in Chennai", text: "The signature shatter-crust you can hear." },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-background p-8">
            <Icon className="h-7 w-7 text-primary" />
            <h3 className="mt-4 font-display text-2xl tracking-wide">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Menu</span>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl">Pick your crunch.</h2>
        </div>
        <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
          Every item fried fresh. Veg & non-veg. Made for the Chennai foodie.
        </p>
      </div>

      <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {MENU.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              active === c.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={CATEGORY_IMAGES[cat.id]}
            alt={cat.label}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-full lg:min-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <h3 className="font-display text-4xl tracking-wide">{cat.label}</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{cat.blurb}</p>
          </div>
        </div>

        <ul className="divide-y divide-border rounded-2xl border border-border bg-card/40">
          {cat.items.map((item) => (
            <li
              key={item.name}
              className="group flex items-start justify-between gap-6 p-5 transition hover:bg-card"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-semibold">{item.name}</h4>
                  {item.veg && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[--veg]/40 bg-[--veg]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[--veg]">
                      <Leaf className="h-3 w-3" /> Veg
                    </span>
                  )}
                  {item.tag && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {item.tag}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                )}
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-xl text-primary">₹{item.price.toFixed(2)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Story</span>
          <h2 className="mt-2 font-display text-5xl leading-tight sm:text-6xl">
            Built for the <span className="text-primary text-glow">crunch.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We obsess over one thing — that first bite. A golden, extra-crispy breadcrumb crust that
            shatters on contact, wrapped around chicken that stays tender, juicy and full of flavor.
          </p>
          <p className="mt-4 text-muted-foreground">
            Hand-breaded. Seasoned in our signature blend. Fried fresh to order. Whether it's a midnight
            run or a family feast, we serve the loudest crunch in Chennai — every single time.
          </p>
          <div className="mt-8 flex items-center gap-8">
            <div>
              <div className="font-display text-4xl text-primary">15hrs</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Open daily</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-primary">60+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Menu items</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-primary">2 AM</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Last bite</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={chickenImg}
            alt="Crispy fried chicken bucket"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
          <img
            src={vegImg}
            alt="Veg paneer burger"
            loading="lazy"
            className="absolute -bottom-8 -left-8 hidden h-48 w-48 rounded-2xl border-4 border-background object-cover sm:block"
          />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Arjun S.",
      text: "Stopped by at 1 AM after a long shift. The crunch on those leg pieces is unreal — actually woke up my taste buds. New late-night go-to.",
    },
    {
      name: "Priya K.",
      text: "The Chicken Tower Burger is a beast. Crispy, cheesy, juicy. And the Blue Mojito is the prettiest drink I've had in Chennai.",
    },
    {
      name: "Rahul M.",
      text: "Peri-peri popcorn chicken hits different. Fast, fresh, and finally a place open past midnight that doesn't compromise on quality.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Loved in Chennai</span>
      </div>
      <h2 className="mt-2 max-w-2xl font-display text-5xl sm:text-6xl">What the foodies say.</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-7">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">"{r.text}"</blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">— {r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  const address =
    "74, Moovendhar Nagar, Subbiah Nagar, Ashok Brindavan, Iyyappanthangal, Chennai, Tamil Nadu 600056";
  const directions = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(address);
  return (
    <section id="visit" className="border-t border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Visit Us</span>
          <h2 className="mt-2 font-display text-5xl sm:text-6xl">Come for the crunch.</h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <p className="mt-1 leading-relaxed">{address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <p className="mt-1">Daily · 11:00 AM – 2:00 AM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Order</div>
                <p className="mt-1">Walk in · Dine in · Delivery</p>
              </div>
            </div>
          </div>

          <a
            href={directions}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Get Directions <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="WE CRUNCH on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="relative h-72 w-full overflow-hidden border-t border-border">
        <img src={storefrontImg} alt="WE CRUNCH storefront at night" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Drumstick className="h-4 w-4" />
          </div>
          <span className="font-display text-lg tracking-wider">WE CRUNCH</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} WE CRUNCH · Iyyappanthangal, Chennai</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <USPs />
        <Menu />
        <Story />
        <Reviews />
        <Visit />
        <Footer />
      </div>
    </>
  );
}

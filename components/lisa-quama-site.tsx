"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import { ArrowRight, Check, Mail, Play, Send } from "lucide-react";
import {
  danceClasses,
  heroCopy,
  motionPanels,
  navItems,
  reelItems,
  selectedWork,
  socialLinks,
  storyCopy
} from "@/data/site-content";
import styles from "./lisa-quama-site.module.css";

type FormState = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  inquiry: "Booking",
  message: "",
  consent: false
};

export function LisaQuamaSite() {
  return (
    <>
      <Grain />
      <CustomCursor />
      <NavSpine />
      <main className={styles.page}>
        <MobileNav />
        <Hero />
        <Reel />
        <DanceClasses />
        <Story />
        <SelectedWork />
        <BookingForm />
        <SiteFooter />
      </main>
    </>
  );
}

function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [large, setLarge] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 42 });
  const springY = useSpring(y, { stiffness: 700, damping: 42 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || reduceMotion) return;

    document.documentElement.classList.add(styles.hasCursor);
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const enter = () => setLarge(true);
    const leave = () => setLarge(false);

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button, input, textarea, select, .cursor-target");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
    });

    return () => {
      document.documentElement.classList.remove(styles.hasCursor);
      window.removeEventListener("mousemove", move);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
      });
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`${styles.cursor} ${large ? styles.cursorLarge : ""}`}
      style={{ x: springX, y: springY }}
    />
  );
}

function NavSpine() {
  return (
    <aside className={styles.spine} aria-label="Primary navigation">
      <a className={styles.mark} href="#top">
        LQ
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.rec}>
        <i />
        LIVE
      </div>
    </aside>
  );
}

function MobileNav() {
  return (
    <nav className={styles.mobileNav} aria-label="Mobile navigation">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label.toLowerCase()}
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={heroRef}
      className={`${styles.mediaPanel} ${styles.hero}`}
      id="top"
      onMouseMove={(event) => {
        if (reduceMotion) return;
        mouseX.set(event.clientX / window.innerWidth - 0.5);
        mouseY.set(event.clientY / window.innerHeight - 0.5);
      }}
    >
      <iframe
        className={styles.heroVideo}
        allow="autoplay; encrypted-media; picture-in-picture"
        aria-label={heroCopy.video.label}
        src={heroCopy.video.embedUrl}
        title={heroCopy.video.label}
      />
      <motion.div className={styles.syntheticMedia} style={reduceMotion ? undefined : { y }} />
      <div className={styles.tint} />
      <div className={styles.scanlines} />
      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {heroCopy.eyebrow}
        </motion.p>
        <div className={styles.nameStack} aria-label={heroCopy.name}>
          <HeroNameLayer
            layer={0}
            mouseX={mouseX}
            mouseY={mouseY}
            reduceMotion={reduceMotion}
            scrollProgress={scrollYProgress}
          />
          <HeroNameLayer
            layer={1}
            mouseX={mouseX}
            mouseY={mouseY}
            reduceMotion={reduceMotion}
            scrollProgress={scrollYProgress}
          />
          <HeroNameLayer
            layer={2}
            mouseX={mouseX}
            mouseY={mouseY}
            reduceMotion={reduceMotion}
            scrollProgress={scrollYProgress}
          />
          <HeroNameLayer
            layer={3}
            mouseX={mouseX}
            mouseY={mouseY}
            reduceMotion={reduceMotion}
            scrollProgress={scrollYProgress}
          />
        </div>
        <motion.p
          className={styles.heroSub}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          {heroCopy.body}
        </motion.p>
      </div>
      <div className={styles.scrollCue}>SCROLL</div>
    </section>
  );
}

function HeroNameLayer({
  layer,
  mouseX,
  mouseY,
  reduceMotion,
  scrollProgress
}: {
  layer: 0 | 1 | 2 | 3;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  reduceMotion: boolean | null;
  scrollProgress: MotionValue<number>;
}) {
  const offsetX = useTransform(mouseX, [-0.5, 0.5], [layer * -11, layer * 11]);
  const offsetY = useTransform(mouseY, [-0.5, 0.5], [layer * -4, layer * 4]);
  const launchX = useTransform(scrollProgress, [0, 0.08, 0.28, 0.44], [0, 8, 115, 128]);
  const skewX = useTransform(scrollProgress, [0, 0.08, 0.2, 0.36], ["0deg", "-2deg", "-8deg", "0deg"]);
  const blur = useTransform(scrollProgress, [0, 0.06, 0.16, 0.34], [0, 0, 2, 0]);
  const opacity = useTransform(scrollProgress, [0, 0.28, 0.42], [1, 1, 0]);
  const layerSpeed = [1.12, 0.98, 0.88, 0.78][layer];
  const takeoffX = useTransform(
    () => `calc(${offsetX.get()}px + ${launchX.get() * layerSpeed}vw)`
  );
  const takeoffFilter = useTransform(() => `blur(${blur.get()}px)`);

  return (
    <motion.span
      aria-hidden="true"
      className={`${styles.nameLayer} ${styles[`layer${layer}`]}`}
      style={
        reduceMotion
          ? undefined
          : {
              x: takeoffX,
              y: offsetY,
              skewX,
              filter: takeoffFilter,
              opacity
            }
      }
    >
      {heroCopy.name}
    </motion.span>
  );
}

function GlitchText({
  children,
  className
}: {
  children: string;
  className: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      className={`${className} ${styles.glitchText}`}
      data-text={children}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ amount: 0.55 }}
    >
      {children}
    </motion.span>
  );
}

function Reel() {
  const reduceMotion = useReducedMotion();
  const railItems = [...reelItems, ...reelItems];

  return (
    <section className={styles.plain} id="reel">
      <SectionHead number="01" title="The reel" />
      <div className={styles.reelViewport}>
        <div className={styles.reelTrack}>
          {railItems.map((item, index) => (
            <motion.a
              aria-hidden={index >= reelItems.length ? "true" : undefined}
              className={`${styles.reelCard} ${styles[`reel${item.seed}`]} cursor-target`}
              href={item.href}
              key={`${item.title}-${index}`}
              rel="noreferrer"
              tabIndex={index >= reelItems.length ? -1 : undefined}
              target="_blank"
              initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: (index % 5) - 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: (index % 5) - 2 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: (index % reelItems.length) * 0.04, duration: 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -34, rotate: 0, scale: 1.04 }}
            >
              <span
                aria-label={item.imageAlt}
                className={styles.reelPoster}
                role="img"
                style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
              />
              <span className={styles.reelGlass} aria-hidden="true" />
              <span className={styles.reelPlay}>
                <Play size={13} fill="currentColor" />
              </span>
              <span className={styles.reelCaption}>
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
      <p className={styles.gridNote}>
        Lisa Quama clips in motion. Hover a card to pull it out of the flow.
      </p>
    </section>
  );
}

function DanceClasses() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`${styles.mediaPanel} ${styles.classPanel}`} id={motionPanels[0].id}>
      <div className={`${styles.syntheticMedia} ${styles.mediabreak2}`} />
      <div className={styles.tint} />
      <div className={styles.scanlines} />
      <div className={`${styles.content} ${styles.classContent}`}>
        <motion.div
          className={styles.classIntro}
          initial={reduceMotion ? false : { opacity: 0, x: 38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <GlitchText className={styles.floatingVertical}>{motionPanels[0].text}</GlitchText>
          <span className={styles.floatingTag}>DANCE CLASSES - TRAINING ROOMS</span>
        </motion.div>
        <div className={styles.classGrid}>
          {danceClasses.map((item, index) => (
            <motion.a
              className={styles.classCard}
              href={item.href}
              key={item.href}
              rel="noreferrer"
              target="_blank"
              initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: index - 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 1 : -1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.48 }}
              whileHover={reduceMotion ? undefined : { y: -8, rotate: 0 }}
            >
              <span
                aria-label={`${item.title} video thumbnail`}
                className={styles.classThumb}
                role="img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <span className={styles.classFilm} aria-hidden="true" />
              <span className={styles.classMeta}>
                <Play size={14} fill="currentColor" />
                {item.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.plain} id="story">
      <SectionHead number="02" title="The story" />
      <div className={styles.storySplit}>
        <motion.div
          className={styles.storyPhoto}
          initial={reduceMotion ? false : { opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span
            aria-label="Lisa Quama portrait from Instagram"
            className={styles.storyImage}
            role="img"
            style={{ backgroundImage: `url(${storyCopy.imageUrl})` }}
          />
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className={styles.floatingQuote}>{storyCopy.quote}</p>
          <span className={styles.stamp}>{storyCopy.stamp}</span>
          <div className={styles.storyBody}>
            {storyCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.plain} id="work">
      <SectionHead number="03" title="Selected work" />
      <div className={styles.workDeck}>
        {selectedWork.map((work, index) => (
          <motion.a
            className={`${styles.workCard} ${styles[`work${work.seed}`]}`}
            href={work.href}
            key={work.title}
            rel="noreferrer"
            target="_blank"
            initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: index % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 2 : -2 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
            whileHover={reduceMotion ? undefined : { y: -10, rotate: index % 2 ? -1 : 1 }}
          >
            <span className={styles.filmPerf} aria-hidden="true" />
            <span
              aria-label={work.imageAlt}
              className={styles.workImage}
              role="img"
              style={work.imageUrl ? { backgroundImage: `url(${work.imageUrl})` } : undefined}
            />
            <span className={styles.filmLayer} aria-hidden="true" />
            <span className={styles.workMeta}>
              <span>{work.kicker}</span>
              <strong>{work.title}</strong>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const letters = useMemo(() => "LET'S\nMOVE.".split(""), []);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (form.message.trim().length < 12) nextErrors.message = "Share a little more detail.";
    if (!form.consent) nextErrors.consent = "Confirm this is a genuine inquiry.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return (
    <section className={styles.booking} id="booking">
      <div className={styles.bookingCopy}>
        <div className={styles.sectionNum}>04 - GET IN TOUCH</div>
        <h2 className={styles.bookingHeadline} aria-label="Let's move.">
          {letters.map((letter, index) =>
            letter === "\n" ? (
              <br key={`${letter}-${index}`} />
            ) : (
              <span className={styles.jitterLetter} key={`${letter}-${index}`}>
                {letter}
              </span>
            )
          )}
        </h2>
        <p>
          Booking, workshops, creative direction, stage work, or brand choreography.
        </p>
      </div>

      <form
        className={styles.contactForm}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          setSent(false);
          if (!validate()) return;
          setSent(true);
          setForm(initialForm);
        }}
      >
        <label>
          Name
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Inquiry
          <select
            value={form.inquiry}
            onChange={(event) => setForm({ ...form, inquiry: event.target.value })}
          >
            <option>Booking</option>
            <option>Workshop</option>
            <option>Brand choreography</option>
            <option>Press</option>
          </select>
        </label>
        <label className={styles.messageLabel}>
          Message
          <textarea
            rows={5}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <span>{errors.message}</span>}
        </label>
        <label className={styles.checkLabel}>
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => setForm({ ...form, consent: event.target.checked })}
          />
          <span>I agree to be contacted about this inquiry.</span>
        </label>
        {errors.consent && <span className={styles.formError}>{errors.consent}</span>}
        <motion.button whileTap={{ scale: 0.96 }} className={styles.submit} type="submit">
          <Send size={17} />
          Send inquiry
          <ArrowRight size={17} />
        </motion.button>
        {sent && (
          <p className={styles.formSuccess}>
            <Check size={16} />
            Thank you. Lisa&apos;s team will follow up soon.
          </p>
        )}
      </form>
    </section>
  );
}

function SectionHead({ number, title }: { number: string; title: string }) {
  return (
    <div className={styles.sectionHead}>
      <span className={styles.sectionNum}>{number}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>© Lisa Quama, Accra</span>
      <a className={styles.mailLink} href="mailto:booking@example.com">
        <Mail size={14} />
        booking@example.com
      </a>
      <div>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

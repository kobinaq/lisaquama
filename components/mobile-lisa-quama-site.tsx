"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Mail, Play, Send } from "lucide-react";
import {
  danceClasses,
  heroCopy,
  reelItems,
  selectedWork,
  socialLinks,
  storyCopy
} from "@/data/site-content";
import styles from "./mobile-lisa-quama-site.module.css";

type MobileForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: MobileForm = {
  name: "",
  email: "",
  message: ""
};

export function MobileLisaQuamaSite() {
  return (
    <main className={styles.shell}>
      <nav className={styles.topNav} aria-label="Mobile page navigation">
        <a href="#m-reel">Reel</a>
        <a href="#m-story">Story</a>
        <a href="#m-work">Work</a>
        <a href="#m-book">Book</a>
      </nav>
      <MobileHero />
      <MobileReel />
      <MobileClasses />
      <MobileStory />
      <MobileWork />
      <MobileBooking />
      <footer className={styles.footer}>
        <span>© Lisa Quama</span>
        <div>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

function MobileHero() {
  return (
    <section className={styles.hero} id="m-top">
      <iframe
        allow="autoplay; encrypted-media; picture-in-picture"
        aria-label={heroCopy.video.label}
        className={styles.heroVideo}
        src={heroCopy.video.embedUrl}
        title={heroCopy.video.label}
      />
      <div className={styles.heroShade} />
      <motion.div
        className={styles.heroCopy}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p>{heroCopy.eyebrow}</p>
        <h1>{heroCopy.name}</h1>
        <span>{heroCopy.body}</span>
      </motion.div>
    </section>
  );
}

function MobileReel() {
  return (
    <section className={styles.section} id="m-reel">
      <SectionLabel number="01" title="The reel" />
      <div className={styles.reelList}>
        {reelItems.map((item, index) => (
          <motion.a
            className={styles.reelCard}
            href={item.href}
            key={item.href}
            rel="noreferrer"
            target="_blank"
            initial={{ rotate: index % 2 ? 1 : -1 }}
            whileInView={{ rotate: index % 2 ? 1 : -1 }}
            viewport={{ once: true, amount: 0.25 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              aria-label={item.imageAlt}
              className={styles.reelPoster}
              role="img"
              style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
            />
            <span className={styles.film} aria-hidden="true" />
            <span className={styles.playBadge}>
              <Play size={13} fill="currentColor" />
            </span>
            <strong>{item.title}</strong>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function MobileClasses() {
  return (
    <section className={styles.classSection}>
      <p className={styles.routeText}>ACCRA {">"} NYC {">"} EVERYWHERE</p>
      <div className={styles.classRail}>
        {danceClasses.map((item) => (
          <a className={styles.classCard} href={item.href} key={item.href} rel="noreferrer" target="_blank">
            <span
              aria-label={`${item.title} video thumbnail`}
              className={styles.classThumb}
              role="img"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <span>
              <Play size={12} fill="currentColor" />
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function MobileStory() {
  return (
    <section className={styles.section} id="m-story">
      <SectionLabel number="02" title="The story" />
      <div className={styles.storyImage}>
        <span
          aria-label="Lisa Quama portrait from Instagram"
          role="img"
          style={{ backgroundImage: `url(${storyCopy.imageUrl})` }}
        />
      </div>
      <blockquote className={styles.storyQuote}>{storyCopy.quote}</blockquote>
      <p className={styles.stamp}>{storyCopy.stamp}</p>
      <div className={styles.storyBody}>
        {storyCopy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function MobileWork() {
  return (
    <section className={styles.section} id="m-work">
      <SectionLabel number="03" title="Selected work" />
      <div className={styles.workStack}>
        {selectedWork.map((work, index) => (
          <motion.a
            className={styles.workCard}
            href={work.href}
            key={work.title}
            rel="noreferrer"
            target="_blank"
            initial={{ rotate: index % 2 ? 1.5 : -1.5 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
          >
            <span
              aria-label={work.imageAlt}
              className={styles.workImage}
              role="img"
              style={work.imageUrl ? { backgroundImage: `url(${work.imageUrl})` } : undefined}
            />
            <span className={styles.film} aria-hidden="true" />
            <small>{work.kicker}</small>
            <strong>{work.title}</strong>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function MobileBooking() {
  const [form, setForm] = useState<MobileForm>(initialForm);
  const [sent, setSent] = useState(false);

  return (
    <section className={styles.booking} id="m-book">
      <SectionLabel number="04" title="Book Lisa" />
      <h2>Let&apos;s move.</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
          setForm(initialForm);
        }}
      >
        <label>
          Name
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
        <label>
          Message
          <textarea
            rows={4}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>
        <button type="submit">
          <Send size={16} />
          Send inquiry
          <ArrowRight size={16} />
        </button>
        {sent && (
          <p className={styles.success}>
            <Check size={15} />
            Thank you. Lisa&apos;s team will follow up soon.
          </p>
        )}
      </form>
      <a className={styles.email} href="mailto:booking@example.com">
        <Mail size={14} />
        booking@example.com
      </a>
    </section>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

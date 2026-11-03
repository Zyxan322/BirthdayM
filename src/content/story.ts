/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  Happy Birthday, Moiza! ♡ — 19th November, from Zeeshan.
 *  All names, texts, dates, captions and images live in this
 *  single file so the site can be updated without touching
 *  any component.
 * ─────────────────────────────────────────────────────────────
 */

import cakeHero from "@/assets/birthday/cake-hero.jpg";
import giftsImg from "@/assets/birthday/gifts.jpg";
import teddy from "@/assets/birthday/teddy.jpg";
import roses from "@/assets/birthday/roses.jpg";
import cupcakes from "@/assets/birthday/cupcakes.jpg";
import balloons from "@/assets/birthday/balloons.jpg";
import letterImg from "@/assets/birthday/letter.jpg";
import candles from "@/assets/birthday/candles.jpg";

export const images = {
  cakeHero,
  gifts: giftsImg,
  teddy,
  roses,
  cupcakes,
  balloons,
  letterImg,
  candles,
};

export const couple = {
  him: "Zeeshan",
  her: "Moiza",
  monogram: "Z ♡ M",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Birthday Wishes", href: "#wishes" },
  { label: "My Letter", href: "#letter" },
  { label: "Gifts", href: "#gifts" },
  { label: "Sweet Moments", href: "#moments" },
];

export const hero = {
  kicker: "19th November — The Day My World Became More Beautiful",
  title: "Happy Birthday, Moiza! ♡",
  message:
    "Happy birthday, my love. This day is the most special day of my life because it celebrates someone who means more to me than words can ever explain.",
  signature: "With all my love, Zeeshan ♡",
  cta: "Open Your Birthday Surprise ♡",
  cake: images.cakeHero,
  cakeAlt:
    "A luxurious pink and cream birthday cake decorated with roses, strawberries, ribbons and lit candles",
};

export const countdown = {
  kicker: "Save The Date",
  heading: "Counting Every Moment Until Your Special Day",
  dateLabel: "19 November 2026",
  today: "Today Is Your Special Day! ♡",
  units: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
};

export const wishes = {
  kicker: "From My Heart To Yours",
  heading: "Birthday Wishes",
  subheading: "Four little wishes I'm sending your way.",
  items: [
    {
      icon: "sun",
      title: "Endless Happiness",
      text: "May every morning of your year arrive gently, and may happiness never once run out.",
    },
    {
      icon: "camera",
      title: "A Lifetime of Beautiful Memories",
      text: "May your days collect moments so lovely that even the years feel jealous of them.",
    },
    {
      icon: "heart",
      title: "Love That Grows Every Day",
      text: "May you be loved a little more each day — by life, by people, and always by me.",
    },
    {
      icon: "star",
      title: "All Your Dreams Coming True",
      text: "Every wish you've ever made quietly — may this year be the one that answers them.",
    },
  ],
};

export const letter = {
  kicker: "Sealed With Love",
  heading: "A Little Letter From My Heart",
  image: images.letterImg,
  imageAlt:
    "A handwritten love letter with a champagne gold wax seal beside a pink envelope and rose petals",
  salutation: "My love, Moiza,",
  paragraphs: [
    "your birthday is more than just a date to me. It is a reminder of how special you are and how beautiful this world feels because you exist.",
    "I wish I could wrap every beautiful moment, every smile, and every bit of happiness into one gift just for you. You deserve endless love, peace, happiness, and every beautiful thing life has to offer.",
    "Happy birthday, my love. Always remember that someone named Zeeshan is wishing you the happiest birthday with all his heart.",
  ],
  signature: "With all my love, Zeeshan ♡",
};

export const gifts = {
  kicker: "Wrapped In Pink & Gold",
  heading: "Birthday Gifts",
  subheading: "A little corner of the celebration — every piece picked with you in mind.",
  items: [
    {
      src: images.gifts,
      caption: "The Presents",
      note: "Beautifully wrapped, and each one chosen for your smile.",
    },
    {
      src: images.teddy,
      caption: "A Teddy To Hug",
      note: "Soft, warm, and always there — a little like me.",
    },
    {
      src: images.roses,
      caption: "Roses & Peonies",
      note: "Because flowers should be as lovely as the birthday girl.",
    },
    {
      src: images.cupcakes,
      caption: "Cupcakes & Chocolates",
      note: "Sweet things for the sweetest person I know.",
    },
    {
      src: images.balloons,
      caption: "Heart Balloons",
      note: "Every one of them carrying a little of my heart up to you.",
    },
    {
      src: images.candles,
      caption: "Candles & Ribbons",
      note: "For the wish I'll be making with you this year.",
    },
  ],
};

export const moments = {
  kicker: "The Celebration",
  heading: "Sweet Moments",
  subheading:
    "Cake, candles, flowers and everything that makes your day beautiful. Tap any moment to see it up close.",
  items: [
    { src: images.cakeHero, caption: "The Birthday Cake", note: "Pink, cream and gold — made for the most special day." },
    { src: images.candles, caption: "Candlelight", note: "Make a wish. I already made mine — it's you." },
    { src: images.roses, caption: "Fresh Flowers", note: "Blush roses and peonies for the girl of the day." },
    { src: images.gifts, caption: "Gift Boxes", note: "Pink ribbon, gold wax, and something inside just for you." },
    { src: images.teddy, caption: "Teddy & Heart", note: "A soft little guardian for all your sweet dreams." },
    { src: images.cupcakes, caption: "Sweet Treats", note: "Strawberries, cream, and a little bit of celebration." },
    { src: images.balloons, caption: "Balloons", note: "Hearts floating everywhere — the way mine does today." },
    { src: images.letterImg, caption: "The Letter", note: "Sealed with gold, written with everything I feel." },
  ],
};

export const finale = {
  kicker: "19th November",
  heading: "Happy Birthday, My Most Special Person ♡",
  message: [
    "19th November will always hold a special place in my heart. Today, I celebrate you, your beautiful presence, and the happiness you bring into my world.",
    "May your life be filled with countless smiles, unforgettable memories, and all the love your heart can hold.",
  ],
  closing: "Happy birthday, my love, Moiza. Forever wishing you happiness, from Zeeshan. ♡",
  dateLabel: "19 November 2026",
};

export const footer = {
  line1: "Made with love for Moiza ♡",
  line2: "19 November 2026 | With Love, Zeeshan",
};

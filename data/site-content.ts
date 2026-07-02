export type MediaItem = {
  title: string;
  tag: string;
  href: string;
  imageUrl: string | null;
  imageAlt: string;
  seed: string;
};

export const navItems = [
  { label: "REEL", href: "#reel" },
  { label: "STORY", href: "#story" },
  { label: "WORK", href: "#work" },
  { label: "BOOK", href: "#booking" }
] as const;

export const heroCopy = {
  eyebrow: "DANCER - CHOREOGRAPHER - ACCRA -> NYC",
  name: "Lisa Quama",
  body:
    "From a Ghana National College hallway to Beyoncé's set and Usher's stage at Global Citizen, Lisa Quama has been moving since before she could walk.",
  video: {
    embedUrl:
      "https://www.youtube.com/embed/qt9jUpzuwVs?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=qt9jUpzuwVs&start=7&modestbranding=1&rel=0",
    label: "Lisa Quama dance video playing as the hero background."
  }
};

export const motionPanels = [
  {
    id: "break2",
    label: "ROUTES IN MOTION",
    text: "ACCRA -> NYC -> EVERYWHERE",
    align: "end" as const
  }
];

export const danceClasses = [
  {
    title: "Dance Class 01",
    href: "https://youtu.be/NPhD0W1fls0?si=XKRTQOlBbruL48-G",
    imageUrl: "https://img.youtube.com/vi/NPhD0W1fls0/hqdefault.jpg"
  },
  {
    title: "Dance Class 02",
    href: "https://youtu.be/liQrsi-PGlk?si=UsRCQYqSHxkX5ioi",
    imageUrl: "https://img.youtube.com/vi/liQrsi-PGlk/hqdefault.jpg"
  },
  {
    title: "Dance Class 03",
    href: "https://youtu.be/qt9jUpzuwVs?si=onz4H9cMOEdl8vwI",
    imageUrl: "https://img.youtube.com/vi/qt9jUpzuwVs/hqdefault.jpg"
  }
];


export const reelItems: MediaItem[] = [
  {
    title: "Reel 01",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7644530713257151752?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oQAAACVWuK1IfBoA9AB29EVUKC1IioiwAulCHm~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=EQZmXb0UmsSk2y0byujx2S%2BSJoM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "freestyle"
  },
  {
    title: "Reel 02",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7645021291585621256?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oMAAhFiIEAw1wQDf3kiKY6AkRmk7BCAmBBEIA5~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=M66ztaPVbdAY%2BJuLleggV6J%2BPvA%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "stage"
  },
  {
    title: "Reel 03",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7645777576077708562?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUja1BDaIAKcOcACxAQi6HEAlEAIwAiW1bBEyf~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=ON%2FpVQ20NHsQJpqEFtzogRhq8SI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "commercial"
  },
  {
    title: "Reel 04",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7649720654983433490?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oc9ptKgKfAE31RAGADRqCGCfREBcFEAZHUAIRh~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=MN%2BrcQ4%2FZo1w15oFakudZmnARNk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "workshop"
  },
  {
    title: "Reel 05",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7650982535324896519?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/owu2OiBgICAcbIATQtiErABAwAMwC7AbF1fn1A~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=sQRE9R7Rbbef7FLoJTHNGyId1Us%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "battle"
  },
  {
    title: "Reel 06",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7653186201473600776?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ocgGo1X7nmfkRFo4Ze1Ge76AITwYWFrgYAeLGU~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=AzL0%2FE9x9g7MUL0TO0d1pmQkuW0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "backstage"
  },
  {
    title: "Reel 07",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7654297673108901127?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/ownCAAiHwEBSZzAAOEAwfqi415IMIZ1AKAzMhB~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=p8aHWTX%2FHPhCLPSEvSkawhJJrv0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "freestyle"
  },
  {
    title: "Reel 08",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7656524555434888466?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oMAAs0iIEAw1GqIf2ciKB4BwJIh53CAZBBLIA8~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=74Wwm2GL1J5afCPRUb8Cue%2FxoHw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "stage"
  },
  {
    title: "Reel 09",
    tag: "TikTok",
    href: "https://www.tiktok.com/@lisaquama/video/7657267372725652744?is_from_webapp=1&sender_device=pc",
    imageUrl: "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o8ERg7IEnBafAcDgCgfzFJAcAQERBA1dBBRqFE~tplv-tiktokx-origin.image?dr=14575&x-expires=1783119600&x-signature=8E%2FnacVLx4FIk%2B8oUsoMxUzV9jo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my",
    imageAlt: "TikTok video by Lisa Quama",
    seed: "commercial"
  }
];

export const storyCopy = {
  quote:
    "Family lore says she was dancing before she could really walk - dinner in that house came with a performance.",
  stamp: "GNC -> DWP -> THE WORLD",
  imagePostUrl: "https://www.instagram.com/p/DSe7TUDDLEO/",
  imageUrl:
    "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/604227197_18554498713036122_7087556445484806124_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc5MTcyODczNDM0MTIxODY4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=WDps7OeIMZ4Q7kNvwEH1x9v&_nc_oc=AdplEqcReFIEqDqlooUmuLcNworiziVUL6mHrcmx9TG7Qc576EZKqnM1cLCCiuKhukE&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=M0kHZj_yM0ZkFZPkf52LAg&_nc_ss=7a22e&oh=00_AQDo5Fn-cE_HxUgxOhEaycnkq61zFstlm9038oFUNo_w3A&oe=6A4B666B",
  paragraphs: [
    "It got serious at Ghana National College, dancing to impress her seniors before she knew it was a career. From there she trained at DWP Academy under Dancegod Lloyd, Afrobeast, and Incredible Zigi - the block that turned instinct into craft.",
    "The early rooms did not pay. She did the shows anyway, determined not to lean on her parents' money. Then came Beyoncé's \"Already,\" a stage next to Usher at Global Citizen, and a University of Ghana degree earned in the gaps between rehearsals."
  ]
};

export const selectedWork = [
  {
    title: "Beyoncé - Already",
    kicker: "Official video",
    href: "https://www.youtube.com/watch?v=5zEj2LJSoQY",
    imageUrl: "https://img.youtube.com/vi/5zEj2LJSoQY/maxresdefault.jpg",
    imageAlt: "Thumbnail for Beyoncé, Shatta Wale and Major Lazer's ALREADY official video",
    seed: "already"
  },
  {
    title: "Global Citizen",
    kicker: "Live performance",
    href: "https://youtu.be/_rqrEPHIVfU?si=237xEf7LmarhEveY",
    imageUrl: "https://img.youtube.com/vi/_rqrEPHIVfU/maxresdefault.jpg",
    imageAlt: "Thumbnail for Lisa Quama Global Citizen related video",
    seed: "global"
  },
  {
    title: "Nike Sponsored Event",
    kicker: "Brand stage",
    href: "https://youtu.be/vZ3WOTrF1t0?si=eUDhpQuurHof1gJZ",
    imageUrl: "https://img.youtube.com/vi/vZ3WOTrF1t0/maxresdefault.jpg",
    imageAlt: "Thumbnail for Lisa Quama and Nike sponsored event video",
    seed: "dwp"
  },
  {
    title: "Coca-Cola Ivory Coast",
    kicker: "Sponsored trip",
    href: "https://www.youtube.com/watch?v=A2qOMMMUzXY",
    imageUrl: "https://img.youtube.com/vi/A2qOMMMUzXY/maxresdefault.jpg",
    imageAlt: "Thumbnail for Lisa Quama Coca-Cola Ivory Coast trip video",
    seed: "cocacola"
  },
  {
    title: "Lisa x Puma",
    kicker: "Sponsored campaign",
    href: "https://www.instagram.com/p/DZk8q0GFMk-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imageUrl: null,
    imageAlt: "Lisa Quama Puma Instagram campaign",
    seed: "puma"
  },
  {
    title: "Philadelphia Eagles",
    kicker: "Cheerleaders collab",
    href: "https://www.tiktok.com/@tv3gh_official/video/7312475924769869061?is_from_webapp=1&sender_device=pc",
    imageUrl: null,
    imageAlt: "Lisa Quama and Philadelphia Eagles cheerleaders TikTok",
    seed: "workshops"
  },
  {
    title: "Lisa x Meta",
    kicker: "Sponsored campaign",
    href: "https://web.facebook.com/watch/?v=1016074707170812",
    imageUrl: null,
    imageAlt: "Lisa Quama Meta sponsored campaign video",
    seed: "meta"
  }
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" }
];

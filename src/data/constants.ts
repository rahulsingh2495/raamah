import { 
  Lightbulb, Leaf, Award, ShieldCheck, Target, 
  Clock, Shield, Building2 
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Projects", dropdown: [
    { label: "Ongoing Projects", id: "ongoing" },
    { label: "Completed Projects", id: "home" },
    { label: "Upcoming Projects", id: "home" },
    { label: "Luxury Collection", id: "home" }
  ]},
  { label: "Studio", dropdown: [
    { label: "About Us", id: "about" },
    { label: "Our Story", id: "milestone" },
    { label: "Our Team", id: "about" },
    { label: "Philosophy", id: "about" }
  ]},
  { label: "Investors", id: "home" },
  { label: "Contact", id: "home" }
];

export const ABOUT_HERO_IMAGES = [
  {
    id: 1,
    title: "The Obsidian Villa",
    location: "Malibu, California",
    description: "A masterpiece of modern minimalism and coastal luxury.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nexus Tower",
    location: "Dubai, UAE",
    description: "Redefining the skyline with futuristic commercial design.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Eco-Loom Pavilion",
    location: "Singapore",
    description: "Sustainable architecture meeting urban biodiversity.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Azure Bay Estate",
    location: "Melbourne, Australia",
    description: "Timeless residential elegance overlooking the bay.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Green Horizon Hub",
    location: "Berlin, Germany",
    description: "A hub for innovation and sustainable business practices.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Lumina Lofts",
    location: "New York, USA",
    description: "Modern urban living in the heart of the city.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PHILOSOPHY = [
  {
    title: "Innovation",
    description: "We push the boundaries of design, integrating cutting-edge technology with creative vision to build the future.",
    icon: Lightbulb,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Sustainability",
    description: "Our commitment to the planet drives us to create net-zero energy buildings and use eco-friendly materials.",
    icon: Leaf,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Craftsmanship",
    description: "Every detail is meticulously planned and executed, ensuring a legacy of quality and timeless beauty.",
    icon: Award,
    color: "from-amber-500/20 to-orange-500/20"
  }
];

export const CORPORATE_VALUES = [
  {
    title: "Integrity",
    description: "Building trust through transparency and ethical practices in every project.",
    icon: ShieldCheck
  },
  {
    title: "Excellence",
    description: "Setting the benchmark for quality in premium real estate development.",
    icon: Target
  },
  {
    title: "Punctuality",
    description: "Ensuring timely delivery of projects without compromising on standards.",
    icon: Clock
  },
  {
    title: "Community",
    description: "Creating environments that foster social connection and well-being.",
    icon: Building2
  }
];

export const LEADERSHIP = [
  {
    name: "Vikram Raamah",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    bio: "With over 30 years in the industry, Vikram has led Raamah Group to become a global leader."
  },
  {
    name: "Ananya Sharma",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    bio: "Ananya's visionary designs have won numerous international awards for sustainability."
  },
  {
    name: "Rajesh Malhotra",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    bio: "Rajesh oversees global operations and strategic growth across four continents."
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Sustainability",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    bio: "Sarah leads our commitment to net-zero carbon impact and regenerative design."
  }
];

export const MILESTONES = [
  {
    year: "2010",
    title: "Founding",
    description: "Raamah Group established its first boutique office in Vadodara, Gujarat.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2012",
    title: "First Major Project",
    description: "Completion of 'The Emerald Residencies', our first award-winning residential project.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2015",
    title: "Regional Expansion",
    description: "Expanded operations to major cities across Western India.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2018",
    title: "Sustainability Award",
    description: "Recognized by the Global Architecture Forum for our eco-friendly design initiatives.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2021",
    title: "Global Reach",
    description: "Launched our first international project in Dubai, UAE.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    year: "2024",
    title: "Present Day",
    description: "Redefining modern living with 50+ completed projects and a global presence.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PROPERTIES = [
  {
    id: 1,
    title: "The Obsidian Villa",
    location: "Malibu, California",
    price: "$12.5M",
    type: "Residential",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    description: "A masterpiece of modern minimalism and coastal luxury. This villa features seamless indoor-outdoor living, a private infinity pool, and breathtaking ocean views.",
    amenities: ["Infinity Pool", "Smart Home", "Private Beach", "Gym", "Cinema Room"],
    highlights: [
      { label: "Built Area", value: "8,500 sq ft" },
      { label: "Bedrooms", value: "6" },
      { label: "Bathrooms", value: "8" },
      { label: "Parking", value: "4 Cars" }
    ]
  },
  {
    id: 2,
    title: "Nexus Tower",
    location: "Dubai, UAE",
    price: "$250M",
    type: "Commercial",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    description: "Redefining the skyline with futuristic commercial design. Nexus Tower offers state-of-the-art office spaces with unparalleled city views and premium business facilities.",
    amenities: ["Business Center", "Helipad", "Sky Lounge", "Advanced Security", "Parking"],
    highlights: [
      { label: "Floors", value: "65" },
      { label: "Offices", value: "120" },
      { label: "Meeting Rooms", value: "15" },
      { label: "Parking", value: "500 Cars" }
    ]
  },
  {
    id: 3,
    title: "Azure Bay Estate",
    location: "Melbourne, Australia",
    price: "$8.2M",
    type: "Residential",
    tag: "New Launch",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    description: "Timeless residential elegance overlooking the bay. Azure Bay Estate combines classic architectural elements with modern comforts for a truly sophisticated lifestyle.",
    amenities: ["Bay View", "Wine Cellar", "Tennis Court", "Garden", "Spa"],
    highlights: [
      { label: "Built Area", value: "6,200 sq ft" },
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "6" },
      { label: "Parking", value: "3 Cars" }
    ]
  }
];

export const ALL_PROPERTIES = PROPERTIES;
export const ONGOING_PROJECTS = PROPERTIES;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Anderson",
    role: "Tech Entrepreneur",
    content: "The Obsidian Villa exceeded every expectation. The attention to detail and the seamless integration of technology make it a truly modern masterpiece.",
    project: "The Obsidian Villa",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Philanthropist",
    content: "Working with Raamah Group was a dream. They understood my vision for a sustainable estate and brought it to life with incredible elegance.",
    project: "Azure Bay Estate",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Venture Capitalist",
    content: "Nexus Tower is not just a building; it's a statement. Our office here has significantly improved our brand image and team productivity.",
    project: "Nexus Tower",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Sustainability Consultant",
    content: "I've worked with many developers, but Raamah Group's commitment to regenerative design is unparalleled. They actually deliver on their green promises.",
    project: "Eco-Loom Pavilion",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Robert Taylor",
    role: "Retired Professor",
    content: "The Azure Bay Estate provides the perfect tranquility for my retirement. The landscaping and the view of the bay are simply therapeutic.",
    project: "Azure Bay Estate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Lisa Wong",
    role: "Fashion Designer",
    content: "Lumina Lofts capture the urban essence perfectly. The high ceilings and natural light are a designer's dream workspace.",
    project: "Lumina Lofts",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "David Miller",
    role: "Corporate Executive",
    content: "Efficiency and elegance combined. Raamah Group managed to deliver our corporate headquarters ahead of schedule without cutting any corners.",
    project: "Green Horizon Hub",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Emily Davis",
    role: "Interior Stylist",
    content: "The structural integrity and the finish quality of Raamah projects make my job so much easier. The spaces are inherently beautiful.",
    project: "The Obsidian Villa",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Ahmed Al-Farsi",
    role: "Investment Banker",
    content: "The returns on my investment with Raamah Group have been consistently above market. Their strategic choice of locations is impressive.",
    project: "Nexus Tower",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Sophia Martinez",
    role: "Art Curator",
    content: "Every corner of my residence feels like a gallery. The architectural play of light and shadow is nothing short of artistic.",
    project: "Azure Bay Estate",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial", "Land"];
export const LOCATIONS = ["Malibu, California", "Dubai, UAE", "Melbourne, Australia", "New York, USA", "Singapore", "Berlin, Germany", "Vadodara, Gujarat"];

export const REELS = [
  {
    id: 1,
    title: "Coastal Luxury",
    location: "Malibu, California",
    video: "https://assets.mixkit.co/videos/preview/mixkit-luxury-villa-with-a-pool-and-palm-trees-4416-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Urban Skyline",
    location: "Dubai, UAE",
    video: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-city-with-skyscrapers-at-night-4424-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nature Retreat",
    location: "Singapore",
    video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-forest-with-a-river-4428-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Modern Interiors",
    location: "Berlin, Germany",
    video: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-with-a-fireplace-4432-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Mountain Escape",
    location: "Swiss Alps",
    video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-snowy-mountain-range-4436-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Sustainable Living",
    location: "New York, USA",
    video: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-city-with-green-parks-4440-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  }
];

export const CITY_PROPERTIES = [
  {
    id: 1,
    city: "Mumbai",
    title: "The Regency Estate",
    position: [19.0760, 72.8777] as [number, number],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    price: "₹12.5 Cr",
    type: "Luxury Residential"
  }
];

export const FLOOR_PLANS_DATA = [
  {
    id: 'studio',
    label: 'Studio Apartment',
    title: 'Modern Studio Layout',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    stats: [
      { label: 'Total Area', value: '450 sq ft' },
      { label: 'Living Space', value: '320 sq ft' },
      { label: 'Kitchen', value: 'Open Plan' },
      { label: 'Estimated Completion', value: 'Dec 2026', highlight: true }
    ]
  },
  {
    id: '1bhk',
    label: '1 BHK Suite',
    title: 'Spacious 1 BHK Residency',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
    stats: [
      { label: 'Total Area', value: '750 sq ft' },
      { label: 'Bedroom', value: '1 King Size' },
      { label: 'Balcony', value: 'Double Height' },
      { label: 'Estimated Completion', value: 'Mar 2027', highlight: true }
    ]
  },
  {
    id: '2bhk',
    label: '2 BHK Family',
    title: 'Luxury 2 BHK Family Home',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
    stats: [
      { label: 'Total Area', value: '1,200 sq ft' },
      { label: 'Bedrooms', value: '2 Master Suites' },
      { label: 'Bathrooms', value: '3 Modern' },
      { label: 'Estimated Completion', value: 'Jun 2027', highlight: true }
    ]
  }
];

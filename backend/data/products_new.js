const products = [
  // Cameras
  {
    _id: "1",
    name: "Olympus Tough TG-6 Digital Camera",
    image: "/images/cameras/Olympus-Tough-TG-6-Black_01.jpg",
    showcase: [
      "/images/cameras/Olympus-Tough-TG-6-Black_01.jpg",
      "/images/cameras/Olympus-Tough-TG-6-Black_02.jpg",
      "/images/cameras/Olympus-Tough-TG-6-Black_03.jpg",
      "/images/cameras/Olympus-Tough-TG-6-Black_04.jpg",
    ],
    features: {
      "Megapixels:": "12 MP",
      "Camera Type:": "Point and Shoot",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC",
      "Battery Model:": "LI-92B Rechargeable Lithium-Ion",
    },
    description:
      "The TG-6 is designed to withstand a wide variety of conditions, ranging from harsh climates to everyday mishaps:",
    brand: "Olympus ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "2",
    name: "Nikon COOLPIX B600 Digital Camera",
    image: "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_01.jpg",
    showcase: [
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_01.jpg",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_02.jpg",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_03.jpg",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_04.jpg",
    ],
    features: {
      "Megapixels:": "16.76 MP",
      "Camera Type:": "Point and Shoot",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC",
      "Battery Model:": "EN-EL12 Rechargeable Lithium-Ion",
    },
    description:
      "The TG-6 is designed to withstand a wide variety of conditions, ranging from harsh climates to everyday mishaps:",
    brand: "Nikon ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "3",
    name: "Fujifilm X100F Digital Camera",
    image: "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_01.jpg",
    showcase: [
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_01.jpg",
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_02.jpg",
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_03.jpg",
    ],
    features: {
      "Megapixels:": "24.3 MP",
      "Camera Type:": "Point and Shoot",
      "Compatible Memory Card:": "SD/SDHC/SDXC",
      "Sensor Size:": "APS-C",
      "Battery Model:": "NP-W126S Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "4",
    name: "Canon 5D Mark IV Camera",
    image: "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_01.jpg",
    showcase: [
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_01.jpg",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_02.jpg",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_03.jpg",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_04.jpg",
    ],
    features: {
      "Megapixels:": "31.7 MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-I), Slot 2: CompactFlash (UDMA 7)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "5",
    name: "Canon 6D Mark II Camera",
    image: "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_01.jpg",
    showcase: [
      "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_01.jpg",
      "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_02.jpg",
    ],
    features: {
      "Megapixels:": "27.1  MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "6",
    name: "Canon 77D Camera Kit",
    image: "/images/cameras/Canon-77D-Kit-EF-S18-55mm_01.jpg",
    showcase: [
      "/images/cameras/Canon-77D-Kit-EF-S18-55mm_01.jpg",
      "/images/cameras/Canon-77D-Kit-EF-S18-55mm_02.jpg",
    ],
    features: {
      "Megapixels:": "25.8 MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "7",
    name: "Nikon Z FC Mirrorless Camera",
    image: "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_01.jpg",
    showcase: [
      "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_01.jpg",
      "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_02.jpg",
    ],
    features: {
      "Megapixels:": "21.51 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "APS-C",
      "Battery Model:": "EN-EL25 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "8",
    name: "Panasonic Lumix DC-S1R Mirrorless Camera",
    image:
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_01.jpg",
    showcase: [
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_01.jpg",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_02.jpg",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_03.jpg",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_04.jpg",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_05.jpg",
    ],
    features: {
      "Megapixels:": "50.44 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-II), Slot 2: CFexpress Type B / XQD",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "DMW-BLJ31 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "9",
    name: "Panasonic Lumix DMC-G85K Mirrorless Camera",
    image: "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_02.jpg",
    showcase: [
      "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_02.jpg",
      "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_01.jpg",
    ],
    features: {
      "Megapixels:": "50.44 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-II), Slot 2: CFexpress Type B / XQD",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "DMW-BLJ31 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "10",
    name: "Fujifilm GFX 100S Medium Format Mirrorless Camera",
    image:
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_01.jpg",
    showcase: [
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_01.jpg",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_02.jpg",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_03.jpg",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_04.jpg",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_05.jpg",
    ],
    features: {
      "Megapixels:": "102 MP",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-W235 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "11",
    name: "Fujifilm GFX 100 Medium Format Mirrorless Camera ",
    image:
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-01.jpg",
    showcase: [
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-01.jpg",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-02.jpg",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-03.jpg",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-04.jpg",
    ],
    features: {
      "Megapixels:": "102 MP",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-T125 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "12",
    name: "Fujifilm GFX 50R Medium Format Mirrorless Camera",
    image:
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_01.jpg",
    showcase: [
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_01.jpg",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_02.jpg",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_03.jpg",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_04.jpg",
    ],
    features: {
      "Megapixels:": "51.4 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-T125 Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "13",
    name: "Fujifilm INSTAX Mini LiPlay Hybrid Instant Camera",
    image:
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_01.jpg",
    showcase: [
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_01.jpg",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_02.jpg",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_03.jpg",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_04.jpg",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_05.jpg",
    ],
    features: {
      "Focal Length:": "28mm",
      "Aperture:": "f/2",
      "Built In Flash:": "Yes",
      "Battery Type:": "Built-in Rechargeable Lithium-Ion",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "14",
    name: "Fujifilm INSTAX SQUARE SQ6 Camera",
    image:
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_01.jpg",
    showcase: [
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_01.jpg",
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_02.jpg",
    ],
    features: {
      "Focal Length:": "65.75mm",
      "Aperture:": "f/12.6",
      "Focus Type": "Zone Focus",
      "Built In Flash:": "Yes",
      "Battery Type:": "CR2",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "15",
    name: "Fujifilm INSTAX Mini 70 Instant Film Camera",
    image:
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-01.jpg",
    showcase: [
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-01.jpg",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-02.jpg",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-03.jpg",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-04.jpg",
    ],
    features: {
      "Focal Length:": "60mm",
      "Aperture:": "f/12.7",
      "Focus Type": "Manual Focus",
      "Built In Flash:": "Yes",
      "Battery Type:": "CR2",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "16",
    name: "Blackmagic Design Studio Camera 4K Pro",
    image: "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_01.jpg",
    showcase: [
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_01.jpg",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_02.jpg",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_03.jpg",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_04.jpg",
    ],
    features: {
      "Lens Mount:": "Micro Four Thirds",
      "Built-In Microphone Type:": "Stereo",
      "Audio Connectors":
        "2 x 3-Pin XLR Input on Camera Body, 1 x 1/8″ / 3.5 mm Stereo Mic Level Input, 1 x 1/8″ / 3.5 mm TRRS Headphone/Mic Input/Output, 1 x 5-Pin XLR Input/Output",
      "Size :": '7"',
      "Battery Type:": "CR2",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: true,
  },
  {
    _id: "17",
    name: "Sony FX3 Full-Frame Cinema Camera",
    image: "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_01.jpg",
    showcase: [
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_01.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_02.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_03.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_04.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_05.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_06.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_07.jpg",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_08.jpg",
    ],
    features: {
      1: "12.1MP Full-Frame CMOS Exmor R Sensor",
      2: "UHD 4K up to 120 | 1080p up to 240",
      3: "Compact Form for Cage-Free Operation",
      4: "10-Bit 4:2:2 XAVC S-I,16-Bit Raw Output",
      5: "S-Cinetone/S-Log3/HLG, 15+ Stops DR",
      6: "Detachable 2 x XLR/TRS Adapter Handle",
      7: "Phase Detection AF/Face Tracking/Eye AF",
      8: "80 to 409,600 Expanded ISO Range",
      9: "Dual CFexpress Type A/SDXC Card Slots",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },
  {
    _id: "18",
    name: "Panasonic AG-CX8ED 4K Professional Video Camera",
    image:
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_01.jpg",
    showcase: [
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_01.jpg",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_02.jpg",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_03.jpg",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_04.jpg",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_05.jpg",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_06.jpg",
    ],
    features: {
      1: "Wide 25mm* and Optical 24x Zoom Lens",
      2: "4K High-Precision AF",
      3: "Hybrid O.I.S",
      4: "Heat-Dispersing Design",
      5: "Versatile Recording Modes",
      6: "4:2:2 10-bit Internal Recording",
      7: "Multi-Formats Supported",
      8: "Full-HD Live Streaming",
      9: "Built-in LED Video Light",
    },
    description:
      "Rear 3.0″ 1.04m-dot LCD monitor for image playback and review, menu navigation, and for live view shooting.",
    brand: "Fujifilm ",
    category: "cameras",
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    featured: false,
  },

  // Camera Lenses

  // Action Cameras

  // Pro Audio

  // Gimbals & Stabilizers
];

module.exports = products;

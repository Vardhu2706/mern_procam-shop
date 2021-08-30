const products = [
  // Cameras - Point & Shoot Cameras
  {
    name: "Olympus Tough TG-6 Digital Camera",
    image: "/images/cameras/Olympus-Tough-TG-6-Black_01.JPG",
    showcase: [
      "/images/cameras/Olympus-Tough-TG-6-Black_01.JPG",
      "/images/cameras/Olympus-Tough-TG-6-Black_02.JPG",
      "/images/cameras/Olympus-Tough-TG-6-Black_03.JPG",
      "/images/cameras/Olympus-Tough-TG-6-Black_04.JPG",
    ],
    features: {
      Megapixels: "12 MP",
      "Camera Type": "Point and Shoot",
      "Compatible Memory Card": "Single Slot: SD/SDHC/SDXC",
      "Battery Model": "LI-92B Rechargeable Lithium-Ion",
    },
    brand: "Olympus",
    category: "cameras",
    subCategory: "Point and Shoot Cameras",
    price: 570,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Nikon COOLPIX B600 Digital Camera",
    image: "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_01.JPG",
    showcase: [
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_01.JPG",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_02.JPG",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_03.JPG",
      "/images/cameras/Nikon-COOLPIX-B600-Digital-Camera-Red_04.JPG",
    ],
    features: {
      "Megapixels:": "16.76 MP",
      "Camera Type:": "Point and Shoot",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC",
      "Battery Model:": "EN-EL12 Rechargeable Lithium-Ion",
    },
    brand: "Nikon ",
    category: "cameras",
    subCategory: "Point and Shoot Cameras",
    price: 370,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Fujifilm X100F Digital Camera",
    image: "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_01.JPG",
    showcase: [
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_01.JPG",
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_02.JPG",
      "/images/cameras/Fujifilm-X100F-Digital-Camera-Black_03.JPG",
    ],
    features: {
      "Megapixels:": "24.3 MP",
      "Camera Type:": "Point and Shoot",
      "Compatible Memory Card:": "SD/SDHC/SDXC",
      "Sensor Size:": "APS-C",
      "Battery Model:": "NP-W126S Rechargeable Lithium-Ion",
    },
    brand: "Fujifilm",
    category: "cameras",
    subCategory: "Point and Shoot Cameras",
    price: 1180,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },

  // Cameras - DSLR Cameras
  {
    name: "Canon 5D Mark IV Camera",
    image: "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_01.JPG",
    showcase: [
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_01.JPG",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_02.JPG",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_03.JPG",
      "/images/cameras/Canon-DSLR-5D-Mark-IV-Body-Only_04.JPG",
    ],
    features: {
      "Megapixels:": "31.7 MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-I), Slot 2: CompactFlash (UDMA 7)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    brand: "Canon",
    category: "cameras",
    subCategory: "DSLR Cameras",
    price: 3300,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Canon 6D Mark II Camera",
    image: "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_01.JPG",
    showcase: [
      "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_01.JPG",
      "/images/cameras/Canon-DSLR-Camera-EOS-6D-Mark-II-Body-Only_02.JPG",
    ],
    features: {
      "Megapixels:": "27.1  MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    brand: "Canon",
    category: "cameras",
    subCategory: "DSLR Cameras",
    price: 1750,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Canon 77D Camera Kit",
    image: "/images/cameras/Canon-77D-Kit-EF-S18-55mm_01.JPG",
    showcase: [
      "/images/cameras/Canon-77D-Kit-EF-S18-55mm_01.JPG",
      "/images/cameras/Canon-77D-Kit-EF-S18-55mm_02.JPG",
    ],
    features: {
      "Megapixels:": "25.8 MP",
      "Camera Type:": "DSLR",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "LP-E6N Rechargeable Lithium-Ion",
    },
    brand: "Canon",
    category: "cameras",
    subCategory: "DSLR Cameras",
    price: 820,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },

  // Cameras - Mirrorless Camera
  {
    name: "Nikon Z FC Mirrorless Camera",
    image: "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_01.JPG",
    showcase: [
      "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_01.JPG",
      "/images/cameras/Nikon-Z-FC-Mirrorless-Camera_02.JPG",
    ],
    features: {
      "Megapixels:": "21.51 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:": "Single Slot: SD/SDHC/SDXC (UHS-I)",
      "Sensor Size:": "APS-C",
      "Battery Model:": "EN-EL25 Rechargeable Lithium-Ion",
    },
    brand: "Nikon",
    category: "cameras",
    subCategory: "Mirrorless Cameras",
    price: 1200,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Panasonic Lumix DC-S1R Mirrorless Camera",
    image:
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_01.JPG",
    showcase: [
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_01.JPG",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_02.JPG",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_03.JPG",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_04.JPG",
      "/images/cameras/Panasonic-Lumix-DC-S1R-Mirrorless-Digital-Camera-Body-Only_05.JPG",
    ],
    features: {
      "Megapixels:": "50.44 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-II), Slot 2: CFexpress Type B / XQD",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "DMW-BLJ31 Rechargeable Lithium-Ion",
    },
    subCategory: "Mirrorless Cameras",
    brand: "Panasonic",
    category: "cameras",
    price: 4280,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Panasonic Lumix DMC-G85K Mirrorless Camera",
    image: "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_02.JPG",
    showcase: [
      "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_02.JPG",
      "/images/cameras/Panasonic-Lumix-DMC-G85-with-12-60mm_01.JPG",
    ],
    features: {
      "Megapixels:": "50.44 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:":
        "Slot 1: SD/SDHC/SDXC (UHS-II), Slot 2: CFexpress Type B / XQD",
      "Sensor Size:": "Full Frame",
      "Battery Model:": "DMW-BLJ31 Rechargeable Lithium-Ion",
    },
    subCategory: "Mirrorless Cameras",
    brand: "Panasonic",
    category: "cameras",
    price: 650,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },

  // Cameras - Medium Format
  {
    name: "Fujifilm GFX 100S Medium Format Mirrorless Camera",
    image:
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_01.JPG",
    showcase: [
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_01.JPG",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_02.JPG",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_03.JPG",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_04.JPG",
      "/images/cameras/Fujifilm-GFX-100S-Medium-Format-Mirrorless-Camera-Body-Only-Black_05.JPG",
    ],
    features: {
      "Megapixels:": "102 MP",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-W235 Rechargeable Lithium-Ion",
    },
    subCategory: "Medium Format Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 7200,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Fujifilm GFX 100 Medium Format Mirrorless Camera ",
    image:
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-01.JPG",
    showcase: [
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-01.JPG",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-02.JPG",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-03.JPG",
      "/images/cameras/FUJIFILM-GFX-100-Medium-Format-Mirrorless-Camera-Body-Only-04.JPG",
    ],
    features: {
      "Megapixels:": "102 MP",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-T125 Rechargeable Lithium-Ion",
    },
    subCategory: "Medium Format Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 10000,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },
  {
    name: "Fujifilm GFX 50R Medium Format Mirrorless Camera",
    image:
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_01.JPG",
    showcase: [
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_01.JPG",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_02.JPG",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_03.JPG",
      "/images/cameras/FUJIFILM-GFX-50R-Medium-Format-Mirrorless-Camera_04.JPG",
    ],
    features: {
      "Megapixels:": "51.4 MP",
      "Camera Type:": "Mirrorless",
      "Compatible Memory Card:": "Dual Slot: SD/SDHC/SDXC (UHS-II)",
      "Sensor Size:": "Medium Format",
      "Battery Model:": "NP-T125 Rechargeable Lithium-Ion",
    },
    subCategory: "Medium Format Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 4530,
    countInStock: 10,
    rating: 3,
    numReviews: 10,
  },

  // Cameras - Instant Cameras
  {
    name: "Fujifilm INSTAX Mini LiPlay Hybrid Instant Camera",
    image:
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_01.JPG",
    showcase: [
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_01.JPG",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_02.JPG",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_03.JPG",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_04.JPG",
      "/images/cameras/Fujifilm-INSTAX-Mini-LiPlay-Hybrid-Instant-Camera-Elegant-Black_05.JPG",
    ],
    features: {
      "Focal Length:": "28mm",
      "Aperture:": "f/2",
      "Built In Flash:": "Yes",
      "Battery Type:": "Built-in Rechargeable Lithium-Ion",
    },
    subCategory: "Instant Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 170,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Fujifilm INSTAX SQUARE SQ6 Camera",
    image:
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_01.JPG",
    showcase: [
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_01.JPG",
      "/images/cameras/Fujifilm-INSTAX-SQUARE-SQ6-Instant-Film-Camera-Graphite-Gray_02.JPG",
    ],
    features: {
      "Focal Length:": "65.75mm",
      "Aperture:": "f/12.6",
      "Focus Type": "Zone Focus",
      "Built In Flash:": "Yes",
      "Battery Type:": "CR2",
    },
    subCategory: "Instant Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 120,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Fujifilm INSTAX Mini 70 Instant Film Camera",
    image:
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-01.JPG",
    showcase: [
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-01.JPG",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-02.JPG",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-03.JPG",
      "/images/cameras/FUJIFILM-INSTAX-Mini-70-Instant-Film-Camera-Canary-Yellow-04.JPG",
    ],
    features: {
      "Focal Length:": "60mm",
      "Aperture:": "f/12.7",
      "Focus Type": "Manual Focus",
      "Built In Flash:": "Yes",
      "Battery Type:": "CR2",
    },
    subCategory: "Instant Cameras",
    brand: "Fujifilm",
    category: "cameras",
    price: 150,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },

  // Cameras - Video Cameras
  {
    name: "Blackmagic Design Studio Camera 4K Pro",
    image: "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_01.JPG",
    showcase: [
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_01.JPG",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_02.JPG",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_03.JPG",
      "/images/cameras/Blackmagic-Design-Studio-Camera-4K-Pro_04.JPG",
    ],
    features: {
      "Lens Mount:": "Micro Four Thirds",
      "Built-In Microphone Type:": "Stereo",
      "Audio Connectors":
        "2 x 3-Pin XLR Input on Camera Body, 1 x 1/8″ / 3.5 mm Stereo Mic Level Input, 1 x 1/8″ / 3.5 mm TRRS Headphone/Mic Input/Output, 1 x 5-Pin XLR Input/Output",
      "Size :": '7"',
      "Battery Type:": "CR2",
    },
    subCategory: "Video Cameras",
    brand: "Blackmagic",
    category: "cameras",
    price: 2500,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Sony FX3 Full-Frame Cinema Camera",
    image: "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_01.JPG",
    showcase: [
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_01.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_02.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_03.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_04.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_05.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_06.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_07.JPG",
      "/images/cameras/Sony-FX3-Full-Frame-Cinema-Camera_08.JPG",
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
    subCategory: "Video Cameras",
    brand: "Sony",
    category: "cameras",
    price: 5700,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Panasonic AG-CX8ED 4K Professional Video Camera",
    image:
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_01.JPG",
    showcase: [
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_01.JPG",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_02.JPG",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_03.JPG",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_04.JPG",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_05.JPG",
      "/images/cameras/Panasonic-AG-CX8ED-4K-Professional-Video-Camera_06.JPG",
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
    subCategory: "Video Cameras",
    brand: "Panasonic",
    category: "cameras",
    price: 2200,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },

  // Lenses - DSLR Lens
  {
    name: "Canon EF-S 18-55mm f/4-5.6 IS STM Lens",
    image: "/images/lenses/Canon-EF-S-18-55mm-f4-5.6-IS-STM-Lens-01.JPG",
    showcase: [
      "/images/lenses/Canon-EF-S-18-55mm-f4-5.6-IS-STM-Lens-01.JPG",
      "/images/lenses/Canon-EF-S-18-55mm-f4-5.6-IS-STM-Lens-02.JPG",
    ],
    features: {
      "Focal Length": "18 to 55mm",
      "Maximum Aperture": "f/4 to 5.6",
      "Lens Mount": "Canon EF – S",
      "Format Capability": "APS-C",
      "Focus Type": "Autofocus",
      "Filter Size": "58 mm (Front)",
    },
    subCategory: "DSLR Lenses",
    brand: "Canon",
    category: "lenses",
    price: 220,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Nikon AF-S DX 16-85mm f/3.5-5.6G ED VR Lens",
    image: "/images/lenses/Nikon-AF-S-DX-16-85mm-f3-01.JPG",
    showcase: [
      "/images/lenses/Nikon-AF-S-DX-16-85mm-f3-01.JPG",
      "/images/lenses/Nikon-AF-S-DX-16-85mm-f3-02.JPG",
      "/images/lenses/Nikon-AF-S-DX-16-85mm-f3-03.JPG",
      "/images/lenses/Nikon-AF-S-DX-16-85mm-f3-04.JPG",
    ],
    features: {
      "Focal Length": "16-85mm",
      "Maximum Aperture": "f/ 3.5-5.6",
      "Lens Mount": "Nikon F",
      "Format Capability": "Full-Frame",
      "Focus Type": "Manual focus",
    },
    subCategory: "DSLR Lenses",
    brand: "Nikon",
    category: "lenses",
    price: 630,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Sigma 500mm f/4 DG OS HSM Sports Lens",
    image:
      "/images/lenses/Sigma-500mm-f4-DG-OS-HSM-Sports-Lens-for-Canon-EF-01.JPG",
    showcase: [
      "/images/lenses/Sigma-500mm-f4-DG-OS-HSM-Sports-Lens-for-Canon-EF-01.JPG",
      "/images/lenses/Sigma-500mm-f4-DG-OS-HSM-Sports-Lens-for-Canon-EF-01.JPG",
    ],
    features: {
      "Focal Length": "500mm",
      "Maximum Aperture": "f/4",
      "Lens Mount": " Nikon F / Canon EF",
      "Format Capability": "Full-Frame",
      "Focus Type": "Autofocus",
      "Filter Size": "46 mm (Drop-In)",
    },
    subCategory: "DSLR Lenses",
    brand: "Sigma",
    category: "lenses",
    price: 2200,
    countInStock: 10,
    rating: 3.4,
    numReviews: 10,
  },

  // Lenses - Mirrorless Lenses
  {
    name: "Fujifilm XF 18mm f/1.4 R LM WR Lens",
    image: "/images/lenses/Fujifilm-XF-18mm-f1.4-R-LM-WR-Lens-01.JPG",
    showcase: [
      "/images/lenses/Fujifilm-XF-18mm-f1.4-R-LM-WR-Lens-01.JPG",
      "/images/lenses/Fujifilm-XF-18mm-f1.4-R-LM-WR-Lens-02.JPG",
      "/images/lenses/Fujifilm-XF-18mm-f1.4-R-LM-WR-Lens-03.JPG",
    ],
    features: {
      "Focal Length": "18mm",
      "Maximum Aperture": "f/1.4",
      "Lens Mount": "Fujifilm X",
      "Format Capability": "APS-C",
      "Focus Type": "Autofocus",
      "Filter Size": "62 mm (Front)",
    },
    subCategory: "Mirrorless Lenses",
    brand: "Fujifilm",
    category: "lenses",
    price: 1180,
    countInStock: 10,
    rating: 4.2,
    numReviews: 10,
  },
  {
    name: "Nikon Z Micro 50mm f/2.8 Lens",
    image: "/images/lenses/Nikon-Z-Micro-50mm-f2-01.JPG",
    showcase: [
      "/images/lenses/Nikon-Z-Micro-50mm-f2-01.JPG",
      "/images/lenses/Nikon-Z-Micro-50mm-f2-02.JPG",
    ],
    features: {
      "Focal Length": "50mm",
      "Maximum Aperture": "f/2.8",
      "Lens Mount": "Nikon Z",
      "Format Capability": "Full-Frame",
      "Focus Type": "Autofocus",
      "Filter Size": "46 mm (Front)",
    },
    subCategory: "Mirrorless Lenses",
    brand: "Nikon",
    category: "lenses",
    price: 775,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Nikon Z Micro 105mm f/2.8 VR S Lens",
    image: "/images/lenses/Nikon-Z-Micro-105mm-f2-01.JPG",
    showcase: [
      "/images/lenses/Nikon-Z-Micro-105mm-f2-01.JPG",
      "/images/lenses/Nikon-Z-Micro-105mm-f2-02.JPG",
    ],
    features: {
      "Focal Length": "105mm",
      "Maximum Aperture": "f/2.8",
      "Lens Mount": "Nikon Z",
      "Format Capability": "Full-Frame",
      "Focus Type": "Autofocus",
      "Filter Size": "62 mm (Front)",
    },
    subCategory: "Mirrorless Lenses",
    brand: "Nikon",
    category: "lenses",
    price: 1180,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },

  // Lenses - Medium Format
  {
    name: "Fujifilm GF 80mm f/1.7 R WR Lens",
    image: "/images/lenses/Fujifilm-GF-80mm-f1.7-R-WR-Lens_01.JPG",
    showcase: [
      "/images/lenses/Fujifilm-GF-80mm-f1.7-R-WR-Lens_01.JPG",
      "/images/lenses/Fujifilm-GF-80mm-f1.7-R-WR-Lens_02.JPG",
    ],
    features: {
      "Focal Length": "80mm",
      "Maximum Aperture": "f/1.7",
      "Lens Mount": "FUJIFILM G",
      "Format Capability": "Medium Format",
      "Focus Type": "Autofocus",
      "Filter Size": "77 mm (Front)",
    },
    subCategory: "Medium Format Lenses",
    brand: "Fujifilm",
    category: "lenses",
    price: 2760,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Fujifilm GF 50mm F/3.5 R LM WR Lens",
    image: "/images/lenses/Fujifilm-50mm-F3.5-R-LM-WR-Lens_01.JPG",
    showcase: [
      "/images/lenses/Fujifilm-50mm-F3.5-R-LM-WR-Lens_01.JPG",
      "/images/lenses/Fujifilm-50mm-F3.5-R-LM-WR-Lens_02.JPG",
      "/images/lenses/Fujifilm-50mm-F3.5-R-LM-WR-Lens_03.JPG",
    ],
    features: {
      "Focal Length": "50mm",
      "Maximum Aperture": "f/3.5",
      "Lens Mount": "FUJIFILM G",
      "Format Capability": "Medium Format",
      "Focus Type": "Autofocus",
      "Filter Size": "62 mm (Front)",
    },
    subCategory: "Medium Format Lenses",
    brand: "Fujifilm",
    category: "lenses",
    price: 1140,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },
  {
    name: "Fujifilm GF 32-64mm f/4 R LM WR Lens",
    image: "/images/lenses/Fujifilm-GF-32-64mm-f4-R-LM-WR-Lens_01.JPG",
    showcase: [
      "/images/lenses/Fujifilm-GF-32-64mm-f4-R-LM-WR-Lens_01.JPG",
      "/images/lenses/Fujifilm-GF-32-64mm-f4-R-LM-WR-Lens_03.JPG",
      "/images/lenses/Fujifilm-GF-32-64mm-f4-R-LM-WR-Lens_04.JPG",
    ],
    features: {
      "Focal Length": "32 to 64mm",
      "Maximum Aperture": "f/4",
      "Lens Mount": "FUJIFILM G",
      "Format Capability": "Medium Format",
      "Focus Type": "Autofocus",
      "Filter Size": "77 mm (Front)",
    },
    subCategory: "Medium Format Lenses",
    brand: "Fujifilm",
    category: "lenses",
    price: 2400,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },

  // Lenses - Filters & Adapters
  {
    name: "Nisi 67mm V.ND 1.5-5 stop Filter",
    image:
      "/images/lenses/NiSi-67mm-Variable-Neutral-Density-0.45-to-1.5-Filter.JPG",
    showcase: [
      "/images/lenses/NiSi-67mm-Variable-Neutral-Density-0.45-to-1.5-Filter.JPG",
    ],
    features: {
      1: "Variable 0.45-1.5 Neutral Density Filter",
      2: "Reduce Exposure by 1.5 to 5 Stops",
      3: "Darkens Entire Image",
      4: "Greater Control Over Exposure Settings",
      5: "Allows Reduced Shutter Speed",
      6: "Allows Wider Aperture",
      7: "Optical Glass Construction",
      8: "72mm Front Filter Threads",
      9: "Filter Ring Rotation Lever",
      0: "Plastic Case",
    },
    subCategory: "Filters & Adapters",
    brand: "Nisi",
    category: "lenses",
    price: 105,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Hoya 52mm UX UV Filter",
    image: "/images/lenses/Hoya-52mm-UX-UV-Filter-01.JPG",
    showcase: [
      "/images/lenses/Hoya-52mm-UX-UV-Filter-01.JPG",
      "/images/lenses/Hoya-52mm-UX-UV-Filter-02.JPG",
    ],
    features: {
      1: "Anti-reflection coating",
      2: "Water-repellent coating",
      3: "Slim frame",
    },
    subCategory: "Filters & Adapters",
    brand: "Hoya",
    category: "lenses",
    price: 20,
    countInStock: 10,
    rating: 4.6,
    numReviews: 10,
  },
  {
    name: "NiSi V6 Pro Starter Filter Kit III with Circular Polarizer Filter",
    image:
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_01.JPG",
    showcase: [
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_01.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_02.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_03.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_04.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_05.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_06.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_07.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_08.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_09.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_10.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_11.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_12.JPG",
      "/images/lenses/NiSi-100mm-Starter-Kit-Plus-Third-Generation-III-with-V6-and-Landscape-CPL_13.JPG",
    ],
    features: {
      1: "Features the new NiSi V6 Holder",
      2: "Includes the Enhanced Landscape CPL",
      3: "Allows the use of 3 square filters + 1 circular polariser",
      4: "No vignetting on ultra wide lenses such as Canon 16-35mm f/2.8",
      5: "Includes 4 filters (6 Stop ND, 10 Stop ND, Medium GND8, Reverse GND8)",
      6: "Includes the NiSi Pouch Plus",
      7: "Ultimate starter kit for getting started with ND filters and landscape photography",
    },
    subCategory: "Filters & Adapters",
    brand: "Nisi",
    category: "lenses",
    price: 499,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },

  // Action Cameras - Cameras
  {
    name: "Insta360 GO2 Action Camera",
    image: "/images/action/Insta360-GO2-Action-Camera-01.JPG",
    showcase: [
      "/images/action/Insta360-GO2-Action-Camera-01.JPG",
      "/images/action/Insta360-GO2-Action-Camera-02.JPG",
      "/images/action/Insta360-GO2-Action-Camera-03.JPG",
    ],
    features: {
      Camera: "9 MP",
      "Built-In Mic": "Yes",
      "Internal Storage": "32 GB",
      "Memory Card Slot": "None",
      "Waterproof ": "Upto 3.4m",
      "Charging Method": "USB",
      Battery: "Rechargeable Battery",
    },
    subCategory: "Action Cameras",
    brand: "Insta360",
    category: "action",
    price: 430,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "GoPro HERO9 Black Action Camera",
    image: "/images/action/GoPro-HERO9-Black-Action-Camera-01.JPG",
    showcase: [
      "/images/action/GoPro-HERO9-Black-Action-Camera-01.JPG",
      "/images/action/GoPro-HERO9-Black-Action-Camera-02.JPG",
      "/images/action/GoPro-HERO9-Black-Action-Camera-03.JPG",
      "/images/action/GoPro-HERO9-Black-Action-Camera-04.JPG",
    ],
    features: {
      Camera: "23.6 MP",
      "Built-In Mic": "Yes",
      "Memory Card Slot": "Single Slot – microSD",
      Waterproof: "33.0′ / 10.0 m",
      "Charging Method": "USB",
      Battery: "Rechargeable Battery Pack",
    },
    subCategory: "Action Cameras",
    brand: "GoPro",
    category: "action",
    price: 560,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Insta360 One R (One Inch Leica Edition) Action Camera",
    image: "/images/action/Insta360-ONE-R-1-Edition-01.JPG",
    showcase: [
      "/images/action/Insta360-ONE-R-1-Edition-01.JPG",
      "/images/action/Insta360-ONE-R-1-Edition-02.JPG",
      "/images/action/Insta360-ONE-R-1-Edition-03.JPG",
    ],
    features: {
      "Built-In-Mic": "No",
      "Memory Card Slot": "Single Slot – microSD",
      Waterproof: "Yes",
      Battery: "Built-In Lithium-Ion Battery, 1190 mAh",
      "Charging Method": "USB",
    },
    subCategory: "Action Cameras",
    brand: "Insta360",
    category: "action",
    price: 630,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },

  // Action Cameras - Accessories
  {
    name: "Insta360 One R Lens Guard for 360 Dual-Lens Mod",
    image:
      "/images/action/Insta360-One-R-Lens-Guard-for-360-Dual-Lens-Mod_01.JPG",
    showcase: [
      "/images/action/Insta360-One-R-Lens-Guard-for-360-Dual-Lens-Mod_01.JPG",
      "/images/action/Insta360-One-R-Lens-Guard-for-360-Dual-Lens-Mod_02.JPG",
      "/images/action/Insta360-One-R-Lens-Guard-for-360-Dual-Lens-Mod_03.JPG",
      "/images/action/Insta360-One-R-Lens-Guard-for-360-Dual-Lens-Mod_04.JPG",
    ],
    features: {
      1: "Hardened, reinforced lens shields",
      2: "Designed to Secure to Mounting Frame",
    },
    subCategory: "Action Cameras Accessories",
    brand: "Insta360",
    category: "action",
    price: 40,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Insta360 ONE R Boosted Battery Base",
    image: "/images/action/Insta360-ONE-R-Boosted-Battery-Base-01.JPG",
    showcase: [
      "/images/action/Insta360-ONE-R-Boosted-Battery-Base-01.JPG",
      "/images/action/Insta360-ONE-R-Boosted-Battery-Base-02.JPG",
      "/images/action/Insta360-ONE-R-Boosted-Battery-Base-03.JPG",
    ],
    features: {
      Capacity: "2380 mAh",
      Voltage: "3.85 V",
    },
    subCategory: "Action Cameras Accessories",
    brand: "Insta360",
    category: "action",
    price: 50,
    countInStock: 10,
    rating: 4.1,
    numReviews: 10,
  },
  {
    name: "Ulanzi Gp-6 Cold Shoe for Action Camera",
    image: "/images/action/Ulanzi-Gp-6-Cold-Shoe-for-Action-Camera-01.JPG",
    showcase: [
      "/images/action/Ulanzi-Gp-6-Cold-Shoe-for-Action-Camera-01.JPG",
      "/images/action/Ulanzi-Gp-6-Cold-Shoe-for-Action-Camera-02.JPG",
    ],
    features: {
      1: "Universal Cold Shoe Mount",
      2: "Aluminum alloy construction",
    },
    subCategory: "Action Cameras Accessories",
    brand: "Ulanzi",
    category: "action",
    price: 20,
    countInStock: 10,
    rating: 3.6,
    numReviews: 10,
  },

  // Pro Audio - Microphones
  {
    name: "RollMaster 4K Wireless Video Transmission System",
    image:
      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-01.JPG",
    showcase: [
      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-01.JPG",

      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-02.JPG",

      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-03.JPG",

      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-04.JPG",

      "/images/audio/RollMaster-4K-Wireless-Video-Transmission-System-05.JPG",
    ],
    features: {
      1: "4K 30fps Supported",
      2: "1000ft Video Transmission",
      3: "1080p 60fps Supported",
      4: "OLED Color Display",
      5: "External Battery Support",
      6: "Zero Lag Transmission",
      7: "Light Weight Robust Design",
    },
    subCategory: "Microphones & Kits",
    brand: "RollMaster",
    category: "audio",
    price: 520,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Rode Vlogger Filmmaking Kit",
    image: "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-01.JPG",
    showcase: [
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-01.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-02.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-03.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-04.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-05.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-06.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-07.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-08.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-08.JPG",
      "/images/audio/Rode-Vlogger-Kit-iOS-Edition-Filmmaking-Kit-10.JPG",
    ],
    features: {
      "Sound Field": "Mono",
      "Polar Pattern": "Cardioid",
      "Form Factor": "Mobile Device Mic / Shotgun Mic",
      "Output Connectors": "1 x Lightning Male (on Mic)",
      "Headphone Connector": "1 x 1/8″ / 3.5 mm",
      "Bus Power": "Lightning",
    },
    subCategory: "Microphones & Kits",
    brand: "Rode",
    category: "audio",
    price: 210,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Sony LV-1 Stereo Lavalier Microphone",
    image: "/images/audio/Sony-LV-1-Stereo-Lavalier-Microphone-01.JPG",
    showcase: [
      "/images/audio/Sony-LV-1-Stereo-Lavalier-Microphone-01.JPG",
      "/images/audio/Sony-LV-1-Stereo-Lavalier-Microphone-02.JPG",
      "/images/audio/Sony-LV-1-Stereo-Lavalier-Microphone-03.JPG",
      "/images/audio/Sony-LV-1-Stereo-Lavalier-Microphone-04.JPG",
    ],
    features: {
      "Sound Field": "Stereo",
      "Polar Pattern": "Omnidirectional",
      "Output Connectors": "3.5 mm TRS Male",
      "Wireless Connectivity": "No",
      "Operating Voltage": "Not Specified",
    },
    subCategory: "Microphones & Kits",
    brand: "Sony",
    category: "audio",
    price: 30,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },

  // Pro Audio - Recorders
  {
    name: "Tascam DR-22WL Portable Handheld Recorder with Wi-Fi",
    image: "/images/audio/Tascam-DR-22WL_01.JPG",
    showcase: [
      "/images/audio/Tascam-DR-22WL_01.JPG",
      "/images/audio/Tascam-DR-22WL_02.JPG",
      "/images/audio/Tascam-DR-22WL_03.JPG",
      "/images/audio/Tascam-DR-22WL_04.JPG",
      "/images/audio/Tascam-DR-22WL_05.JPG",
      "/images/audio/Tascam-DR-22WL_06.JPG",
      "/images/audio/Tascam-DR-22WL_07.JPG",
    ],
    features: {
      1: "Wi-Fi Enabled Control and File Transfers",
      2: "Stereo XY Condenser Microphone",
      3: "24-bit/96kHz Recording",
      4: "Scene Dial for Common Recording Modes",
      5: "Dual-Format Recording",
      6: "LCD Menu Screen",
      7: "Record to microSD Cards",
    },
    subCategory: "Recorders",
    brand: "Tascam",
    category: "audio",
    price: 200,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Zoom H8 Recorder",
    image:
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-01.JPG",
    showcase: [
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-01.JPG",
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-02.JPG",
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-03.JPG",
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-04.JPG",
      "/images/audio/Zoom-H8-8-Input-12-Track-Portable-Handy-Recorder-05.JPG",
    ],
    features: {
      "Number of Tracks": "WAV: 12 (8 Inputs + Stereo Mix)",
      Microphone: "Interchangeable",
      "Built-In Speaker": "Yes",
      "Memory Card Support":
        "SD (Up to 2 GB), SDHC (4 GB to 32 GB), SDXC (64 GB to 512 GB)",
      "Internal Storage": "None",
      "Audio File Formats": "BWF, MP3, WAV",
      "Battery Type": "4 x AA",
    },
    subCategory: "Recorders",
    brand: "Zoom",
    category: "audio",
    price: 480,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "LiveU Solo SDI/HDMI Video/Audio Encoder",
    image: "/images/audio/LiveU-Solo-HDMI-VideoAudio-Encoder_01.JPG",
    showcase: [
      "/images/audio/LiveU-Solo-HDMI-VideoAudio-Encoder_01.JPG",
      "/images/audio/LiveU-Solo-HDMI-VideoAudio-Encoder_02.JPG",
      "/images/audio/LiveU-Solo-HDMI-VideoAudio-Encoder_03.JPG",
      "/images/audio/LiveU-Solo-HDMI-VideoAudio-Encoder_04.JPG",
    ],
    features: {
      1: "Compact All-in-One Streaming Solution",
      2: "SDI and HDMI Video Inputs",
      3: "Connect via Cellular, Wi-Fi & Ethernet",
      4: "Uses LiveU’s Cloud Services",
    },
    subCategory: "Recorders",
    brand: "LiveU",
    category: "audio",
    price: 2360,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },

  // Pro Audio - Speakers/Headphones
  {
    name: "Sennheiser HD 215 Stereo Headphones",
    image: "/images/audio/Sennheiser-HD-215-Over-Ear-Stereo-Headphones_01.JPG",
    showcase: [
      "/images/audio/Sennheiser-HD-215-Over-Ear-Stereo-Headphones_01.JPG",
      "/images/audio/Sennheiser-HD-215-Over-Ear-Stereo-Headphones_02.JPG",
      "/images/audio/Sennheiser-HD-215-Over-Ear-Stereo-Headphones_03.JPG",
      "/images/audio/Sennheiser-HD-215-Over-Ear-Stereo-Headphones_04.JPG",
    ],
    features: {
      1: "Excellent stereo sound",
      2: "Spatial sound image",
      3: "Outstanding wearing comfort for long listening sessions",
      4: "Excellent attenuation of ambient noise",
    },
    subCategory: "Speakers & Headphones",
    brand: "Sennheiser",
    category: "audio",
    price: 90,
    countInStock: 10,
    rating: 4.1,
    numReviews: 10,
  },
  {
    name: "Sony MHC-V21D Bluetooth Wireless Music System",
    image: "/images/audio/Sony-MHC-V21D-Bluetooth-Wireless-Music-System-01.JPG",
    showcase: [
      "/images/audio/Sony-MHC-V21D-Bluetooth-Wireless-Music-System-01.JPG",
      "/images/audio/Sony-MHC-V21D-Bluetooth-Wireless-Music-System-02.JPG",
      "/images/audio/Sony-MHC-V21D-Bluetooth-Wireless-Music-System-03.JPG",
    ],
    features: {
      1: "Single-Unit Configuration",
      2: "8″ Woofer, 2x 2.63″ Tweeters",
      3: "Bluetooth Audio Streaming & NFC Pairing",
      4: "Built-In CD Player & FM Tuner",
      5: "RCA & USB, 2x 1/4″ Mic/Guitar Inputs",
      6: "USB Recording",
      7: "Built-In Blue Speaker Light",
      8: "Control via Sony | Music Center App",
      9: "Integrated Carry Handles",
    },
    subCategory: "Speakers & Headphones",
    brand: "Sony",
    category: "audio",
    price: 385,
    countInStock: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "Sennheiser HD 300 PRO Monitoring Headphones",
    image:
      "/images/audio/Sennheiser-HD-300-PRO-Over-Ear-Monitoring-Headphones_01.JPG",
    showcase: [
      "/images/audio/Sennheiser-HD-300-PRO-Over-Ear-Monitoring-Headphones_01.JPG",
      "/images/audio/Sennheiser-HD-300-PRO-Over-Ear-Monitoring-Headphones_02.JPG",
      "/images/audio/Sennheiser-HD-300-PRO-Over-Ear-Monitoring-Headphones_03.JPG",
      "/images/audio/Sennheiser-HD-300-PRO-Over-Ear-Monitoring-Headphones_04.JPG",
    ],
    features: {
      Foldable: "Yes",
      "Audio Connector to Source": "1/8″ / 3.5 mm TRS Straight",
      "Adapter ": "1/4″ TRS",
    },
    subCategory: "Speakers & Headphones",
    brand: "Sennheiser",
    category: "audio",
    price: 150,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
  },
];

export default products;

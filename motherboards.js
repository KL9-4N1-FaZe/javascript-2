const motherboard = [
    {
        marca: "Asus",
        modello: "ROG STRIX Z790-A",
        tipo: "Gaming",
        anno: "2022",
        prezzo: " 323,99€",
        immagine: "https://m.media-amazon.com/images/I/81hivmz3RYL._AC_SX679_.jpg",
        descrizione: "Scheda Madre ATX, Intel Z790, LGA1700, DDR4, PCI 5.0, WiFi 6E (802.11ax), Intel 2.5Gb Ethernet, ROG SupremeFX 7.1, 4xM.2, 4xSATA 6GB/s, Aura Sync RGB, Nero",
        caratteristiche: ["ASUS ROG STRIX Z790-A" , "DDR4" , ],
        socket: "LGA 1700",
      porte:[
        {
          nome:"usb",
          porte:10
        },
        {
            nome:"HDMI",
            porte:1
        },
        {
            nome:"USB 2.0",
            porte:6 
        },
      ],
      slot:[
        {
            nome:"PCI",
            porte:4
        },
        {
            nome:"USB-type-C",
            porte:4
        },
      ],
       frequenze:['5333 MHz'],
    },
    {
        marca: "Asus",
        modello: "PRIME Z790-P WIFI ",
        tipo: "Gaming",
        anno: "2022",
        prezzo: " 234,90€ ",
        immagine: "https://m.media-amazon.com/images/I/81TWpSVnMzL._AC_SX679_.jpg",
        descrizione: " Scheda Madre Gaming ATX, Intel Z790, LGA1700, DDR5, PCI 5.0, WiFi 6 (802.11ax), Realtek 2.5Gb Ethernet, Realtek 7.1, 3xM.2, 4xSATA 6GB/s, Aura Sync RGB, Nero",
        caratteristiche: ["ASUS PRIME Z790-P WIFI" , "DDR5" , ],
        socket: "LGA 1700",
      porte:[
        {
          nome:"usb",
          porte:8
        },
        {
            nome:"HDMI",
            porte:1
        },
        {
            nome:"USB 2.0",
            porte:2
        },
      ],
      slot:[
        {
            nome:"PCI",
            porte:3
        },
        {
            nome:"SATA",
            porte:4
        },
      ],
       frequenze:['	2133 MHz'],
    },
    {
        marca: "Asus",
        modello: " TUF GAMING Z790-BTF WIFI ",
        tipo: "Gaming",
        anno: "2022",
        prezzo: "351,90€",
        immagine: "https://m.media-amazon.com/images/I/81SqeFmvJnL._AC_SX679_.jpg",
        descrizione: "Scheda madre Intel (LGA 1700) ATX, PCIe 5.0, 4 slot M.2, DDR5, Ethernet 2,5 Gb, Wi-Fi 7, HDMI, DisplayPort, USB 20 Gbps Type-C, Thunderbolt 4, Aura Sync, AEMPII, Bianco",
        caratteristiche: ["ASUS TUF GAMING Z790-BTF WIFI" , "DDR5" , ],
        socket: "LGA 1700",
      porte:[
        {
          nome:"usb",
          porte:15
        },
        {
            nome:"HDMI",
            porte:1
        },
        {
            nome:"USB 2.0",
            porte:2
        },
      ],
      slot:[
        {
            nome:"PCI",
            porte:2
        },
        {
            nome:"ethernet",
            porte:1
        },
      ],
       frequenze:['4266 MHz'],
    },
    {
        marca: "Asus",
        modello: "ROG CROSSHAIR VIII EXTREME",
        tipo: "Gaming",
        anno: "2020",
        prezzo: "770,90€",
        immagine: "https://m.media-amazon.com/images/I/813x9UZqQCL._AC_SX679_.jpg",
        descrizione: "Scheda madre gaming AMD X570 EATX, 5xM.2, USB 3.2 Gen 2x2 xPD3.0 60W, 2x TB 4, Intel 2.5 Gb, PCIe 4.0, WiFi 6E, Aura Sync RGB",
        caratteristiche: ["ASUS ROG CROSSHAIR VIII EXTREME" , "DDR4" , ],
        socket: "AM4",
      porte:[
        {
          nome:"usb",
          porte:14
        },
        {
            nome:"HDMI",
            porte:1
        },
        {
            nome:"SATA",
            porte:6
        },
      ],
      slot:[
        {
            nome:"PCI",
            porte:3
        },
        {
            nome:"ethernet",
            porte:2
        },
      ],
       frequenze:['4266 MHz'],
    },
    {
        marca: "Asus",
        modello: "ROG Crosshair VIII Impact Scheda Madre Gaming",
        tipo: "Gaming",
        anno: "2019",
        prezzo: "303,60€",
        immagine: "https://m.media-amazon.com/images/I/81lEkelfZeL._AC_SX679_.jpg",
        descrizione: "Scheda Madre Gaming AMD X570 Mini-DTX con scheda SO-DIMM.2, Wi-Fi 6, PCIe 4.0, audio SupremeFX, Aura Sync RGB, SATA 6 Gb/s e USB 3.2 Gen 2",
        caratteristiche: ["ASUS ROG Crosshair VIII Impact" , "DDR4" , ],
        socket: "AM4",
      porte:[
        {
          nome:"usb",
          porte:17
        },
        {
            nome:"HDMI",
            porte:1
        },
        {
            nome:"USB 2.0",
            porte:2
        },
      ],
      slot:[
        {
            nome:"PCI",
            porte:3
        },
        {
            nome:"ethernet",
            porte:5
        },
      ],
       frequenze:['4266 MHz'],
    },
] 

for(let i=0; i<motherboard.length; i++){
    console.log(motherboard[i].marca + " "+ motherboard[i].modello + " " + motherboard[i].prezzo )
}
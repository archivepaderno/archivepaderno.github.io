// Dati e stato globale

const placesData = [
    {
        title: "Foto Aeree", title_en: "Aerial Photos",
        lat: 0, lng: 0,
        flatPhotos: true,
        showInCarousel: false, showInMap: false, showInGallery: true,
        photos: [
            { src: "foto/aerea_1.jpg", label: "Vista dell'Imec (1962)", label_en: "View of Imec (1962)" },
            { src: "foto/aerea_2.jpg", label: "Vista del Monte Robbio e del paese (ca. 1970)", label_en: "View of Mount Robbio and the village (ca. 1970)" }
        ]
    },
    {
        title: "Monte Robbio", title_en: "Mount Robbio",
        lat: 45.690693, lng: 9.448471,
        showInCarousel: false, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/robbio_ieri_2.webp", label: "Ieri (ca. 1905)", label_en: "Then (ca. 1905)" },
            { src: "foto/robbio_ai_2.webp", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/robbio_oggi_2.webp", label: "Oggi", label_en: "Now" },
            { src: "foto/robbio_ieri_1.webp", label: "Ieri (1931)", label_en: "Then (1931)" },
            { src: "foto/robbio_ai_1.webp", label: "Ricostruzione AI", label_en: "AI Reconstruction" }
        ]
    },
    {
        title: "Via Airoldi", title_en: "Via Airoldi",
        lat: 45.681750, lng: 9.448150,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/airoldi_ieri.jpg", label: "Ieri (1967)", label_en: "Then (1967)" },
            { src: "foto/airoldi_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/airoldi_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Bar in via Pozzoni", title_en: "Bar on via Pozzoni",
        lat: 45.683828, lng: 9.444571,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/bar_ieri.jpg", label: "Ieri (ca. 1970)", label_en: "Then (ca. 1970)" },
            { src: "foto/bar_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/bar_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Ponte S. Michele", title_en: "S. Michele bridge",
        lat: 45.682107, lng: 9.451927,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/ponte_ieri.jpg", label: "Ieri (1970)", label_en: "Then (1970)" },
            { src: "foto/ponte_ai.jpg", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/ponte_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Ristorante in via Edison", title_en: "Restaurant on via Edison",
        lat: 45.681906, lng: 9.450617,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/belsit_ieri.jpg", label: "Ieri (ca. 1955)", label_en: "Then (ca. 1955)" },
            { src: "foto/belsit_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/belsit_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via del Cavetto", title_en: "Via del Cavetto",
        lat: 45.688022, lng: 9.445455,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/cavetto_ieri.jpg", label: "Ieri (ca. 1960)", label_en: "Then (ca. 1960)" },
            { src: "foto/cavetto_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/cavetto_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Chiesa di S. M. Assunta ", title_en: "Church of S. M. Assunta",
        lat: 45.684626, lng: 9.444796,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/chiesa_ieri.jpg", label: "Ieri (ca. 1905)", label_en: "Then (ca. 1905)" },
            { src: "foto/chiesa_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/chiesa_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Vie Colleoni e Riva", title_en: "Via Colleoni and Riva",
        lat: 45.684508, lng: 9.440893,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/colleoni_ieri.png", label: "Ieri (ca. 1970)", label_en: "Then (ca. 1970)" },
            { src: "foto/colleoni_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/colleoni_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Dopolavoro Viscardi", title_en: "Dopolavoro Viscardi",
        lat: 45.676587, lng: 9.443653,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/dopolavoro_ieri.jpg", label: "Ieri (ca. 1930)", label_en: "Then (ca. 1930)" },
            { src: "foto/dopolavoro_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Edison", title_en: "Via Edison",
        lat: 45.682199, lng: 9.449874,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/edison_ieri.jpg", label: "Ieri (ca. 1975)", label_en: "Then (ca. 1975)" },
            { src: "foto/edison_ai.jpg", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/edison_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Casa del Fascio", title_en: "Casa del Fascio",
        lat: 45.688903, lng: 9.443735,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/fascio_ieri_1.webp", label: "Ieri (ca. 1935) - 1", label_en: "Then (ca. 1935) - 1" },
            { src: "foto/fascio_ieri_2.webp", label: "Ieri (ca. 1935) - 2", label_en: "Then (ca. 1935) - 2" },
            { src: "foto/fascio_ai_2.webp", label: "Ricostruzione AI - 2", label_en: "AI Reconstruction - 2" },
            { src: "foto/fascio_oggi_2.web", label: "Oggi - 2", label_en: "Now - 2" }
        ]
    },
    {
        title: "Piazza della Repubblica", title_en: "Piazza della Repubblica",
        lat: 45.688065, lng: 9.439800,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/fontana_ieri.png", label: "Ieri (ca. 1955)", label_en: "Then (ca. 1955)" },
            { src: "foto/fontana_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/fontana_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Mazzini", title_en: "Via Mazzini",
        lat: 45.688065, lng: 9.439800,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/mazzini_ieri.jpg", label: "Ieri (ca. 1970)", label_en: "Then (ca. 1970)" },
            { src: "foto/mazzini_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Hotel Adda", title_en: "Hotel Adda",
        lat: 45.682962, lng: 9.446779,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/hotel_ieri_1.jpg", label: "Ieri (ca. 1965)", label_en: "Then (ca. 1965)" },
            { src: "foto/hotel_ieri_2.png", label: "Ieri (ca. 1975)", label_en: "Then (ca. 1975)" },
            { src: "foto/hotel_ai_2.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/hotel_oggi_2.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Imec da via Airoldi", title_en: "Imec from via Airoldi",
        lat: 45.681642, lng: 9.447033,
        showInCarousel: false, showInMap: true, showInGallery: false,
        photos: [
            { src: "foto/imecairoldi_ieri_1.png", label: "Ieri (ca. 1960) - 1", label_en: "Then (ca. 1960) - 1" },
            { src: "foto/imecairoldi_ieri_2.jpg", label: "Ieri (ca. 1975) - 2", label_en: "Then (ca. 1975) - 2" },
            { src: "foto/imecairoldi_ai_1.png", label: "AI - 1", label_en: "AI - 1" },
            { src: "foto/imecairoldi_ai_2.png", label: "AI - 2", label_en: "AI - 2" },
            { src: "foto/imecairoldi_oggi_2.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Imec da via Edison", title_en: "Imec from via Edison",
        lat: 45.682857, lng: 9.447159,
        showInCarousel: false, showInMap: true, showInGallery: false,
        photos: [
            { src: "foto/imecedison_ieri_1.png", label: "Ieri (1962)", label_en: "Then (1962)" },
            { src: "foto/imecedison_ai_1.png", label: "AI - 1", label_en: "AI - 1" },
            { src: "foto/imecedison_ai_2.png", label: "AI - 2", label_en: "AI - 2" },
            { src: "foto/imecedison_oggi_2.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Imec", title_en: "Imec",
        lat: 0, lng: 0,
        showInCarousel: true, showInMap: false, showInGallery: true,
        photos: [
            { src: "foto/imec_ieri_3.png", label: "Ieri (ca. 1960, via Airoldi) - 1", label_en: "Then (ca. 1960, via Airoldi) - 1" },
            { src: "foto/imec_ieri_4.jpg", label: "Ieri (ca. 1975, via Airoldi) - 2", label_en: "Then (ca. 1975, via Airoldi) - 2" },
            { src: "foto/imec_ai_3.png", label: "AI (via Airoldi) - 1", label_en: "AI (via Airoldi) - 1" },
            { src: "foto/imec_ai_4.png", label: "AI (via Airoldi) - 2", label_en: "AI (via Airoldi) - 2" },
            { src: "foto/imec_oggi_4.png", label: "Oggi (via Airoldi)", label_en: "Now (via Airoldi)" },
            { src: "foto/imec_ieri_1.png", label: "Ieri (1962, via Edison)", label_en: "Then (1962, via Edison)" },
            { src: "foto/imec_ai_1.png", label: "AI (via Edison) - 1", label_en: "AI (via Edison) - 1" },
            { src: "foto/imec_ai_2.png", label: "AI (via Edison) - 2", label_en: "AI (via Edison) - 2" },
            { src: "foto/imec_oggi_2.png", label: "Oggi (via Edison)", label_en: "Now (via Edison)" }
        ]
    },
    {
        title: "Albergo del Ponte", title_en: "Albergo del Ponte",
        lat: 45.683000, lng: 9.444662,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/incrocio_ieri.jpg", label: "Ieri (ca. 1905)", label_en: "Then (ca. 1905)" },
            { src: "foto/incrocio_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/incrocio_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Edison e Volta", title_en: "Via Edison e Volta",
        lat: 45.683062, lng: 9.444948,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/incrocioedison_ieri.png", label: "Ieri (ca. 1950)", label_en: "Then (ca. 1950)" },
            { src: "foto/incrocioedison_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/incrocioedison_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Piazza Libertà", title_en: "Piazza Libertà",
        lat: 45.678660, lng: 9.439676,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/liberta_ieri_1.jpg", label: "Ieri (1902) - 1", label_en: "Then (1902) - 1" },
            { src: "foto/liberta_ieri_2.png", label: "Ieri (ca. 1965) - 2", label_en: "Then (ca. 1965) 2" },
            { src: "foto/liberta_ai_1.png", label: "Ricostruzione AI - 1", label_en: "AI Reconstruction - 1" },
            { src: "foto/liberta_oggi_1.png", label: "Oggi - 1", label_en: "Now - 1" },
            { src: "foto/liberta_oggi_2.png", label: "Oggi - 2", label_en: "Now - 2" }
        ]
    },
    {
        title: "Via Manzoni", title_en: "Via Manzoni",
        lat: 45.680899, lng: 9.444501,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/manzoni_ieri.jpg", label: "Ieri (ca. 1930)", label_en: "Then (ca. 1930)" },
            { src: "foto/manzoni_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/manzoni_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Matteotti", title_en: "Via Matteotti",
        lat: 45.682808, lng: 9.438448,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/matteotti_ieri.png", label: "Ieri (ca. 1960)", label_en: "Then (ca. 1960)" },
            { src: "foto/matteotti_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/matteotti_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Edison dal Molino Colombo", title_en: "Via Edison from Molino Colombo",
        lat: 45.680957, lng: 9.452406,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/molino_ieri.jpg", label: "Ieri (ca. 1940)", label_en: "Then (ca. 1940)" },
            { src: "foto/molino_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" }
        ]
    },
    {
        title: "Municipio di Robbiate", title_en: "Robbiate Town Hall",
        lat: 45.688056, lng: 9.439519,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/municipio_ieri.png", label: "Ieri (ca. 1960)", label_en: "Then (ca. 1960)" },
            { src: "foto/municipio_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/municipio_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Chiesa di S. Marta", title_en: "Church of St. Martha",
        lat: 45.680051, lng: 9.443625,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/marta_ieri.png", label: "Ieri (ca. 1975)", label_en: "Then (ca. 1975)" },
            { src: "foto/marta_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/marta_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Pertini", title_en: "Via Pertini",
        lat: 45.683748, lng: 9.440751,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/pertini_ieri.png", label: "Ieri (ca. 1920)", label_en: "Then (ca. 1920)" },
            { src: "foto/pertini_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/pertini_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Piazza Vittoria", title_en: "Piazza Vittoria",
        lat: 45.681453, lng: 9.444406,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/piazza_ieri_1.jpg", label: "Ieri (ca. 1960) - 1", label_en: "Then (ca. 1960) - 1" },
            { src: "foto/piazza_ieri_2.png", label: "Ieri (ca. 1970) - 2", label_en: "Then (ca. 1970) - 2" },
            { src: "foto/piazza_ai_1.png", label: "Ricostruzione AI - 1", label_en: "AI Reconstruction - 1" },
            { src: "foto/piazza_ai_2.png", label: "Ricostruzione AI - 2", label_en: "AI Reconstruction - 2" },
            { src: "foto/piazza_oggi_2.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Pizzagalli allagata", title_en: "Flooded Via Pizzagalli",
        lat: 45.691296, lng: 9.442018,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/pozza_ieri_1.png", label: "Ieri (ca. 1950) - 1", label_en: "Then (ca. 1950) - 1" },
            { src: "foto/pozza_ieri_2.png", label: "Ieri (ca. 1950) - 2", label_en: "Then (ca. 1950) - 2" },
            { src: "foto/pozza_ieri_3.png", label: "Ieri (ca. 1950) - 3", label_en: "Then (ca. 1950) - 3" },
            { src: "foto/pozza_oggi_3.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Pozzoni", title_en: "Via Pozzoni",
        lat: 45.683181, lng: 9.444497,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/pozzoni_ieri.jpg", label: "Ieri (ca. 1950)", label_en: "Then (ca. 1950)" },
            { src: "foto/pozzoni_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/pozzoni_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Villa Respiro", title_en: "Villa Respiro",
        lat: 45.683247, lng: 9.443579,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/respiro_ieri.png", label: "Ieri (1930)", label_en: "Then (1930)" },
            { src: "foto/respiro_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/respiro_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Bar in via Riva", title_en: "Bar on via Riva",
        lat: 45.686079, lng: 9.434542,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/robbiate_ieri_1.png", label: "Ieri (ca. 1965)", label_en: "Then (ca. 1965)" },
            { src: "foto/robbiate_ai_1.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/robbiate_oggi_1.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Bar in via Moro", title_en: "Bar on via Moro",
        lat: 45.690516, lng: 9.435911,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/rotonda_ieri_2.jpg", label: "Ieri (ca. 1970)", label_en: "Then (ca. 1970)" },
            { src: "foto/rotonda_ai_2.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/rotonda_oggi_2.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Stazione Paderno-Robbiate", title_en: "Paderno-Robbiate Train Station",
        lat: 45.678583, lng: 9.439425,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/stazione_ieri.jpg", label: "Ieri (ca. 1970)", label_en: "Then (ca. 1970)" },
            { src: "foto/stazione_ai.jpg", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/stazione_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Ristorante Toscano", title_en: "Ristorante Toscano",
        lat: 45.683823, lng: 9.449474,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/toscano_ieri.jpg", label: "Ieri (ca. 1950)", label_en: "Then (ca. 1950)" },
            { src: "foto/toscano_ai.jpg", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/toscano_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    },
    {
        title: "Via Gasparotto", title_en: "Via Gasparotto",
        lat: 45.672380, lng: 9.440717,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/verderio_ieri_1.jpg", label: "Ieri (ca. 1940) - 1", label_en: "Then (ca. 1940) - 1" },
            { src: "foto/verderio_ieri_2.png", label: "Ieri (ca. 1940) - 2", label_en: "Then (ca. 1940) - 2" },
            { src: "foto/verderio_ai_1.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" }
        ]
    },
    {
        title: "Palazzo Bassi-Brugnatelli", title_en: "Bassi-Brugnatelli Palace",
        lat: 45.689253, lng: 9.438428,
        showInCarousel: true, showInMap: true, showInGallery: true,
        photos: [
            { src: "foto/villa_ieri.jpg", label: "Ieri (ca. 1930)", label_en: "Then (ca. 1930)" },
            { src: "foto/villa_ai.png", label: "Ricostruzione AI", label_en: "AI Reconstruction" },
            { src: "foto/villa_oggi.png", label: "Oggi", label_en: "Now" }
        ]
    }
];

// Luoghi non ancora localizzati
const unknownPlacesData = [
    {
        photos: [
            { src: "foto/bici.png", label: "Ca. 1925", label_en: "Ca. 1925" }
        ]
    },
    {
        photos: [
            { src: "foto/ciclista.jpg", label: "1970", label_en: "1970" }
        ]
    },
    {
        photos: [
            { src: "foto/gruppo_1.jpg", label: "È probabile che questa foto non sia stata scattata a Paderno-Robbiate (ca. 1920) - 1", label_en: "It is likely that this photo was not taken in Paderno-Robbiate (ca. 1920) - 1" },
            { src: "foto/gruppo_2.webp", label: "È probabile che questa foto non sia stata scattata a Paderno-Robbiate (ca. 1920) - 2", label_en: "It is likely that this photo was not taken in Paderno-Robbiate (ca. 1920) - 2" }
        ]
    },
    {
        photos: [
            { src: "foto/vecchia.png", label: "Questa foto dovrebbe essere stata scattata a Robbiate (ca. 1980)", label_en: "This photo is thought to have been taken in Robbiate (ca. 1980)" }
        ]
    },
];

let carouselPlaceOrder = [];
let galleryPlaceIndices = [];
let filmstripScrollPosition = 0;
let scrollDirection = 1;
let filmstripPaused = false;
let filmstripVisible = true;
let leafletMap = null;
let mapZoomOrigin = null;

const lightboxState = {
    open: false,
    context: 'carousel',
    placeList: [],
    placeListIndex: 0,
    chain: [],
    chainPos: 0,
    rotatedStartSet: null,
    flatRotatedStart: null,
    singlePlace: false,
    fromMap: false,
    lastRenderedPlaceKey: null
};

let savedScrollY = 0;

const PHASES = [
    { key: 'ieri', duration: 5000 },
    { key: 'ai', duration: 4000 },
    { key: 'oggi', duration: 3000 }
];

// Classificazione foto dal nome file

function getFileName(src) {
    return src.split('/').pop().toLowerCase();
}

function getPhotoPhase(src) {
    const name = getFileName(src);
    if (/_oggi/.test(name)) return 'oggi';
    if (/_ai(\.|_|$)/.test(name) || name.includes('_ai_')) return 'ai';
    return 'ieri';
}

function getSetNumber(src) {
    const name = getFileName(src);
    const phaseNum = name.match(/_(ieri|ai|oggi)_(\d+)/);
    if (phaseNum) return parseInt(phaseNum[2], 10);
    const tailNum = name.match(/_(\d+)\.(jpg|jpeg|png|gif|webp)$/);
    if (tailNum) return parseInt(tailNum[1], 10);
    return 1;
}

function usesFlatChain(place) {
    return place.flatPhotos === true;
}

function preparePlace(place) {
    place.photos.forEach((photo, index) => {
        photo.phase = getPhotoPhase(photo.src);
        photo.setNum = getSetNumber(photo.src);
        photo.index = index;
    });

    if (usesFlatChain(place)) {
        place._flatChain = place.photos.map((_, i) => i);
        place._generalChain = [...place._flatChain];
        place._galleryCoverIndices = place.photos
            .map((p, i) => (p.phase === 'ieri' ? i : -1))
            .filter(i => i >= 0);
        if (place._galleryCoverIndices.length === 0) {
            place._galleryCoverIndices = [0];
        }
        place._ieriIndices = [...place._galleryCoverIndices];
        place._sets = [];
        return;
    }

    const setsMap = new Map();
    place.photos.forEach(photo => {
        if (!setsMap.has(photo.setNum)) {
            setsMap.set(photo.setNum, { setNum: photo.setNum, ieri: [], ai: [], oggi: [] });
        }
        setsMap.get(photo.setNum)[photo.phase].push(photo.index);
    });

    place._sets = [...setsMap.values()].sort((a, b) => a.setNum - b.setNum);
    place._generalChain = buildChainFromSets(place._sets, null);
    place._ieriIndices = place.photos
        .map((p, i) => (p.phase === 'ieri' ? i : -1))
        .filter(i => i >= 0);
}

function buildRotatedFlatChain(flatChain, startPhotoIndex) {
    if (startPhotoIndex == null) return [...flatChain];
    const pos = flatChain.indexOf(startPhotoIndex);
    if (pos < 0) return [...flatChain];
    return [...flatChain.slice(pos), ...flatChain.slice(0, pos)];
}

function buildChainFromSets(sets, startSetNum) {
    const orderedSets = startSetNum == null
        ? sets
        : [...sets.filter(s => s.setNum >= startSetNum), ...sets.filter(s => s.setNum < startSetNum)];

    const chain = [];
    const phaseOrder = ['ieri', 'ai', 'oggi'];

    orderedSets.forEach(set => {
        phaseOrder.forEach(phase => {
            (set[phase] || []).forEach(idx => chain.push(idx));
        });
    });

    return chain;
}

function prepareAllPlaces() {
    placesData.forEach(preparePlace);
    unknownPlacesData.forEach(place => {
        place.photos.forEach((photo, index) => {
            photo.index = index;
        });
        place._flatChain = place.photos.map((_, i) => i);
    });
}

function getPlaceTitle(place) {
    const t = currentLang === 'en' ? (place.title_en || place.title) : place.title;
    return t || '';
}

// Corretto errore di chiusura parentesi graffa
function getPhotoLabel(photo) {
    return currentLang === 'en' ? (photo.label_en || photo.label) : photo.label;
}

function getMatchingPhotoIndices(place, phaseKey) {
    return place.photos.reduce((acc, p, i) => {
        if (p.phase === phaseKey) acc.push(i);
        return acc;
    }, []);
}

function isAnimationPaused() {
    return filmstripPaused || !filmstripVisible || document.hidden || lightboxState.open;
}

// Carosello

function getItemWidth() {
    if (window.innerWidth <= 768) return window.innerWidth * 0.85;
    if (window.innerWidth <= 1024) return 360;
    return 450;
}

function applyFilmstripViewport() {
    const track = document.getElementById('filmstripTrack');
    const container = track?.parentElement;
    if (!track || !container) return;

    const itemWidth = getItemWidth();
    const gap = 32;
    const w = window.innerWidth;
    let containerWidth;

    if (w <= 768) {
        containerWidth = itemWidth;
    } else if (w <= 1024) {
        containerWidth = itemWidth * 2 + gap;
    } else {
        containerWidth = itemWidth * 3 + gap * 2;
    }

    container.style.width = `${containerWidth}px`;
    container.style.maxWidth = '100vw';
    container.style.marginLeft = 'auto';
    container.style.marginRight = 'auto';

    const maxScroll = Math.max(0, track.scrollWidth - container.clientWidth);
    if (w > 1024) {
        filmstripScrollPosition = Math.min((itemWidth + gap) * 0.5, maxScroll);
    } else if (maxScroll > 0) {
        filmstripScrollPosition = Math.floor(maxScroll / 2);
    } else {
        filmstripScrollPosition = 0;
    }

    track.style.transform = `translateX(-${filmstripScrollPosition}px)`;
}

function applyFlatGalleryChain(place, startPhotoIndex) {
    const firstIdx = place._flatChain[0];
    if (startPhotoIndex != null && startPhotoIndex !== firstIdx) {
        return {
            chain: buildRotatedFlatChain(place._flatChain, startPhotoIndex),
            chainPos: 0,
            flatRotatedStart: startPhotoIndex
        };
    }
    return {
        chain: [...place._flatChain],
        chainPos: 0,
        flatRotatedStart: null
    };
}

function generateFilmstrip() {
    const track = document.getElementById('filmstripTrack');
    if (!track) return;
    track.innerHTML = '';

    const carouselItems = placesData
        .map((place, originalIndex) => ({ place, originalIndex }))
        .filter(item => item.place.showInCarousel !== false);

    for (let i = carouselItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [carouselItems[i], carouselItems[j]] = [carouselItems[j], carouselItems[i]];
    }

    carouselPlaceOrder = carouselItems.map(item => item.originalIndex);

    carouselItems.forEach(item => {
        const ieriIndices = item.place._ieriIndices;
        const firstIeri = ieriIndices[0] ?? 0;
        const imagesHTML = item.place.photos
            .map((p, i) => `<img src="${p.src}" class="img-state ${i === firstIeri ? 'active' : ''}" data-index="${i}" alt="">`)
            .join('');

        track.insertAdjacentHTML('beforeend', `
            <div class="filmstrip-item" data-index="${item.originalIndex}">
                <div class="triple-box" style="cursor: pointer;">${imagesHTML}</div>
                <span class="item-label">${getPlaceTitle(item.place)}</span>
            </div>
        `);
    });

    track.querySelectorAll('.filmstrip-item').forEach(item => {
        item.addEventListener('click', () => {
            const pIdx = parseInt(item.getAttribute('data-index'), 10);
            const place = placesData[pIdx];

            const activeImg = item.querySelector('.img-state.active');
            const activeIndex = activeImg ? parseInt(activeImg.getAttribute('data-index'), 10) : 0;

            const photoIdx = usesFlatChain(place) ? activeIndex : null;
            const startSet = usesFlatChain(place) ? null : place.photos[activeIndex].setNum;

            openLightbox({
                context: 'carousel',
                placeIndex: pIdx,
                startSet: startSet,
                photoIndex: photoIdx
            });
        });
    });
    setTimeout(() => {
        applyFilmstripViewport();
        scrollDirection = 1;
    }, 150);
}

function updateFilmstripLabels() {
    document.querySelectorAll('#filmstripTrack .filmstrip-item').forEach(item => {
        const pIdx = parseInt(item.getAttribute('data-index'), 10);
        const place = placesData[pIdx];
        const label = item.querySelector('.item-label');
        if (label) label.textContent = getPlaceTitle(place);
    });
}

function updateGalleryLabels() {
    document.querySelectorAll('#galleryGrid .gallery-item').forEach(item => {
        const pIdx = parseInt(item.getAttribute('data-pidx'), 10);
        if (isNaN(pIdx)) return;
        const place = placesData[pIdx];
        const span = item.querySelector('.gallery-overlay span');
        if (span) span.textContent = getPlaceTitle(place);
        const img = item.querySelector('img');
        if (img) img.alt = getPlaceTitle(place);
    });
}

function updateMapPopupTitles() {
    document.querySelectorAll('.map-popup-title').forEach(el => {
        const pIdx = parseInt(el.getAttribute('data-pidx'), 10);
        if (!isNaN(pIdx)) el.textContent = getPlaceTitle(placesData[pIdx]);
    });
}

// BUG 1 RISOLTO: Aggiorna i testi camminando solo sui nodi di testo (TEXT_NODE), senza ricreare l'HTML degli input.
function updateMapLayerLabels() {
    if (!leafletMap || !leafletMap._layerControl) return;
    const container = leafletMap._layerControl.getContainer();
    if (!container) return;

    const labels = {
        it: { stradale: 'Oggi (Stradale)', satellite: 'Oggi (Satellite)' },
        en: { stradale: 'Now (Road)', satellite: 'Now (Satellite)' }
    };
    const l = labels[currentLang];

    container.querySelectorAll('.leaflet-control-layers-base label').forEach(labelEl => {
        const walk = document.createTreeWalker(labelEl, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while (textNode = walk.nextNode()) {
            const text = textNode.nodeValue.trim();
            if (text === labels.it.stradale || text === labels.en.stradale) {
                textNode.nodeValue = textNode.nodeValue.replace(text, l.stradale);
            } else if (text === labels.it.satellite || text === labels.en.satellite) {
                textNode.nodeValue = textNode.nodeValue.replace(text, l.satellite);
            }
        }
    });
}

function autoScrollFilmstrip() {
    if (isAnimationPaused()) return;
    const track = document.getElementById('filmstripTrack');
    if (!track) return;

    const step = getItemWidth() + 32;
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (maxScroll <= 0) return;

    if (scrollDirection === 1) {
        filmstripScrollPosition += step;
        if (filmstripScrollPosition >= maxScroll) {
            filmstripScrollPosition = maxScroll;
            scrollDirection = -1;
        }
    } else {
        filmstripScrollPosition -= step;
        if (filmstripScrollPosition <= 0) {
            filmstripScrollPosition = 0;
            scrollDirection = 1;
        }
    }

    track.style.transform = `translateX(-${filmstripScrollPosition}px)`;
}

function initFilmstripNav() {
    const track = document.getElementById('filmstripTrack');
    if (!track) return;

    const scroll = delta => {
        const step = getItemWidth() + 32;
        const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
        filmstripScrollPosition = Math.max(0, Math.min(filmstripScrollPosition + delta * step, maxScroll));
        track.style.transform = `translateX(-${filmstripScrollPosition}px)`;
    };

    document.getElementById('nextBtn').onclick = () => scroll(+1);
    document.getElementById('prevBtn').onclick = () => scroll(-1);
}

function initTouchSwipe() {
    const container = document.querySelector('.filmstrip-container');
    if (!container) return;

    let startX = 0;
    let isDragging = false;

    container.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    container.addEventListener('touchend', e => {
        if (!isDragging) return;
        isDragging = false;

        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) <= 50) return;

        const track = document.getElementById('filmstripTrack');
        if (!track) return;

        const step = getItemWidth() + 32;
        const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
        filmstripScrollPosition = diff > 0
            ? Math.min(filmstripScrollPosition + step, maxScroll)
            : Math.max(filmstripScrollPosition - step, 0);

        track.style.transform = `translateX(-${filmstripScrollPosition}px)`;
    }, { passive: true });
}

function initLightboxSwipe() {
    const viewer = document.querySelector('.lightbox-viewer');
    if (!viewer) return;

    let touchStartX = 0;
    let touchEndX = 0;

    viewer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleLightboxSwipe();
    }, { passive: true });

    function handleLightboxSwipe() {
        const swipeThreshold = 50; // Offset minimo in pixel per considerare il gesto uno "swipe"
        const diff = touchStartX - touchEndX;

        // Se la Lightbox non è aperta o c'è una sola foto, non fare nulla
        if (!lightboxState.open || lightboxState.singlePlace) return;

        if (diff > swipeThreshold) {
            // Swipe verso sinistra -> Prossima foto
            navigateLightbox('next');
        } else if (diff < -swipeThreshold) {
            // Swipe verso destra -> Foto precedente
            navigateLightbox('prev');
        }
    }
}

function initFilmstripVisibility() {
    const section = document.querySelector('.filmstrip-section');
    if (!section || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
        filmstripVisible = entries[0].isIntersecting && entries[0].intersectionRatio > 0.05;
    }, { threshold: [0, 0.05, 0.2] });

    observer.observe(section);
}

// Timer fasi carosello e popup mappa

let globalPhaseTimer = null;
let popupPhaseTimers = new Map();

function clearSubTimers() {
    document.querySelectorAll('#filmstripTrack .filmstrip-item').forEach(item => {
        if (item._subTimer) {
            clearTimeout(item._subTimer);
            item._subTimer = null;
        }
    });
}

function applyPhaseToContainer(container, place, phaseKey, phaseDuration) {
    const imgs = container.querySelectorAll('.img-state');
    const matching = getMatchingPhotoIndices(place, phaseKey);

    if (matching.length === 0) return;

    imgs.forEach(img => img.classList.remove('active'));

    if (matching.length === 1) {
        imgs[matching[0]].classList.add('active');
        return;
    }

    const timePerPhoto = phaseDuration / matching.length;
    let subIndex = 0;
    imgs[matching[0]].classList.add('active');

    function cycleSubPhotos() {
        subIndex++;
        if (subIndex >= matching.length) return;
        imgs.forEach(img => img.classList.remove('active'));
        imgs[matching[subIndex]].classList.add('active');
        container._subTimer = setTimeout(cycleSubPhotos, timePerPhoto);
    }

    container._subTimer = setTimeout(cycleSubPhotos, timePerPhoto);
}

function applyGlobalPhase(phaseKey, phaseDuration) {
    clearSubTimers();
    document.querySelectorAll('#filmstripTrack .filmstrip-item').forEach(item => {
        const pIdx = parseInt(item.getAttribute('data-index'), 10);
        const place = placesData[pIdx];
        const box = item.querySelector('.triple-box');
        if (box) applyPhaseToContainer(box, place, phaseKey, phaseDuration);
    });
}

function startPopupCycle(marker, placeIndex) {
    stopPopupCycle(marker);
    const place = placesData[placeIndex];
    const popupEl = marker.getPopup().getElement();
    if (!popupEl) return;

    const box = popupEl.querySelector('.map-triple-box');
    if (!box) return;

    let phaseIndex = 0;

    function runPhase() {
        if (!marker.isPopupOpen()) return;
        const { key, duration } = PHASES[phaseIndex];
        if (box._subTimer) clearTimeout(box._subTimer);
        applyPhaseToContainer(box, place, key, duration);

        const timer = setTimeout(() => {
            phaseIndex = (phaseIndex + 1) % PHASES.length;
            runPhase();
        }, duration);

        popupPhaseTimers.set(marker, timer);
    }

    runPhase();
}

// Corretta chiusura parentesi tonda mancante
function stopPopupCycle(marker) {
    const t = popupPhaseTimers.get(marker);
    if (t) clearTimeout(t);
    popupPhaseTimers.delete(marker);
}

function startGlobalTimer() {
    let phaseIndex = 0;

    function runPhase() {
        if (isAnimationPaused()) {
            globalPhaseTimer = setTimeout(runPhase, 400);
            return;
        }

        const { key, duration } = PHASES[phaseIndex];
        applyGlobalPhase(key, duration);

        globalPhaseTimer = setTimeout(() => {
            phaseIndex = (phaseIndex + 1) % PHASES.length;
            if (phaseIndex === 0) autoScrollFilmstrip();
            runPhase();
        }, duration);
    }

    runPhase();
}

// Galleria

let galleryIeriTimers = [];

function clearGalleryIeriTimers() {
    galleryIeriTimers.forEach(t => clearInterval(t));
    galleryIeriTimers = [];
}

function startGalleryCoverCycle(itemEl, place) {
    const indices = usesFlatChain(place)
        ? place._galleryCoverIndices
        : place._ieriIndices;
    if (indices.length <= 1) return;

    const img = itemEl.querySelector('img');
    let idx = 0;

    const timer = setInterval(() => {
        if (lightboxState.open) return;
        idx = (idx + 1) % indices.length;
        img.src = place.photos[indices[idx]].src;
        if (usesFlatChain(place)) {
            itemEl.dataset.photoIdx = String(indices[idx]);
        } else {
            itemEl.dataset.ieriIdx = String(idx);
        }
    }, 3000);

    galleryIeriTimers.push(timer);
}

function generateGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = '';
    clearGalleryIeriTimers();

    galleryPlaceIndices = [];

    placesData.forEach((place, pIdx) => {
        if (!place.showInGallery) return;
        galleryPlaceIndices.push(pIdx);

        const coverIndices = usesFlatChain(place) ? place._galleryCoverIndices : place._ieriIndices;
        const firstIdx = coverIndices[0] ?? 0;
        const firstPhoto = place.photos[firstIdx];
        const dataAttrs = usesFlatChain(place)
            ? `data-pidx="${pIdx}" data-photo-idx="${firstIdx}"`
            : `data-pidx="${pIdx}" data-ieri-idx="0"`;

        grid.insertAdjacentHTML('beforeend', `
            <div class="gallery-item" ${dataAttrs} style="cursor: pointer;">
                <img src="${firstPhoto.src}" alt="${getPlaceTitle(place)}">
                <div class="gallery-overlay"><span>${getPlaceTitle(place)}</span></div>
            </div>
        `);
    });

    grid.querySelectorAll('.gallery-item').forEach(item => {
        const pIdx = parseInt(item.getAttribute('data-pidx'), 10);
        const place = placesData[pIdx];
        startGalleryCoverCycle(item, place);

        item.addEventListener('click', () => {
            if (usesFlatChain(place)) {
                const photoIdx = parseInt(item.dataset.photoIdx || '0', 10);
                openLightbox({ context: 'gallery', placeIndex: pIdx, photoIndex: photoIdx });
            } else {
                const rierIdx = parseInt(item.dataset.ieriIdx || '0', 10);
                const startSet = place.photos[place._ieriIndices[rierIdx]].setNum;
                openLightbox({
                    context: 'gallery',
                    placeIndex: pIdx,
                    startSet: startSet
                });
            }
        });
    });
}

function generateUnknownGallery() {
    const grid = document.getElementById('unknownGalleryGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (unknownPlacesData.length === 0) {
        grid.innerHTML = `<p class="unknown-empty" data-i18n="section_unknown_empty">Nessuna foto in questa sezione per ora. Aggiungile in <code>unknownPlacesData</code> in script.js.</p>`;
        return;
    }

    unknownPlacesData.forEach((place, uIdx) => {
        const firstPhoto = place.photos[0];
        grid.insertAdjacentHTML('beforeend', `
            <div class="gallery-item unknown-item" data-uidx="${uIdx}" style="cursor: pointer;">
                <img src="${firstPhoto.src}" alt="${getPlaceTitle(place)}">
                <div class="gallery-overlay"><span>${getPlaceTitle(place)}</span></div>
            </div>
        `);
    });

    grid.querySelectorAll('.unknown-item').forEach(item => {
        item.addEventListener('click', () => {
            openLightbox({
                context: 'unknown',
                unknownIndex: parseInt(item.getAttribute('data-uidx'), 10),
                photoIndex: 0
            });
        });
    });
}

// Lightbox

function getPlaceByContext(state) {
    if (state.context === 'unknown') return unknownPlacesData[state.unknownIndex];
    return placesData[state.placeList[state.placeListIndex]];
}

function stateIsUnknown() {
    return lightboxState.context === 'unknown';
}

function getChainForPlace(place, startSet = null, startPhotoIndex = null) {
    if (usesFlatChain(place)) {
        return buildRotatedFlatChain(place._flatChain, startPhotoIndex);
    }
    if (startSet != null) return buildChainFromSets(place._sets, startSet);
    return [...place._generalChain];
}

function lockPageScroll() {
    document.documentElement.classList.add('scroll-locked');
}

function unlockPageScroll() {
    document.documentElement.classList.remove('scroll-locked');
}

function getSet1LastChainPos(place) {
    if (usesFlatChain(place)) return place._flatChain.length - 1;
    const chain = place._generalChain;
    const set1 = place._sets.find(s => s.setNum === 1) || place._sets[0];
    const indices = [];
    ['ieri', 'ai', 'oggi'].forEach(phase => {
        (set1[phase] || []).forEach(idx => indices.push(idx));
    });
    if (indices.length === 0) return chain.length - 1;
    const lastIdx = indices[indices.length - 1];
    return chain.indexOf(lastIdx);
}

// BUG 2 RISOLTO: Consente la navigazione lineare per il contesto 'unknown' esattamente come per la gallery standard.
function updateLightboxArrows() {
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (!prevBtn || !nextBtn) return;

    let canPrev = true;
    let canNext = true;

    if (lightboxState.singlePlace) {
        canPrev = lightboxState.chainPos > 0;
        canNext = lightboxState.chainPos < lightboxState.chain.length - 1;
    } else if (lightboxState.context === 'gallery' || lightboxState.context === 'unknown') {
        const atStart = lightboxState.placeListIndex === 0 && lightboxState.chainPos === 0;
        const atEnd = lightboxState.placeListIndex === lightboxState.placeList.length - 1
            && lightboxState.chainPos === lightboxState.chain.length - 1;
        canPrev = !atStart;
        canNext = !atEnd;
    }

    prevBtn.classList.toggle('light-arrow--disabled', !canPrev);
    nextBtn.classList.toggle('light-arrow--disabled', !canNext);
    prevBtn.disabled = !canPrev;
    nextBtn.disabled = !canNext;
}

function getLightboxPlaceKey() {
    if (stateIsUnknown()) return `u:${lightboxState.unknownIndex}`;
    return `p:${lightboxState.placeList[lightboxState.placeListIndex]}`;
}

function swipeUpdateText(el, newText, direction) {
    if (!el) return;
    const outClass = direction === 'next' ? 'swipe-out-left' : 'swipe-out-right';
    const inClass = direction === 'next' ? 'swipe-in-right' : 'swipe-in-left';

    el.classList.remove('swipe-out-left', 'swipe-out-right', 'swipe-in-left', 'swipe-in-right');
    el.classList.add(outClass);

    const onOutEnd = () => {
        el.removeEventListener('animationend', onOutEnd);
        el.classList.remove(outClass);
        el.textContent = newText;
        el.classList.add(inClass);
        const onInEnd = () => {
            el.removeEventListener('animationend', onInEnd);
            el.classList.remove(inClass);
        };
        el.addEventListener('animationend', onInEnd);
    };
    el.addEventListener('animationend', onOutEnd);
}

// Cache delle dimensioni per luogo: placeKey -> Map<photoIndex, {w, h}>
const lightboxPlaceSizeCache = new Map();

/**
 * Misura tutte le foto di un luogo e restituisce una Promise che si risolve
 * con una Map photoIndex -> {w, h}.
 *
 * Strategia "area normalizzata, ratio intatto, qualità protetta":
 *
 * 1. Ogni foto viene scalata al massimo entro i limiti schermo (senza upscaling).
 *    Questo dà l'area "disponibile" per ciascuna.
 * 2. Si calcola la MEDIANA delle aree scalate come target.
 *    La mediana è robusta agli outlier: una foto gigante o minuscola non
 *    trascina la media in modo distorsivo.
 * 3. Per ogni foto si calcolano le dimensioni a area=mediana col ratio nativo:
 *    w = sqrt(areaTarget * ratio), h = sqrt(areaTarget / ratio)
 * 4. CLAMP NATIVO: se le dimensioni calcolate superano le dimensioni native
 *    della foto, si usa la dimensione nativa. Nessuna foto viene mai upscalata
 *    oltre la sua risoluzione originale (evita sgranatura/pixelatura).
 * 5. Clamp finale: se il risultato eccede comunque i limiti schermo, si scala
 *    verso il basso proporzionalmente (ratio intatto).
 */
function measurePlacePhotos(place) {
    const MAX_W = Math.min(window.innerWidth * 0.72, 1100);
    const MAX_H = window.innerHeight * 0.68;

    const promises = place.photos.map((photo, i) => new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve({ i, w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve(null);
        img.src = photo.src;
    }));

    return Promise.all(promises).then(sizes => {
        const valid = sizes.filter(Boolean);
        if (valid.length === 0) return null;

        // Passo 1: scala ogni foto entro i limiti senza upscaling
        const scaled = valid.map(({ i, w, h }) => {
            const scale = Math.min(MAX_W / w, MAX_H / h, 1);
            return { i, nativeW: w, nativeH: h, sw: w * scale, sh: h * scale, ratio: w / h };
        });

        // Passo 2: mediana delle aree scalate
        const areas = scaled.map(s => s.sw * s.sh).sort((a, b) => a - b);
        const mid = Math.floor(areas.length / 2);
        const medianArea = areas.length % 2 === 1
            ? areas[mid]
            : (areas[mid - 1] + areas[mid]) / 2;

        // Passi 3, 4, 5
        const result = new Map();
        scaled.forEach(({ i, nativeW, nativeH, ratio }) => {
            let w = Math.sqrt(medianArea * ratio);
            let h = Math.sqrt(medianArea / ratio);

            // Passo 4 — clamp nativo: non superare la risoluzione originale
            const nativeClamp = Math.min(nativeW / w, nativeH / h, 1);
            w *= nativeClamp;
            h *= nativeClamp;

            // Passo 5 — clamp schermo
            const screenClamp = Math.min(MAX_W / w, MAX_H / h, 1);
            w = Math.round(w * screenClamp);
            h = Math.round(h * screenClamp);

            result.set(i, { w, h });
        });

        return result;
    });
}

/**
 * Applica le dimensioni specifiche della foto corrente all'elemento immagine
 * del lightbox. Ogni foto del luogo ha le proprie dimensioni (area uguale,
 * ratio intatto). Se non ancora in cache, misura e poi applica.
 */
function applyLightboxBoxForPlace(place, placeKey) {
    const imgEl = document.getElementById('lightboxImg');
    if (!imgEl) return;

    const photoIdx = lightboxState.chain[lightboxState.chainPos];

    function applySize(sizeMap) {
        const size = sizeMap.get(photoIdx);
        if (!size) return;
        imgEl.style.width  = size.w + 'px';
        imgEl.style.height = size.h + 'px';
        imgEl.style.maxWidth  = '';
        imgEl.style.maxHeight = '';
    }

    if (lightboxPlaceSizeCache.has(placeKey)) {
        applySize(lightboxPlaceSizeCache.get(placeKey));
        return;
    }

    // Prima apertura: rimuovi vincoli fissi finché non abbiamo la misura
    imgEl.style.width  = '';
    imgEl.style.height = '';

    measurePlacePhotos(place).then(sizeMap => {
        if (!sizeMap) return;
        lightboxPlaceSizeCache.set(placeKey, sizeMap);
        if (lightboxState.open && getLightboxPlaceKey() === placeKey) {
            applySize(sizeMap);
        }
    });
}

function renderLightbox(options = {}) {
    const { swipeDir = null } = options;
    const place = getPlaceByContext(lightboxState);
    const photoIdx = lightboxState.chain[lightboxState.chainPos];
    const photo = place.photos[photoIdx];
    const placeKey = getLightboxPlaceKey();
    const placeChanged = lightboxState.lastRenderedPlaceKey != null && lightboxState.lastRenderedPlaceKey !== placeKey;
    const titleEl = document.getElementById('lightboxTitle');
    const stateEl = document.getElementById('lightboxState');
    
    // CORREZIONE 1: Se siamo nei luoghi da identificare ("unknown"), il titolo resta vuoto
    const title = stateIsUnknown() ? '' : getPlaceTitle(place);
    const state = getPhotoLabel(photo);
    
    if (placeChanged && swipeDir) {
        swipeUpdateText(titleEl, title, swipeDir);
        swipeUpdateText(stateEl, state, swipeDir);
    } else if (placeChanged) {
        titleEl.textContent = title;
        stateEl.textContent = state;
    } else {
        // CORREZIONE 2: Se è la prima apertura (lastRenderedPlaceKey è null), 
        // forziamo la scrittura iniziale del titolo in alto
        if (lightboxState.lastRenderedPlaceKey === null) {
            titleEl.textContent = title;
        }
        stateEl.textContent = state;
    }

    // Aggiorna dimensioni: ogni foto ha la sua size (area uguale, ratio intatto)
    applyLightboxBoxForPlace(place, placeKey);

    lightboxState.lastRenderedPlaceKey = placeKey;
    document.getElementById('lightboxImg').src = photo.src;
    updateLightboxArrows();
}

function openLightbox(options) {
    const {
        context = 'carousel',
        placeIndex = 0,
        startSet = null,
        unknownIndex = 0,
        photoIndex = 0,
        fromMap = false,
        mapOrigin = null
    } = options;

    filmstripPaused = true;
    lightboxState.open = true;
    lightboxState.context = context;
    lightboxState.fromMap = fromMap;
    lightboxState.singlePlace = context === 'map';
    mapZoomOrigin = mapOrigin;

    if (context === 'unknown') {
        lightboxState.placeList = unknownPlacesData.map((_, i) => i);
        lightboxState.placeListIndex = unknownIndex;
        lightboxState.unknownIndex = unknownIndex;
        const place = unknownPlacesData[unknownIndex];
        lightboxState.chain = buildRotatedFlatChain(place._flatChain, photoIndex || null);
        lightboxState.chainPos = 0;

    } else if (context === 'map') {
        lightboxState.placeList = [placeIndex];
        lightboxState.placeListIndex = 0;
        const place = placesData[placeIndex];
        lightboxState.chain = generalChainFor(place);
        lightboxState.chainPos = 0;

    } else if (context === 'carousel') {
        lightboxState.placeList = [...carouselPlaceOrder];
        lightboxState.placeListIndex = lightboxState.placeList.indexOf(placeIndex);
        if (lightboxState.placeListIndex < 0) {
            lightboxState.placeList = [placeIndex];
            lightboxState.placeListIndex = 0;
        }
        const place = placesData[placeIndex];

        if (usesFlatChain(place)) {
            lightboxState.chain = buildRotatedFlatChain(place._flatChain, photoIndex != null ? photoIndex : null);
        } else {
            lightboxState.chain = startSet != null ? buildChainFromSets(place._sets, startSet) : generalChainFor(place);
        }
        lightboxState.chainPos = 0;

    } else if (context === 'gallery') {
        lightboxState.placeList = [...galleryPlaceIndices];
        lightboxState.placeListIndex = lightboxState.placeList.indexOf(placeIndex);
        const place = placesData[placeIndex];
        if (usesFlatChain(place)) {
            lightboxState.chain = buildRotatedFlatChain(place._flatChain, photoIndex > 0 ? photoIndex : null);
        } else {
            lightboxState.chain = startSet != null
                ? buildChainFromSets(place._sets, startSet)
                : generalChainFor(place);
        }
        lightboxState.chainPos = 0;
    }

    lightboxState.lastRenderedPlaceKey = null;
    lockPageScroll();
    enableScrollBlock();

    const lb = document.getElementById('lightbox');
    const viewer = document.querySelector('.lightbox-viewer');

    if (fromMap && mapOrigin && viewer) {
        const rect = mapOrigin.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        viewer.style.transformOrigin = `${cx}px ${cy}px`;
        lb.classList.add('lightbox--from-map');
        viewer.classList.remove('lightbox-zoom-out');
        viewer.classList.add('lightbox-zoom-in');
    } else {
        lb.classList.remove('lightbox--from-map');
        if (viewer) {
            viewer.style.transformOrigin = 'center center';
            viewer.classList.add('lightbox-zoom-in');
        }
    }

    renderLightbox();
    lb.removeAttribute('hidden');
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    const viewer = document.querySelector('.lightbox-viewer');

    const finishClose = () => {
        lb.setAttribute('hidden', '');
        lb.classList.remove('lightbox--from-map');
        if (viewer) {
            viewer.classList.remove('lightbox-zoom-in', 'lightbox-zoom-out');
            viewer.style.transformOrigin = 'center center';
        }
        lightboxState.open = false;
        lightboxState.lastRenderedPlaceKey = null;
        filmstripPaused = false;
        mapZoomOrigin = null;
        disableScrollBlock();
        unlockPageScroll();
    };

    if (lightboxState.fromMap && viewer) {
        viewer.classList.remove('lightbox-zoom-in');
        viewer.classList.add('lightbox-zoom-out');
        setTimeout(finishClose, 200);
    } else {
        finishClose();
    }
}

function navigateLightbox(dir) {
    if (!lightboxState.open) return;

    const isCarousel = lightboxState.context === 'carousel';
    const isSingle = lightboxState.singlePlace;
    const listLen = lightboxState.placeList.length;

    if (dir === 'next') {
        if (lightboxState.chainPos < lightboxState.chain.length - 1) {
            lightboxState.chainPos++;
            renderLightbox();
            return;
        }
        if (isSingle) { closeLightbox(); return; }
        if (!isCarousel && lightboxState.placeListIndex >= listLen - 1) return;
        
        if (lightboxState.context === 'unknown') {
            lightboxState.placeListIndex++;
            lightboxState.unknownIndex = lightboxState.placeList[lightboxState.placeListIndex];
        } else {
            lightboxState.placeListIndex = isCarousel
                ? (lightboxState.placeListIndex + 1) % listLen
                : lightboxState.placeListIndex + 1;
        }
        
        loadPlaceIntoChain('start');
        renderLightbox({ swipeDir: 'next' });
        return;
    }

    if (lightboxState.chainPos > 0) {
        lightboxState.chainPos--;
        renderLightbox();
        return;
    }
    if (isSingle) { closeLightbox(); return; }
    if (!isCarousel && lightboxState.placeListIndex <= 0) return;
    
    if (lightboxState.context === 'unknown') {
        lightboxState.placeListIndex--;
        lightboxState.unknownIndex = lightboxState.placeList[lightboxState.placeListIndex];
    } else {
        lightboxState.placeListIndex = isCarousel
            ? (lightboxState.placeListIndex - 1 + listLen) % listLen
            : lightboxState.placeListIndex - 1;
    }
    
    loadPlaceIntoChain('start');
    renderLightbox({ swipeDir: 'prev' });
}

function loadPlaceIntoChain(pos) {
    const place = getPlaceByContext(lightboxState);
    lightboxState.chain = generalChainFor(place);
    lightboxState.chainPos = pos === 'end' ? lightboxState.chain.length - 1 : 0;
}

function generalChainFor(place) {
    if (stateIsUnknown() || usesFlatChain(place)) return [...place._flatChain];
    return [...place._generalChain];
}

function initLightboxEvents() {
    const lightbox = document.getElementById('lightbox');

    document.getElementById('lightboxNext').onclick = () => navigateLightbox('next');
    document.getElementById('lightboxPrev').onclick = () => navigateLightbox('prev');
    document.querySelector('.lightbox-close').onclick = () => closeLightbox();

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (lightbox.hasAttribute('hidden')) return;
        if (e.key === 'ArrowRight') navigateLightbox('next');
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'Escape') closeLightbox();
    });
}

function blockScrollBehindLightbox(e) {
    e.preventDefault();
}

function enableScrollBlock() {
    document.addEventListener('wheel', blockScrollBehindLightbox, { passive: false });
    document.addEventListener('touchmove', blockScrollBehindLightbox, { passive: false });
}

function disableScrollBlock() {
    document.removeEventListener('wheel', blockScrollBehindLightbox);
    document.removeEventListener('touchmove', blockScrollBehindLightbox);
}

// Mappa

function initMap() {
    const centroPaderno = [45.683080, 9.444502];
    const wmsOpzioni = { opacity: 0.7, interactive: false };

    const mappaOggiPulita = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });
    const googleSatellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] });

    function creaLivelloOrtofoto(nomeServer, type = 'ImageServer') {
        return L.tileLayer.wms(`https://www.cartografia.servizirl.it/arcgis2/services/BaseMap/${nomeServer}/${type}/WMSServer?`, { 
            layers: '0', 
            format: 'image/png', 
            transparent: true,   
            version: '1.1.1'     
        });
    }

    const catastoCompleto = L.layerGroup([
        L.imageOverlay('mappe_1876/paderno_foglio_001.png', [[45.67590183, 9.42518133], [45.68608502, 9.44351810]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_002.png', [[45.67486257, 9.44225252], [45.68527990, 9.45983112]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_003.png', [[45.674125647, 9.458638090], [45.684292007, 9.476183406]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_004.png', [[45.666415988, 9.424096356], [45.676742229, 9.442232336]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_005.png', [[45.665553237, 9.440967607], [45.675892779, 9.458632110]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_006.png', [[45.664609355, 9.457438713], [45.675018473, 9.475206074]], wmsOpzioni),
        L.imageOverlay('mappe_1876/paderno_foglio_008.png', [[45.653008412, 9.455691640], [45.665733645, 9.473984357]], wmsOpzioni),
    ]);

    leafletMap = L.map('map', { center: centroPaderno, zoom: 14, attributionControl: false, layers: [mappaOggiPulita] });

    const baseMaps = {
        ' Oggi (Stradale)': mappaOggiPulita,
        ' Oggi (Satellite)': googleSatellite,
        ' 2012': creaLivelloOrtofoto('ortofoto2012UTM'),
        ' 2007': creaLivelloOrtofoto('ortofoto2007UTM'),
        ' 2003': creaLivelloOrtofoto('ortofoto2003'),
        ' 1998': creaLivelloOrtofoto('ortofoto1998UTM_c'),
        ' 1975': creaLivelloOrtofoto('ortofoto1975'),
        ' 1954': creaLivelloOrtofoto('Lombardia_GAI_UTM32N', 'MapServer'),
        ' 1876': catastoCompleto
    };

    const layerControl = L.control.layers(baseMaps, null, { collapsed: true }).addTo(leafletMap);
    leafletMap._layerControl = layerControl;

    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    placesData.forEach((place, pIdx) => {
        if (!place.showInMap) return;

        const marker = L.marker([place.lat, place.lng]).addTo(leafletMap);
        const firstIeri = place._ieriIndices[0] ?? 0;

        const popupImagesHTML = place.photos
            .map((p, i) => `<img src="${p.src}" class="img-state ${i === firstIeri ? 'active' : ''}" data-index="${i}">`)
            .join('');

        const popupContent = document.createElement('div');
        popupContent.className = 'map-popup-inner';
        popupContent.innerHTML = `
            <div class="triple-box map-triple-box" style="border: none; border-radius: 12px 12px 0 0;">
                ${popupImagesHTML}
            </div>
            <div class="map-popup-title" data-pidx="${pIdx}">${getPlaceTitle(place)}</div>
        `;

        popupContent.querySelector('.map-triple-box').addEventListener('click', e => {
            e.stopPropagation();
            const el = marker.getElement();
            openLightbox({
                context: 'map',
                placeIndex: pIdx,
                fromMap: true,
                mapOrigin: el || marker.getPopup().getElement()
            });
        });

        marker.bindPopup(popupContent, { closeButton: false, minWidth: 260 });

        if (!isTouchDevice) {
            let hoverTimer;
            let closeTimeout;

            marker.on('mouseover', function () {
                clearTimeout(closeTimeout);
                hoverTimer = setTimeout(() => {
                    this.openPopup();
                    startPopupCycle(this, pIdx);
                    const popupNode = this.getPopup().getElement();
                    if (popupNode) {
                        popupNode.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
                        popupNode.addEventListener('mouseleave', () => {
                            closeTimeout = setTimeout(() => {
                                stopPopupCycle(this);
                                marker.closePopup();
                            }, 300);
                        });
                    }
                }, 800);
            });

            marker.on('mouseout', function () {
                clearTimeout(hoverTimer);
                closeTimeout = setTimeout(() => {
                    stopPopupCycle(this);
                    marker.closePopup();
                }, 300);
            });
        }

        marker.on('popupopen', () => startPopupCycle(marker, pIdx));
        marker.on('popupclose', () => stopPopupCycle(marker));

        marker.on('click', () => {
            const el = marker.getElement();
            openLightbox({
                context: 'map',
                placeIndex: pIdx,
                fromMap: true,
                mapOrigin: el || marker.getPopup().getElement()
            });
        });
    });
}

const MAP_FS_ICONS = {
    expand: '<svg class="map-fs-svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
    collapse: '<svg class="map-fs-svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>'
};

function updateMapFullscreenButton(btn, expanded) {
    if (!btn) return;
    btn.innerHTML = expanded ? MAP_FS_ICONS.collapse : MAP_FS_ICONS.expand;
    btn.classList.toggle('map-fs-control--expanded', expanded);
    const label = expanded
        ? staticTranslations[currentLang].map_exit_fullscreen
        : staticTranslations[currentLang].map_fullscreen;
    btn.title = label;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('aria-pressed', expanded ? 'true' : 'false');
}

function initMapFullscreen() {
    const wrapper = document.getElementById('mapWrapper');
    if (!wrapper || !leafletMap) return;

    const MapFullscreenControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd() {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control map-fs-bar');
            const btn = L.DomUtil.create('a', 'map-fs-control', container);
            btn.href = '#';
            btn.setAttribute('role', 'button');
            updateMapFullscreenButton(btn, false);

            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.on(btn, 'click', e => {
                L.DomEvent.preventDefault(e);
                wrapper.classList.toggle('map-expanded');
                const expanded = wrapper.classList.contains('map-expanded');
                updateMapFullscreenButton(btn, expanded);
                setTimeout(() => leafletMap.invalidateSize(), 350);
            });

            return container;
        }
    });

    new MapFullscreenControl().addTo(leafletMap);
}

// Lingua

const staticTranslations = {
    it: {}, 
    en: {
        nav_archive: "Carousel",
        nav_map: "Map",
        nav_gallery: "Gallery",
        nav_unknown: "Unidentified",
        intro_kicker: "Digital Archive / Paderno d’Adda",
        intro_title: "A Town Through Time",
        intro_desc: "A visual journey through the streets and memories of Paderno d’Adda (Italy), comparing historical photographs, AI reconstructions, and present-day views of the same places. A look at how the town has changed over the decades.",
        title_map: "Map of Places",
        title_gallery: "Historical Gallery",
        title_unknown: "Unidentified Photos",
        section_map_desc: "Explore the places directly on the map. Each pin opens a photo comparison. The time selector goes back to 1876!",
        section_gallery_desc: "All historical photographs in one gallery. Click to expand and browse places.",
        section_unknown_desc: "Photographs whose location has not yet been identified. Click an image to view it.",
        section_unknown_empty: "No photos in this section yet. Add them in script.js (unknownPlacesData).",
        map_fullscreen: "Fullscreen map",
        map_exit_fullscreen: "Exit fullscreen",
        contact_title: "Have photos or memories to share?",
        contact_send: "Send",
        contact_thanks: "Thank you! I received your message.",
        form_name: "Name (optional)",
        form_email: "Email (optional)",
        form_message: "Message or photo description…"
    }
};

let currentLang = localStorage.getItem('language') || 'it';

function applyLanguage(lang) {
    currentLang = lang;

    if (Object.keys(staticTranslations.it).length === 0) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            staticTranslations.it[key] = el.innerHTML.trim();
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            staticTranslations.it[key] = el.getAttribute('placeholder') || '';
        });
    }

    const dict = staticTranslations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    updateFilmstripLabels();
    updateGalleryLabels();
    updateMapPopupTitles();
    updateMapLayerLabels();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const langSpan = langToggle.querySelector('.lang-text');
        if (langSpan) langSpan.textContent = lang === 'it' ? 'EN' : 'IT';
        langToggle.title = lang === 'it' ? 'Change language' : 'Cambia lingua';
    }
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.title = lang === 'it' ? 'Cambia tema' : 'Change theme';
    }
}

// Tema

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const iconSpan = themeToggle.querySelector('.icon');

    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light');
        iconSpan.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        themeToggle.classList.add('switching');
        document.documentElement.style.transition = 'background-color 0.4s ease, color 0.4s ease';
        setTimeout(() => { document.documentElement.style.transition = ''; }, 400);

        const isLight = document.documentElement.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        setTimeout(() => {
            iconSpan.textContent = isLight ? '☀️' : '🌙';
            themeToggle.classList.remove('switching');
        }, 200);
    });
}

// Init

document.addEventListener('DOMContentLoaded', () => {
    prepareAllPlaces();
    generateFilmstrip();
    generateGallery();
    generateUnknownGallery();
    initMap();
    initMapFullscreen(); 
    startGlobalTimer();
    initFilmstripNav();
    initFilmstripVisibility();
    initLightboxEvents();
    initTouchSwipe();
    initLightboxSwipe();
    initThemeToggle();

    let filmstripResizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(filmstripResizeTimer);
        filmstripResizeTimer = setTimeout(applyFilmstripViewport, 150);
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const data = new FormData(contactForm);
            const res = await fetch(contactForm.action, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });
            if (res.ok) {
                contactForm.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
            }
        });
    }

    const langToggle = document.getElementById('langToggle');
    applyLanguage(currentLang);
    langToggle.addEventListener('click', () => {
        applyLanguage(currentLang === 'it' ? 'en' : 'it');
        localStorage.setItem('language', currentLang);
    });

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && !lightboxState.open) filmstripPaused = false;
    });

    // Banner lavori in corso
    const wipBanner = document.getElementById('wipBanner');
    const wipClose = document.getElementById('wipClose');
    const controlPanel = document.querySelector('.control-panel');

    if (sessionStorage.getItem('wipDismissed')) {
        wipBanner.classList.add('hidden');
        if (controlPanel) controlPanel.style.top = '75px';
    }

    if (wipClose) {
        wipClose.addEventListener('click', () => {
            wipBanner.classList.add('hidden');
            sessionStorage.setItem('wipDismissed', '1');
            if (controlPanel) {
                controlPanel.style.transition = 'top 0.4s ease';
                controlPanel.style.top = '75px';
            }
        });
    }
});
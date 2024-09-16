let Peliculas = [
    {
        id: 1,
        nombre: 'Hereditary',
        year: 2018,
        direccion: 'Ari Aster',
        guionistas: ['Ari Aster'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/hereditary-551635712-mmed.jpg'
    },
    {
        id: 2,
        nombre: 'The Conjuring',
        year: 2013,
        direccion: 'James Wan',
        guionistas: ['Chad Hayes', 'Carey W. Hayes'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_conjuring_the_warren_files-153245956-mmed.jpg'
    },
    {
        id: 3,
        nombre: 'It',
        year: 2017,
        direccion: 'Andy Muschietti',
        guionistas: ['Chase Palmer', 'Cary Fukunaga', 'Gary Dauberman'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/it-787119144-mmed.jpg'
    },
    {
        id: 4,
        nombre: 'Get Out',
        year: 2017,
        direccion: 'Jordan Peele',
        guionistas: ['Jordan Peele'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/get_out-290175782-mmed.jpg'
    },
    {
        id: 5,
        nombre: 'A Quiet Place',
        year: 2018,
        direccion: 'John Krasinski',
        guionistas: ['Bryan Woods', 'Scott Beck', 'John Krasinski'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/a_quiet_place-854286921-mmed.jpg'
    },
    {
        id: 6,
        nombre: 'The Babadook',
        year: 2014,
        direccion: 'Jennifer Kent',
        guionistas: ['Jennifer Kent'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_babadook-131562437-mmed.jpg'
    },
    {
        id: 7,
        nombre: 'Midsommar',
        year: 2019,
        direccion: 'Ari Aster',
        guionistas: ['Ari Aster'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/midsommar-578791309-mmed.jpg'
    },
    {
        id: 8,
        nombre: 'The Witch',
        year: 2015,
        direccion: 'Robert Eggers',
        guionistas: ['Robert Eggers'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_witch-480212918-mmed.jpg'
    },
    {
        id: 9,
        nombre: 'Sinister',
        year: 2012,
        direccion: 'Scott Derrickson',
        guionistas: ['Scott Derrickson', 'C. Robert Cargill'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/sinister-127255424-mmed.jpg'
    },
    {
        id: 10,
        nombre: 'Insidious',
        year: 2010,
        direccion: 'James Wan',
        guionistas: ['Leigh Whannell'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/insidious-733811348-mmed.jpg'
    },
    {
        id: 11,
        nombre: 'The Ring',
        year: 2002,
        direccion: 'Gore Verbinski',
        guionistas: ['Ehren Kruger'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_ring-712833488-mmed.jpg'
    },
    {
        id: 12,
        nombre: 'The Exorcist',
        year: 1973,
        direccion: 'William Friedkin',
        guionistas: ['William Peter Blatty'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_exorcist-742137399-mmed.jpg'
    },
    {
        id: 13,
        nombre: 'Paranormal Activity',
        year: 2007,
        direccion: 'Oren Peli',
        guionistas: ['Oren Peli'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/paranormal_activity-966242275-mmed.jpg'
    },
    {
        id: 14,
        nombre: 'The Shining',
        year: 1980,
        direccion: 'Stanley Kubrick',
        guionistas: ['Stanley Kubrick', 'Diane Johnson'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_shining-453129380-mmed.jpg'
    },
    {
        id: 15,
        nombre: 'The Texas Chain Saw Massacre',
        year: 1974,
        direccion: 'Tobe Hooper',
        guionistas: ['Kim Henkel', 'Tobe Hooper'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_texas_chainsaw_massacre-849377622-mmed.jpg'
    },
    {
        id: 16,
        nombre: 'Halloween',
        year: 1978,
        direccion: 'John Carpenter',
        guionistas: ['John Carpenter', 'Debra Hill'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/halloween-429753384-mmed.jpg'
    },
    {
        id: 17,
        nombre: 'Scream',
        year: 1996,
        direccion: 'Wes Craven',
        guionistas: ['Kevin Williamson'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/scream-786162434-mmed.jpg'
    },
    {
        id: 18,
        nombre: 'The Cabin in the Woods',
        year: 2012,
        direccion: 'Drew Goddard',
        guionistas: ['Joss Whedon', 'Drew Goddard'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_cabin_in_the_woods-405481336-mmed.jpg'
    },
    {
        id: 19,
        nombre: 'The Descent',
        year: 2005,
        direccion: 'Neil Marshall',
        guionistas: ['Neil Marshall'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_descent-396561570-mmed.jpg'
    },
    {
        id: 20,
        nombre: 'The Others',
        year: 2001,
        direccion: 'Alejandro Amenábar',
        guionistas: ['Alejandro Amenábar'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/los_otros_the_others-255113377-mmed.jpg'
    },
    {
        id: 21,
        nombre: 'Rosemary\'s Baby',
        year: 1968,
        direccion: 'Roman Polanski',
        guionistas: ['Roman Polanski'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/rosemary_s_baby-673657233-mmed.jpg'
    },
    {
        id: 22,
        nombre: '28 Days Later',
        year: 2002,
        direccion: 'Danny Boyle',
        guionistas: ['Alex Garland'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/28_days_later-469569758-mmed.jpg'
    },
    {
        id: 23,
        nombre: 'Don\'t Breathe',
        year: 2016,
        direccion: 'Fede Álvarez',
        guionistas: ['Fede Álvarez', 'Rodo Sayagues'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/don_t_breathe-517666787-mmed.jpg'
    },
    {
        id: 24,
        nombre: 'The Invisible Man',
        year: 2020,
        direccion: 'Leigh Whannell',
        guionistas: ['Leigh Whannell'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_invisible_man-559243209-mmed.jpg'
    },
    {
        id: 25,
        nombre: 'The Blair Witch Project',
        year: 1999,
        direccion: 'Daniel Myrick, Eduardo Sánchez',
        guionistas: ['Daniel Myrick', 'Eduardo Sánchez'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_blair_witch_project-169732125-mmed.jpg'
    },
    {
        id: 26,
        nombre: 'Us',
        year: 2019,
        direccion: 'Jordan Peele',
        guionistas: ['Jordan Peele'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/us-208891193-mmed.jpg'
    },
    {
        id: 27,
        nombre: 'The Grudge',
        year: 2004,
        direccion: 'Takashi Shimizu',
         guionistas: ['Stephen Susco'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/ju_on_the_grudge-272495267-mmed.jpg'
    },
    {
        id: 28,
        nombre: 'Orphan',
        year: 2009,
        direccion: 'Jaume Collet-Serra',
        guionistas: ['David Johnson'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/orphan_the_orphan-858260357-mmed.jpg'
    },
    {
        id: 29,
        nombre: 'The Mist',
        year: 2007,
        direccion: 'Frank Darabont',
        guionistas: ['Frank Darabont'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_mist-365301241-mmed.jpg'
    },
    {
        id: 30,
        nombre: 'The Autopsy of Jane Doe',
         year: 2016,
        direccion: 'André Øvredal',
        guionistas: ['Ian B. Goldberg', 'Richard Naing'],
        genero: 'terror',
        image: 'https://pics.filmaffinity.com/the_autopsy_of_jane_doe-741055330-mmed.jpg'
    }
]
    
var startGallery = function(elem, items) {
    return function() {
	var gallery = document.getElementById(elem);
        lightGallery(gallery, {
            dynamic: true,
	    loadYoutubeThumbnail: true,
	    youtubeThumbSize: 'default',
	    youtubePlayerParams: {
		modestbranding: 1,
		showinfo: 0,
		rel: 0,
		controls: 1
	    },
            dynamicEl: items
        })
    }
};

var addWork = function(config) {
    var preview = ''
    if(config.hasOwnProperty('isVideo') && config.isVideo) {
	preview = `<div class="work-preview" onclick="${ config.callback }()"><video  onmouseover="this.play()"><source src="content/preview/${ config.thumbnail }" type="video/mp4"></video></div>`
    } else {
	preview = `<div class="work-preview" onclick="${ config.callback }()"><img src="content/preview/${ config.thumbnail }"/></div>`
    }

    var container = document.querySelector('.container');
    var elem = document.createElement('div');
    // Trick: we use the name of the callback as ID
    elem.innerHTML += `\
    <div class="row work" id="${ config.callback }"> \
      <div class="col-6"> \
	<div class="work-title">${ config.title }</div> \
	<div class="work-subtitle">${ config.subtitle }</div> \
	<div class="work-description">${ config.description }</div> \
      </div> \
      <div class="col-6"> ` + preview +
      `</div> \
    </div>`

    container.appendChild(elem);
};

var galleryTodoTieneSentido = startGallery('galleryTodoTieneSentido', [
    {src: 'https://youtube.com/watch?v=0kYZ9WQkgAI'}
]);

var galleryGaznapiros = startGallery('galleryGaznapiros', [
    {src: 'content/gallery/busqueda_paz_era_gaznapiros/01.jpg'},
    {src: 'content/gallery/busqueda_paz_era_gaznapiros/02.jpg'}
]);

var galleryPandemiaPigmentos = startGallery('galleryPandemiaPigmentos', [
    {src: 'https://youtu.be/NjfTaY7yQ_E'},
    {src: 'content/gallery/pandemia_pigmentos/01.jpg'}
]);

var galleryTierrasColor = startGallery('galleryTierrasColor', [
    {src: 'https://youtu.be/QrAGJhrFeEQ'},
    {src: 'content/gallery/tierras_color/01.jpg'}
]);

var galleryEmergence = startGallery('galleryEmergence', [
    {src: 'https://youtu.be/nwvMhC5CoV0'},
    {src: 'content/gallery/emergence/01.jpg'}
]);

var galleryArtifex = startGallery('galleryArtifex', [
    {src: 'https://youtu.be/AqhjB2EkYHE'}
]);

var galleryVVM = startGallery('galleryVVM', [
    {src: 'https://youtu.be/vjKbZZx0noc'},
    {src: 'content/gallery/vvm/alvaro_castro_vacuum_virtual_machine_ZKM.jpg'},
    {src: 'content/gallery/vvm/alvaro_castro_vacuum_virtual_machine_LABORAL.jpg'}
]);

var gallerySwarmCity = startGallery('gallerySwarmCity', [
    {src: 'content/gallery/swarmcity/phoebus_navitas/section.gif', subHtml: '<h4>Phoebus Navitas cross-section</h4>'},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/section.gif', w: 3804, h: 956},
    {src: 'content/gallery/swarmcity/googlehymenoptera/section.gif', w: 2840, h: 1420},
    {src: 'content/gallery/swarmcity/intel_radix/section.gif', w: 2772, h: 2778},
    {src: 'content/gallery/swarmcity/microsoftcolumbiforme/section.gif', w: 2492, h: 1812},
    {src: 'content/gallery/swarmcity/alveolaves/section.gif', w: 1336, h: 982},
    {src: 'content/gallery/swarmcity/clangocactaceae/section.gif', w: 1512, h: 1335},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/section.gif', w: 981, h: 1094},
    {src: 'content/gallery/swarmcity/electrophorus_macrobacteriae/section.gif', w: 1200, h: 700},
    {src: 'content/gallery/swarmcity/labyrinthula_vidriae/section.gif', w: 784, h: 998},
    {src: 'content/gallery/swarmcity/lichen_of_the_facade/section.gif', w: 1496, h: 258},

    {src: 'content/gallery/swarmcity/clangocactaceae/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/googlehymenoptera/entry.gif', w: 700, h: 525},
    {src: 'content/gallery/swarmcity/intel_radix/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/labyrinthula_vidriae/entry.gif', w: 700, h: 525},
    {src: 'content/gallery/swarmcity/lichen_of_the_facade/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/microsoftcolumbiforme/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/phoebus_navitas/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/electrophorus_macrobacteriae/entry.gif', w: 700, h: 520},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/image_01.gif', w: 1034, h: 594},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/image_02.gif', w: 160, h: 580},

    {src: 'content/gallery/swarmcity/fluctivagus_conifera/evo_01.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/evo_02.gif', w: 640, h: 1520},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/evo_03.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/evo_01.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/evo_02.gif', w: 640, h: 1520},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/evo_03.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/googlehymenoptera/evo_01.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/googlehymenoptera/evo_02.gif', w: 640, h: 1530},
    {src: 'content/gallery/swarmcity/googlehymenoptera/evo_03.gif', w: 640, h: 1520},

    {src: 'content/gallery/swarmcity/alveolaves/render_01.jpg', w: 1200, h: 1200},
    {src: 'content/gallery/swarmcity/alveolaves/render_02.jpg', w: 1200, h: 1200},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/render_01.jpg', w: 600, h: 1200},
    {src: 'content/gallery/swarmcity/fluctivagus_conifera/render_02.jpg', w: 800, h: 800},
    {src: 'content/gallery/swarmcity/intel_radix/render_01.jpg', w: 1200, h: 1200},
    {src: 'content/gallery/swarmcity/intel_radix/render_02.jpg', w: 800, h: 800},
    {src: 'content/gallery/swarmcity/labyrinthula_vidriae/render_01.jpg', w: 3500, h: 365},
    {src: 'content/gallery/swarmcity/labyrinthula_vidriae/render_02.jpg', w: 1200, h: 1200},

    {src: 'content/gallery/swarmcity/alveolaves/strct_01.jpg', w: 1663, h: 1552},
    {src: 'content/gallery/swarmcity/fragropapilionoidea/strct_01.jpg', w: 1031, h: 944},

    {src: 'content/gallery/swarmcity/alveolaves/alveolaves_points.jpg', w: 2000, h: 1500},
    {src: 'content/gallery/swarmcity/labyrinthula_vidriae/labyrinthula_vidriae_points.jpg', w: 2000, h: 1500},
]);

var galleryIC = startGallery('galleryIC', [
    {src: 'content/gallery/interacciones_constructivas/exhibition.jpg', w: 598, h: 900},
    {src: 'content/gallery/interacciones_constructivas/servidor_hi.jpg', w: 1265, h: 700},
    {src: 'content/gallery/interacciones_constructivas/cliente.jpg', w: 878, h: 706},
    {src: 'content/gallery/interacciones_constructivas/catalogo-04.gif', w: 3214, h: 4104},
    {src: 'content/gallery/interacciones_constructivas/03.jpg', w: 1600, h: 500},
    {src: 'content/gallery/interacciones_constructivas/05.jpg', w: 1600, h: 500},
    {src: 'content/gallery/interacciones_constructivas/11.jpg', w: 1600, h: 500},
    {src: 'content/gallery/interacciones_constructivas/12.jpg', w: 1600, h: 500},
    {src: 'content/gallery/interacciones_constructivas/08.jpg', w: 1600, h: 500},
    {src: 'content/gallery/interacciones_constructivas/07.jpg', w: 1600, h: 500},
]);

var galleryDerivandoEspacialmente = startGallery('galleryDerivandoEspacialmente', [
    {src: 'http://www.youtube.com/watch?v=W-thWCzm8ZQ'}
]);

works = [
    {title: 'Y en realidad, todo tiene sentido, 2021', subtitle: 'AI entities series (video captures, 512px x 512px)', description: 'No description.', thumbnail: 'y_en_realidad_todo_tiene_sentido.mp4', isVideo: true, callback: 'galleryTodoTieneSentido'},
    {title: 'La búsqueda de paz en la era de los gaznápiros de Twitter, 2021', subtitle: 'Oil on canvas (100cm x 50cm & 100cm x 70cm)', description: 'No description.', thumbnail: 'busqueda_paz_era_gaznapiros.jpg', callback: 'galleryGaznapiros'},
    {title: 'Exceso de pandemia y pigmentos, 2020-2021', subtitle: 'AI entity & Oil on canvas (512px x 512px & 100cm x 50cm)', description: 'No description.', thumbnail: 'pandemia_y_pigmentos.jpg', callback: 'galleryPandemiaPigmentos'},
    {title: 'Tierras de Color, 2019-2021', subtitle: 'AI entity & Oil on canvas (512px x 512px, 100cm x 50cm)', description: 'No description.', thumbnail: 'tierras_color.jpg', callback: 'galleryTierrasColor'},
    {title: 'Emergence series, 2019-2021', subtitle: 'Acrylic on canvas, 50cm x 50cm & AI Entity (video capture), 512px x 512px', description: 'A series of visual explorations of the interaction of cellular automata with the process of painting. Influence and interaction goes both ways: the cellular automata programs consists of algorithms developed by means of machine learning techniques and inform the painting process, which also serves as input for the evolutionary process of the automata.', thumbnail: 'emergence.jpg', callback: 'galleryEmergence'},
    {title: 'Artifex, 2009', subtitle: 'Evolutionary Software Entity', description: 'Artifex is a 3-dimensional cellular automata computer program that uses evolutionary rules to constantly modify its behavior. From a series simple local rules (no cell is aware of what happens beyond its immediate neighbours), new spatial configurations emerge, producing unexpected forms that reminisce the complex natural formations present in nature. Cycle detection stops the program to get caught in an infinite loop, as well as discarding degenerate rules that lead the automate to extinction (or overtaking all available space).', thumbnail: 'artifex.jpg', callback: 'galleryArtifex'},
    {title: 'Vacuum Virtual Machine, 2008', subtitle: 'Graph-automata Software Entity', description: 'VVM is a graph-rewriting automata: by following a set of local rules, a graph (represented as a series of connections between nodes) rewrites itself iteratively. As a consequence, unpredictable and complex behavior emerges. A key concept in this work is the idea that a graph can encode a cellular automata of arbitrary dimensions, and essentially break free of the constraints of dimensionality parameters in cellular automata models. VVM runs indefinitely and independently of its observer. It is concerned only with its own self-observation, constantly changing the viewpoint of the representation of its computation.', thumbnail: 'vvm.jpg', callback: 'galleryVVM'},
    {title: 'SwarmCity, 2007', subtitle: 'with Fran Gallardo. Concept design, Web app with Java applets', description: 'SwarmCity is an urban intervention concept project. It proposes a set of mechanical/electronic entities (called Neotaxos) that artificially extend the natural ecosystem of the city, altering its biome. </br>Originally a website with a collection of embedded programs simulating their behavior (Java Applets), it no longer runs in modern browsers, so here I present a selection of images.', thumbnail: 'swarmcity.jpg', callback: 'gallerySwarmCity'},
    {title: 'Interacciones Constructivas_, 2006', subtitle: 'Network-connected Client and Server software (standalone Linux prorgram)', description: 'IC_ was born as a prototype for augmenting our undertanding of complex information, particularly of emergent processes with multidimensional data. It consists of a client software (data generator) and a server software (data visualizer). Conceptually, it tries to process data projecting multiple dimensions trying to simplify them visually.', thumbnail: 'interacciones_constructivas.jpg', callback: 'galleryIC'},
    {title: 'Derivando Espacialmente, 2004', subtitle: 'with Concha Almoguera and Pierre Elie Mamou. Video w/ audio, 720x576 2004', description: 'Derivando Espacialmente is a video reconstruction of the process of architectural drawing and ideation, augmented with the music of its thought process. The work is a collaboration with the architect and artist Concha Almoguera and the composer Pierre Elie Mamou.', thumbnail: 'derivando_espacialmente.jpg', callback: 'galleryDerivandoEspacialmente'},
]

var currentWork = 0;
var showNextWork = function() {
    if (currentWork == works.length) {
	return;
    }
    addWork(works[currentWork]);
    currentWork++;
};

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 200) {
	showNextWork();
	showNextWork();
    }
});

//
// Initialize
//

showNextWork();
showNextWork();

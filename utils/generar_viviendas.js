const bcrypt = require('bcryptjs');
const Vivienda = require('../models/Vivienda');

Vivienda.collection.drop();

const guardarViviendas = async () => {
    try {
        await Vivienda.deleteMany(); // Eliminar todas las viviendas existentes

        const usu1 = await Usuario.findOne({ name: 'Test1' });
        const usu2 = await Usuario.findOne({ name: 'Test2' });
        const usu3 = await Usuario.findOne({ name: 'Test2' });

        let viv1 = new Vivienda({
            direccion: 'Calle Ramón Gallud 42',
            planta: '3',
            puerta: 'B',
            lat: -0.682602,
            lng: 37.977189,
            descripcion: 'Disfruta de la vida urbana en este moderno apartamento situado en el corazón de la ciudad. Con una ubicación ideal, cerca de restaurantes, tiendas y lugares de entretenimiento, este apartamento ofrece comodidad y conveniencia. Sus espacios abiertos y luminosos, junto con su diseño contemporáneo, crean un ambiente acogedor y moderno. Además, cuenta con excelentes comodidades, como una piscina en la azotea y un gimnasio totalmente equipado. ¡Vive la experiencia de la vida en la ciudad en este encantador apartamento!',
            precio: 135000,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu1
        });
        await viv1.save();

        let viv2 = new Vivienda({
            direccion: 'Paseo de la Libertad 1',
            planta: '2',
            puerta: 'A',
            lat: -0.682845,
            lng: 37.977542,
            descripcion: 'Este encantador apartamento te ofrece la combinación perfecta de estilo y funcionalidad. Con una distribución inteligente, cada rincón está diseñado para aprovechar al máximo el espacio disponible. Desde su cocina completamente equipada hasta su sala de estar acogedora, cada detalle ha sido cuidadosamente seleccionado para brindarte comodidad y confort. Además, su ubicación céntrica te permite disfrutar de todas las comodidades de la ciudad a tu alcance. No pierdas la oportunidad de vivir en este maravilloso apartamento.',
            precio: 82500,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu1
        });
        await viv2.save();

        let viv3 = new Vivienda({
            direccion: 'Calle Caballero de Rodas 79',
            planta: '4',
            puerta: 'C',
            lat: -0.679369,
            lng: 37.978062,
            descripcion: 'Descubre la elegancia y el confort en este lujoso apartamento de diseño contemporáneo. Sus amplios espacios y acabados de alta calidad te brindarán una experiencia de vida excepcional. Disfruta de la luminosidad natural en su espaciosa sala de estar, relájate en su acogedora habitación y déjate impresionar por las vistas panorámicas desde su terraza privada. Además, sus comodidades incluyen una piscina privada, gimnasio y estacionamiento subterráneo. ¡Este apartamento es el refugio perfecto para aquellos que buscan lo mejor de la vida moderna!',
            precio: 215000,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu1
        });
        await viv3.save();

        let viv4 = new Vivienda({
            direccion: 'Calle Apolo 61',
            planta: '1',
            puerta: 'B',
            lat: -0.678986,
            lng: 37.980611,
            descripcion: 'Sumérgete en la comodidad y el estilo de vida contemporáneo en este apartamento de diseño vanguardista. Con una distribución abierta y espacios luminosos, este apartamento te invita a relajarte y disfrutar de cada momento. Su cocina totalmente equipada te permitirá dar rienda suelta a tu creatividad culinaria, mientras que su sala de estar se convierte en el lugar perfecto para descansar y socializar. Además, su ubicación estratégica te brinda fácil acceso a tiendas, restaurantes y áreas verdes. ¡Descubre la elegancia moderna en este impresionante apartamento!',
            precio: 175800,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu2
        });
        await viv4.save();

        let viv5 = new Vivienda({
            direccion: 'Avenida de las Habaneras 10',
            planta: '5',
            puerta: 'C',
            lat: -0.67276,
            lng: 37.980144,
            descripcion: 'Vive el lujo en este exclusivo apartamento que redefine los estándares de elegancia y sofisticación. Con un diseño interior impecable y acabados de primera calidad, cada rincón de este apartamento ha sido cuidadosamente diseñado para brindarte un estilo de vida excepcional. Desde su espaciosa sala de estar hasta su terraza privada con vistas panorámicas, cada detalle refleja un nivel de lujo sin igual. Además, sus comodidades incluyen una piscina, spa, gimnasio y servicio de conserjería. ¡Déjate cautivar por la opulencia de este extraordinario apartamento!',
            precio: 94700,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu2
        });
        await viv5.save();

        let viv6 = new Vivienda({
            direccion: 'Calle Orihuela 93',
            planta: '2',
            puerta: 'A',
            lat: -0.686191,
            lng: 37.983129,
            descripcion: 'Sumérgete en la serenidad y el encanto de este apartamento ubicado en un entorno natural. Con amplios espacios abiertos y vistas panorámicas de la belleza circundante, este apartamento te brinda una sensación de paz y tranquilidad. Disfruta de su luminoso salón, relájate en su terraza privada rodeada de vegetación y disfruta de las comodidades que ofrece, como una piscina y áreas comunes. Este apartamento es perfecto para aquellos que buscan una conexión con la naturaleza sin comprometer la comodidad y el estilo de vida moderno.',
            precio: 123400,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu2
        });
        await viv6.save();

        let viv7 = new Vivienda({
            direccion: 'Calle Pedro Lorca 28',
            planta: '4',
            puerta: 'B',
            lat: -0.679095,
            lng: 37.976544,
            descripcion: 'Este acogedor apartamento te ofrece un ambiente cálido y confortable para llamar hogar. Con una distribución inteligente y detalles cuidadosamente seleccionados, cada espacio ha sido optimizado para brindarte funcionalidad y estilo. Disfruta de su sala de estar luminosa, prepara deliciosas comidas en su cocina totalmente equipada y relájate en su dormitorio acogedor. Además, su ubicación te brinda fácil acceso a servicios y actividades cercanas. ¡No pierdas la oportunidad de vivir en este encantador apartamento!',
            precio: 198900,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu3
        });
        await viv7.save();

        let viv8 = new Vivienda({
            direccion: 'Calle del Mar 55',
            planta: '5',
            puerta: 'C',
            lat: -0.675513,
            lng: 37.978066,
            descripcion: 'Experimenta la vida en la ciudad en este apartamento urbano y moderno. Con un diseño contemporáneo y una ubicación privilegiada, este apartamento es ideal para aquellos que buscan una experiencia cosmopolita. Disfruta de su amplia sala de estar con grandes ventanales, que ofrecen vistas impresionantes de la ciudad. Descubre su cocina gourmet totalmente equipada y relájate en su elegante dormitorio. Además, cuenta con excelentes comodidades, como una zona común en la azotea con vistas panorámicas y gimnasio. ¡Disfruta de la emoción de la vida urbana en este fabuloso apartamento!',
            precio: 150600,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu3
        });
        await viv8.save();

        let viv9 = new Vivienda({
            direccion: 'Avenida Diego Ramírez Pastor 84',
            planta: '3',
            puerta: 'A',
            lat: -0.685102,
            lng: 37.980445,
            descripcion: 'Sumérgete en la elegancia y el lujo en este sofisticado apartamento de alta gama. Cada detalle ha sido cuidadosamente seleccionado para ofrecerte una experiencia de vida excepcional. Desde sus espacios luminosos y bien diseñados hasta sus acabados de alta calidad, este apartamento te envuelve en un ambiente de lujo y confort. Disfruta de su amplio salón, relájate en su dormitorio principal con baño en suite y disfruta de su terraza privada con vistas deslumbrantes. Además, cuenta con servicios exclusivos, como piscina, spa y seguridad las 24 horas. ¡Ven y descubre la exclusividad en este extraordinario apartamento!',
            precio: 106200,
            fotos: [
                'https://www.arquitecturaydiseno.es/medio/2020/01/21/salon-casa-mimouca-comedor-costa-brava_1b8bee1a_2000x1333.jpg',
                'https://www.kocina.net/wp-content/uploads/2021/05/cocina-clave.jpg',
                'https://lardedonas.com/z3del/uploads/2015/07/habitacion_palleira_casa_turismo_rural_Meira_Lugo_Galicia_Lar_de_Donas_2.jpg',
                'https://i.pinimg.com/originals/53/3a/8e/533a8e7c2a1cd60d40bdf5af7668979c.jpg',
                'https://st.hzcdn.com/simgs/b2d1a42d025b241a_8-5347/clasico-renovado-cuarto-de-bano.jpg'
            ],
            propietario: usu3
        });
        await viv9.save();

        console.log('Viviendas guardadas con éxito');
    } catch (error) {
    console.error('Error al guardar las viviendas:', error);
  }
};

guardarViviendas();
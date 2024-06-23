const Phrases = [
    {
        titulo: "Hamlet",
        autor: "William Shakespeare",
        category: "Clásicos",
        phrases: {
            1: "Parece natural en la vejez excedernos en la desconfianza, igual que es propio de los jóvenes andar escasos de juicio.",
            2: "Sabemos lo que somos; pero no lo que podemos ser.",
            3: "Lo que yo llevo dentro no se expresa: lo demás es ropaje de la pena."
        },
        qr: "caca"
    },
    {
        titulo: "Los Miserables",
        autor: "Victor Hugo",
        category: "Clásicos",
        phrases: {
            1: "Ser bueno es fácil cuando lo tienes todo, pero la verdadera bondad radica en ser amable incluso cuando no tienes nada.",
            2: "La verdad es como el sol: hazla desaparecer por un tiempo, pero no podrás ocultarla para siempre.",
            3: "No importa cuántas veces te hayas caído, lo importante es levantarte y seguir adelante."
        },
        qr: "caca"
    },
    {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        category: "Clásicos",
        phrases: {
            1: "Pero la guerra es dolor, y el odio es sufrimiento.",
            2: "Yo no sé todo lo que podrá pasar, pero, sea lo que quiera, iré a ello riendo.",
            3: "No ve el cielo negro y el mar encolerizado, no nota las tablas agitadas, y bien poco escucha ni atiende al lejano rumor de la poderosa ballena, que ya, con la boca abierta, surca el mar persiguiéndole."
        },
        qr: "caca"
    },
    {
        titulo: "Martin Fierro",
        autor: "José Hernández",
        category: "Literatura Argentina y Latinoamericana",
        phrases: {
            1: "Los hermanos sean unidos, porque ésa es la ley primera.",
            2: "Porque nada enseña tanto, Como el sufrir y el llorar.",
            3: "Lo que pinta este pincel / ni el tiempo lo ha de borrar; / ninguno se ha de animar a corregirme la plana; / no pinta quien tiene gana / sino quien sabe pintar."
        },
        qr: "caca"
    },
    {
        titulo: "En La Sangre",
        autor: "Eugenio Cambaceres",
        category: "Literatura Argentina y Latinoamericana",
        phrases: {
            1: "De cabeza grande, de facciones chatas, ganchuda la nariz, saliente el labio inferior, en la expresión aviesa de sus ojos chicos y sumidos, una rapacidad de buitre se acusaba.",
            2: "Un momento, alargando el cuello, hundía la vista en el zaguán. Continuaba luego su camino entre ruidos de latón y fierro viejo. Había en su paso una resignación de buey."
        },
        qr: "caca"
    },
    {
        titulo: "El Mago de Oz",
        autor: "Lyman Frank Baum",
        category: "Infantil/Juvenil",
        phrases: {
            1: "El valor se encuentra en cada uno de nosotros.",
            2: "La mejor manera de lograr lo imposible es creer que es posible.",
            3: "El amor y la amistad son los tesoros más grandes de la vida."
        },
        qr: "caca"
    },
    {
        titulo: "El Libro de la Selva",
        autor: "Rudyard Kipling",
        category: "Infantil/Juvenil",
        phrases: {
            1: "La selva es vasta y salvaje, pero siempre hay un lugar para aquellos que se atreven a soñar.",
            2: "No hay mayor felicidad que la de estar en casa, rodeado de tus seres queridos."
        },
        qr: "caca"
    },
    {
        titulo: "Alicia a través del Espejo",
        autor: "Lewis Carroll",
        category: "Infantil/Juvenil",
        phrases: {
            1: "La familia es algo muy importante, sólo tienes una.",
            2: "El único modo de lograr lo imposible, es convenciéndose de que sí es posible.",
            3: "Jovencita, no puedes cambiar el pasado; aunque déjame decirte algo: Podrías aprender algo de él."
        },
        qr: "caca"
    },
    {
        titulo: "Dracula",
        autor: "Bram Stoker",
        category: "Fantastico/Aventura",
        phrases: {
            1: "Una vez más, bienvenido a mi casa. Ven libremente, sal con seguridad; deja algo de la felicidad que traes.",
            2: "Hay una razón por la que todas las cosas son como son.",
            3: "Hay malos sueños para aquellos que duermen imprudentemente."
        },
        qr: "caca"
    },
    {
        titulo: "Las Aventuras de Robinson Crusoe",
        autor: "Daniel Defoe",
        category: "Fantastico/Aventura",
        phrases: {
            1: "La paciencia y la perseverancia son la clave del éxito en cualquier empresa.",
            2: "La soledad es la única compañera verdadera en tiempos de dificultad.",
            3: "La adversidad nos enseña lecciones que de otra manera nunca aprenderíamos"
        },
        qr: "caca"
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        category: "Fantastico/Aventura",
        phrases: {
            1: "La pasión de poseer alcanza la mayor de las grandezas y ahoga la nobleza de los sentimientos.",
            2: "“La ignorancia es la madre de todos los males."
        },
        qr: "caca"
    },
    {
        titulo: "Sófocles",
        autor: "Edipo Rey",
        category: "Teatro",
        phrases: {
            1: "Una palabra nos libera de todo el peso y el dolor de la vida: esa palabra es AMOR.",
            2: "Noble cosa es, aun para un anciano, el aprender.",
            3: "De todos los males, los màs dolorosos son los que se infringe uno mismo."
        },
        qr: "caca"
    },
    {
        titulo: "La Vida Es Un sueño",
        autor: "Pedro Calderón de La Barca",
        category: "Teatro",
        phrases: {
            1: "La vida es un hermoso sueño y lo quiero vivir despacio.",
            2: "Que toda la vida es sueño, y los sueños, sueños son.",
            3: "¿Y teniendo yo más alma, tengo menos libertad?"
        },
        qr: "caca"
    },
    {
        titulo: "de La Tierra a la Luna",
        autor: "Julio Vergne",
        category: "Ciencia Ficción",
        phrases: {
            1: "El bosque no es quemado sino por sus propios árboles.",
            2: "La conocían por sus antecedentes, y por ellos la juzgaban."
        },
        qr: "caca"
    },
    {
        titulo: "El Hombre Invisible",
        autor: "H.G. Wells",
        category: "Ciencia Ficción",
        phrases: {
            1: "Todos los hombres, incluso los más educados, tienen algo de supersticiosos.",
            2: "“La verdad es que tengo todo: cabeza, manos, piernas y el resto del cuerpo. Lo que ocurre es que soy invisible. Es un fastidio, pero no lo puedo remediar."
        },
        qr: "caca"
    },
    {
        titulo: "Crónicas Marcianas",
        autor: "Ray Bradbury",
        category: "Ciencia Ficción",
        phrases: {
            1: "En Marte encontré la soledad que siempre había buscado, pero también descubrí que no se puede ser feliz solo.",
            2: "Los hombres han olvidado que la tierra es nuestra madre, y que acabaremos destruyéndola si no aprendemos a respetarla."
        },
        qr: "caca"
    },
    {
        titulo: "Los Crimenes de la Rue Margue",
        autor: "Edgar Allan Poe",
        category: "Policial",
        phrases: {
            1: "Lo importante es saber lo que debe ser observado.",
            2: "Los ingeniosos son siempre imaginativos y los verdaderamente imaginativos son siempre analistas."
        },
        qr: "caca"
    },
    {
        titulo: "La Caida de la Casa Usher",
        autor: "Julio Vergne",
        category: "Policial",
        phrases: {
            1: "Sentía a menudo una inquietud inexplicable, una ansiedad que no podía explicar.",
            2: "La nada misma había caído sobre Usher.",
            3: "La idea de que la casa misma era malévola comenzó a obsesionarme"
        },
        qr: "caca"
    },
]

export default Phrases
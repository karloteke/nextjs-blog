const sequelize = require('../config/database');
const Post = require('../models/Post');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // Crea la tabla Post en la base de datos si no existe.

  const posts = [
    {
      title: 'Cómo Entender el Comportamiento de tu Gato',

      content: `Los gatos pueden ser misteriosos y fascinantes, ¡y entender su comportamiento puede parecer todo un reto! A diferencia de los perros, los gatos se comunican de maneras más sutiles, pero una vez que sabes qué buscar, es mucho más fácil entender lo que tu gato quiere decirte. A continuación, exploraremos algunas de las señales más comunes que los gatos usan para expresarse.
      
      ### 1. El ronroneo: ¿Siempre es felicidad?
      
      El ronroneo es probablemente una de las formas más comunes en que los gatos se comunican. Aunque a menudo lo asociamos con felicidad, los gatos también pueden ronronear cuando están nerviosos o incluso cuando tienen dolor. Si tu gato está ronroneando mientras parece estresado o incómodo, podría estar tratando de calmarse.
      
      ### 2. Los movimientos de la cola
      - **- Cola levantada**: Un gato con la cola bien levantada generalmente está contento y seguro de sí mismo.
      - **- Cola agitada**: Si la cola de tu gato se mueve de un lado a otro rápidamente, es posible que esté irritado o a punto de enfadarse.
      - **- Cola inflada**: Esto es una señal de miedo o agresión. Tu gato está tratando de parecer más grande para defenderse de una amenaza.
      
      ### 3. Las orejas y su lenguaje
      - **- Orejas hacia adelante**: Cuando las orejas están apuntando hacia adelante, tu gato está curioso y atento.
      - **- Orejas hacia atrás o pegadas a la cabeza**: Esto puede ser una señal de miedo o agresión. Si tu gato está en esta posición, es mejor darle un poco de espacio.
      
      ### 4. El parpadeo lento: La señal de amor felino
      
      ¿Alguna vez has notado que tu gato te mira y parpadea lentamente? Este es uno de los gestos más tiernos que puede hacer. Es su manera de mostrar que confía en ti y que se siente relajado. Si quieres devolverle el cariño, parpadea lentamente hacia él; ¡es una forma de decirle "te quiero" en lenguaje gatuno!
      
      ### 5. El amasado con las patas
      
      Cuando un gato amasa con sus patas, es una señal de que se siente seguro y feliz. Este comportamiento lo aprenden de cachorros, cuando amasan a su madre para estimular el flujo de leche. Si tu gato te amasa, es un gran cumplido: te ve como una fuente de seguridad y confort.
      
      ### 6. Mordiscos suaves
      
      Algunos gatos dan pequeños mordiscos o "mordiscos de amor" cuando están jugando o cuando se sienten cómodos. Estos mordiscos suaves no son agresivos, sino una forma de interacción social. Si tu gato te muerde de manera juguetona, es solo otra forma de mostrarte afecto.
      
      ### 7. Frotar su cabeza contra ti
      
      Cuando un gato frota su cabeza contra ti o contra objetos de la casa, está marcando su territorio. Los gatos tienen glándulas de olor en la cara, y cuando te frotan, están diciendo "tú eres mío". Es una forma de vinculación y una muestra de afecto.
      
      ### Conclusión
      
      Los gatos tienen una forma única y sutil de comunicarse con nosotros. Al aprender a entender su lenguaje corporal y sus vocalizaciones, puedes construir una relación más cercana con tu amigo felino. ¡Observa a tu gato con atención y verás todo lo que te está tratando de decir!`
    },
    {
      title: '10 Curiosidades Fascinantes Sobre los Gatos',

      content: `Los gatos son criaturas maravillosas, llenas de misterio y encanto. No solo son compañeros leales y entretenidos, sino que además tienen un mundo de peculiaridades que los hacen únicos. Si eres un amante de los gatos, prepárate para sorprenderte con estas 10 curiosidades fascinantes sobre tus amigos felinos.
      
      ### 1. ¡Los gatos duermen mucho!
      
      ¿Sabías que los gatos pueden dormir entre 12 y 16 horas al día? Eso significa que pasan alrededor del 70% de sus vidas durmiendo. Este hábito de dormir tanto se debe a su naturaleza cazadora: necesitan conservar energía para cuando sea el momento de "cazar" (aunque sea solo un juguete en casa).
      
      ### 2. Su ronroneo tiene un propósito curativo
      
      El ronroneo no solo es adorable, sino que también tiene beneficios para la salud. Se cree que el ronroneo puede ayudar a los gatos a recuperarse de heridas, ya que las vibraciones tienen propiedades curativas para los músculos y los huesos.
      
      ### 3. Los gatos tienen más huesos que los humanos
      
      Aunque los gatos son más pequeños, tienen alrededor de 230 huesos en su cuerpo, mientras que los humanos solo tenemos 206. Esto les da gran flexibilidad, permitiéndoles saltar y moverse con agilidad.
      
      ### 4. ¡Son grandes saltadores!
      
      Un gato puede saltar hasta seis veces su longitud en una sola ocasión. Esta increíble habilidad se debe a los fuertes músculos de sus patas traseras.
      
      ### 5. Cada gato tiene su propio "lenguaje de maullido"
      
      Los gatos no maúllan entre sí en la naturaleza. Han desarrollado este comportamiento exclusivamente para comunicarse con los humanos. De hecho, cada gato tiene su propio repertorio único de maullidos para expresar lo que quiere.
      
      ### 6. Los gatos también sueñan
      
      Así es, los gatos experimentan ciclos de sueño REM, lo que significa que también sueñan. Si ves a tu gato moviendo sus patas o emitiendo pequeños sonidos mientras duerme, es posible que esté soñando con una emocionante aventura de caza.
      
      ### 7. Les encanta el calor
      
      Los gatos disfrutan del calor más que los humanos. Les encanta acurrucarse en lugares cálidos como el sol, mantas o radiadores. Esto se debe a que su temperatura corporal es un poco más alta que la nuestra, alrededor de 38.6°C.
      
      ### 8. Son cazadores natos
      
      Aunque estén domesticados, los instintos de caza de los gatos siguen muy presentes. Desde los juegos de persecución hasta acechar una pequeña pelota, esas actividades simulan las habilidades que usarían en la naturaleza para cazar.
      
      ### 9. Los gatos pueden "hablar" con los ojos
      
      Cuando un gato parpadea lentamente a un humano, está mostrando que confía en él. Este es un signo de afecto y comodidad. Si le devuelves un parpadeo lento a tu gato, es probable que también lo vea como una señal de cariño.
      
      ### 10. El sentido del olfato de los gatos es impresionante
      
      El sentido del olfato de los gatos es 14 veces más potente que el de los humanos. Utilizan su olfato para explorar su entorno y detectar posibles peligros, así como para reconocer a otros animales o personas.
      
      Los gatos son criaturas fascinantes que llenan nuestras vidas de alegría, curiosidad y, claro, ¡mucho amor! ¿Conocías alguna de estas curiosidades? Si tienes más datos interesantes sobre los gatos, ¡compártelos en los comentarios!`
    },
  ];

  await Post.bulkCreate(posts);
  console.log('Migración realizada con éxito.');
};

seedDatabase()
  .then(() => {
    sequelize.close();
  })
  .catch((error) => {
    console.error('Error al sembrar la base de datos:', error);
    sequelize.close();
  });

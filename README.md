# Parcial-PCIV


# Integrantes:

Brayan Audiel Chavarría Romero - SMSS020924      
Esmeralda Isabel Cruz Roldán - SMSS011124

# Situación problemática
Sistema Web de registro para Talleres Universitarios.

Enunciado: 

En muchas universidades, la inscripción a talleres académicos se realiza de forma manual o mediante formularios poco organizados. Esto puede generar problemas como: desorden en el registro, pérdida de información, duplicidad de inscripciones, entre otros.

Ante esta problemática se propone el desarrollo de una página web que permita el registro de estudiantes a distintos talleres universitarios de forma dinámica, validada, mostrando en tiempo real la inscripción.

Sector al que va enfocado:

La solución está dirigida principalmente al sector educativo (universidades).



# Preguntas:

o ¿Qué valor agregado tiene el uso de webcomponents a su proyecto?

El uso de WebComponents permite crear un elemento personalizado llamado <tarjeta-inscripcion>, lo que aporta organización y reutilización del código.

Valor agregado: Separamos la lógica de presentación del HTML principal.

Permite reutilizar el componente fácilmente si el proyecto crece.

Hace el código más ordenado.

Facilita el mantenimiento futuro.

En lugar de crear manualmente cada tarjeta con muchos div, usamos el componente personalizado que ya contiene su estructura interna.

o ¿De qué forma manipularon los datos sin recargar la página?

Manipulamos los datos usando JavaScript con el evento submit del formulario.

Se utilizó: e.preventDefault()

Esto evita que el formulario recargue la página.

o ¿De qué forma validaron las entradas de datos? Expliquen brevemente

Se realizó validación manual en JavaScript antes de crear la tarjeta.

Se verificó: Que ningún campo estuviera vacío:

if(nombre === "" || taller === "" || modalidad === "")

Que el nombre tenga mínimo 3 caracteres:

if(nombre.length < 3)

Si no cumple las condiciones, se muestra un alert() y se detiene el proceso con return.

Esto evita que se registren datos incorrectos.

o ¿Cómo manejaría la escalabilidad futura en su página?

Para escalar el proyecto en el futuro se podría:

Guardar las inscripciones en una base de datos.

Separar el código JS en módulos.

Agregar más WebComponents (por ejemplo: lista de talleres, contador de inscritos).

Implementar filtros o buscador.




https://brayanch-1.github.io/Parcial-PCIV/

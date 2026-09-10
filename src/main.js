const frases = [
    {
        palabras: [
            ["I", "yo"],
            ["like", "gustar"],
            ["playing", "jugando"],
            ["video", "video"],
            ["games", "juegos"]
        ]
    },
    {
        palabras: [
            ["I", "yo"],
            ["want", "quiero"],
            ["to", "a"],
            ["learn", "aprender"],
            ["English", "inglés"]
        ]
    },
    {
        palabras: [
            ["She", "ella"],
            ["likes", "le gusta"],
            ["reading", "leer"],
            ["books", "libros"]
        ]
    },
    {
        palabras: [
            ["He", "él"],
            ["plays", "juega"],
            ["the", "la"],
            ["guitar", "guitarra"]
        ]
    },
    {
        palabras: [
            ["We", "nosotros"],
            ["study", "estudiamos"],
            ["English", "inglés"],
            ["every", "cada"],
            ["day", "día"]
        ]
    },
    {
        palabras: [
            ["I", "yo"],
            ["have", "tengo"],
            ["a", "un"],
            ["new", "nuevo"],
            ["book", "libro"]
        ]
    },
    {
        palabras: [
            ["They", "ellos"],
            ["are", "están"],
            ["very", "muy"],
            ["happy", "felices"]
        ]
    },
    {
        palabras: [
            ["I", "yo"],
            ["drink", "bebo"],
            ["water", "agua"],
            ["every", "cada"],
            ["morning", "mañana"]
        ]
    },
    {
        palabras: [
            ["My", "mi"],
            ["favorite", "favorito"],
            ["color", "color"],
            ["is", "es"],
            ["blue", "azul"]
        ]
    },
    {
        palabras: [
            ["I", "yo"],
            ["love", "amo"],
            ["my", "mi"],
            ["family", "familia"]
        ]
    }
];
const preguntas = [
    {
        ingles: "I like playing video games.",
        correcta: "Me gusta jugar videojuegos.",
        opciones: [
            "Me gusta jugar videojuegos.",
            "Quiero aprender inglés.",
            "Ella lee libros."
        ]
    },
    {
        ingles: "I want to learn English.",
        correcta: "Quiero aprender inglés.",
        opciones: [
            "Quiero aprender inglés.",
            "Me gusta jugar videojuegos.",
            "Él toca la guitarra."
        ]
    },
    {
        ingles: "She likes reading books.",
        correcta: "A ella le gusta leer libros.",
        opciones: [
            "A ella le gusta leer libros.",
            "Nosotros estudiamos inglés.",
            "Ellos están muy felices."
        ]
    },
    {
        ingles: "He plays the guitar.",
        correcta: "Él toca la guitarra.",
        opciones: [
            "Él toca la guitarra.",
            "Yo tengo un libro nuevo.",
            "Ella lee libros."
        ]
    },
    {
        ingles: "We study English every day.",
        correcta: "Estudiamos inglés todos los días.",
        opciones: [
            "Estudiamos inglés todos los días.",
            "Bebo agua cada mañana.",
            "Quiero aprender inglés."
        ]
    },
    {
        ingles: "I have a new book.",
        correcta: "Tengo un libro nuevo.",
        opciones: [
            "Tengo un libro nuevo.",
            "Amo a mi familia.",
            "Él toca la guitarra."
        ]
    },
    {
        ingles: "They are very happy.",
        correcta: "Ellos están muy felices.",
        opciones: [
            "Ellos están muy felices.",
            "Me gusta jugar videojuegos.",
            "Mi color favorito es azul."
        ]
    },
    {
        ingles: "I drink water every morning.",
        correcta: "Bebo agua cada mañana.",
        opciones: [
            "Bebo agua cada mañana.",
            "Estudiamos inglés todos los días.",
            "Tengo un libro nuevo."
        ]
    },
    {
        ingles: "My favorite color is blue.",
        correcta: "Mi color favorito es azul.",
        opciones: [
            "Mi color favorito es azul.",
            "Amo a mi familia.",
            "Ellos están muy felices."
        ]
    },
    {
        ingles: "I love my family.",
        correcta: "Amo a mi familia.",
        opciones: [
            "Amo a mi familia.",
            "Quiero aprender inglés.",
            "Mi color favorito es azul."
        ]
    }
];

let fraseActual = 0;
let preguntaActual = 0;

const app = document.querySelector("#app");

function mostrarInicio() {

    app.innerHTML = `
        <div class="inicio">

            <div class="logo">🌐</div>

            <h1>Learn English</h1>

            <p class="subtitulo">
                Aprende inglés jugando
            </p>

            <div class="menu">

                <button class="menu-boton aprender" id="aprender">
                    📚 Aprender
                </button>

                <button class="menu-boton practicar" id="practicar">
                    🎯 Practicar
                </button>

            </div>

        </div>
    `;

    document.querySelector("#aprender").addEventListener("click", mostrarAprender);

document.querySelector("#practicar").addEventListener("click", mostrarPracticar);
}

function mostrarAprender() {

    app.innerHTML = `
        <h1>Learn English</h1>

        <p id="contador"></p>

        <div id="frase"></div>

        <div id="traduccion"></div>

        <button id="siguiente">Siguiente frase →</button>

        <br>

        <button id="inicio">← Volver al inicio</button>
    `;

    const frase = document.querySelector("#frase");
    const traduccion = document.querySelector("#traduccion");
    const contador = document.querySelector("#contador");
    const siguiente = document.querySelector("#siguiente");
    const inicio = document.querySelector("#inicio");

    function mostrarFrase() {

        frase.innerHTML = "";
        traduccion.textContent = "";

        const palabras = frases[fraseActual].palabras;

        palabras.forEach((palabra) => {

            const boton = document.createElement("button");

            boton.textContent = palabra[0];

            boton.addEventListener("click", () => {

                traduccion.innerHTML = `
                    <span>${palabra[1]}</span>
                    <button id="escuchar">🔊</button>
                `;

                const escuchar = document.querySelector("#escuchar");

                escuchar.addEventListener("click", () => {

                    const voz = new SpeechSynthesisUtterance(palabra[0]);

                    voz.lang = "en-US";

                    speechSynthesis.speak(voz);
                });
            });

            frase.appendChild(boton);
        });

        contador.textContent = `Frase ${fraseActual + 1} de ${frases.length}`;
    }

    siguiente.addEventListener("click", () => {

        fraseActual++;

        if (fraseActual >= frases.length) {
            fraseActual = 0;
        }

        mostrarFrase();
    });

    inicio.addEventListener("click", mostrarInicio);

    mostrarFrase();
}
function mostrarPracticar() {

    const pregunta = preguntas[preguntaActual];

    app.innerHTML = `
        <div class="practicar-pantalla">

            <h1>Practice</h1>
            <p id="contador-practica">
    Pregunta ${preguntaActual + 1} de ${preguntas.length}
</p>

            <p class="instruccion">
                Choose the correct translation
            </p>

            <div class="pregunta">
                <p>${pregunta.ingles}</p>
            </div>

            <div id="opciones"></div>

            <p id="resultado"></p>

<button id="siguiente-pregunta" style="display: none;">
    Siguiente pregunta →
</button>

<br>

<button id="inicio">← Volver al inicio</button>

        </div>
    `;

    const opciones = document.querySelector("#opciones");
    const resultado = document.querySelector("#resultado");
    const siguiente = document.querySelector("#siguiente-pregunta");

    const opcionesMezcladas = [...pregunta.opciones];

opcionesMezcladas.sort(() => Math.random() - 0.5);

opcionesMezcladas.forEach((opcion) => {

        const boton = document.createElement("button");

        boton.textContent = opcion;
        boton.classList.add("opcion");

        boton.addEventListener("click", () => {

if (opcion === pregunta.correcta) {

    boton.classList.add("correcta");

    resultado.textContent =
        "✓ Correct! This is the correct translation.";

    document.querySelectorAll(".opcion").forEach((b) => {
        b.disabled = true;
    });

    siguiente.style.display = "block";
} else {

                boton.classList.add("incorrecta");

                resultado.textContent =
                    "Try again!";
            }
        });

        opciones.appendChild(boton);
    });
    siguiente.addEventListener("click", () => {

    preguntaActual++;

    if (preguntaActual >= preguntas.length) {
        mostrarFinal();
        return;
    }

    mostrarPracticar();
});

    document.querySelector("#inicio").addEventListener("click", mostrarInicio);
}
function mostrarFinal() {

    app.innerHTML = `
        <div class="final">

            <div class="final-icono">🎉</div>

            <h1>Practice completed!</h1>

            <p class="final-mensaje">
                You finished all 10 questions.
            </p>

            <p class="final-aprendizaje">
                Great job! Keep practicing to improve your English.
            </p>

            <div class="final-botones">

                <button id="practicar-otra-vez">
                    🔄 Practice again
                </button>

                <button id="inicio">
                    ← Back to home
                </button>

            </div>

        </div>
    `;

    document.querySelector("#practicar-otra-vez")
        .addEventListener("click", () => {

            preguntaActual = 0;

            mostrarPracticar();
        });

    document.querySelector("#inicio")
        .addEventListener("click", mostrarInicio);
}

mostrarInicio();
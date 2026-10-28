import { useState } from 'react';
import {
  Brain, Users, MessageCircle, Target, Trophy,
  GraduationCap, ArrowRight, CheckCircle2
} from 'lucide-react';

const modules = [
  'Dos caminos de la psicología',
  'Descubre a tu prospecto',
  'Las 5C en acción',
  'Laboratorio de objeciones',
  'Reto comercial',
  'Evaluación y certificación'
];

const questions = [
  {
    question: 'Un prospecto dice: «Yo quiero estudiar psicología clínica». ¿Cómo respondes?',
    options: [
      'Validas su interés, preguntas qué le atrae de la clínica y explicas las diferencias.',
      'Le aseguras que podrá hacer psicoterapia.',
      'Le hablas inmediatamente del precio.'
    ],
    correct: 0,
    feedback: 'Valida, reencuadra y cierra. No prometas competencias profesionales que no estén verificadas.'
  },
  {
    question: '«No quiero trabajar en Recursos Humanos». ¿Qué haces?',
    options: [
      'Le dices que el programa no es para esa persona.',
      'Preguntas qué tipo de trabajo y entorno profesional le interesan.',
      'Insistes en que Recursos Humanos tiene mucho empleo.'
    ],
    correct: 1,
    feedback: 'Primero comprende las motivaciones del prospecto antes de presentar beneficios.'
  },
  {
    question: '«¿Podré atender pacientes en consulta clínica al graduarme?».',
    options: [
      'Sí, porque el plan incluye Psicología Clínica.',
      'Evitas responder.',
      'Explicas el enfoque del programa y verificas los alcances profesionales oficiales.'
    ],
    correct: 2,
    feedback: 'Una asignatura de Psicología Clínica no demuestra por sí sola una habilitación profesional específica.'
  }
];

export default function App() {
  const [active, setActive] = useState(0);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const score = questions.filter(
    (q, i) => answers[i] === q.correct
  ).length;

  return (
    <div className="app">
      <aside className="sidebar">
        <img src="/assets/logo-utel.png" alt="UTEL Universidad" />
        <img
          src="/assets/logo-mejora-continua.jpeg"
          alt="Mejora Continua LATAM"
        />
        <p className="side-label">RUTA DE APRENDIZAJE</p>

        <button onClick={() => setActive(0)}>Inicio</button>

        {modules.map((m, i) => (
          <button
            key={m}
            className={active === i + 1 ? 'selected' : ''}
            onClick={() => setActive(i + 1)}
          >
            {String(i + 1).padStart(2, '0')} · {m}
          </button>
        ))}
      </aside>

      <main>
        <header>
          <span>UTEL UNIVERSIDAD</span>
          <span>MEJORA CONTINUA · LATAM</span>
        </header>

        {active === 0 && (
          <>
            <section className="hero">
              <span>ENTRENAMIENTO COMERCIAL</span>
              <h1>
                De la objeción
                <br />
                <em>a la oportunidad.</em>
              </h1>
              <p>
                Aprende a comprender a tus prospectos, comunicar el valor
                del programa y gestionar objeciones con criterio comercial.
              </p>
              <button className="primary" onClick={() => setActive(1)}>
                Comenzar experiencia <ArrowRight size={18} />
              </button>
            </section>

            <h2>Tu ruta de aprendizaje</h2>
            <div className="module-grid">
              {modules.map((m, i) => (
                <button
                  className="module-card"
                  key={m}
                  onClick={() => setActive(i + 1)}
                >
                  <span>MÓDULO {String(i + 1).padStart(2, '0')}</span>
                  <h3>{m}</h3>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>
          </>
        )}

        {active === 1 && (
          <>
            <h1>Dos caminos de la psicología</h1>
            <p className="intro">
              Dos enfoques relacionados con el comportamiento humano,
              pero con objetivos y contextos de intervención diferentes.
            </p>
            <div className="module-grid">
              <article className="info-card">
                <Users size={28} />
                <h2>Psicología organizacional</h2>
                <p>Personas, equipos y contextos laborales.</p>
                <ul>
                  <li>Selección y desarrollo del talento.</li>
                  <li>Capacitación y liderazgo.</li>
                  <li>Clima y dinámicas organizacionales.</li>
                </ul>
              </article>
              <article className="info-card">
                <Brain size={28} />
                <h2>Psicología clínica</h2>
                <p>Evaluación y atención de necesidades psicológicas.</p>
                <ul>
                  <li>Evaluación clínica.</li>
                  <li>Intervención psicológica.</li>
                  <li>Promoción de la salud mental.</li>
                </ul>
              </article>
            </div>
            <div className="notice">
              La ficha académica incluye Psicología Clínica como asignatura.
              Esto no demuestra por sí solo una habilitación profesional
              clínica específica.
            </div>
            <button className="primary" onClick={() => setActive(2)}>
              Continuar <ArrowRight size={18} />
            </button>
          </>
        )}

        {active === 2 && (
          <>
            <h1>Descubre qué busca tu prospecto</h1>
            <div className="info-card">
              <MessageCircle size={28} />
              <h2>Pregunta de diagnóstico</h2>
              <p>
                «¿Qué te motivó a estudiar psicología y cómo te imaginas
                aplicándola profesionalmente?»
              </p>
              <p>Explora su motivación, contexto y expectativas.</p>
            </div>
            <button className="primary" onClick={() => setActive(3)}>
              Conocer las 5C <ArrowRight size={18} />
            </button>
          </>
        )}

        {active === 3 && (
          <>
            <h1>Las 5C en acción</h1>
            {[
              ['Conectar', 'Genera confianza.'],
              ['Comprender', 'Escucha la motivación.'],
              ['Consultar', 'Profundiza en las necesidades.'],
              ['Convencer', 'Relaciona beneficios verificados con sus intereses.'],
              ['Convertir', 'Acuerda un siguiente paso pertinente.']
            ].map(([title, text], i) => (
              <div className="step" key={title}>
                <Target size={22} />
                <div>
                  <strong>{i + 1}. {title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
            <button className="primary" onClick={() => setActive(4)}>
              Practicar objeciones <ArrowRight size={18} />
            </button>
          </>
        )}

        {active === 4 && (
          <>
            <h1>Laboratorio de objeciones</h1>
            <div className="info-card">
              <MessageCircle size={28} />
              <h2>«Yo quiero estudiar psicología clínica»</h2>
              <p><strong>Validar:</strong> reconoce su interés sin discutir.</p>
              <p><strong>Reencuadrar:</strong> pregunta qué le atrae de ese enfoque.</p>
              <p><strong>Cerrar:</strong> propone revisar el plan de estudios si el programa responde a sus expectativas.</p>
            </div>
            <button className="primary" onClick={() => setActive(5)}>
              Iniciar reto <Trophy size={18} />
            </button>
          </>
        )}

        {active === 5 && (
          <>
            <h1>Reto comercial</h1>
            <p className="intro">
              Caso {question + 1} de {questions.length} · Aciertos: {score}
            </p>
            {question < questions.length ? (
              <div className="info-card">
                <h2>{questions[question].question}</h2>
                {questions[question].options.map((option, i) => (
                  <button
                    className="answer"
                    key={option}
                    onClick={() =>
                      setAnswers({ ...answers, [question]: i })
                    }
                  >
                    {String.fromCharCode(65 + i)}. {option}
                  </button>
                ))}

                {answers[question] !== undefined && (
                  <div className="notice">
                    <CheckCircle2 size={20} />
                    {questions[question].feedback}
                  </div>
                )}

                <button
                  className="primary"
                  disabled={answers[question] === undefined}
                  onClick={() => setQuestion(question + 1)}
                >
                  {question === questions.length - 1
                    ? 'Ver resultado'
                    : 'Siguiente caso'}
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="info-card">
                <Trophy size={32} />
                <h2>Resultado: {score}/{questions.length}</h2>
                <button
                  className="primary"
                  onClick={() => {
                    setQuestion(0);
                    setAnswers({});
                  }}
                >
                  Repetir reto
                </button>
                <button className="primary" onClick={() => setActive(6)}>
                  Continuar a certificación
                </button>
              </div>
            )}
          </>
        )}

        {active === 6 && (
          <>
            <h1>Evaluación y certificación</h1>
            <p className="intro">
              Registra tus datos para probar el flujo de certificación.
            </p>
            <form
              className="info-card"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  'Datos registrados en esta demostración. La emisión oficial requiere conectar el sistema de certificados.'
                );
              }}
            >
              <label>Nombre completo</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del participante"
              />
              <label>Correo corporativo</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@empresa.com"
              />
              <GraduationCap size={30} />
              <p>
                Esta versión es una demostración: todavía no genera
                certificados oficiales ni almacena datos permanentemente.
              </p>
              <button className="primary">Registrar datos de prueba</button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

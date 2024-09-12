import { useState } from 'preact/hooks';
import './Pregunta.css';

export default function Pregunta({ question, options, correctAnswer }) {
  const [feedback, setFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [color, setColor] = useState('');

  const handleChange = (option) => {
    if (!isAnswered) {
      setColor(option === correctAnswer ? 'Green' : 'Red');
      setFeedback(option === correctAnswer ? '¡Correcto!' : 'Incorrecto, la respuesta correcta es ' + correctAnswer);
      setIsAnswered(true);
    }
  };

  return (
    <div className="question-container">
      <h3>{question}</h3>
      {options.map((option) => (
        <label className="option" key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            onChange={() => handleChange(option)}
            disabled={isAnswered}
          />
          {option}
        </label>
      ))}
      {feedback && <div className={`feedback ${color}`}>{feedback}</div>}
    </div>
  );
};

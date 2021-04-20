import axios from 'axios';
import { useState } from 'react';
import DisplayQuote from './components/DisplayQuote';

export default function App() {
  const init = [
    {
      quote:
        'Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?',
      character: 'Milhouse Van Houten',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
      characterDirection: 'Right',
    },
  ];

  const [quotes, setQuotes] = useState(init);

  const displayQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(({ data }) => {
        setQuotes(data);
      });
  };
  return (
    <div>
      <button onClick={displayQuote}>Cliquez ici</button>
      {quotes.map((quote) => {
        return <DisplayQuote {...quote} />;
      })}
    </div>
  );
}

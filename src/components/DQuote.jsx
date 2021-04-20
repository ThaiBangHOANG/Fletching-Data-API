const DisplayQuote = ({ character, image, quote }) => {
  return (
    <div>
      <p> {character} </p>
      <img src={image} alt='' />
      <p>{quote}</p>
    </div>
  );
};

export default DisplayQuote;

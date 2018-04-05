
const generateQuote = () => {
  const quotes = [
    ['Productivity is being able to do things that you were never able to do before.', 'Franz Kafka'],
    ['Until we can manage time, we can manage nothing else.', 'Peter Drucker'],
    ['Being rich is having money; being wealthy is having time.', 'Margaret Bonnano'],
    ['Life is too complicated not to be orderly.', 'Martha Stewart'],
    ['The winners in life think constantly in terms of I can, I will, and I am. Losers, on the other hand, concentrate their waking thoughts on what they should have or would have done, or what they can’t do.', 'Dennis Waitley'],
    ['Amateurs sit and wait for inspiration, the rest of us just get up and go to work.', 'Stephen King'],
    ['If you spend too much time thinking about a thing, you’ll never get it done.', 'Bruce Lee'],
    ['It’s not knowing what to do, it’s doing what you know.', 'Tony Robbins'],
    ['There is no royal, flower-strewn path to success. And if there is, I have not found it. For if I have accomplished anything in life, it is because I have been willing to work hard.', 'C.J. Walker'],
    ['Once you have mastered time, you will understand how true it is that most people overestimate what they can accomplish in a year – and underestimate what they can achieve in a decade!', 'Tony Robbins'],
    ['Why do anything unless it is going to be great?', 'Peter Block'],
    ['It is not enough to be busy… The question is: what are we busy about?', 'Henry David Thoreau'],
    ['To think is easy. To act is difficult. To act as one thinks is the most difficult.', 'Johann Wolfgang Von Goeth']
  ];
  const [text, author] = quotes[Math.floor(Math.random() * quotes.length)];
  return { text, author };
};

export default generateQuote;

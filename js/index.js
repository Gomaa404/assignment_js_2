var quote = [
  {
    qu: `<p>“Be yourself; everyone else is already taken.”</p>`,
    author: `<p>― Oscar Wilde</p>`,
  },
  {
    qu: `<p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p>`,
    author: `<p>― Bernard M. Baruch</p>`,
  },
  {
    qu: `<p>“In three words I can sum up everything I've learned about life: it goes on.”</p>`,
    author: `<p>― Robert Frost</p>`,
  },
  {
    qu: `<p>“To live is the rarest thing in the world. Most people exist, that is all.”</p>`,
    author: `<p>― Oscar Wilde</p>`,
  },
  {
    qu: `<p>“Without music, life would be a mistake.”</p>`,
    author: `<p>― Friedrich Nietzsche</p>`,
  },
  {
    qu: `<p>“We accept the love we think we deserve.”</p>`,
    author: `<p>― Stephen Chbosky</p>`,
  },
  {
    qu: `<p>“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”</p>`,
    author: `<p>― Marilyn Monroe</p>`,
  },
  {
    qu: `<p>“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”</p>`,
    author: `<p>― Albert Einstein</p>`,
  },
  {
    qu: `<p>“Good friends, good books, and a sleepy conscience: this is the ideal life.”</p>`,
    author: `<p>― Mark Twain</p>`,
  },
  {
    qu: `<p>“Life is what happens to us while we are making other plans.”</p>`,
    author: `<p>― Allen Saunders</p>`,
  },
];

function quoteGen() {
  //   i    =  0     =      0.2     *   2   = 0.4
  //   i    =  1     =      0.3     *   2   = 0.6
  var i = Math.floor(Math.random() * quote.length);
  document.getElementById("demo").innerHTML = `
    <h1>Quote of the Day</h1>
    <p class="mt-5 mb-4">Press the button below to recieve a random quote!</p>
          <button onclick="quoteGen()" class=" mb-5 text-white border border-black border-1 m-auto">
        <i class="fa-solid fa-quote-left"></i> New Quote <i class="fa-solid fa-quote-left fa-flip-both"></i>
      </button>
    ${quote[i].qu}
    ${quote[i].author}
  `;
}

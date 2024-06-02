import React from 'react';

/**
 * Shakespeare's sonnet 18 HTML to be used on the Shakespeare page.
 */

const Sonnet18 = () => {
  const handleReturn = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-green-600 font-digital1">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-red-700 text-3xl md:text-3xl mb-4 font-digital2">Shakespeare's Sonnet #18</h1>
        <p className="text-green-400 text-md mb-6">
          This is one of the most famous of the sonnets. It is referenced in the film Dead Poets Society and gave names to
          the band The Darling Buds and the book and television series The Darling Buds of May. Read it and weep!
        </p>
        <ul className="list-none text-green-600  md:text-xl sm:text-md leading-relaxed space-y-2">
          <li>Shall I compare thee to a summer's day?</li>
          <li>Thou art more lovely and more temperate:</li>
          <li>Rough winds do shake the darling buds of May,</li>
          <li>And summer's lease hath all too short a date:</li>
          <li>Sometime too hot the eye of heaven shines,</li>
          <li>And often is his gold complexion dimm'd,</li>
          <li>And every fair from fair sometime declines,</li>
          <li>By chance, or nature's changing course untrimm'd:</li>
          <li>But thy eternal summer shall not fade,</li>
          <li>Nor lose possession of that fair thou ow'st,</li>
          <li>Nor shall death brag thou wander'st in his shade,</li>
          <li>When in eternal lines to time thou grow'st,</li>
          <li>So long as men can breathe, or eyes can see,</li>
          <li>So long lives this, and this gives life to thee.</li>
        </ul>
        <div className="mt-8">
          <pre className="text-center mb-4 text-green-600 text-sm leading-none">
            {`
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣴⠟⠛⠉⠉⠉⠉⠛⠻⣦⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⣰⣿⣿⣿⣤⣤⣄⠀⠀⣠⣤⣤⣿⣿⣿⣷⡀⠀⠀⠀
⠀⢀⣼⣿⣿⣿⠋⢠⣤⠙⠁⠈⠋⣤⡄⠙⣿⣿⣿⣿⣄⠀⠀
⢠⣿⣿⣿⣿⡿⠀⠈⠉⠀⠀⠀⠀⠉⠁⠀⢿⣿⣿⣿⣿⣷⠀
⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⡀⢀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡆
⠹⣿⣿⣿⣿⣿⠀⠀⠴⠞⠁⠈⠳⠦⠀⠀⣿⣿⣿⣿⣿⡿⠁
⠀⠉⢻⡿⢿⣿⣧⠀⠀⠀⢶⡶⠀⠀⠀⣼⣿⣿⣿⡟⠋⠁⠀
⠀⠀⣼⡇⠀⠀⠙⣷⣄⠀⠈⠁⠀⣠⣾⠋⠀⠀⢸⣧⠀⠀⠀
⠀⠀⣿⡇⠀⠀⠀⠈⠛⠷⣶⣶⠾⠛⠁⠀⠀⠀⢸⣿⠀⠀⠀
⠀⠀⢻⡇⠀⠀⠀⣀⣀⣤⣤⣤⣤⣀⣀⠀⠀⠀⢸⡟⠀⠀⠀
⠀⠀⠘⣿⣴⠾⠛⠋⠉⠉⠉⠉⠉⠉⠛⠛⠷⣦⣿⠃⠀⠀⠀
⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀
            `}
          </pre>
        </div>
        <p className="mt-4 text-green-400">
          See the&nbsp;
          <a href="http://en.wikipedia.org/wiki/Shakespeare%27s_Sonnets" className="text-blue-500">
            Shakespeare's sonnets
          </a>
          &nbsp; Wikipedia article for more information
        </p>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleReturn}
            className="bg-gray-800 hover:bg-gray-700 text-white font-custom py-2 px-4 rounded"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sonnet18;
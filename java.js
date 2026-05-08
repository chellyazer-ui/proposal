document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const message = document.getElementById('message');
    const memeImage = document.getElementById('memeImage');

    let noCount = 0;
    let yesScale = 1;
    let noScale = 1;

    const memes = [
      {
        text: 'Are you sure? 😭',
        img: 'https://i.imgflip.com/1bij.jpg'
      },
      {
        text: 'Really really sure?? 😔',
        img: 'https://i.imgflip.com/26am.jpg'
      },
      {
        text: 'You are breaking my heart 💔',
        img: 'https://i.imgflip.com/4t0m5.jpg'
      },
      {
        text: 'Last chance to change your mind 😭',
        img: 'https://i.imgflip.com/3si4.jpg'
      },
      {
        text: 'Okay now you unlocked HARD MODE 😈',
        img: 'https://i.imgflip.com/9ehk.jpg'
      }
    ];

    const questions = [

        {
          question: "What is my favorite color?",
          correct: "Red",
          wrong1: "Pink",
          wrong2: "Blue"
        },
      
        {
          question: "Who loves you the most?",
          correct: "Azer",
          wrong1: "Tina",
          wrong2: "Holya"
        },
      
        {
          question: "Who is the cutest?",
          correct: "Syrine",
          wrong1: "The neighbor",
          wrong2: "The dog"
        },
      
        {
          question: "Who buys the snacks?",
          correct: "Azer",
          wrong1: "S yrine",
          wrong2: "The government"
        },
      
        {
          question: "Best answer?",
          correct: "YES 💖",
          wrong1: "NO 😭",
          wrong2: "Maybe"
        }
      
      ];

    noBtn.addEventListener('click', () => {

        // First NO starts "are you sure"
        if (noCount === 0) {
      
          yesBtn.style.background = '#ff3b3b';
          yesBtn.style.color = 'white';
      
          noBtn.style.background = '#00ff95';
          noBtn.style.color = 'black';
      
          noCount++;
      
          message.textContent = memes[0].text;
          memeImage.src = memes[0].img;
      
          yesScale -= 0.1;
          noScale += 0.15;
      
          yesBtn.style.transform = `scale(${yesScale})`;
          noBtn.style.transform = `scale(${noScale})`;
      
        } else {
      
          // NO during "are you sure" = happy ending
          document.body.innerHTML = `
            <div style="
              display:flex;
              justify-content:center;
        align-items:center;
        height:100vh;
        flex-direction:column;
        text-align:center;
        background:linear-gradient(135deg,#ff69b4,#ff1493);
        color:white;
      ">
        <h1 style="font-size:4rem;">❤️ YAAAYYYYY ❤️</h1>
        <h2>You finally said YES 😎💍</h2>
        <div style="font-size:4rem;margin-top:20px;">
          🎉💖🎉💖🎉
        </div>
      </div>
    `;}
    });

    yesBtn.addEventListener('click', () => {

        // If she is already in the "are you sure" phase
        if (noCount > 0) {
      
          noCount++;
      
          if (noCount <= 5) {
      
            message.textContent = memes[noCount - 1].text;
            memeImage.src = memes[noCount - 1].img;
      
            // YES gets smaller
            yesScale -= 0.1;
      
            // NO gets bigger
            noScale += 0.15;
      
            yesBtn.style.transform = `scale(${yesScale})`;
            noBtn.style.transform = `scale(${noScale})`;
          }
      
          if (noCount === 5) {
            startQuiz();
          }
      
        } else {
            // First YES = happy ending
            document.body.innerHTML = `
                <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                flex-direction:column;
                text-align:center;
                background:linear-gradient(135deg,#ff69b4,#ff1493);
                color:white;">
                <h1 style="font-size:4rem;">❤️ YAYYYYY ❤️</h1>
                <h2>Now you're stuck with me forever 😎💍</h2>
                <div style="font-size:4rem;margin-top:20px;">
                🎉💖🎉💖🎉
            </div>
        </div>
        `;}
    });

    let currentQuestion = 0;

    function startQuiz() {
      document.getElementById('mainPage').classList.add('hidden');
      document.getElementById('quizPage').classList.remove('hidden');
      loadQuestion();
    }

    function loadQuestion() {

        const q = questions[currentQuestion];
      
        document.getElementById('quizQuestion').textContent = q.question;
      
        const wrongOptions = document.getElementById('wrongOptions');
        wrongOptions.innerHTML = '';
      
        // Answers
        let answers = [
          q.correct,
          q.wrong1,
          q.wrong2
        ];
      
        // Random order
        answers.sort(() => Math.random() - 0.5);
      
        answers.forEach(answer => {
      
          const btn = document.createElement('button');
      
          btn.textContent = answer;
      
          // Same style for all buttons
          btn.style.margin = '10px';
          btn.style.padding = '15px 30px';
          btn.style.border = 'none';
          btn.style.borderRadius = '20px';
          btn.style.background = 'white';
          btn.style.color = 'black';
          btn.style.cursor = 'pointer';
          btn.style.fontSize = '1rem';
          btn.style.fontWeight = 'bold';
      
          // Correct answer
          if (answer === q.correct) {
      
            btn.onclick = () => {
      
              currentQuestion++;
      
              if (currentQuestion < questions.length) {
                loadQuestion();
              } else {
      
                document.getElementById('quizPage').classList.add('hidden');
                document.getElementById('finalPage').classList.remove('hidden');
              }
            };
      
          } else {
      
            btn.onclick = () => {
              alert('WRONG ANSWER 😭');
            };
          }
      
          wrongOptions.appendChild(btn);
        });
      }

  window.celebrate = function celebrate() {
    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;text-align:center;background:black;color:white;">
        <h1 style="font-size:4rem;">💖 SHE SAID YES 💖</h1>
        <p style="font-size:2rem;margin-top:20px;">Best ending unlocked 😎</p>
        <div style="font-size:5rem;margin-top:20px;">💍🎉❤️🎉💍</div>
      </div>
    `;
  }    });
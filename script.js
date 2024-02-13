class Heart {
  constructor(id) {
    const heart = document.getElementById(id);
    const text = heart.querySelector('.heart-text');
    const originalSayings = [
      'Thanh Trà cute',
      'Chúc tình yêu',
      'Valen tine',
      'thật vui vẻ,',
      'hạnh phúc,',
      'mãi xinh đẹp,',
      'mãi iu anh,',
      'nhiều hơn nữa.',
      'Đây là lần',
      'Valen tine',
      'đầu tiên,',
      'anh chỉ',
      'hi vọng là',
      'sẽ cùng em',
      'đón thêm',
      'nhiều lần',
      'Valen tine',
      'hơn nữa.',
      'Chúc ngiu',
      'sau này',
      'càng hạnh phúc',
      'hơn nhé.',
      'Khoa Võ',
      'người yêu của',
      'Thanh Trà',
      'love you,',
      'hope you',
      'love this',
      'moment ♥',
      'moazzzz ♥',
    ];

    // Initialize the current index to 0
    this.currentIndex = 0;

    heart.addEventListener('click', () => {
      this.addText(text, originalSayings);
    });
  }

  getText(sayings) {
    const selectedSaying = sayings[this.currentIndex];

    // Increment the current index
    this.currentIndex = (this.currentIndex + 1) % sayings.length;

    return selectedSaying;
  }

  addText(container, sayings) {
    const str = this.getText(sayings);
    const words = str.split(' ');

    container.innerHTML = '';

    words.forEach(word => {
      const span = document.createElement('span');
      span.innerHTML = word;
      container.appendChild(span);
    });
  }
}

const heartContainer = new Heart('heart-container');

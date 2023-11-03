function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes() {
    const amountInput = document.getElementById('inputAmount');
    const amount = amountInput.value;
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement('div');
      newBox.classList.add('box');
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(newBox);
      size += 10;
    }
    amountInput.value = '';
  }
  
  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }
  
  const createButton = document.querySelector('[data-create]');
  createButton.addEventListener('click', createBoxes);
  
  const destroyButton = document.querySelector('[data-destroy]');
  destroyButton.addEventListener('click', destroyBoxes);
  
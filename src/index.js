const createH1 = () => {
  const h1 = document.createElement('h1');
  h1.setAttribute('id', 'main-heading');
  h1.textContent = 'Hello World!';
  const body = document.querySelector('body'); 
  body.append(h1);
}

const addP = () => {
  const p = document.createElement('p');
  p.setAttribute('id', 'main-text');
  p.classList.add("boring-text");
  p.textContent = `Look, I'm some text!`;
  const body = document.querySelector('body'); 
  body.append(p);
}

const main = () => {
  createH1();
  addP();
}

main(); 








const getMainHeadingText = () => {
  const heading = document.querySelector("h1#main-heading");
  console.log(heading.textContent);
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text");
  const arr1 = [...mainText];
  let str  = "";
  arr1.forEach((elem) =>  str+=`,${elem.textContent}`);
  console.log(str.slice(1, str.length));
};

const setSubtitleText = () => {
  let sub = document.querySelector("#subtitle");
  sub.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const div = document.querySelector('#modify-classes');
  div.classList = "new-class normal-class"
};

const addH2 = () => {
  const h2 = document.createElement('h2');
  h2.setAttribute('id', 'h2-test');
  h2.textContent = 'Another one!';
  const body = document.querySelector('body'); 
  body.append(h2);
};

const removeOldInfo = () => {
  const oldInfo = document.querySelector('#old-info');
  oldInfo.remove();
};

const makeAlphabet = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const times = document.querySelector('#alphabet'); 
    for (let i = 0; i < (times.dataset.numLetters); i++) {
      const alphabetList = document.createElement('li');
      alphabetList.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
      times.append(alphabetList);
    }
};

const makeBio = () => {
  const bioEl = document.querySelector('#my-bio');
  bioEl.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 

const teamData = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker1.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker2.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker3.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker4.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
  {
    id: 5,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker5.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
  {
    id: 6,
    name: 'Lorem Ipsum',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    picture: 'assets/images/speakers/speaker6.png',
    detail: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis?',
  },
];

let index = 0;
const teamMembers = document.getElementById('teams');
const load = document.getElementById('btn-load');
const collapse = document.getElementById('btn-collapse');
collapse.style.display = 'none';

function loadData(index = 0) {
  let value;
  if (index === teamData.length - 2) {
    load.style.display = 'none';
    collapse.style.display = 'block';
    value = teamData.length - 1;
  }
  for (let i = index; i < index + 2; i += 1) {
    if (i >= index && i < index + 2) {
      const memberHTML = `
              <div class="wrapper-member-image">
                <img class="member-img" src=${teamData[i].picture}
                  alt="speaket image">
              </div>
              <div class="member-details">
                <h3 class="member-name">${teamData[i].name}</h3>
                <h4 class="member-title">${teamData[i].title}</h4>
                <p class="member-desc">${teamData[i].detail}</p>
              </div>`;
      const memberContainer = document.createElement('div');
      memberContainer.classList.add('member-1');
      memberContainer.innerHTML = memberHTML;
      teamMembers.appendChild(memberContainer);
    }
    value = i + 1;
  }

  return value;
}

index = loadData();
load.addEventListener('click', () => {
  if (index < teamData.length) {
    index = loadData(index);
  }
});

collapse.addEventListener('click', () => {
  index = 0;
  teamMembers.innerHTML = '';
  index = loadData();
  load.style.display = 'block';
  collapse.style.display = 'none';
});
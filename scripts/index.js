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

const teamMembers = document.getElementById('teams');

teamData.forEach((member, index) => {
  if (index < teamData.length) {
    const memberHTML = `  
            <div class="wrapper-member-image">
              <img class="member-img" src=${member.picture}
                alt="speaket image">
            </div>
            <div class="member-details">
              <h3 class="member-name">${member.name}</h3>
              <h4 class="member-title">${member.title}</h4>
              <p class="member-desc">${member.detail}</p>
            </div>`;
    const memberContainer = document.createElement('div');
    memberContainer.classList.add('member-1');
    memberContainer.innerHTML = memberHTML;
    teamMembers.appendChild(memberContainer);
  }
});
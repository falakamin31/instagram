
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'GhqFFgZoaBTW21oIDANp28LaAYe2',
        username: 'falakamin31',
        fullName: 'Falak Amin',
        emailAddress: 'falakamin2000@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'jessica',
        fullName: 'jessica Jobs',
        emailAddress: 'jessicajobs@gmail.com',
        following: [],
        followers: ['GhqFFgZoaBTW21oIDANp28LaAYe2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'sophia',
        fullName: 'Spohia Sandls',
        emailAddress: 'sophiasandls@gmail.com',
        following: [],
        followers: ['GhqFFgZoaBTW21oIDANp28LaAYe2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'zaira',
        fullName: 'Zaira Ali',
        emailAddress: 'zairaali@gmail.com',
        following: [],
        followers: ['GhqFFgZoaBTW21oIDANp28LaAYe2'],
        dateCreated: Date.now()
      }
    ];
  
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/jessica/${i}.jpg`,
          caption: 'The Eyes,Chico,They Never Lie',
          likes: [],
          comments: [
            {
              displayName: 'jessica',
              comment: 'Nice!'
            },
            {
              displayName: 'sophia',
              comment: 'WOW!'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
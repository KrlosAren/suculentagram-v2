
const header = 'https://images.pexels.com/photos/2568452/pexels-photo-2568452.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
const avatar = 'https://images.pexels.com/photos/1322031/pexels-photo-1322031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const Badge = () => {
  const data = {};
  return (`
    <div class="form__badge">
      <div class="badge">
        <img src=${header} alt="header" />
      <span class="badge--user">
        <img src=${avatar} alt="avatar">
        <span class="badge--username">
          <p>${data.firstname ? data.firstname : 'FIRST_NAME'}</p>
          <p>${data.lastname ? data.lastname : 'LAST_NAME'}</p>
        </span>
        <span class="badge--rrss">@${data.twitter ? data.twitter : 'twitter'}</span>
        </span>
        </div>
    </div>
    `);
};

export default Badge;

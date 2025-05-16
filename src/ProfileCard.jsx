
function ProfileCard({ name, title, img, bgColor='bg-green' }) {

  const cardClass = `card ${bgColor}`;

  return (
    <div className={cardClass}>
      <img src={img} alt={`${name}'s photo is not found`}/>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default ProfileCard;

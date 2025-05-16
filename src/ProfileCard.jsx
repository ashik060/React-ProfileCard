
function ProfileCard({ name, title, img, bgColor='bg-green', onRemove }) {

  const cardClass = `card ${bgColor}`;

  return (
    <div className={cardClass}>
      <img src={img} alt={`${name}'s photo is not found`}/>
      <h3>{name}</h3>
      <p>{title}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProfileCard;

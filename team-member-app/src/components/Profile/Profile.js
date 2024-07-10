export default function 
Profile({name, role, photo}) {
  return (
    <div className="profile">
     <img src={photo} alt={photo} />
            <h2>{name}</h2>
            <h3>{role}</h3>

    </div>


  )
}
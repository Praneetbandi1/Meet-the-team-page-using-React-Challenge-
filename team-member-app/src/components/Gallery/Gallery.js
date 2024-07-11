
//U4638100
import Profile from "../Profile/Profile";

export default function Gallery({galleryList}) {
  return (
    <div>

      <div className="team-list">
        {galleryList.map((gallery) => (
          <div className="team-member" key={gallery.name}>
            <Profile name={gallery.name} 
            
            role={gallery.role} photo={gallery.photo} />
            
          </div>
        ))}
      </div>
    </div>
  );
}

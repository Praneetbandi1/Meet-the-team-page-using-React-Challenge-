import Profile from "../Profile/Profile";

export default function Gallery({galleryList}) {
  return (
    <div>
      <h1>Meet the Team</h1>
      <div className="team-list">
        {galleryList.map((gallery) => (
          <div className="team-member" key={gallery.name}>
            <Profile name={gallery.name} role={gallery.role} photo={gallery.photo} />
            
          </div>
        ))}
      </div>
    </div>
  );
}

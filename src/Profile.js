export function Profile1() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

/*
  border-radius: 60px
  but in jsx:
  borderRadius
*/
// State management
export default function Profile({ imageId, name }) {
  let styles = { borderRadius: "60px" };
  const imageUrl = `https://i.imgur.com/${imageId}s.jpg`;
  return (
    <div>
      <span>{name}</span>
      <input type="text" />
      <img style={styles} src={imageUrl} alt={name} />;
    </div>
  );
}

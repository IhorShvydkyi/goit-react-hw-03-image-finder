export default function ImageGallery({ data }) {
  return (
    <ul>
      {data.map((image) => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
}

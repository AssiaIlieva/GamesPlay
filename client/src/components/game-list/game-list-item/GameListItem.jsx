export default function GameListItem({ _id, title, category, imageUrl }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <a href="/game/details/" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
}

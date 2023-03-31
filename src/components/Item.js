import "./item.css";
export const Item = (prop) => {
  return (
    <li key={prop.id}>
      <div>
        <img src={prop.thumbnail} alt="thumbnail" />
      </div>
      <div className="item-detail">
        <div>Title:{prop.title}</div>
        <div>Author:{prop.author.name}</div>
        <div>Category:{prop.categories[0].name}</div>
      </div>
    </li>
  );
};

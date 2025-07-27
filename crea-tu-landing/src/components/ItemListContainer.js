function ItemListContainer({ saludo }) {
  return (
    <div className="container my-4">
      <h2 className="text-center">{saludo}</h2>
      <p className="text-center">Aquí irá el catálogo de productos próximamente.</p>
    </div>
  );
}

export default ItemListContainer;
interface TreningResultApps {
  resul: [];
  delClick: (e: React.MouseEvent) => void;
}

export default function TreningResult({ resul, delClick }: TreningResultApps) {
  return (
    <div className="box_value_action">
      {resul.map((item: any, idx: number) => (
        <div className="itemTreid" id={item.id} key={idx}>
          <p className="item_data">{item.date}</p>
          <p className="item_distance">{item.dist}</p>
          <p className="item_del" onClick={delClick}>
            DELETE
          </p>
        </div>
      ))}
    </div>
  );
}

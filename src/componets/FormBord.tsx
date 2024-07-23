interface dataDist {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputDist: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormBord({ submit, inputData, inputDist }: dataDist) {
  const nowData = new Date().toLocaleDateString("fr-ca");
  return (
    <>
      <form autoComplete="off" className="form" onSubmit={submit}>
        <div className="box_data">
          <label htmlFor="name" className="data_name">
            Дата (ДД.ММ.ГГ)
          </label>
          <input
            type="date"
            name="name"
            className="data_input"
            max={nowData}
            onChange={inputData}
          />
        </div>
        <div className="box_data">
          <label htmlFor="distance" className="data_name">
            Пройдено км
          </label>
          <input
            type="number"
            name="distance"
            className="data_input"
            onChange={inputDist}
          />
        </div>

        <button className="button" type="submit">
          ok
        </button>
      </form>
    </>
  );
}

interface dataDist {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputDist: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormBord({ submit, inputData, inputDist }: dataDist) {
  return (
    <>
      <form autoComplete="off" className="form" onSubmit={submit}>
        <div className="box_data">
          <label htmlFor="name" className="data_name">
            Дата (ДД.ММ.ГГ)
          </label>
          <input
            type="text"
            name="name"
            className="data_input"
            placeholder="XX.XX.XXXX"
            onChange={inputData}
          />
        </div>
        <div className="box_data">
          <label htmlFor="distance" className="data_name">
            Пройдено км
          </label>
          <input
            type="text"
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

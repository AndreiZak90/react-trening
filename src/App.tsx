import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import FormBord from "./componets/FormBord";
import TreningResult from "./componets/TreningResult";

function App() {
  const [dataVal, setDataVal] = useState(""); //ввод даты
  const [distance, setDistance] = useState(""); // ввод дистанции
  const [result, setResult]: any = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const add = { id: nanoid(), date: dataVal, dist: Number(distance) };

    const findEl = result.find((el: { date: string }) => el.date === dataVal);

    if (findEl) {
      findEl.dist = findEl.dist + Number(distance);
      const newArr = result.filter(
        (el: { date: string }) => el.date !== dataVal
      );
      setResult([...newArr, findEl]);
    } else {
      setResult([...result, add]);
    }
  };
  const inputData = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDataVal(target.value);
  };
  const inputDist = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(target.value);
  };

  const delClick = ({ target }: any) => {
    const parrentId = target.parentElement.id;
    const record = result.find((el: any) => el.id === parrentId);

    if (record) {
      const newArr = result.filter((el: any) => el.id !== parrentId);
      setResult([...newArr]);
    }
  };

  result.sort((a: any, b: any) =>
    a.date < b.date ? 1 : b.date < a.date ? -1 : 0
  );

  return (
    <>
      <div className="box_main">
        <p className="error_name ">введены некоректные данные</p>
        <FormBord
          submit={handleSubmit}
          inputData={inputData}
          inputDist={inputDist}
        />
        <div className="box_table">
          <div className="name_action">
            <p className="name_action_text"> Дата (ДД.ММ.ГГ)</p>
            <p className="name_action_text">Пройдено км</p>
            <p className="name_action_text">Действия</p>
          </div>
          <TreningResult resul={result} delClick={delClick} />
        </div>
      </div>
    </>
  );
}

export default App;

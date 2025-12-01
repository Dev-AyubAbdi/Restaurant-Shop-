import { useEffect, useState } from "react";

export const Peymnet = () => {
  const initialPeyment = {
    evc: false,
    zaad: false,
    sahal: false,
  };
  const [peyment, setPeyment] = useState(initialPeyment);
  const [update, setUpdate] = useState()

  useEffect(()=> {},[update])
  return (
    <div>
      <h2>Pay with</h2>
      <div className="peyment-cards">
        <div
          className={`peyment-card ${peyment.zaad && "selected" }`}
          onClick={() => setPeyment({ ...initialPeyment, zaad: true })}
        >
          <h3>Zaad Service</h3>
        </div>
        <div
          className={`peyment-card ${peyment.evc && "selected"}`}
          onClick={() => setPeyment({ ...initialPeyment, evc: true })}
        >
          <h3>Evc Plus</h3>
        </div>
        <div
          className={`peyment-card ${peyment.sahal && "selected"}`}
          onClick={() => setPeyment({ ...initialPeyment, sahal: true })}
        >
          <h3>Sahal</h3>
        </div>
      </div>
      <form>
        <input type="text" className="form-control" placeholder="2526...." />
        <button className="btn-proceed">Proceed!</button>
      </form>
    </div>
  );
};

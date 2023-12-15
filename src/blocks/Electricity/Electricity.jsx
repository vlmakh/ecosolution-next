import { Section } from "../Base/Base";
import { TitleElectr, QtyWrap, QtyBox, Qty, KWH } from "./Electricity.styled";
import { useState, useEffect } from "react";

const value = localStorage.getItem("ecosolution");
const savedData = JSON.parse(value);

export const Electricity = () => {
  const [state, setState] = useState(savedData ?? 1134147814);

  const unit = 1;
  const thousand = unit * 1000;
  const million = thousand * 1000;
  const billion = million * 1000;

  const billions = Math.floor(state / billion);
  const millions = Math.floor((state % billion) / million).toString().padStart(3, '0');
  const thousands = Math.floor(((state % billion) % million) / thousand).toString().padStart(3, '0');
  const units = Math.floor((((state % billion) % million) % thousand) / unit).toString().padStart(3, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setState(state + 1);
    }, 1000);

    localStorage.setItem("ecosolution", JSON.stringify(state));

    return () => clearInterval(timer);
  }, [state]);

  return (
    <Section>
      <TitleElectr>
        Electricity we produced <br /> for all time
      </TitleElectr>

      <QtyWrap>
        <QtyBox>
          <Qty>
            {billions}.{millions}.{thousands}.{units}
          </Qty>{" "}
          <KWH>kWh</KWH>
        </QtyBox>
      </QtyWrap>
    </Section>
  );
};

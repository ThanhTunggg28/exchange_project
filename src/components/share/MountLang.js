import React, { useState, useEffect } from "react";
import styled from "styled-components";
import languageApi from "../apis/languageApi";
import currencyApi from "../apis/currency";
import Language from "./Language";
import Currency from "./Currency";

function MountLang({ trigger }) {
  const [A, setA] = useState(true);

  //State
  const [language, setLanguage] = useState([]);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchLanguage = async () => {
      const languageList = await languageApi.getAll();
      setLanguage(languageList);
    };
    fetchLanguage();
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
      const currencyList = await currencyApi.getAll();
      setCurrency(currencyList);
    };
    fetchCurrency();
  }, []);

  return trigger ? (
    <MountLangStyled>
      <div className="title">
        <div onClick={() => setA(true)}>Language and Region</div>
        <div onClick={() => setA(false)}>Currency</div>
      </div>
      <Language trigger={A} lang={language} />
      <Currency trigger={A} curr={currency} />
    </MountLangStyled>
  ) : (
    ""
  );
}

const MountLangStyled = styled.div`
  position: absolute;
  width: 800px;
  height: 520px;
  background-color: #eee;
  left: 600px;
  top: 60px;
  z-index: 1;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  .title {
    padding: 10px;
    display: flex;
    gap: 20px;
  }
`;

export default MountLang;

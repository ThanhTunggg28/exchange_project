import React, { useState, useEffect } from "react";
import languageApi from "../../apis/languageApi";
import currencyApi from "../../apis/currencyApi";
import Language from "./Language";
import Currency from "./Currency";

import "./MountLang.scss"

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
    <div className="mount_lang_curr">
      <div className="title">
        <div onClick={() => setA(true)}>Language and Region</div>
        <div onClick={() => setA(false)}>Currency</div>
      </div>
      <Language trigger={A} lang={language} />
      <Currency trigger={A} curr={currency} />
    </div>
  ) : (
    ""
  );
}


export default MountLang;

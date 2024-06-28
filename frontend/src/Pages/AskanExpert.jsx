import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AskExpCard from '../Cards/AskExpCard';
import img1 from "../images/physics.jpeg";
import img3 from "../images/biology.jpeg";
import img4 from "../images/chemistry.jpeg";
import img5 from "../images/english.jpeg";

const AskanExpert = () => {

  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/AskanQues"); // Navigate to "/AskanQues" when clicked
  };

  const searchclickHandler = (e) => {

    e.preventDefault();
    navigate("/SearchQuesCard");
  }
  return (
    <div>
      {/* askandexpert  */}
      <div className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10  bg-gray-200">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white mt-5">Ask Learn Excel. Expert answers you can trust</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Seek guidance from our trusted experts</p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={clickHandler}>
            <div className="text-left rtl:text-right">
              <div className="font-sans text-sm font-semibold">Ask a Question</div>
            </div>
          </a>
          <a href="#" onClick={searchclickHandler} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left rtl:text-right" >
              <div className=" font-sans text-sm font-semibold h-5">Search a Question</div>
            </div>
          </a>
        </div>
      </div>
      <AskExpCard 
        img={img1}
        title={"What is the Theory of Relativity proposed by Albert Einstein?"}
        desc="The Theory of Relativity consists of two main theories: special relativity and general relativity. Special relativity explains the relationship between space and time for observers in uniform motion, introducing concepts like time dilation. General relativity extends this to include gravitational effects, describing gravity as the curvature of spacetime caused by mass and energy."
        subject="Physics"
        date="6 May, 2023"
      />
      <AskExpCard 
        img={img5}
        title="What are the themes and symbolism commonly found in literature?"
        desc="Themes and symbolism in literature convey deeper meanings beyond the literal text. For instance, symbolism in 'The Great Gatsby' by F. Scott Fitzgerald represents the American Dream and the corruption of wealth, while themes of love, identity, and societal expectations are explored in Shakespearean sonnets."
        subject="English"
        date="2 April, 2023"
      />
      <AskExpCard 
        img={img4}
        title="Describe the properties and uses of chemical bonds."
        desc="Chemical bonds include covalent and ionic bonds. Covalent bonds involve electron sharing, found in molecules like water (H2O). Ionic bonds result from electron transfer, seen in compounds like sodium chloride (NaCl). These bonds play vital roles in determining the properties and reactivities of substances."
        subject="Chemistry"
        date="26 November, 2023"
      />
      <AskExpCard 
        img={img3}
        title="What is natural selection and its evidence for evolution?"
        desc="Natural selection is the process by which organisms with advantageous traits are more likely to survive and reproduce, leading to evolutionary changes in populations over time. Evidence includes fossil records, comparative anatomy, embryology, and molecular biology, which provide insights into the evolutionary relationships between species."
        subject="Biology"
        date="25 November, 2023"
      />
    </div>
  );
};
export default AskanExpert;

import React from 'react';

function CardWithHeaderAndFooterExample(props) {
  return (
    <div>
      <div className="bg-gray-100 px-2 py-10">
        <article className="mx-auto flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
          <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
            <img className="rounded-2xl" src={props.img} alt="" />
          </div>
          <div className="py-4 sm:py-8">
            <a href="#" className="mb-6 block text-2xl font-medium text-gray-700">{props.title}</a>
            <p className="mb-6 text-gray-500">{props.desc}</p>
            <div className="flex items-center">
              <p className="ml-4 w-56">
                <strong className="block font-medium text-gray-700">{props.subject}</strong>
                <span className="text-sm text-gray-400">{props.date}</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CardWithHeaderAndFooterExample;
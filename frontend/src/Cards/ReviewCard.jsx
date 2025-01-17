import React from 'react';

const reviews = [
  {
    id: 1,
    review: "TutorFinder has been a game-changer for my son. The ability to find qualified tutors nearby has improved his grades significantly. The platform is easy to use, and the tutors are professional and knowledgeable",
    reviewer : "Cristina",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    review: "Thanks to TutorFinder, we found a fantastic English tutor for our son just a few blocks away. The convenience of having a local tutor who can provide in-person sessions is invaluable.",
    reviewer: "Mark Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    review: "TutorFinder helped me find a nearby tutor who really understands my learning style. The one-on-one sessions have been incredibly helpful",
    reviewer: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const ReviewCard = ({ review, reviewer, image }) => (
  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
      <path
        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
      />
    </svg>
    <blockquote className="relative">
      <p className="text-lg tracking-tight text-slate-900">{review}</p>
    </blockquote>
    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
      <div>
        <div className="font-display text-base text-slate-900">{reviewer}</div>
      </div>
      <div className="overflow-hidden rounded-full bg-slate-50">
        <img alt="" className="h-14 w-14 object-cover" style={{ color: 'transparent' }} src={image} />
      </div>
    </figcaption>
  </figure>
);

const Reviews = () => {
  return (
    <section id="reviews" aria-label="Recent reviews from our customers" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Recent Reviews</h2>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review.review} reviewer={review.reviewer} image={review.image} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;

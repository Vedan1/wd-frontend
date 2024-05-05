// import React, { useState, useEffect } from 'react';
// import Card from ''; // Assume you have a Card component

// const InfiniteCards = () => {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1); // Assuming you start with page 1

//   // Function to fetch more cards
//   const fetchMoreCards = async () => {
//     setLoading(true);
//     // Make an API call to fetch more data, for example:
//     try {
//       const response = await fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`);
//       const data = await response.json();
//       setCards(prevCards => [...prevCards, ...data]); // Append new cards to the existing ones
//       setPage(page + 1); // Increment page number for the next fetch
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Use useEffect to fetch initial set of cards
//   useEffect(() => {
//     fetchMoreCards();
//   }, []);

//   // Use another useEffect to fetch more cards when user scrolls to the bottom
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         fetchMoreCards();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [page]); // Only re-run this effect if page changes

//   return (
//     <div>
//       <div className="cards-container">
//         {cards.map(card => (
//           <Card key={card.id} data={card} />
//         ))}
//       </div>
//       {loading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default InfiniteCards;

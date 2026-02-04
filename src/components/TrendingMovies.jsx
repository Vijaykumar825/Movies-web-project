import React from 'react'

const TrendingMovies = ({ movies }) => {
  return (
    <section className="trending">
      <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>

      <ul>
        {movies.map((movie, index) => (
          <li key={movie.$id}>
            <p className="fancy-text mt-[22px] text-white">
              {index + 1}
            </p>
            <img 
              src={movie.poster_url || "https://via.placeholder.com/100x150?text=No+Image"} 
              alt={movie.title} 
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TrendingMovies

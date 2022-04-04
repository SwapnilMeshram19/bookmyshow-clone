import './App.css';

function App() {
  return (
    <div className="App">
      <div class="movie-details">
        <div class="movie-details-container">
          <div class="text-details">
            <div class="movie-info">
              <div class="movie-name">
                <h1><a>RRR</a></h1>
                <div class="ua-icon">
                    <img src={require('./image/ua_icon.png')}></img>
                    <span class="heart-rating">
                      <span class="heart-icon">
                        <img src={require('./image/heart.png')}></img>
                      </span>
                      <span class="percentage">90 %</span>
                      <br/>
                      <span class="votes">622134 VOTES</span>
                    </span>
                    <span class="tags">
                    <span class="genre-tag">Action</span>
                    <span class="genre-tag">Drama</span>
                    <span class="genre-tag">Historical</span>
                    <span class="genre-tag">Period</span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

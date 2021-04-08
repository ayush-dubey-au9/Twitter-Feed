import React,{ useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:3000/tweets";
const Twitt = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => setData(res));
  }, []);
  const renderData = (Data) => {
    if (Data) {
      console.log(Data, "data");
      return Data.map((val, idx) => {
        return (
          <div key={idx}>
            <div className="card mt-5">
              <div className="card-header">
                <h4>{val.name}</h4>
                <p className="text-muted">{val.user}</p>
              </div>
              <div className="card-body text-center">
                <p>{val.tweet}</p>
              </div>
              <div className="card-footer">
                {val.isliked ? (
                  <button>
                    <i class="fas fa-thumbs-up"></i>
                  </button>
                ) : (
                  <button className="btn btn-light">
                    <i class="far fa-thumbs-up"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="container" style={{ width: "28rem" }}>
      {renderData(data.data)}
      <button
        className="btn btn-dark"
        style={{ bottom: 20, right: "20vw", position: "fixed" }}
      >
        <i class="fab fa-twitter"></i>
      </button>
    </div>
  );
};
export default Twitt;

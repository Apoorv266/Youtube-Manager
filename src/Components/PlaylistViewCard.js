import React from "react";
import { Link} from "react-router-dom";
import "../Style/PlaylistViewCard.css";


const PlaylistViewCard = ({ playlistName, playlistVideoFunc }) => {

  return (
    <>
      <div className="container">

        <Link to={"/playlist/1"}>
          <div className="layout">
            {playlistName.map((item) => {
              return (
                <>
                  <div key={item.id} className="col col-main" onClick={() => playlistVideoFunc(item.val)}>
                    <h1>{item.id}.</h1>
                    <h1>{item.val}</h1>
                    <div>

                    <p>{item.no === 1 ? `${item.no} Video` : `${item.no} Videos`}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Link>
      </div>
    </>
  );
};

export default PlaylistViewCard;

import React from "react";
import PropTypes from "prop-types"
import Youtube from "../style/Youtube.css";

const YoutubeEmbed = ({ embedId }) => (
   <div>
   <div className="video-responsive">
    <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="endindg"
    />
    </div>
       </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
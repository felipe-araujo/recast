import React, { Component } from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import { connect } from 'react-redux';


class Player extends Component {
  render(){
    const { playlist } = this.props;
    return (
      <div>
        <AudioPlayer playlist={playlist} />
      </div>
    );
  }
}

const mapStateToProps = ({ playlist }) => ({ playlist });

export default connect(mapStateToProps)(Player);

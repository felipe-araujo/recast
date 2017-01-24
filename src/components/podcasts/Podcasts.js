import React, { Component } from 'react';
import Podcast from './Podcast'
import { connect } from 'react-redux';


class Podcasts extends Component{

  render(){
    const { podcasts: {podcasts} } = this.props;
    const allPodcasts = podcasts.map(
      podcast => (<Podcast key={podcast.title} podcast={podcast}></Podcast>)
    );

    return (
      <div>
        {allPodcasts}
      </div>
    );
  }
}

const mapStateToProps = ({ podcasts }) => ({ podcasts });

export default connect(mapStateToProps)(Podcasts);

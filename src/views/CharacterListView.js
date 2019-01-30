import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import {fetchData} from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    let characters = [];
    if (this.props.fetching) {
      characters = <p>Spinner</p>
    }
    if (this.props.characters.length > 0) {
      characters = <CharacterList characters={this.props.characters} />
    }
    return (
      <div className="CharactersList_wrapper">
        {characters}
      </div>
    );
  }
}


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProp = state => {
  return {
    characters: state.characters,
    fetching: state.fetching
  }
}

export default connect(
  mapStateToProp/* mapStateToProps replaces null here */,
  {
    fetchData
  }
)(CharacterListView);

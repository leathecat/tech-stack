import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // *  import many things as the same time

class ListItem extends Component {

  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  //helper function

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item; // destructure

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}> {title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id; //should refactor here using ownProps

  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
//dont want to mapStateToProps so using null

import React, { Component } from 'react';
import  PlaceItem from './PlaceItem';

class PlaceList extends Component {
    render() {
      return (
        <div>
          <h2>Place list</h2>
          <div className="btn-group mb-3" role="group" aria-label="Basic example">
          <button onClick={() => this.props.onFilterPlace()} type="button" className="btn btn-info">
            All Places
          </button>
          <button
            onClick={() => this.props.onFilterPlace('town')}
            type="button"
            className="btn btn-light"
          >
            Towns only
          </button>
          <button
            onClick={() => this.props.onFilterPlace('country')}
            type="button"
            className="btn btn-secondary"
          >
            Countries only
          </button>
        </div>
          <div className="places-list d-flex flex-wrap">
            {this.props.places.map((place) => (
              <PlaceItem onUpdate={this.props.onUpdate} onDelete={this.props.onDelete} place={place} key={place._id} />
            ))}
          </div>
        </div>
      );
    }
  }
  export default PlaceList;
import React, { Component } from 'react';
import MyForm from './MyForm';

class PlaceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOn: false,
    };
  }

  handleEdit = (updatedPlaceData) => {
    if (this.state.isEditOn) this.props.onUpdate(this.props.place._id, updatedPlaceData);

    this.setState({ isEditOn: !this.state.isEditOn });
  };

  render() {
    const { place: p } = this.props;
    return (
      <div className={'card m-2 ' + (p.placeType === 'country' ? 'text-white bg-secondary ' : '')}>
        {this.state.isEditOn ? (
          <MyForm place={p} onEdit={this.handleEdit} />
        ) : (
          <React.Fragment>
            <div className="card-header">Place type: {p.placeType} </div>
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">Continent: {p.continent}</p>
              <p className="card-text">Population: {p.population}</p>
            </div>
            <div className="card-footer">
              <button onClick={this.handleEdit} className="btn btn-success">
                Edit
              </button>
              <button onClick={() => this.props.onDelete(p._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PlaceItem;
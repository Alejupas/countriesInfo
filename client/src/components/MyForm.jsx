import React, { Component } from 'react';

class MyForm extends Component {
    state = { 
        name: '',
        continent: '',
        population: '',
        placeType: 'town',
     };

     clearInputs = () => {
      this.setState({
        name: '',
        continent: '',
        population: '',
        placeType: '',
      });
    };

    componentDidMount() {
     //when component is in edit place
      this.props.place && this.propsToState();
    }
  
    propsToState() {
      const { name, continent, population, placeType } = this.props.place;
      this.setState({
        name,
        continent,
        population,
        placeType,
      });
    }
  

     handleSubmitLocal = async (e) => {
      e.preventDefault();
      console.log('handleSubmitLocal');
      const { name, continent, population, placeType } = this.state;
      const dataToCreateNewPlace = {
        name,
        continent,
        population,
        placeType,
      };

           //if we are inside of Place item, then execute PlaceItem method
    if (this.props.place) {
      console.log('Editing one we create');
      this.props.onEdit(dataToCreateNewPlace);
      return;
    }

      // creating new Place
      console.log('Creating');

        const createSuccess = await this.props.onCreateNewPlace(dataToCreateNewPlace);
         if (createSuccess) this.clearInputs();
     };

     handleInput = (e) => {
         this.setState({[e.target.name]: e.target.value});
     }

     render() {
      const { state: s } = this;
      return (
        <div className={this.props.place ? 'card-body' : 'w-50'}>
        {this.props.place ? null : <h2>Create new place</h2>}
          <form onSubmit={this.handleSubmitLocal} autoComplete="off">
            <div className="form-group">
              <input
                value={s.name}
                onChange={this.handleInput}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name of Place"
              />
            </div>
            <div className="form-group">
              <input
                value={s.continent}
                onChange={this.handleInput}
                type="text"
                className="form-control"
                name="continent"
                placeholder="Continent"
              />
            </div>
            <div className="form-group">
              <input
                value={s.population}
                onChange={this.handleInput}
                type="number"
                className="form-control"
                name="population"
                placeholder="Population"
              />
            </div>
            <select
              value={s.placeType}
              onChange={this.handleInput}
              name="placeType"
              className="custom-select"
            >
              <option value="town">Town</option>
              <option value="country">Country</option>
            </select>
            <button className="btn btn-primary my-4">{this.props.place ? 'Save' : 'Create'}</button>
          </form>
        </div>
      );
    }
  }
  export default MyForm;
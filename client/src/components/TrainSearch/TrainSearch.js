import React, { Component } from 'react'

// import components
import Dropdown from './Dropdown/Dropdown'
import Button from './Button/Button'
import TrainDetails from './TrainDetails/TrainDetails'
import MapContainer from './Map/Map'
import SaveSearch from './SaveSearch/SaveSearch'

class TrainSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            select: this.props.data[0].trainNumber,
            data: this.props.data,
            buttonVal: undefined,
            showMap: false
        }
    }

    // select change handler
    handleSelectChange = (e) => {
        this.setState({ select: e.target.value })
    }

    // input search change handler
    handleSearchClick = () => {
        this.setState({ buttonVal: this.state.select });
    }

    // display map
    handleShowMapClick = () => {
        this.setState({ showMap: true })
    }

    //  stop displaying map
    handleMinimizeMapClick = () => {
        this.setState({ showMap: false })
    }

    render() {
        if (this.state.showMap) {
            return (
                <div>
                    <Button 
                        onClick={this.handleMinimizeMapClick}
                        buttonText="Close map"                 
                    />     
                    <MapContainer 
                        trainNumber={this.state.select}
                        locationData={this.state.locationData}
                    />
                </div>
            )
        }

        return (
            <div>
                <h2 className='titleSelection'>Select a Train</h2>
                <Dropdown 
                    data={this.state.data} 
                    value={this.state.select} 
                    onChange={this.handleSelectChange} 
                />
                <Button 
                    onClick={this.handleSearchClick} 
                    buttonText="Display train details"
                />
                <Button
                    onClick={this.handleShowMapClick}
                    buttonText="Display train on map"
                />
                <h2 className='titleDetails'>Train Details</h2><br/>
                <TrainDetails 
                    trainNum={this.state.buttonVal} 
                />
                <h2>Save results in database (requires login)</h2>
                <SaveSearch />
            </div>
        )
    }
}

export default TrainSearch
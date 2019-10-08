import * as React from 'react'
import { Link } from '@reach/router'

function Listing({ listing }) {
    if (!listing) {
        return null
    }

    const { id, image, model, airflow, maxPower, soundAtMaxSpeed, sweepDiameter } = listing
    const columnClasses = classnames('column', 'col-4', 'col-xs-12')
    const cardClasses = classnames('card')

    return (
        <div className={columnClasses} style={{ margin: '1rem 0' }}>
            <div className={cardClasses}>
                <div className="card-image">
                    <img className="img-responsive" src={`/server/${image}`} />
                </div>
                <div className="card-header">
                    <div className="card-title h5">{model}</div>
                </div>
                <div className="card-body">
                    <div className="card-title h6"> {airflow}</div>
                    <div className="card-title h6"> {maxPower}</div>
                    <div className="card-title h6"> {soundAtMaxSpeed}</div>
                    <div className="card-title h6"> {sweepDiameter}</div>
                </div>
                <div className="card-footer">
                    <Link className="btn btn-primary" to={`/details/${id}`}>
                        Go to Product Page
          </Link>
                </div>
            </div>
        </div>
    )
}

export default Listing
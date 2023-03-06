const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <a href="" className="btn btn-warning">Edit
                </a>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

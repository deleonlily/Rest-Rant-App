const React = require('react')
const Def = require('../default')

function show (place, id) {
    return (
        <Def>
          <main>
            <h1>{place.name}</h1>
            <div>
                <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                  Edit
                </a>
                <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

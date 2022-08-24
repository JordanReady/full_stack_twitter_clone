import React from 'react'

function ProfileCard() {
  return (
    <React.Fragment>
    <div className="profileCard border border-primary rounded shadow mb-3">
        <div className="profileCard-content">
            <div className="user-field">
                <a className="username text-decoration-none ps-2 text-muted fw-bold" href="#">User</a>
                <br/>
                <a className="screenName text-decoration-none ps-2 text-muted" href="#">@User</a>
            </div>
            <div className="user-stats row m-0">
                <div className="col-3 d-flex justify-content-around ms-1">
                <a href="" className='text-decoration-none text-muted'>
                    <span>Tweets<br/></span>
                    <span className="user-stats-tweets">10</span>
                </a>
                </div>
                <div className="col-4 d-flex justify-content-around">
                <a href="" className='text-decoration-none text-muted'>
                    <span>Following<br/></span>
                    <span className="user-stats-following">0</span>
                </a>
                </div>
                <div className="col-4 d-flex justify-content-around">
                <a href="" className='text-decoration-none text-muted ps-1'>
                    <span>Followers<br/></span>
                    <span className="user-stats-followers">0</span>
                </a>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default ProfileCard
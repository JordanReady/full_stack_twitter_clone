import React from 'react'

function SignInBox() {
  return (
    <React.Fragment>
        <div className='card p-2 shadow mt-5 border border-primary'>
            <div className='sign-in-title card-title'><h4>Sign up Here</h4></div>
            <form>
            <div className="form-group">
                <input type="text" className="form-control username mb-2 border border-primary" placeholder="Username"/>
            </div>
            <div className="form-group col-xs-8">
                <input type="email" className="form-control password my-2 border border-primary" placeholder="Email"/>
            </div>
            <div className="form-group col-xs-8">
                <input type="password" className="form-control password my-2 border border-primary" placeholder="Password"/>
            </div>
            <button id="sign-in-btn" className="btn btn-default btn-primary col-xs-3">Sign up</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default SignInBox
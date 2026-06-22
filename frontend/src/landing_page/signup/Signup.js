import React from "react";

function SignupPage() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5">Signup Page</h1>
        <p>Signup to start trading.</p>
        {/* You can add your form here later */}
        <div className="mt-4">
           <button className="btn btn-primary">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
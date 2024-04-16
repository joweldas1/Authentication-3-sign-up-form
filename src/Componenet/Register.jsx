import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Register = () => {
const {createUser}=useContext(AuthContext)

    const handOnSignIn=(e)=>{

        e.preventDefault()
        const email=e.target.email.value;
        const name=e.target.name.value
        const password=e.target.password.value;
        console.log(email,password);
        e.target.reset()


        createUser(email,password)
        .then((result) => {
          console.log(result.user);
        }).catch((err) => {
          
        });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
   
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handOnSignIn} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
      <Link to="/login" className="text-center">Already have an account? <br /> please <span className="text-blue-600 font-semibold">Sign in</span> </Link>
    </div>
  </div>
</div>
    );
};

export default Register;
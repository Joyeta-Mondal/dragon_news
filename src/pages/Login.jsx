import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        console.log(result.users);
        setUser(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-xl">
        <h2 className="text-2xl pt-10 font-semibold text-center">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none hover:bg-slate-300 hover:text-gray-800">
              Login
            </button>
          </div>
        </form>
        <p className="pb-8 font-semibold text-center">
          Don't have an account? Please{" "}
          <Link
            className="text-blue-800 hover:text-blue-400"
            to="/auth/register"
          >
            Register.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

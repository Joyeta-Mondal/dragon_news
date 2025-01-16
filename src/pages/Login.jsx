import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-xl">
        <h2 className="text-2xl pt-10 font-semibold text-center">
          Login to your account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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

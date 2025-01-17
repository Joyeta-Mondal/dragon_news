import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, user, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // js builtin object -> FormData
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });

    // create new user with email and password
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-xl">
          <h2 className="text-2xl pt-10 font-semibold text-center">
            Register to create an account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none hover:bg-slate-300 hover:text-gray-800">
                Register
              </button>
            </div>
          </form>
          <p className="pb-8 font-sem ibold text-center">
            Already have an account? Please{" "}
            <Link
              className="text-blue-800 hover:text-blue-400"
              to="/auth/login"
            >
              Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

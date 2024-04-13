import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Sign Up"} />
      <section className="sign-up-section py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form action="#">
                  <h4 className="form-title">Create Your Account</h4>
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="far fa-user" />
                    </label>
                    <input id="username" type="text" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="far fa-lock" />
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">
                      <i className="far fa-lock" />
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group">
                    <button className="theme-btn w-100" type="submit">
                      Create Account
                    </button>
                  </div>
                  <div className="form-note">
                    <p>
                      Already have an account?{" "}
                      <Link href="sign-in">Log In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;

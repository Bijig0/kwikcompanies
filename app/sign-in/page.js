import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Sign In"} />
      <section className="sign-in-section py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form action="#">
                  <h4 className="form-title">Log In To Your Account</h4>
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="far fa-user" />
                    </label>
                    <input id="username" type="text" placeholder="Username" />
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
                    <button className="theme-btn w-100" type="submit">
                      Log In
                    </button>
                  </div>
                  <div className="form-note">
                    <p>
                      New to Akpager? <Link href="sign-up">Sign Up</Link>
                    </p>
                  </div>
                </form>
                <div className="forgot-password">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;

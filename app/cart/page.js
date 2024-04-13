import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Shopping Cart"} />
      <section className="shopping-cart-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div
            className="shoping-table mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="assets/images/widget/news1.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Fitness UI Kits</span>
                  </td>
                  <td>
                    <span className="price">70</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button className="quantity-down">--</button>
                      <input
                        className="quantity"
                        type="text"
                        defaultValue={1}
                        name="quantity"
                      />
                      <button className="quantity-up">+</button>
                    </div>
                  </td>
                  <td>
                    <b className="price">70</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/images/widget/news2.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Dashboard UI</span>
                  </td>
                  <td>
                    <span className="price">65</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button className="quantity-down">--</button>
                      <input
                        className="quantity"
                        type="text"
                        defaultValue={2}
                        name="quantity"
                      />
                      <button className="quantity-up">+</button>
                    </div>
                  </td>
                  <td>
                    <b className="price">130</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/images/widget/news3.jpg" alt="Product" />
                  </td>
                  <td>
                    <span className="title">Plugin for WordPress</span>
                  </td>
                  <td>
                    <span className="price">80</span>
                  </td>
                  <td>
                    <div className="quantity-input">
                      <button className="quantity-down">--</button>
                      <input
                        className="quantity"
                        type="text"
                        defaultValue={1}
                        name="quantity"
                      />
                      <button className="quantity-up">+</button>
                    </div>
                  </td>
                  <td>
                    <b className="price">80</b>
                  </td>
                  <td>
                    <button type="button" className="close">
                      ×
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row text-center text-lg-left align-items-center">
            <div className="col-lg-6">
              <div
                className="discount-wrapper mb-30"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  action="#"
                  className="d-sm-flex justify-content-center justify-content-lg-start"
                >
                  <input type="text" placeholder="Coupon Code" required="" />
                  <button className="theme-btn flex-none" type="submit">
                    apply Coupon <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="update-shopping mb-30 text-lg-end"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="shop" className="theme-btn style-two me-2 my-5">
                  shopping <i className="far fa-arrow-right" />
                </Link>
                <Link href="shop" className="theme-btn my-5">
                  update cart <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="shoping-cart-total pt-20"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4 className="form-title mb-25 text-center">Cart Totals</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>
                        <span className="price">280</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping Fee</td>
                      <td>
                        <span className="price">10.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <b className="price">290</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  href="checkout"
                  className="theme-btn style-two mt-25 w-100"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;

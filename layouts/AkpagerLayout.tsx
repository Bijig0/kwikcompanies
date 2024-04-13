"use client";
import VideoPopup from "@components/VideoPopup";
import { akpagerUtility } from "@utils/index";
// import { akpagerUtility } from "@utility/index";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bodyClass?: string;
  onePage?: boolean;
};

const AkpagerLayout = (props: Props) => {
  const { children, header, footer, bodyClass, onePage } = props;
  useEffect(() => {
    akpagerUtility.animation();
    akpagerUtility.fixedHeader();
  });

  useEffect(() => {
    niceSelect();
    document.querySelector("body").classList = bodyClass;
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <div className="page-wrapper">
        <Header header={header} onePage={onePage} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default AkpagerLayout;
